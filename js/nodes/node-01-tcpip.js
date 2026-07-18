/* =========================================================
   NODO 1 — ¿Qué es TCP/IP?
   -----------------------------------------------------------
   INSTRUCCIONES PARA QUIEN EDITE ESTE ARCHIVO:
   - Edita SOLO el texto dentro de "content" (HTML) y "quiz".
   - NO cambies el nombre "window.NODE_01" ni el "id: 1".
   - Puedes usar las clases ya definidas: panel, two-col, subcard,
     stepline, code-block, ul. Cópialas de este mismo archivo.
   - Este nodo sigue una estructura de 3 bloques:
       1) "Definición y propósito" (panel cyan, dos subcards): idea general
          de qué es TCP/IP y para qué sirve.
       2) Bloque IP (clase "panel accent-green"): 2 subcards explicando
          el rol de IP (direccionamiento y ruta de los datos).
       3) Bloque TCP (clase "panel accent-amber"): 2 subcards explicando
          el rol de TCP (entrega confiable, fragmentación/reensamblado).
     Puedes agregar o quitar subcards dentro de cada bloque, pero conserva
     las clases "panel accent-green" / "panel accent-amber" para mantener
     el mismo código de color del resto del sitio.
   - El quiz debe tener entre 2 y 4 preguntas de opción múltiple
     relacionadas ÚNICAMENTE con el contenido de este nodo.
   ========================================================= */
window.NODE_01 = {
  id: 1,
  code: 'N-01',
  title: '¿Qué es TCP/IP?',
  desc: 'El estándar que hace posible internet.',
  content: `
    <div class="panel">
      <h3>Definición y propósito</h3>
      <div class="two-col">
        <div class="subcard">
          <h4>El estándar global de comunicación</h4>
          <p>TCP/IP es el conjunto de protocolos que permite la comunicación entre computadoras y dispositivos a través de redes locales y globales.</p>
        </div>
        <div class="subcard">
          <h4>El lenguaje universal de internet</h4>
          <p>Es el estándar mundial que garantiza que cualquier dispositivo, sin importar su fabricante, pueda intercambiar información en la red.</p>
        </div>
      </div>
    </div>

    <div class="panel-cols">
      <div class="panel accent-green">
        <h3>IP — Internet Protocol</h3>
        <div class="subcard">
          <h4>El clasificador de cada envío</h4>
          <p>IP es el responsable de la dirección y el encaminamiento: identifica la ubicación exacta a la que deben enviarse los datos.</p>
        </div>
        <div class="subcard">
          <h4>Direccionamiento y ruta</h4>
          <p>Su función principal es obtener la dirección específica del destinatario para asegurar que los paquetes lleguen al lugar correcto.</p>
        </div>
      </div>

      <div class="panel accent-amber">
        <h3>TCP — Transmission Control Protocol</h3>
        <div class="subcard">
          <h4>Garantía de entrega íntegra</h4>
          <p>TCP es un protocolo fiable y orientado a la conexión que asegura que la información llegue completa, sin faltantes, al destino.</p>
        </div>
        <div class="subcard">
          <h4>Fragmentación y reensamblado</h4>
          <p>Divide la información en paquetes pequeños en el origen y los vuelve a unir en el destino para reconstruir el mensaje completo.</p>
        </div>
      </div>
    </div>

    <div class="panel video-panel">
      <h3>Video explicativo</h3>
      <div class="video-embed">
        <iframe
          src="https://www.youtube.com/embed/FKkokxoJk-w?si=FkzXh_m007uZweFg" 
          title="¿Qué es TCP/IP? - Video Explicativo"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen loading="lazy"></iframe>
      </div>
    </div>

  `,
  quiz: [
    { q: '¿Cuál es la función principal de TCP?', opts: ['Asignar el color de la interfaz', 'Asegurar que los datos lleguen completos y sin errores', 'Fabricar el hardware de red', 'Diseñar el sitio web'], correct: 1 },
    { q: '¿Qué identifica una dirección IP?', opts: ['El nombre del usuario', 'Un dispositivo dentro de una red', 'El idioma del sistema', 'La marca del router'], correct: 1 }
  ]
};
