let contador = 0;

const contadorElemento = document.getElementById("contador");
const btnIncrementar = document.getElementById("Incrementar");
const btnDisminuir = document.getElementById("Disminuir");

function actualizarContador() {
    contadorElemento.textContent = contador;

    if (contador === 10) {
        contadorElemento.classList.add("color-cambio");
    } else {
        contadorElemento.classList.remove("color-cambio");
    }
}

btnIncrementar.addEventListener("click", () => {
    contador++;
    actualizarContador();
});

btnDisminuir.addEventListener("click", () => {
    contador--;
    actualizarContador();
});
