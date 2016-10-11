var cargar = function() {
	var $enlaces = $("a");
	$enlaces.each(iterar);
};

var iterar = function(index, element) {
	var $enlace = $(element);
	var linkVideo = $enlace.attr("href");
	var linkImagen = youtube.generateThumbnailUrl(linkVideo);
	var $img = $("<img>");
	$img.attr("src", linkImagen);
	$enlace.append($img);
};

$(document).ready(cargar);



/*var enlaces = document.querySelectorAll("a");

var cargaPagina = function () {
	// var enlaces = document.getElementsByTagName("a");
	//for (var i = 0, l = enlaces.length; i < l; i++) {
	enlaces.forEach(function(enlace) {
		// var enlace = enlaces[i];
		var linkVideo = enlace.getAttribute("href");
		var linkImagen = youtube.generateThumbnailUrl(linkVideo);
		var img = document.createElement("img");
		img.setAttribute("src", linkImagen);
		enlace.appendChild(img);
	});
	//}
};

window.addEventListener("load", cargaPagina);*/