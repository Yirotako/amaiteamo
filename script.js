const inicio = document.getElementById("inicio");
const carta = document.getElementById("carta");
const continueBtn = document.getElementById("continueBtn");
const backBtn = document.getElementById("backBtn");

continueBtn.addEventListener("click", () => {
    inicio.classList.remove("active");
    carta.classList.add("active");
    window.scrollTo(0, 0);
});

backBtn.addEventListener("click", () => {
    carta.classList.remove("active");
    inicio.classList.add("active");
    window.scrollTo(0, 0);
});
