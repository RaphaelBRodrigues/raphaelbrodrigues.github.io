function FinishLoad(){
	 $("#preto").removeClass("loading");
 $("#preto").addClass("acabou");


}
function load(){
	// $("#max-qr").css("display","none");
	// $("#max-qr").addClass("acabou");

 $("#preto").addClass("loading");


$(document).ready(function(){
	setInterval(function(){FinishLoad()},2000);

});

}

function rel(){
 var dt = new Date();
 var min = dt.getMinutes();

 if(min<10){
	  min = "0"+min;
 }
 var hora = dt.getHours() +":"+ min +":"+ dt.getSeconds();
 $("#ho").text(hora);
 $("#nav-clock").val(hora);
}
setInterval(function(){rel()},50);
 window.addEventListener("load",load);
