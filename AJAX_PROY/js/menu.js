$(document).ready(function(){
    $("#checkbox").change(function(){
      if(this.checked){
        openNav();
      } else {
        closeNav();
      }
    });
  });

  function openNav() {
    $("#sombra").css("width", "100%");
    $("#mySidebar").css("width", "230px");
  }

  function closeNav() {
    $("#sombra").css("width", "0%");
    $("#mySidebar").css("width", "0");
  }