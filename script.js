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

  tituloCancion: "Bhavi, LOUTA - LA MIRADA (Official Audio).mp3",

  // 💌 ESCRIBE AQUÍ TU MENSAJE FINAL
  mensajeFinal: `ojala estos 6 meses sean nada de tiempo a comparacion del tiempo que duremos.

Disculpa mi mala ortografia y disculpame a mi por todas las veces que te e echo sentir
mal nunca lo hago con mala intencion, es mas nunca lo hago con intension de hacerte
sentir mal si no solo de hacerte enojar poquito pero por que me gusta cuando te enojas y desesperas jaj tqm
ojala si ya pronto nos conozcamos para hacer mil cosas o aunque sean pocas hacerlas contigo perdona si la
nota es corta o repetitiva pero nunca e sabido expresarme bien y menos contigo y no me lo tomes a mal no es
por que no t ame al contrario es por que te amo demasiado y me tienes atontado tanto como para no saber como expresarme 
contigo y no poder explicarte lo demasiado que te amo se que me habias dicho que querias una carta pero mi letra es super mala
y pense que esto podria llegarte a gustar talvez no igual que una carta pero te puede llegar a gustar aparte quien 
mas te va a hacer una nota asi mi vida jaj t amo boba 

Te quiero y amo muchisimo mi Amai de mi vida ♡

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
