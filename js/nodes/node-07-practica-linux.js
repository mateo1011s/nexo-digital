/* =========================================================
   NODO 7 — Práctica en Linux
   -----------------------------------------------------------
   INSTRUCCIONES: edita solo "content" y "quiz". No cambies
   "window.NODE_07" ni "id: 7".
   Sugerencia de contenido:
     1) Qué es la terminal y por qué se usa para esto.
     2) Orden correcto para ejecutar servidor y cliente.
     3) Cómo verificar que la conexión funcionó (qué revisar).
     4) (Opcional) capturas de pantalla o comandos reales usados
        en la práctica del grupo.
   ========================================================= */
window.NODE_07 = {
  id: 7,
  code: 'N-07',
  title: 'Práctica en Linux',
  desc: 'Ejecutar cliente y servidor desde la terminal.',
  content: `
    <div class="panel">
      <h3>La práctica final</h3>
      <p>En el pasado un agente de red sufrió una anomalía similar es por eso que dejó estas 
      guías por si volvieran a ocurrir en un futuro. <br>
      Pon mucha atención en ellas y realízalas para saber si podrás devolver la conexión a los servidores de la nave y poder ser certificado como un agente del más alto rango.</p>
      <a class="btn blue" href="REEMPLAZAR_CON_URL_DEL_EXAMEN" target="_blank" rel="noopener noreferrer">Notas del agente▸</a>
      </div>
    <div class="panel video-panel">
      <h3>Bitácora del agente</h3>
      <div class="video-embed">
        <iframe
          src="https://www.youtube.com/embed/Ss_LDg-dr9o?si=qFX0UbRUFtvchEvl" 
          title="Video explicativo — Capadss del modelo TCP/IP"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen loading="lazy"></iframe>
    </div>
    </div>
    <div class="panel">
      <h3>Cómo ejecutar cliente y servidor</h3>
      <ol class="stepline">
        <li>Se abre la terminal.</li>
        <li>Se ejecuta primero el <b>servidor</b>, porque es el que espera conexiones.</li>
        <li>Se ejecuta luego el <b>cliente</b>, que se conecta usando la IP y el puerto del servidor.</li>
      </ol>
      <div class="code-block">
      $ python3 servidor.py <br>
      $ python3 cliente.py</div>
    </div>
    <div class="panel">
      <h3>Prueba de conexión</h3>
      <p>Verifica que cliente y servidor se comuniquen correctamente comprobando que:</p>
      <ul>
        <li>La conexión sea estable.</li>
        <li>Los datos se envíen y reciban sin errores.</li>
        <li>El servidor entregue una respuesta clara.</li>
      </ul>
    </div>
  `,
  quiz: [
    { q: '¿Por qué debe iniciarse primero el servidor?', opts: ['Porque es más lento', 'Porque es el que espera conexiones', 'Porque usa más memoria', 'No importa el orden'], correct: 1 },
    { q: 'Una característica de la terminal es que...', opts: ['Requiere interfaz gráfica', 'Permite control directo del sistema mediante comandos', 'Solo sirve para editar imágenes', 'No permite ejecutar programas'], correct: 1 }
  ]
};
