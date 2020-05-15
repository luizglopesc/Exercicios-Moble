window.onload = function(){

}

function vibrar1(){
    console.log("Função 1")
    navigator.vibrate('200');
}

function vibrar2(){
    console.log("Função 2")
    navigator.vibrate(['200', '300', '400', '500']);
}

function vibrar3(){
    console.log("Função 3")
    navigator.vibrate('600');
}