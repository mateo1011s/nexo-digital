/* =========================================================
   APP.JS — lógica del sitio. NO es necesario que cada
   compañero edite este archivo; solo edita el contenido de
   tu nodo en js/nodes/nodo-XX-*.js
   ========================================================= */

/* Construye la lista de misiones a partir de los nodos cargados
   por <script> en index.html. Si algún nodo no está definido,
   se omite (para que el sitio no se rompa mientras alguien
   todavía no ha subido su archivo). */
const MISSIONS = [
  window.NODE_01, window.NODE_02, window.NODE_03, window.NODE_04,
  window.NODE_05, window.NODE_06, window.NODE_07, window.NODE_08
].filter(Boolean);

const CORE_MISSIONS = MISSIONS.filter(m => !m.final);
const FINAL_MISSION = MISSIONS.find(m => m.final);

/* =========================================================
   ESTADO
   ========================================================= */
const STORE_KEY = 'nexo-digital-progreso';
let state = JSON.parse(localStorage.getItem(STORE_KEY) || 'null') || {
  agent: '', completed: {}, xp: 0, credits: 0
};

function save(){ localStorage.setItem(STORE_KEY, JSON.stringify(state)); }
function xpMax(){ return CORE_MISSIONS.length * 20; }
function level(){ return 1 + Math.floor(state.xp / 40); }
function coreCompletedCount(){ return CORE_MISSIONS.filter(m => state.completed[m.id]).length; }
function allCoreDone(){ return CORE_MISSIONS.length > 0 && coreCompletedCount() === CORE_MISSIONS.length; }

function toast(msg){
  const t = document.getElementById('toast');
  t.textContent = msg; t.classList.add('show');
  clearTimeout(window.__tt);
  window.__tt = setTimeout(() => t.classList.remove('show'), 2200);
}

function refreshHud(){
  document.getElementById('hud-name').textContent = state.agent || '—';
  document.getElementById('hud-xp').textContent = state.xp;
  document.getElementById('hud-xp-max').textContent = xpMax();
  document.getElementById('hud-xpbar').style.width = Math.min(100, (state.xp / xpMax()) * 100) + '%';
  document.getElementById('hud-level').textContent = level();
  document.getElementById('hud-credits').textContent = state.credits;
  document.getElementById('progress-count').textContent = coreCompletedCount() + '/' + CORE_MISSIONS.length + ' nodos restaurados';
}

/* =========================================================
   BOOT SEQUENCE
   ========================================================= */
const bootLines = [
  '> Estableciendo canal seguro con Data Center Central...',
  '> Anomalía detectada en la red troncal.',
  '> Servidores principales fuera de línea.',
  '> Se requiere un agente capacitado en TCP/IP, sockets y arquitectura cliente-servidor.',
  '> Cargando protocolo de entrenamiento NEXO DIGITAL...',
  '> Sesión lista.'
];

function typeBoot(){
  const log = document.getElementById('boot-log');
  let i = 0, char = 0;
  function step(){
    if(i >= bootLines.length){
      document.getElementById('boot-start').style.display = 'block';
      return;
    }
    const line = bootLines[i];
    if(char <= line.length){
      log.innerHTML = bootLines.slice(0, i).join('\n') + (i > 0 ? '\n' : '') + line.slice(0, char) + '<span class="cursor"></span>';
      char++;
      setTimeout(step, 16);
    } else {
      i++; char = 0;
      setTimeout(step, 220);
    }
  }
  step();
}
typeBoot();

document.getElementById('btn-enter').addEventListener('click', () => {
  let name = state.agent;
  if(!name){
    name = prompt('Introduce tu nombre en clave de agente:', '') || 'Agente';
  }
  state.agent = name.trim() || 'Agente';
  save();
  document.getElementById('boot').classList.add('hidden');
  document.getElementById('hud').classList.remove('hidden');
  document.getElementById('dashboard').classList.remove('hidden');
  refreshHud();
  renderNodes();
});

/* =========================================================
   MAPA DE MISIONES
   ========================================================= */
function renderNodes(){
  const grid = document.getElementById('node-grid');
  grid.innerHTML = '';
  MISSIONS.forEach(m => {
    const done = !!state.completed[m.id];
    const locked = m.final && !allCoreDone();
    const el = document.createElement('div');
    el.className = 'node' + (done ? ' done' : '') + (m.final ? ' final' : '') + (locked ? ' locked' : '');
    el.innerHTML = `
      <div class="n-idx">${m.code}</div>
      <div class="n-title">${m.title}</div>
      <div class="n-desc">${m.desc}</div>
      <div class="n-status"><span class="led"></span>${locked ? 'bloqueado' : (done ? 'restaurado' : 'pendiente')}</div>
    `;
    if(!locked){
      el.addEventListener('click', () => openModule(m.id));
    }
    grid.appendChild(el);
  });
}

