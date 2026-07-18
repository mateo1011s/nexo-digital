/* =========================================================
   NODO 2 — Capas del modelo TCP/IP
   -----------------------------------------------------------
   INSTRUCCIONES: edita solo "content" y "quiz". No cambies
   "window.NODE_02" ni "id: 2".

   Este nodo replica la estructura de la infografía original:
     1) Panel de definición general.
     2) Grupo "Capas de interacción y conexión (niveles superiores)":
        - Aplicación   → clase "panel accent-cyan"
        - Transporte   → clase "panel accent-purple"
     3) Grupo "Capas de ruta e infraestructura (niveles inferiores)":
        - Internet         → clase "panel accent-green"
        - Acceso a la Red  → clase "panel accent-amber"
     Los títulos de grupo usan la clase "group-label" (texto pequeño
     tipo etiqueta, no un <h3>).
   - VIDEO: al final hay un bloque "panel video-panel". Reemplaza
     REEMPLAZAR_CON_ID_DEL_VIDEO por el ID del video de YouTube
     (la parte final de la URL: en https://youtu.be/dQw4w9WgXcQ
     el ID es dQw4w9WgXcQ). Este bloque siempre aparece justo antes
     de la prueba del nodo.
   ========================================================= */
window.NODE_02 = {
  id: 2,
  code: 'N-02',
  title: 'Capas del modelo TCP/IP',
  desc: 'Cuatro niveles, una sola comunicación.',
  content: `
    <div class="panel">
      <h3>Definición general</h3>
      <p>El modelo TCP/IP es el estándar de comunicación que organiza el proceso de envío y recepción de datos en cuatro capas funcionales. Cada capa tiene una responsabilidad específica, desde la interacción con el usuario hasta la transmisión física de las señales.</p>
    </div>

    <p class="group-label">Capas de interacción y conexión (niveles superiores)</p>
    <div class="panel-cols">
      <div class="panel accent-cyan">
        <h3>Capa de Aplicación</h3>
        <div class="subcard">
          <h4>Función</h4>
          <p>Nivel donde el usuario interactúa mediante programas como navegadores o clientes de correo.</p>
        </div>
        <div class="subcard">
          <h4>Protocolos: HTTP, FTP, SMTP y DNS</h4>
          <p>Estándares usados para navegación web, transferencia de archivos, correo electrónico y resolución de nombres de dominio.</p>
        </div>
      </div>
      <div class="panel accent-purple">
        <h3>Capa de Transporte</h3>
        <div class="subcard">
          <h4>Función</h4>
          <p>Proporciona una conexión fiable, gestionando el flujo de datos y detectando posibles errores.</p>
        </div>
        <div class="subcard">
          <h4>Protocolos: TCP y UDP</h4>
          <p>Los dos pilares que definen cómo se transportan los datos: uno prioriza la fiabilidad y el otro la velocidad.</p>
        </div>
      </div>
    </div>

    <p class="group-label">Capas de ruta e infraestructura (niveles inferiores)</p>
    <div class="panel-cols">
      <div class="panel accent-green">
        <h3>Capa de Internet</h3>
        <div class="subcard">
          <h4>Función</h4>
          <p>Controla el enrutamiento para asegurar que los datos lleguen rápido y sin errores hasta su destino.</p>
        </div>
        <div class="subcard">
          <h4>Protocolo típico: IP</h4>
          <p>Es el encargado de direccionar los paquetes de datos a través de la red.</p>
        </div>
      </div>
      <div class="panel accent-amber">
        <h3>Capa de Acceso a la Red</h3>
        <div class="subcard">
          <h4>Función</h4>
          <p>Gestiona la infraestructura física local, como cables, Wi-Fi y tarjetas de red.</p>
        </div>
        <div class="subcard">
          <h4>Conversión de señales</h4>
          <p>Transforma los datos digitales en señales físicas transmisibles por el medio (eléctricas, ópticas o de radio).</p>
        </div>
      </div>
    </div>

    <div class="panel video-panel">
      <h3>Video explicativo</h3>
      <div class="video-embed">
        <iframe
          src="https://www.youtube.com/embed/Ss_LDg-dr9o?si=qFX0UbRUFtvchEvl" 
          title="Video explicativo — Capas del modelo TCP/IP"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen loading="lazy"></iframe>
      </div>
    </div>
  `,
  quiz: [
    { q: '¿Qué capa usa protocolos como HTTP, FTP y DNS?', opts: ['Acceso a la red', 'Aplicación', 'Internet', 'Transporte'], correct: 1 },
    { q: '¿Qué capa se encarga del enrutamiento con IP?', opts: ['Internet', 'Aplicación', 'Transporte', 'Acceso a la red'], correct: 0 },
    { q: '¿Qué capa gestiona la infraestructura física como cables y Wi-Fi?', opts: ['Transporte', 'Internet', 'Aplicación', 'Acceso a la red'], correct: 3 }
  ]
};
