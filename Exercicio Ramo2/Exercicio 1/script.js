window.onload = function () {
    despertador();
}

function despertador() {
    var tempo = prompt("informe o tempo");
    setTimeout(alerta, tempo);

}
function alerta() {
    alert("Despertado")
}
