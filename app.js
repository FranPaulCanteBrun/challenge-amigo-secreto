// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
document.addEventListener("DOMContentLoaded", () => {
  const inputNombre = document.getElementById("amigo");
  const btnAdicionar = document.querySelector(".button-add");
  const listaNombres = document.getElementById("listaAmigos");
  const btnSortear = document.querySelector(".button-draw");
  const resultado = document.getElementById("resultado");

  let nombres = [];

  btnAdicionar.addEventListener("click", agregarAmigo);
  inputNombre.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      agregarAmigo();
    }
  });

  btnSortear.addEventListener("click", () => {
    if (nombres.length === 0) {
      alert("No hay nombres en la lista para sortear.");
      return;
    }
    const indiceAleatorio = Math.floor(Math.random() * nombres.length);
    resultado.innerHTML = `<li>🎉 El amigo secreto es: ${nombres[indiceAleatorio]} 🎉</li>`;
  });

  function agregarAmigo() {
    const nombre = inputNombre.value.trim();
    if (nombre === "") {
      alert("Por favor, ingresa un nombre válido.");
      return;
    }
    if (nombres.includes(nombre)) {
      alert("Este nombre ya ha sido agregado.");
      return;
    }
    nombres.push(nombre);
    actualizarLista();
    inputNombre.value = "";
  }

  function actualizarLista() {
    listaNombres.innerHTML = "";
    nombres.forEach((nombre) => {
      const li = document.createElement("li");
      li.textContent = nombre;
      listaNombres.appendChild(li);
    });
  }
});
