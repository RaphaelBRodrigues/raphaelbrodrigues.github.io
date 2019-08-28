function FinishLoad(){
	 $("#preto").removeClass("loading");
 $("#preto").addClass("acabou");


}
function load(){
 $("#preto").addClass("loading");

setInterval(function(){FinishLoad()},2000);

}
 window.addEventListener("load",load);

