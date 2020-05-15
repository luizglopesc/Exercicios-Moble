function incluirnome(){
    document.getElementById("nomeresult").innerHTML = localStorage.getItem("nome");
    document.getElementById("nome").value = localStorage.getItem("nome");
}
function incluircor(){
    document.body.style.backgroundColor = localStorage.getItem("cor");
    document.getElementById("cor").value = localStorage.getItem("cor");
}
function incluiridade(){
    document.getElementById("idaderesult").innerHTML = localStorage.getItem("idade");
    document.getElementById("idade").value = localStorage.getItem("idade");
}
function incluircidade(){
    document.getElementById("cidaderesult").innerHTML = localStorage.getItem("cidade");
    document.getElementById("cidade").value = localStorage.getItem("cidade");
}

window.onload = function(){
    let naoPreenchido = false;

    if(localStorage.getItem("nome")? incluirnome() : naoPreenchido = true);
    if(localStorage.getItem("cor")? incluircor() : naoPreenchido = true);
    if(localStorage.getItem("idade")? incluiridade() : naoPreenchido = true);
    if(localStorage.getItem("cidade")? incluircidade() : naoPreenchido = true);

    if(naoPreenchido)
    document.getElementById("naoPreenchido").style.display = 'block';


}
function Salvar(){
    localStorage.setItem("nome",document.getElementById("nome").value);
    localStorage.setItem("cor",document.getElementById("cor").value);
    localStorage.setItem("idade",document.getElementById("idade").value);
    localStorage.setItem("cidade",document.getElementById("cidade").value);
}