document.getElementById('btn-menu').addEventListener('click', () => {
  document.getElementById('module-view').classList.add('hidden');
  document.getElementById('dashboard').classList.remove('hidden');
  renderNodes();
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

/* =========================================================
   VISTA DE MÓDULO
   ========================================================= */
function openModule(id){
  const m = MISSIONS.find(x => x.id === id);
  if(!m) return;
  if(m.final && !allCoreDone()){
    toast('Nodo bloqueado: restaura los 7 nodos anteriores primero');
    return;
  }

  const view = document.getElementById('module-view');
  document.getElementById('dashboard').classList.add('hidden');
  view.classList.remove('hidden');

  const idx = MISSIONS.indexOf(m);
  const prev = MISSIONS[idx - 1];
  let next = MISSIONS[idx + 1];
  if(next && next.final && !allCoreDone()) next = null;

  const hasQuiz = m.quiz && m.quiz.length > 0;
  let quizHtml = !hasQuiz ? '' : `
    <div class="quiz">
      <h3>Verificación de conocimiento</h3>
      ${m.quiz.map((q, qi) => `
        <div class="qwrap" data-qi="${qi}">
          <p class="qtext">${qi + 1}. ${q.q}</p>
          <div class="opts">
            ${q.opts.map((o, oi) => `<button class="opt" data-oi="${oi}">${o}</button>`).join('')}
          </div>
          <div class="qfeedback"></div>
        </div>
      `).join('')}
    </div>
  `;

  view.innerHTML = `
    <button class="back-link" id="btn-back">◂ volver al mapa de misiones</button>
    <span class="mod-eyebrow">Nodo ${m.code} · ${m.final ? 'Certificación final' : 'Misión de restauración'}</span>
    <h2 class="mod-title">${m.title}</h2>
    ${m.content}
    ${quizHtml}
    <div class="mod-nav">
      <button class="btn ghost" id="btn-prev" ${prev ? '' : 'disabled'}>${prev ? '◂ ' + prev.title : ''}</button>
      <button class="btn amber" id="btn-complete">${m.final ? 'Marcar certificación completada' : 'Marcar nodo como restaurado'}</button>
      <button class="btn ghost" id="btn-next" ${next ? '' : 'disabled'}>${next ? next.title + ' ▸' : ''}</button>
    </div>
  `;

  if(hasQuiz){
    view.querySelectorAll('.qwrap').forEach(wrap => {
      const qi = +wrap.dataset.qi;
      const q = m.quiz[qi];
      wrap.querySelectorAll('.opt').forEach(btn => {
        btn.addEventListener('click', () => {
          if(wrap.dataset.answered) return;
          wrap.dataset.answered = '1';
          const oi = +btn.dataset.oi;
          const fb = wrap.querySelector('.qfeedback');
          wrap.querySelectorAll('.opt').forEach((b, i) => {
            b.disabled = true;
            if(i === q.correct) b.classList.add('correct');
            else if(i === oi) b.classList.add('wrong');
          });
          if(oi === q.correct){
            fb.textContent = '✓ correcto — canal estabilizado';
            fb.className = 'qfeedback ok';
            state.xp += 3; state.credits += 5; save(); refreshHud();
          } else {
            fb.textContent = '✕ respuesta incorrecta — revisa el nodo';
            fb.className = 'qfeedback bad';
          }
        });
      });
    });
  }

  document.getElementById('btn-back').addEventListener('click', () => {
    view.classList.add('hidden');
    document.getElementById('dashboard').classList.remove('hidden');
    renderNodes();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  document.getElementById('btn-complete').addEventListener('click', () => {
    if(!state.completed[m.id]){
      state.completed[m.id] = true;
      if(!m.final){ state.xp += 20; state.credits += 25; }
      save(); refreshHud();
      toast(m.final ? 'Certificación registrada, Agente.' : 'Nodo ' + m.code + ' restaurado — red estabilizándose');
    }
    if(!m.final && allCoreDone() && FINAL_MISSION && !state.completed[FINAL_MISSION.id]){
      setTimeout(() => toast('Todos los nodos restaurados. Nodo ' + FINAL_MISSION.code + ' desbloqueado.'), 1200);
    }
  });

  if(prev) document.getElementById('btn-prev').addEventListener('click', () => openModule(prev.id));
  if(next) document.getElementById('btn-next').addEventListener('click', () => openModule(next.id));

  window.scrollTo({ top: 0, behavior: 'smooth' });
}
