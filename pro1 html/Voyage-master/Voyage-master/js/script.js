$(document).ready(function(){
  // apply slick function for slider
  $('.banner-slide').slick({
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          dots: true,
          adaptiveHeight: true
        }
      }
    ]
  });

  // datapicker
  $( "#datepickerID" ).datepicker({ dateFormat: 'D, d-M-yy' });
  $(".date-input input").click(function(){
    console.log(screen.width)
    if(screen.width < 420){
      $("#ui-datepicker-div").css({
        "left": "0",
        "right": "0",
        "margin": "auto"
      });
    }
  })
 
  // collabse menu
    if(window.screen.width < 768){
      $(".collapse-btn").css("display", "block");
      $(".nav-toggle").addClass("collabse-menu");

    }else{
      $(".collapse-btn").css("display", "none");
      $(".nav-toggle").removeClass("collabse-menu");
    }
  
  $(".collapse-btn").click(function(){
    $(".nav-toggle").animate({
      width: "toggle"
    });
  })
  
});