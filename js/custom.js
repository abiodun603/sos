$(document).ready(function() {
    $('#autoWidth').lightSlider({
        autoWidth:true,
        loop:true,
        auto: true,
        pager:true,
        controls: false,
        speed: 500,
        mode: "slide",
        easing: 'linear',
        currentPagerPositon: "right",
        onSliderLoad: function() {
            $('#autoWidth').removeClass('cS-hidden');
        } 
    });
    
    $('#portWidth').lightSlider({
      autoWidth:true,
      loop:false,
      auto: false,
      pager:false,
      controls: true,
      onSliderLoad: function() {
          $('#portWidth').removeClass('cs-hidden');
      } 
    });  
  });

  $(document).ready(function(){
    $(window).scroll(function(){
      var scroll = $(window).scrollTop();
      if(scroll > 50){
        $(".navbar__menu").css("background", "#080A12");
      }
      else{
        $(".navbar__menu").css("background", "transparent");
      }
    });

    $(".toggle").on("click", function(){
      if($(".navbar__links").hasClass("active")){
        $(".navbar__links").removeClass("active")
      }
      else{
        $(".navbar__links").addClass("active");
      }
    })
  });