$(document).ready(function(){
  shell();
var etapas = [false,false,false,false,false,false,false,false,false,false];
var codigoReal = "",codigoReal1 = "",codigoReal2 = "",codigoReal3 = "",codigoReal4 = "",
codigoReal5 = "",codigoReal6 = "",codigoReal7 = "";
var codigoTratado = "";

function limpar(){
   codigoReal = "";codigoReal1 = "";codigoReal2 = "";codigoReal3 = "";codigoReal4 = "",
   codigoReal5 = "";codigoReal6 = "";codigoReal7 = "";
    a = 0,b = 0,c = 0,d = 0,e = 0,f = 0,g = 0,h = 0,i = 0,j = 0,k = 0,l = 0;
etapas = [false,false,false,false,false,false,false,false,false,false];
   $("#linux-pwd").text("");
   $("#linux-pwd1").text("");
   $("#linux-pwd2").text("");
   $("#linux-pwd3").text("");
   $("#linux-pwd4").text("");
   $("#linux-pwd5").text("");
   $("#linux-barra5").text("");
   $("#linux-barra1").text("");
   $("#linux-barra2").text("");
   $("#linux-barra3").text("");
   $("#linux-barra4").text("");
   $("#linux-barra5").text("");
   $("#linux-codigo").text("");
   $("#linux-codigo1").text("");
   $("#linux-codigo2").text("");
   $("#linux-codigo3").text("");
   $("#linux-codigo4").text("");
   $("#linux-codigo5").text("");


shell();

}

function codigo(codigoRecebido){

  //codigo
    var codigo = codigoRecebido;
  //código tratado
    var codigoSep = codigo.split("");
    tamanho = codigoSep.length;
  //codigo utilizado

return [codigoSep,tamanho];
}





  var barra = true;
  var a = 0,b = 0,c = 0,d = 0,e = 0,f = 0,g = 0,h = 0,i = 0,j = 0,k = 0,l = 0;
  var pwd = "raphael@raphael-barbosa-rodrigues:~";

function shell(){
setInterval(function(){
setInterval(function(){




  codigoTratado = codigo("mkdir CV");//CodigoSep e tamanho enviado para o codigoTratado [0] = string [1] = length
  if (a < codigoTratado[1] && etapas[0] != true) {
    $("#linux-pwd").text(pwd+"$ ");
    $("#linux-barra").text("|");
    codigoReal = codigoReal + codigoTratado[0][a];//pegando a string e a posição da letra i
    $("#linux-codigo").text(codigoReal);
    a++;

  }else{
    $("#linux-barra").text("");
//finaliza linha 1
  }
  if(a >= codigoTratado[1]){
    etapas[0] = true;

  }


 codigoTratado = codigo(" cd CV");
if (b < codigoTratado[1] && etapas[0] == true) {

  $("#linux-pwd1").text(pwd+"$");
  $("#linux-barra1").text("|");

  codigoReal1 = codigoReal1 + codigoTratado[0][b];
  $("#linux-codigo1").text(codigoReal1);

  b++;
}else{
  $("#linux-barra1").text("");
}
if(b >= codigoTratado[1]){
  etapas[1] = true;

}



 codigoTratado = codigo(" mv ~/ola.txt ~/CV/");
if ((c < codigoTratado[1]) && (etapas[1] == true)) {

  $("#linux-pwd2").text(pwd+"/CV$");
  $("#linux-barra2").text("|");

  codigoReal2 = codigoReal2 + codigoTratado[0][c];
  $("#linux-codigo2").text(codigoReal2);

  c++;
}else{
  $("#linux-barra2").text("");
}
if(c >= codigoTratado[1]){
  etapas[2] = true;

}


codigoTratado = codigo(" cat olá.txt");
if ((d < codigoTratado[1]) && (etapas[2] == true)) {

 $("#linux-pwd3").text(pwd+"/CV$");
 $("#linux-barra3").text("|");

 codigoReal3 = codigoReal3 + codigoTratado[0][d];
 $("#linux-codigo3").text(codigoReal3);

 d++;
}else{
 $("#linux-barra3").text("");
}
if(d >= codigoTratado[1]){
 etapas[3] = true;

}


codigoTratado = codigo("Olá,seja muito bem vindo ao meu currículo");
if ((e < codigoTratado[1]) && (etapas[3] == true)) {

 $("#linux-pwd4").text("");
 $("#linux-barra4").text("|");

 codigoReal4 = codigoReal4 + codigoTratado[0][e];
 $("#linux-codigo4").text(codigoReal4);

 e++;
}else{
 $("#linux-barra4").text("");
}
if(e >= codigoTratado[1]){
 etapas[4] = true;

}



codigoTratado = codigo(" clear                          ");
if ((f < codigoTratado[1]) && (etapas[4] == true)) {

 $("#linux-pwd5").text(pwd+"/CV$");
 $("#linux-barra5").text("|");

 codigoReal5 = codigoReal5 + codigoTratado[0][f];
 $("#linux-codigo5").text(codigoReal5);

 f++;
}else{
}
if(f >= codigoTratado[1]){
  $("#linux-barra1").text("");

limpar();

}

},380)}
,4500)
}



setInterval(function(){
  if (barra == true) {
    $("#linux-barra").css("opacity","0")
    $("#linux-barra1").css("opacity","0")
    $("#linux-barra2").css("opacity","0")
    $("#linux-barra3").css("opacity","0")
barra = false;
  }else {
    $("#linux-barra").css("opacity","1")
    $("#linux-barra1").css("opacity","1")
    $("#linux-barra2").css("opacity","1")
    $("#linux-barra3").css("opacity","1")
barra = true;
  }

},300)
}
);
