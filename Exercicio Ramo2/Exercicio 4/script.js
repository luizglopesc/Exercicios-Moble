window.onload = function () {
    escrevaNumeros();
}
function escrevaNumeros() {
    var inicio = prompt("Digite um numero");
    var fim = prompt("Digite outro numero");
    var intervalo = setInterval(() => {
        if (inicio <= fim) {
            console.log(inicio)
            document.getElementById("numeros").innerHTML = inicio;
        }
        else {
            clearInterval(intervalo);
        }
        ++inicio

    }, 1000)

}