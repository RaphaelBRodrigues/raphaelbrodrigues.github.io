 $(document).ready(function(){
	  	  	 	verde(document.getElementById('inicio'));
// window.scroll(5);
$('html, body').animate({scrollTop:0}, 'slow');


 });

 	var novo;
var velho;




function verde(res){
 return res.style.color='green';
}

function  backcolor(res){
  return res.style.color='gray';

  }


 function  color(id){
 	//Inicializa a váriavel

if (velho == null) {
velho = document.getElementById("ghost");
console.log(velho);
}
	//Recebe o elemento clicado
   	 novo = document.getElementById(id);

   	 //Confirma se é um nomo elemento
   	 	if (novo == document.getElementById('inicio')) {
	  	  	 	verde(novo);
	  			backcolor(velho);

  	 		 		  $("html, body").animate({ scrollTop: 0 }, "slow");

  	 	}else{
  	 			  			backcolor(document.getElementById('inicio'));

  	 	}
 	  if (velho !== novo && novo !== document.getElementById('inicio')) {

 	  	//Pinta o velho elemento de cinza
	  			backcolor(velho);
	  			backcolor(document.getElementById('inicio'));

	  			//Pinta o novo elemento de verde
	  	  	 	verde(novo);
	  	  	 	//Depois de pintado transforma o novo elemento e velho e espera pela próxima mudança no if
  	 	velho = novo;

	  }


 	 console.log("Novo:"+velho);

}
function ghost(){

		$("easter").css("color","yellow");
		document.getElementsByTagName('pa').innerHTML = 'Parabéns';
				$("egg").css("color","yellow");
				$("egg").css("display","inherit");

	alert("Hum parece que você encontrou um easter egg");

}
