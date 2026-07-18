/* =========================================================
   NODO 4 — Cliente – Servidor
   -----------------------------------------------------------
   INSTRUCCIONES: edita solo "content" y "quiz". No cambies
   "window.NODE_04" ni "id: 4".

   Este nodo replica la estructura de la infografía original:
     1) Panel de contexto general.
     2) Dos roles lado a lado (panel-cols):
        - El Cliente (Nodo Proactivo) → clase "panel accent-cyan"
        - El Servidor (Nodo de Escucha) → clase "panel accent-amber"
     3) Secuencia de 5 pasos con la clase "stepline" (ya usada en
        otros nodos): Configuración y escucha, Solicitud de conexión,
        Canal activo-activo, Flujo de información, Liberación de
        recursos.
   - VIDEO: al final hay un bloque "panel video-panel". Reemplaza
     REEMPLAZAR_CON_ID_DEL_VIDEO por el ID del video de YouTube.
     Este bloque siempre aparece justo antes de la prueba del nodo.
   ========================================================= */
window.NODE_04 = {
  id: 4,
  code: 'N-04',
  title: 'Cliente – Servidor',
  desc: 'Quién pide y quién responde.',
  content: `
    <div class="panel">
      <h3>Contexto</h3>
      <p>Esta arquitectura describe la interacción técnica en una red donde dos nodos —cliente y servidor— establecen un canal de comunicación bidireccional. A continuación se detallan las funciones de cada rol y la secuencia lógica desde la apertura hasta el cierre de la conexión.</p>
    </div>

    <div class="panel-cols">
      <div class="panel accent-cyan">
        <h3>El Cliente (nodo proactivo)</h3>
        <p>Es el dispositivo que inicia la comunicación solicitando proactivamente datos o servicios específicos al servidor.</p>
      </div>
      <div class="panel accent-amber">
        <h3>El Servidor (nodo de escucha)</h3>
        <p>Nodo que permanece a la escucha de nuevas conexiones para atender requerimientos y servir datos.</p>
      </div>
    </div>

    <div class="panel">
      <h3>Secuencia de conexión</h3>
      <ol class="stepline">
        <li><b>Configuración y escucha</b> — el servidor configura un socket y entra en estado de "escucha" para detectar peticiones.</li>
        <li><b>Solicitud de conexión</b> — el cliente crea su socket e intenta conectar con la IP y el puerto del servidor.</li>
        <li><b>Canal activo-activo</b> — el servidor acepta la conexión, estableciendo un canal bidireccional para el intercambio de paquetes.</li>
        <li><b>Flujo de información</b> — ambos nodos intercambian datos de manera fluida mediante el envío y recepción de paquetes.</li>
        <li><b>Liberación de recursos</b> — se cierra formalmente la conexión para liberar la memoria y los recursos del sistema.</li>
      </ol>
    </div>

    <div class="panel video-panel">
      <h3>Video explicativo</h3>
      <div class="video-embed">
        <iframe
          src="https://www.youtube.com/embed/REEMPLAZAR_CON_ID_DEL_VIDEO"
          title="Video explicativo — Cliente-Servidor"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen loading="lazy"></iframe>
      </div>
    </div>
  `,
  quiz: [
    { q: '¿Quién inicia la comunicación en el modelo cliente-servidor?', opts: ['El servidor', 'El cliente', 'El router', 'El puerto'], correct: 1 },
    { q: '¿Qué ocurre en el paso "Canal activo-activo"?', opts: ['Se cierra la conexión', 'El servidor acepta la conexión y se abre un canal bidireccional', 'El cliente se apaga', 'Se elimina el socket'], correct: 1 },
    { q: '¿Cuál es el último paso de la secuencia de conexión?', opts: ['Solicitud de conexión', 'Configuración y escucha', 'Liberación de recursos', 'Flujo de información'], correct: 2 }
  ]
};
