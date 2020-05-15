window.onload = function () {
    fechapi();
}

function fechapi() {
    console.log("teste")
    fetch('elemento.json')
        .then(response => response.json())
        .then(function (response) {
            console.log(response)
            for (let i = 0; i < response.results.length; i++) {


                let node = document.createElement("DIV");
                let conteudotext = document.createTextNode(response.results[i].title);
                node.appendChild(conteudotext);

                let link = document.createElement("A");
                link.href = response.results[i].href;
                link.classList.add('display');

                let ingredientes = document.createElement("SPAN");
                let ingredientestexto = document.createTextNode(response.results[i].ingredients);
                ingredientes.appendChild(ingredientestexto);

                let imagem = document.createElement('IMG');
                imagem.src = response.results[i].thumbnail;

                link.appendChild(node);
                link.appendChild(imagem);
                link.appendChild(ingredientes);


                let alimentos = document.getElementById("alimentos");
                alimentos.appendChild(link);

            }
        })

}
