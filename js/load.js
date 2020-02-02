function FinishLoad(){
	 $("#preto").removeClass("loading");
 $("#preto").addClass("acabou");


}
function load(){
	// $("#max-qr").css("display","none");
	// $("#max-qr").addClass("acabou");

 //$("#preto").addClass("loading");


$(document).ready(function(){
	//Acabar com o load
	//setInterval(function(){FinishLoad()},4000);

});

}

function rel(){
 var dt = new Date();
 var sec = dt.getSeconds();
 var min = dt.getMinutes();
 var ho  = dt.getHours();
 if(sec<10){
	 sec = "0"+sec;
 }
 if(min<10){
	  min = "0"+min;
 }
 if(ho<10){
	 ho = "0"+ho;
 }
 var hora = ho +":"+ min +":"+ sec;
 $("#ho").text(hora);
 $("#nav-clock").val(hora);
}
setInterval(function(){rel()},50);
	setInterval(function(){FinishLoad()},4000);

// window.addEventListener("load",load);
