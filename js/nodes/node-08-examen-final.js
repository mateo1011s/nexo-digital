/* =========================================================
   NODO 8 — EXAMEN FINAL (nodo especial, bloqueado)
   -----------------------------------------------------------
   Este nodo se desbloquea automáticamente solo cuando los
   7 nodos anteriores (N-01 a N-07) han sido marcados como
   "restaurados". La lógica de bloqueo vive en js/app.js y usa
   la propiedad "final: true" de este objeto — no la borres.

   ÚNICO CAMBIO QUE DEBES HACER AQUÍ:
   Reemplaza la URL "REEMPLAZAR_CON_URL_DEL_EXAMEN" por el
   enlace real a tu examen final ya elaborado.
   ========================================================= */
window.NODE_08 = {
  id: 8,
  code: 'N-08',
  title: 'Examen Final de Certificación',
  desc: 'Se desbloquea al restaurar los 7 nodos.',
  final: true,
  content: `
    <div class="panel">
      <h3>Certificación de Agente</h3>
      <p>Has restaurado los siete nodos de la red: TCP/IP, capas del modelo, sockets, arquitectura cliente–servidor, servidor TCP, cliente TCP y la práctica en Linux. Es momento de rendir la evaluación final para certificarte como Agente de la Operación Nexo Digital.</p>
      <h3 style="color: #fff; text-shadow: 0 0 5px #ff0033, 0 0 10px #ff0033, 0 0 20px #ff0033, 0 0 40px #ff0033;">
        Solo tendrás un intento para rendir el examen final!!
      </h3>
      <a class="btn amber" href="https://mateo1011s.github.io/nexo-digital-examen/" target="_blank" rel="noopener noreferrer">Rendir examen final ▸</a>
    </div>
  `
};
