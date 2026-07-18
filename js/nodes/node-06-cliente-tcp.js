/* =========================================================
   NODO 6 — Cliente TCP
   -----------------------------------------------------------
   INSTRUCCIONES: edita solo "content" y "quiz". No cambies
   "window.NODE_06" ni "id: 6".

   Este nodo replica la misma estructura de 3 bloques del NODO 5
   (Servidor TCP), pero en verde ("panel accent-green") para que
   se distinga de un vistazo del nodo del servidor:
     1) "Funciones de un cliente TCP" (lista con viñetas).
     2) "Secuencia para conectar" (pasos numerados con "stepline").
     3) "Script del cliente" (código comentado).
   ========================================================= */
window.NODE_06 = {
  id: 6,
  code: 'N-06',
  title: 'Cliente TCP',
  desc: 'El código que abre el canal.',
  content: `
    <div class="panel accent-green">
      <h3>Funciones de un cliente TCP</h3>
      <ul>
        <li><b>Identidad temporal:</b> no necesita una IP o puerto fijo; el sistema le asigna uno automáticamente al conectarse.</li>
        <li><b>Iniciativa:</b> es quien inicia la conexión hacia el servidor.</li>
        <li><b>Comunicación:</b> envía solicitudes y recibe respuestas.</li>
        <li><b>Cierre voluntario:</b> decide cuándo finalizar la conexión una vez obtenida la respuesta.</li>
      </ul>
    </div>
    <div class="panel accent-green">
      <h3>Secuencia para conectar</h3>
      <ol class="stepline">
        <li><code>socket()</code> — crea el socket del cliente.</li>
        <li><code>connect()</code> — se conecta al servidor usando su IP y puerto.</li>
        <li><code>encode()</code> — convierte el mensaje de texto a bytes antes de enviarlo.</li>
        <li><code>send()</code> — envía el mensaje al servidor.</li>
        <li><code>recv()</code> — recibe la respuesta del servidor.</li>
        <li><code>decode()</code> — convierte los bytes recibidos de vuelta a texto legible.</li>
        <li><code>close()</code> — finaliza la conexión.</li>
      </ol>
    </div>
    <div class="panel accent-green">
      <h3>Script del cliente</h3>
        <div class="code-block">
          import socket <span class="cm"># librería de red</span><br>
          cliente = socket.socket(socket.AF_INET, socket.SOCK_STREAM)<br>
          cliente.connect(("127.0.0.1", 5000))<br>
          cliente.send("Hola servidor".encode())<br>
          respuesta = cliente.recv(1024).decode()<br>
          print(respuesta)<br>
          cliente.close()
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
    { q: '¿Qué necesita el cliente para conectarse a un servidor?', opts: ['Solo el puerto', 'Dirección IP y puerto', 'Nombre de usuario y contraseña', 'Solo la dirección IP'], correct: 1 },
    { q: '¿Qué instrucción convierte el texto en bytes antes de enviarlo?', opts: ['connect()', 'encode()', 'recv()', 'close()'], correct: 1 },
    { q: '¿Quién tiene la iniciativa de comenzar la conexión?', opts: ['El servidor', 'El cliente', 'El router', 'El puerto'], correct: 1 }
  ]
};