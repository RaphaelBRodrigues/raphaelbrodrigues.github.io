function maxQr(){
  $("#max-qr").removeClass("acabou");
  $("#max-qr").css("display","inherit");

  $("#max-qr").addClass("Aparece");

}
function minQr(){
  $("#max-qr").css("display","none");

  $("#max-qr").addClass("acabou");
  $("#max-qr").removeClass("Aparece");
}
