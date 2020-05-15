function imagem() {
    document.getElementById("paragrafo").innerHTML = "<img src= 'https://img.elo7.com.br/product/original/25658AB/adesivo-loading-carregando-parede-quarto-cama-sala-hd-adesivo-cama-casal-divertida.jpg";
    setTimeout(imgcarregada, 1000);
}

function imgcarregada() {
    document.getElementById("paragrafo").innerHTML = "Carregado com Sucesso"
}