
$(".next").click(function(){
  if($(".step-wrapper li:last-child").hasClass('completed')){
    alert("completed");
     return
  }
  $(".step-wrapper li.active").addClass("completed").removeClass("active").next('li').addClass("active");  
});

$(".previous").click(function(){
  if($(".step-wrapper li:first-child").hasClass('active')){
    alert("Already on first step");
     return
  }
  $(".step-wrapper li.active").removeClass("active completed").prev('li').addClass("active").removeClass('completed');
  if($(".step-wrapper li:last-child").hasClass('completed')){
    $(".step-wrapper li:last-child").removeClass('completed').addClass('active')
  }
});