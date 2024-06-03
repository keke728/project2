$(document).ready(function(){
  //Fadeout CSS Loading Animation
  $(".loading").delay(2000).fadeOut(6000, function(){
    $(".loading").remove();
      $(".landing").delay(200).fadeIn(2500,function(){
        $("#startBtn").delay(350).show();
      });
  });
  $("#startBtn").on('click', function(){
    window.location = "html/timeline.html";
  });
});
