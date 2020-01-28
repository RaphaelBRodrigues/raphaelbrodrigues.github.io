$(document).ready(function(){


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
  var reposAPI = data[0].repo.name;
  var reposAPI1 = data[1].repo.name;
  var reposAPI2 = data[2].repo.name;
  var reposAPI3 = data[3].repo.name;
  var reposAPI4 = data[4].repo.name;

  var repos = reposAPI.split("/");
  var repos1 = reposAPI1.split("/");
  var repos2 = reposAPI2.split("/");
  var repos3 = reposAPI3.split("/");
  var repos4 = reposAPI4.split("/");


var urlRep1 = urlUser+repos1[1];
var urlRep2 = urlUser+repos2[2];
var urlRep3 = urlUser+repos3[3];
var urlRep4 = urlUser+repos4[4];


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
