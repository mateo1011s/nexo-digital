# Operación Nexo Digital — Academia de Redes

Sitio web interactivo sobre TCP/IP, sockets y arquitectura cliente–servidor,
organizado en 8 "nodos" (misiones): 7 de contenido + 1 nodo final de
certificación que se desbloquea automáticamente al completar los 7 anteriores.

## Estructura de carpetas

```
nexo-digital/
├── index.html                          ← no editar (estructura general)
├── README.md                           ← este archivo
├── css/
│   └── styles.css                      ← no editar (estilos compartidos)
└── js/
    ├── app.js                          ← no editar (lógica del sitio)
    └── nodes/
        ├── node-01-tcpip.js            ← EDITAR: ¿Qué es TCP/IP?
        ├── node-02-capas.js            ← EDITAR: Capas del modelo TCP/IP
        ├── node-03-sockets.js          ← EDITAR: Sockets
        ├── node-04-cliente-servidor.js ← EDITAR: Cliente – Servidor
        ├── node-05-servidor-tcp.js     ← EDITAR: Servidor TCP en acción
        ├── node-06-cliente-tcp.js      ← EDITAR: Cliente TCP
        ├── node-07-practica-linux.js   ← EDITAR: Práctica en Linux
        └── node-08-examen-final.js     ← EDITAR (solo Mateo): enlace al examen
```

## Cómo trabajar en equipo

1. Cada persona recibe **un solo archivo** dentro de `js/nodes/`.
2. Abre tu archivo con cualquier editor de texto (VS Code, Notepad++, etc.).
3. Edita **solo** lo que está dentro de `content: \`...\`` (el HTML del
   contenido) y `quiz: [...]` (las preguntas). No toques `id`, `code` ni el
   nombre `window.NODE_XX`.
4. Cada archivo trae, arriba, una guía de qué información se sugiere incluir
   en ese nodo.
5. Para ver tus cambios, abre `index.html` en el navegador (doble clic) o
   usa la extensión "Live Server" de VS Code.
6. Cuando todos terminen, junten los 8 archivos en la misma carpeta
   `js/nodes/` y suban el proyecto completo (por ejemplo a Netlify,
   arrastrando la carpeta completa).

## Qué información poner en cada nodo (guía rápida)

- **N-01 · ¿Qué es TCP/IP?** — definición general, qué hace TCP, qué hace IP.
- **N-02 · Capas del modelo TCP/IP** — las 4 capas (Aplicación, Transporte,
  Internet, Acceso a Red), su función y protocolos típicos de cada una.
- **N-03 · Sockets** — qué es un socket, sus 3 componentes (IP, puerto,
  protocolo), diferencias entre TCP y UDP con ejemplos de uso.
- **N-04 · Cliente – Servidor** — definición de cliente, definición de
  servidor, y el ciclo completo de comunicación entre ambos.
- **N-05 · Servidor TCP en acción** — funciones de un servidor TCP, la
  secuencia socket→bind→listen→accept→recv→send→close, y un ejemplo de
  código de servidor comentado.
- **N-06 · Cliente TCP** — pasos del proceso del cliente, un ejemplo de
  código cliente comentado, y explicación de connect(), send(), recv(),
  encode()/decode().
- **N-07 · Práctica en Linux** — qué es la terminal, orden de ejecución
  (primero servidor, luego cliente), y cómo comprobar que la conexión
  funcionó. Aquí quedan muy bien capturas de pantalla de la práctica real.
- **N-08 · Examen final** — no requiere contenido nuevo, solo reemplazar
  el enlace por la URL del examen final ya elaborado.

## Notas técnicas

- El nodo final (N-08) queda visualmente bloqueado en el mapa de misiones
  hasta que los 7 nodos anteriores se marcan como "restaurados". Esa lógica
  vive en `js/app.js`, dentro de la función `allCoreDone()`.
- El progreso de cada visitante se guarda en su propio navegador
  (localStorage), no en un servidor común.
