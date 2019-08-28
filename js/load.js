function FinishLoad(){
	 $("#preto").removeClass("loading");
 $("#preto").addClass("acabou");


}
function load(){
 $("#preto").addClass("loading");


$(document).ready(function(){
	setInterval(function(){FinishLoad()},2000);

});

}

function rel(){

 var dt = new Date();
 var hora = dt.getHours() +":"+ dt.getMinutes() +":"+ dt.getSeconds();
 $("#ho").text(hora);
 $("#nav-clock").val(hora);
}
setInterval(function(){rel()},50);
 window.addEventListener("load",load);
