window.onload = function (){
	document.getElementById('memoria').innerHTML = navigator.deviceMemory;
	document.getElementById('conexao').innerHTML = navigator.onLine;
		if(navigator.onLine ? conexao.innerHTML = "Conectado": conexao.innerHTML = "Desconectado");
	document.getElementById('language').innerHTML = navigator.language;
	document.getElementById('userAgent').innerHTML = navigator.userAgent;

}