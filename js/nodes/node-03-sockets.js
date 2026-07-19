/* =========================================================
   NODO 3 — Sockets
   -----------------------------------------------------------
   INSTRUCCIONES: edita solo "content" y "quiz". No cambies
   "window.NODE_03" ni "id: 3".

   Este nodo replica la estructura de la infografía original:
     1) Panel de contexto general.
     2) Panel "Fundamentos y componentes" (accent-cyan):
        - ¿Qué es un socket?
        - Gestores de bajo nivel
        - La "tríada" de identificación → 3 mini-tarjetas
          (IP = tone-green, Puerto = tone-amber, Protocolo = tone-purple)
          usando la clase "three-col".
     3) Panel "Protocolos de transporte: TCP vs. UDP" (accent-amber):
        - TCP (tone-cyan) y UDP (tone-amber) lado a lado con sus
          métricas de fiabilidad, velocidad y uso ideal.
   - VIDEO: al final hay un bloque "panel video-panel". Reemplaza
     REEMPLAZAR_CON_ID_DEL_VIDEO por el ID del video de YouTube.
     Este bloque siempre aparece justo antes de la prueba del nodo.
   ========================================================= */
window.NODE_03 = {
  id: 3,
  code: 'N-03',
  title: 'Sockets',
  desc: 'El punto de conexión entre dos programas.',
  content: `
    <div class="panel">
      <h3>Contexto</h3>
      <p>Un socket actúa como una interfaz o "puerta" técnica que permite que diferentes procesos se comuniquen entre sí, ya sea en la misma máquina o a través de una red. Funcionan como gestores de conexión de bajo nivel que utilizan identificadores específicos para dirigir el flujo de datos.</p>
    </div>

    <div class="panel accent-cyan">
  <h3>Fundamentos y componentes</h3>
  <div class="subcard">
    <h4>¿Qué es un socket?</h4>
    <p>Es una interfaz o "puerta" que permite la comunicación activa entre procesos y dispositivos.</p>
  </div>
  <div class="subcard">
    <h4>Gestores de bajo nivel</h4>
    <p>Actúan como controladores que gestionan las conexiones y el tráfico de datos desde la base.</p>
  </div>
  <div class="subcard">
    <h4>La "tríada" de identificación</h4>
    <p>Un socket se define por la combinación única de IP, puerto y protocolo.</p>
    <div class="three-col">
      <div class="subcard tone-green">
        <h4>Dirección IP</h4>
        <p>Identifica el dispositivo o host específico en la red.</p>
      </div>
      <div class="subcard tone-amber">
        <h4>Número de puerto</h4>
        <p>Identifica el proceso o aplicación específica dentro del dispositivo.</p>
      </div>
      <div class="subcard tone-purple">
        <h4>Protocolo</h4>
        <p>Define el método de transporte (las reglas) para mover los datos.</p>
      </div>
    </div>
  </div>
</div>

<div class="panel accent-purple">
  <h3>Protocolos de transporte: TCP vs. UDP</h3>
  <div class="two-col">
    <div class="subcard tone-cyan">
      <h4>TCP: fiabilidad total</h4>
      <p>Garantiza que los datos lleguen completos y en orden; ideal para la web (HTTP).</p>
      <ul>
        <li>Fiabilidad: alta (garantiza entrega)</li>
        <li>Velocidad: menor (carga de control)</li>
        <li>Uso ideal: navegación web y archivos</li>
      </ul>
    </div>
    <div class="subcard tone-green">
      <h4>UDP: velocidad crítica</h4>
      <p>Protocolo de "dispara y olvida": prioriza la rapidez sobre la garantía de entrega.</p>
      <ul>
        <li>Fiabilidad: baja (no garantiza entrega)</li>
        <li>Velocidad: máxima (ligero y rápido)</li>
        <li>Uso ideal: streaming y videojuegos</li>
      </ul>
    </div>
  </div>
</div>

    <div class="panel video-panel">
      <h3>Video explicativo</h3>
      <div class="video-embed">
        <iframe
          src="https://www.youtube.com/embed/ys3XQ0idItE?si=yq4PacYq5P4wLfu1" 
          title="Video explicativo — Sockets"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen loading="lazy"></iframe>
      </div>
    </div>
  `,
  quiz: [
    { q: '¿Qué elemento de la "tríada" identifica la aplicación dentro de un dispositivo?', opts: ['La IP', 'El puerto', 'El protocolo', 'El cable de red'], correct: 1 },
    { q: '¿Qué protocolo prioriza la velocidad sobre la garantía de entrega?', opts: ['TCP', 'UDP', 'FTP', 'SMTP'], correct: 1 },
    { q: '¿Qué combinación define de forma única a un socket?', opts: ['Usuario y contraseña', 'IP, puerto y protocolo', 'Solo la IP', 'Solo el puerto'], correct: 1 }
  ]
};
