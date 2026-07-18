/* ============================================================
   NEXO DIGITAL — Globo 3D de nodos
   Requiere Three.js (r128) cargado ANTES de este script:
   <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>

   Uso desde app.js:
     NexoGlobe.setRestored('tcpip', true)   -> pinta el nodo de verde
     NexoGlobe.setRestored('tcpip', false)  -> lo vuelve a poner rojo
     NexoGlobe.onNodeClick(id => { ... })   -> opcional, para abrir la misión
   ============================================================ */

(function () {
  "use strict";

  // Mismo orden que tus <script> de nodos en index.html.
  // Si cambias el orden o los ids, edita solo este array.
  const NODE_IDS = [
    "tcpip",
    "capas",
    "sockets",
    "cliente-servidor",
    "servidor-tcp",
    "cliente-tcp",
    "practica-linux",
    "examen-final"
  ];

  const COLOR_PENDIENTE = 0xff3b30; // rojo
  const COLOR_RESTAURADO = 0x22c55e; // verde
  const COLOR_LINEA = 0x1fd8ff; // azul cian del tema

  let scene, camera, renderer, group, container;
  let nodeMeshes = {}; // id -> { mesh, glow }
  let clickCallback = null;

  let dragging = false;
  let lastX = 0, lastY = 0;
  let velX = 0.0015, velY = 0; // auto-rotación lenta

  function latLonToVec3(latDeg, lonDeg, radius) {
    const lat = (latDeg * Math.PI) / 180;
    const lon = (lonDeg * Math.PI) / 180;
    const x = radius * Math.cos(lat) * Math.cos(lon);
    const y = radius * Math.sin(lat);
    const z = radius * Math.cos(lat) * Math.sin(lon);
    return new THREE.Vector3(x, y, z);
  }

  function makeGlowTexture() {
    const size = 128;
    const c = document.createElement("canvas");
    c.width = c.height = size;
    const ctx = c.getContext("2d");
    const g = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
    g.addColorStop(0, "rgba(255,255,255,0.9)");
    g.addColorStop(0.4, "rgba(255,255,255,0.35)");
    g.addColorStop(1, "rgba(255,255,255,0)");
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, size, size);
    const tex = new THREE.CanvasTexture(c);
    return tex;
  }

  function buildDotSphereTexture() {
    // Textura tipo "mapa de puntos" para la esfera, similar a la imagen de referencia.
    const w = 1024, h = 512;
    const c = document.createElement("canvas");
    c.width = w; c.height = h;
    const ctx = c.getContext("2d");
    ctx.fillStyle = "#04101c";
    ctx.fillRect(0, 0, w, h);
    ctx.fillStyle = "rgba(80, 200, 255, 0.55)";
    const rows = 70;
    for (let r = 0; r < rows; r++) {
      const v = r / rows;
      const lat = (v - 0.5) * Math.PI;
      const density = Math.cos(lat);
      const cols = Math.max(4, Math.floor(140 * density));
      for (let col = 0; col < cols; col++) {
        const u = col / cols;
        if (Math.random() > 0.45) continue;
        const x = u * w;
        const y = v * h;
        const rad = Math.random() * 1.1 + 0.4;
        ctx.beginPath();
        ctx.arc(x, y, rad, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    return new THREE.CanvasTexture(c);
  }

  function init(containerId) {
    container = document.getElementById(containerId);
    if (!container) {
      console.warn("NexoGlobe: no se encontró el contenedor #" + containerId);
      return;
    }
    if (typeof THREE === "undefined") {
      console.error("NexoGlobe: Three.js no está cargado. Añade el <script> de three.min.js antes de globe3d.js");
      return;
    }

    const width = container.clientWidth || 360;
    const height = container.clientHeight || 360;

    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.z = 6.2;

    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setSize(width, height);
    container.innerHTML = "";
    container.appendChild(renderer.domElement);

    group = new THREE.Group();
    scene.add(group);

    // Núcleo (esfera con textura de puntos)
    const coreGeo = new THREE.SphereGeometry(2, 48, 48);
    const coreMat = new THREE.MeshBasicMaterial({
      map: buildDotSphereTexture(),
      transparent: true,
      opacity: 0.95
    });
    const core = new THREE.Mesh(coreGeo, coreMat);
    group.add(core);

    // Malla wireframe superpuesta (efecto holograma)
    const wireGeo = new THREE.SphereGeometry(2.02, 24, 24);
    const wireMat = new THREE.MeshBasicMaterial({
      color: COLOR_LINEA,
      wireframe: true,
      transparent: true,
      opacity: 0.15
    });
    group.add(new THREE.Mesh(wireGeo, wireMat));

    // Distribución de los 8 nodos sobre la esfera (lat, lon en grados)
    const positions = [
      [35, 10], [10, 95], [-25, 160], [50, -140],
      [-45, -60], [5, -20], [-10, 60], [60, 130]
    ];

    const glowTex = makeGlowTexture();

    NODE_IDS.forEach((id, i) => {
      const [lat, lon] = positions[i % positions.length];
      const pos = latLonToVec3(lat, lon, 2);

      // Línea desde el centro hasta el nodo (efecto "spoke")
      const lineGeo = new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(0, 0, 0),
        pos
      ]);
      const lineMat = new THREE.LineBasicMaterial({
        color: COLOR_LINEA,
        transparent: true,
        opacity: 0.25
      });
      group.add(new THREE.Line(lineGeo, lineMat));

      // Nodo (esfera pequeña)
      const nodeGeo = new THREE.SphereGeometry(0.09, 16, 16);
      const nodeMat = new THREE.MeshBasicMaterial({ color: COLOR_PENDIENTE });
      const nodeMesh = new THREE.Mesh(nodeGeo, nodeMat);
      nodeMesh.position.copy(pos);
      nodeMesh.userData.id = id;
      group.add(nodeMesh);

      // Halo/glow detrás del nodo
      const glowMat = new THREE.SpriteMaterial({
        map: glowTex,
        color: COLOR_PENDIENTE,
        transparent: true,
        opacity: 0.8,
        depthWrite: false
      });
      const glow = new THREE.Sprite(glowMat);
      glow.scale.set(0.4, 0.4, 1);
      glow.position.copy(pos);
      group.add(glow);

      nodeMeshes[id] = { mesh: nodeMesh, glow: glow, restored: false };
    });

    // Interacción: arrastrar para rotar manualmente
    renderer.domElement.style.cursor = "grab";
    renderer.domElement.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", onPointerUp);
    renderer.domElement.addEventListener("click", onClick);

    window.addEventListener("resize", onResize);
    const ro = new ResizeObserver(onResize);
    ro.observe(container);

    animate();
  }

  function onPointerDown(e) {
    dragging = true;
    lastX = e.clientX;
    lastY = e.clientY;
    renderer.domElement.style.cursor = "grabbing";
  }

  function onPointerMove(e) {
    if (!dragging) return;
    const dx = e.clientX - lastX;
    const dy = e.clientY - lastY;
    lastX = e.clientX;
    lastY = e.clientY;
    group.rotation.y += dx * 0.006;
    group.rotation.x += dy * 0.006;
    group.rotation.x = Math.max(-1.1, Math.min(1.1, group.rotation.x));
  }

  function onPointerUp() {
    dragging = false;
    if (renderer) renderer.domElement.style.cursor = "grab";
  }

  function onClick(e) {
    if (!clickCallback) return;
    const rect = renderer.domElement.getBoundingClientRect();
    const mouse = new THREE.Vector2(
      ((e.clientX - rect.left) / rect.width) * 2 - 1,
      -((e.clientY - rect.top) / rect.height) * 2 + 1
    );
    const raycaster = new THREE.Raycaster();
    raycaster.setFromCamera(mouse, camera);
    const meshes = Object.values(nodeMeshes).map((n) => n.mesh);
    const hits = raycaster.intersectObjects(meshes);
    if (hits.length) {
      clickCallback(hits[0].object.userData.id);
    }
  }

  function onResize() {
    if (!container || !renderer) return;
    const width = container.clientWidth || 360;
    const height = container.clientHeight || 360;
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height);
  }

  function animate() {
    requestAnimationFrame(animate);
    if (!dragging) {
      group.rotation.y += velY + 0.0015;
    }
    renderer.render(scene, camera);
  }

  function setRestored(id, restored) {
    const entry = nodeMeshes[id];
    if (!entry) {
      console.warn("NexoGlobe: id de nodo desconocido:", id);
      return;
    }
    entry.restored = restored;
    const color = restored ? COLOR_RESTAURADO : COLOR_PENDIENTE;
    entry.mesh.material.color.setHex(color);
    entry.glow.material.color.setHex(color);

    // Pequeña animación de "pulso" al restaurar
    if (restored) {
      let t = 0;
      const pulse = () => {
        t += 0.08;
        const s = 0.09 + Math.sin(t) * 0.03 * Math.max(0, 1 - t / Math.PI);
        entry.mesh.scale.setScalar(s / 0.09);
        if (t < Math.PI) requestAnimationFrame(pulse);
        else entry.mesh.scale.setScalar(1);
      };
      pulse();
    }
  }

  function getState() {
    const out = {};
    Object.keys(nodeMeshes).forEach((id) => (out[id] = nodeMeshes[id].restored));
    return out;
  }

  function onNodeClick(cb) {
    clickCallback = cb;
  }

  window.NexoGlobe = {
    init,
    setRestored,
    getState,
    onNodeClick,
    NODE_IDS
  };
})();
