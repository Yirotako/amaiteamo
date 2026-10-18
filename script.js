// ============================================
// ✏️ PERSONALIZA TU CARTA AQUÍ
// Solo necesitas editar esta sección.
// ============================================
const datos = {
  tuNombre: "Yair",
  suNombre: "Amai",
  fechaInicio: "2026-04-10",

  // Pon aquí el archivo MP3 que tú quieras.
  // Ejemplo: "musica/la-mirada.mp3"
  cancion: "Bhavi, LOUTA - LA MIRADA (Official Audio).mp3",

  tituloCancion: "La Mirada — Bhavi",

  // 💌 ESCRIBE AQUÍ TU MENSAJE FINAL
  mensajeFinal: `Todavía falta mucho por escribir de nuestra historia.

Y quizá eso sea de las cosas más bonitas:
que todavía nos quedan muchos días 10,
muchas llamadas, muchas conversaciones
y, algún día, el momento de conocernos.

Te quiero muchísimo, Amai. ♡

— Yair`
};
// ============================================

document.title = `Para ${datos.suNombre} ♡`;

const music = document.getElementById("music");
const openLetter = document.getElementById("openLetter");
const letter = document.getElementById("letter");
const musicToggle = document.getElementById("musicToggle");
const finalMessage = document.getElementById("finalMessage");
const counter = document.getElementById("counter");

music.src = datos.cancion;
finalMessage.textContent = datos.mensajeFinal;

function updateCounter(){
  const start = new Date(datos.fechaInicio + "T00:00:00");
  const now = new Date();
  const diff = Math.max(0, now - start);
  const days = Math.floor(diff / 86400000);
  counter.textContent = `${days} ${days === 1 ? "día" : "días"}`;
}
updateCounter();
setInterval(updateCounter, 60000);

async function startMusic(){
  try {
    await music.play();
    musicToggle.classList.remove("hidden");
    musicToggle.classList.add("playing");
    musicToggle.setAttribute("aria-label","Pausar música");
  } catch(e) {
    // Si el navegador bloquea la reproducción, el usuario puede
    // tocar el botón de música después.
    musicToggle.classList.remove("hidden");
  }
}

openLetter.addEventListener("click", async () => {
  letter.classList.remove("hidden");
  openLetter.closest(".hero").style.minHeight = "100svh";
  await startMusic();
  setTimeout(() => {
    letter.querySelector(".reveal")?.scrollIntoView({behavior:"smooth", block:"start"});
  }, 250);
});

musicToggle.addEventListener("click", async () => {
  if (music.paused) {
    await music.play();
    musicToggle.classList.add("playing");
    musicToggle.setAttribute("aria-label","Pausar música");
  } else {
    music.pause();
    musicToggle.classList.remove("playing");
    musicToggle.setAttribute("aria-label","Reproducir música");
  }
});

document.querySelectorAll(".love-item").forEach(item => {
  item.addEventListener("click", () => item.classList.toggle("open"));
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting) entry.target.classList.add("visible");
  });
},{threshold:.12});

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
