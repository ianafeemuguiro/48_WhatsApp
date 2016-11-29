
var myHilitor2;

document.addEventListener("DOMContentLoaded", function() {
  myHilitor2 = new Hilitor("playground");
  myHilitor2.setMatchType("left");
}, false);

document.getElementById("search").addEventListener("keyup", function() {
  myHilitor2.apply(this.value);
}, false);

$(document).ready(function(){
    $('.collapsible').collapsible();
  });


$(".mat-input").focus(function(){
  $(this).parent().addClass("is-active is-completed");
});

$(".mat-input").focusout(function(){
  if($(this).val() === "")
    $(this).parent().removeClass("is-completed");
  $(this).parent().removeClass("is-active");
})