var imgAtual;
function trocaImg(){
	//Toda a vez que a função trocaImg é ativa a váriavel la de baixo que antes era 0 ganha mais 1
	imgAtual++;
if (imgAtual>2) {
	//Se a váriavel for maior que o número de imagens(no caso 2) ele retorna para a imagem 1
	imgAtual = 1;

}
//Acessa o elemento code e altera o background dele com uma nova imagem que está guardada na pasta
//Olha a váriavel imgAtual,ela muda o nome do arquivo,antes deveria ser carrosel 0
//Ai rodou a função e a váriavel ganhou mais um então o nome do arquivo ficou carrosel1.jpg (esse 1 é a váriavel)
	 $("#code").css("background-image","url('images/carrosel"+imgAtual+".jpg')");

}



function start(){
	//A variável é só para definir o nome do arquivo
imgAtual = 0 ;

//A cada intervalo de 1 segundo(1000) roda uma função que roda a função trocaImg()
setInterval(function(){trocaImg();},1000);

 }

//Quando o documento é aberto "load" ele roda a função "start"S
 window.addEventListener("load",start);



// function trocaImg(){
// //Clica muda a img
// 	imgAtual++;
// if (imgAtual>2) {
// 	imgAtual = 1

// }
// 	 $("#code").css("background-image","url('images/carrosel"+imgAtual+".jpg')");

// }