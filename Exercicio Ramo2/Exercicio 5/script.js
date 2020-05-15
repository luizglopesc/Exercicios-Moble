window.onload = function () {
    escrevaNumeros();
}
function escrevaNumeros() {
    var inicio = prompt("Digite um numero");
    var fim = prompt("Digite outro numero");
    var intervalo = setTimeout(function recursivo() {
        if (inicio <= fim) {
            console.log(inicio)
            document.getElementById("numeros").innerHTML = inicio;
        }
        else {
            clearTimeout(intervalo);
        }
        ++inicio
        intervalo = setTimeout(recursivo, 1000);
    }, 1000)

}
