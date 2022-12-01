const btnLog = document.querySelector("button");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnFechar = document.querySelector(".fa-circle-xmark");

console.log(btnLog, modal, btnFechar);

btnLog.addEventListener("click", abrirModal);
btnFechar.addEventListener("click", fecharModal);
overlay.addEventListener("click", fecharModal);

function abrirModal() {
  modal.classList.toggle("escondido");
  overlay.classList.toggle("escondido");
  document.body.style.overflowY = "hidden";
}

function fecharModal() {
  modal.classList.add("escondido");
  overlay.classList.add("escondido");
  document.body.style.overflowY = "auto";
}
