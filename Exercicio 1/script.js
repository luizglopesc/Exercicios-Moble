window.onload = function() {
 	var map = document.getElementById('map');

 	if('geolocation' in navigator) {
 		document.getElementById('localizacao').addEventListener('click', function (){
 			navigator.geolocation.getCurrentPosition(function (location){
 				console.log(location.coords.latitude);
 				console.log(location.coords.longitude)
 				map.innerHTML = "Latitude: "+location.coords.latitude+" Longitude: " +location.coords.longitude;
 			});
 		});
 	} else {
 		map.innerText = "Api de localizacao nao suportada"
 	}
 };