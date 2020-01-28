$(document).ready(function(){

//links para a requisição
var urlApi = "https://api.github.com/users/RaphaelBRodrigues/events";
var urlUser = "https://github.com/RaphaelBRodrigues/";

$.ajax({
url : urlApi,
type : "get",
dataType : "json",
success : function(data){
  // window.location.href = data.repos_url;
// js = str.replace(",","<br>");_
  // alert(data[0].repo.url)

  //Capturando o vendor e o nome do repositório
  var reposAPI = data[0].repo.name;
  var reposAPI1 = data[1].repo.name;
  var reposAPI2 = data[2].repo.name;
  var reposAPI3 = data[3].repo.name;
  var reposAPI4 = data[4].repo.name;

//separando o vendor do repositório e colocando-os no vetor repos[]
//repos[0] = vendor repos[1] = repositório

  var repos = reposAPI.split("/");
  var repos1 = reposAPI1.split("/");
  var repos2 = reposAPI2.split("/");
  var repos3 = reposAPI3.split("/");
  var repos4 = reposAPI4.split("/");


//link dos repositórios
var urlRep = urlUser+repos[1];
var urlRep1 = urlUser+repos1[1];
var urlRep2 = urlUser+repos2[1];
var urlRep3 = urlUser+repos3[1];
var urlRep4 = urlUser+repos4[1];

//Identificando o tipo de evento e atribuindo uma imagem ao elemento
if (data[0].type == "PushEvent") {
//Se a ação for um commit
$("#commit-foto").attr("src","images/commit.png");

}
else if(data[0].type == "CreateEvent"){
//Criação de repositório

$("#commit-foto").attr("src","images/create.png");
}else{
  $("#commit-foto").attr("src","images/unknown.png");

}

if (data[1].type == "PushEvent") {
//Se a ação for um commit
$("#commit-foto1").attr("src","images/commit.png");

}
else if(data[1].type == "CreateEvent"){
//Criação de repositório

$("#commit-foto1").attr("src","images/create.png");
}else{
  $("#commit-foto1").attr("src","images/unknown.png");

}

if (data[2].type == "PushEvent") {
//Se a ação for um commit
$("#commit-foto2").attr("src","images/commit.png");

}
else if(data[2].type == "CreateEvent"){
//Criação de repositório

$("#commit-foto2").attr("src","images/create.png");
}else{
  $("#commit-foto2").attr("src","images/unknown.png");

}

if (data[3].type == "PushEvent") {
//Se a ação for um commit
$("#commit-foto3").attr("src","images/commit.png");

}
else if(data[3].type == "CreateEvent"){
//Criação de repositório

$("#commit-foto3").attr("src","images/create.png");
}else{
  $("#commit-foto3").attr("src","images/unknown.png");

}

if (data[4].type == "PushEvent") {
//Se a ação for um commit
$("#commit-foto4").attr("src","images/commit.png");

}
else if(data[4].type == "CreateEvent"){
//Criação de repositório

$("#commit-foto4").attr("src","images/create.png");
}else{
  $("#commit-foto4").attr("src","images/unknown.png");

}
//atribuindo os valores capturados através da api aos elementos

$("#commit-id").text(data[0].payload.push_id);
$("#commit-vend").text(repos[0]);
$("#commit-rep").text(repos[1]);
$("#commit-des").text(data[0].payload.commits[0].message);

$("#commit-id1").text(data[1].payload.push_id);
$("#commit-vend1").text(repos1[0]);
$("#commit-rep1").text(repos1[1]);
$("#commit-des1").text(data[1].payload.commits[0].message);

$("#commit-id2").text(data[2].payload.push_id);
$("#commit-vend2").text(repos2[0]);
$("#commit-rep2").text(repos2[1]);
$("#commit-des2").text(data[2].payload.commits[0].message);

$("#commit-id3").text(data[3].payload.push_id);
$("#commit-vend3").text(repos3[0]);
$("#commit-rep3").text(repos3[1]);
$("#commit-des3").text(data[3].payload.commits[0].message);

$("#commit-id4").text(data[4].payload.push_id);
$("#commit-vend4").text(repos4[0]);
$("#commit-rep4").text(repos4[1]);
$("#commit-des4").text(data[4].payload.commits[0].message);

// $("#commit-link").attr("href","www.google.com");


// $("#commit-des").text(data[0].payload.commits[0].sha);


// $("#commit-id").text(data[0].type);
},
error : function(error){
  alert("fail");
  console.log("Deu ruim");
}
});


});
