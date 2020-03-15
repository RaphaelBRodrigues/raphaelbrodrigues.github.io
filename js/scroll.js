$(window).scroll(function(){


if ($(document).scrollTop() < $("#resumo").position().top) {
	//Inicio
	var el = document.getElementById("inicio");
	verde(el);
		$("#nav").css("background-color","rgba(0,0,0,1)");
					// $("#nav").css("position","fixed");

}else{
		backcolor(document.getElementById("inicio"));
			$("#nav").css("background-color","rgba(0,0,0,0.8)");
// 			$("#nav").css("position","absolute");
// $("#nav").position().top = $("#resumo").position().top;


}
if ($(document).scrollTop() >= $("#resumo").position().top) {
	//Resumo
	if ($(document).scrollTop() < $("#habilidades").position().top) {
	var el = document.getElementById("resumoo");
	verde(el);

}else{
		backcolor(document.getElementById("resumoo"));

}
}else{
		backcolor(document.getElementById("resumoo"));

}

if ($(document).scrollTop() >= $("#habilidades").position().top) {
	//Habilidades
		if ($(document).scrollTop() < $("#portifolio").position().top) {
			$(".potenciaReal").addClass("zerado");
			$(".col-0").addClass("zero");
	var el = document.getElementById("habilidadess");
	verde(el);
}else{
	$(".potenciaReal").removeClass("zerado");
	$(".col-0").removeClass("zero");
		backcolor(document.getElementById("habilidadess"));

}
}else{
		backcolor(document.getElementById("habilidadess"));

}
if ($(document).scrollTop() >= $("#portifolio").position().top) {
	//Portifolio
		if ($(document).scrollTop() < $("#contatos").position().top) {

	var el = document.getElementById("portifolioo");
	verde(el);
}else{
		backcolor(document.getElementById("portifolioo"));

}
}else{
		backcolor(document.getElementById("portifolioo"));

}
		if ($(document).scrollTop() >= $("#contatos").position().top) {

	var el = document.getElementById("contatoss");
	verde(el);
}else{
	backcolor(document.getElementById("contatoss"));
}
if($(document).scrollTop() >= $("#portifolio").position().top){

//Fim da guia
		 $("#container-qr").css("opacity","0.1");
		 $("#container-qr").css("z-index","-1");
	}else{
//Padrao
		 $("#container-qr").css("opacity","1");
		 $("#container-qr").css("z-index","991");

	}


	if ($(document).scrollTop() >= $("#formacao").position().top) {
	//Resumo
	if ($(document).scrollTop() < $("#contatos").position().top) {
	var el = document.getElementById("formacaoo");
	verde(el);

}else{
		backcolor(document.getElementById("formacaoo"));

}
}else{
		backcolor(document.getElementById("formacaoo"));

}


if ($(document).scrollTop() >= $("#carreira").position().top) {
//Resumo
if ($(document).scrollTop() < $("#contatos").position().top) {
var el = document.getElementById("carreiraa");
verde(el);

}else{
	backcolor(document.getElementById("carreiraa"));

}
}else{
	backcolor(document.getElementById("carreiraa"));

}


});
