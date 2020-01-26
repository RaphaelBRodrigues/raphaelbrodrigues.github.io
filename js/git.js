$(document).ready(function(){


var urlApi = "https://api.github.com/users/RaphaelBRodrigues/events";

$.ajax({
url : urlApi,
type : "get",
dataType : "json",
success : function(data){
  // window.location.href = data.repos_url;
// js = str.replace(",","<br>");_
  // alert(data[0].repo.url)
$("#commit-id").text(data[0].payload.push_id);
$("#commit-rep").text(data[0].repo.name);
$("#commit-des").text(data[0].payload.commits[0].message);

$("#commit-id1").text(data[1].payload.push_id);
$("#commit-rep1").text(data[1].repo.name);
$("#commit-des1").text(data[1].payload.commits[0].message);

$("#commit-id2").text(data[2].payload.push_id);
$("#commit-rep2").text(data[2].repo.name);
$("#commit-des2").text(data[2].payload.commits[0].message);

$("#commit-id3").text(data[3].payload.push_id);
$("#commit-rep3").text(data[3].repo.name);
$("#commit-des3").text(data[3].payload.commits[0].message);

$("#commit-id4").text(data[4].payload.push_id);
$("#commit-rep4").text(data[4].repo.name);
$("#commit-des4").text(data[4].payload.commits[0].message);



// $("#commit-des").text(data[0].payload.commits[0].sha);


// $("#commit-id").text(data[0].type);
},
error : function(error){
  alert("fail");
  console.log("Deu ruim");
}
});


});
