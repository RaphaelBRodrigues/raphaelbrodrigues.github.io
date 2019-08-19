//Checa a movimentção do scroll da guia
$(window).scroll(function(){
//O Primeiro vê o valor do scroll da guia e o segundo a posição do elemento resumo
if ($(document).scrollTop() > $("#resumo").position().top) {
	$("body").css("background-color","white");
}else{
		$("body").css("background-color","black");

}
});