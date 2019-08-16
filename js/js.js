$(document).ready(function(){
var hab = document.getElementById("habilidadess");
var port = document.getElementById("portifolioo");
var cont = document.getElementById("contatoss");




});


function verde(res){
return res.style.color='green';
}

function  backcolor(res){
 return res.style.color='gray';

 }
function  color(id){
 	var el = document.getElementById(id);
 verde(el);
  var velha
 if (velha = el) {
velha = el;
 }
 if (velha != el) {
 	backcolor(velha);
 }
 alert(id);
}

