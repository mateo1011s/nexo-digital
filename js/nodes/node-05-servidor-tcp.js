/* =========================================================
   NODO 5 — Servidor TCP en acción
   -----------------------------------------------------------
   INSTRUCCIONES: edita solo "content" y "quiz". No cambies
   "window.NODE_05" ni "id: 5".
   Sugerencia de contenido:
     1) Funciones/características de un servidor TCP.
     2) Secuencia de funciones para levantar un servidor:
        socket() -> bind() -> listen() -> accept() -> recv() -> send() -> close()
     3) Un ejemplo de script de servidor (Python u otro lenguaje)
        explicado línea por línea.
   ========================================================= */
window.NODE_05 = {
  id: 5,
  code: 'N-05',
  title: 'Servidor TCP en acción',
  desc: 'La secuencia que activa el núcleo.',
  content: `
    <div class="panel">
      <h3>Funciones de un servidor TCP</h3>
      <ul>
        <li><b>Identidad pública:</b> tiene una IP y un puerto para que los clientes se conecten.</li>
        <li><b>Disponibilidad:</b> permanece activo, esperando conexiones en todo momento.</li>
        <li><b>Comunicación:</b> recibe y envía datos.</li>
        <li><b>Multitarea:</b> puede atender a varios clientes a la vez.</li>
      </ul>
    </div>
    <div class="panel">
      <h3>Secuencia para esperar conexiones</h3>
      <ol class="stepline">
        <li><code>socket()</code> — crea el socket del servidor.</li>
        <li><code>bind()</code> — asigna la IP y el puerto.</li>
        <li><code>listen()</code> — activa el modo de escucha.</li>
        <li><code>accept()</code> — acepta la conexión de un cliente.</li>
        <li><code>recv()</code> — recibe los datos enviados.</li>
        <li><code>encode()</code> — convierte los datos a bytes para enviar.</li>
        <li><code>send()</code> — envía la respuesta al cliente.</li>
        <li><code>close()</code> — finaliza la conexión.</li>
      </ol>
    </div>
    <div class="panel">
      <h3>Script del servidor</h3>
        <div class="code-block">
          import socket <span class="cm"># librería de red</span><br>
          servidor = socket.socket(socket.AF_INET, socket.SOCK_STREAM)<br>
          servidor.bind(("localhost", 5000))<br>
          servidor.listen(1)<br>
          conexion, direccion = servidor.accept()<br>
          datos = conexion.recv(1024).decode()<br>
          conexion.send("Conexión establecida".encode())<br>
          conexion.close()
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
    { q: '¿Qué instrucción asigna la IP y el puerto del servidor?', opts: ['listen()', 'bind()', 'accept()', 'recv()'], correct: 1 },
    { q: '¿Qué instrucción pone al servidor en modo de espera de conexiones?', opts: ['socket()', 'listen()', 'send()', 'close()'], correct: 1 },
    { q: '¿Qué característica permite a un servidor atender a varios clientes?', opts: ['Multitarea', 'Encriptación', 'Bajo consumo', 'Modo cliente'], correct: 0 }
  ]
};
