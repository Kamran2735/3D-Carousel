$(document).ready(function(){
    function desvanecer(selector){
      $(selector).css("opacity", "0.5");
    }
  
    function activateCircle(index) {
      $('.circle').removeClass('active');
      $('.circle').eq(index).addClass('active');
    }
  
    $("#first").click(function(){
      $("#carousel").css({
        "transform": "rotateY(0deg)", 
        "transition": "0.6s linear"
      });
      desvanecer("#carousel div:nth-child(2)");
      desvanecer("#carousel div:nth-child(3)");
      desvanecer("#carousel div:nth-child(4)");
      desvanecer("#carousel div:nth-child(5)");
      $("#carousel div:nth-child(1)").css("opacity", "1");
      activateCircle(0);
    });
  
    $("#second").click(function(){
      $("#carousel").css({
        "transform": "rotateY(-72deg)", 
        "transition": "0.6s linear"
      });
      desvanecer("#carousel div:nth-child(1)");
      desvanecer("#carousel div:nth-child(3)");
      desvanecer("#carousel div:nth-child(4)");
      desvanecer("#carousel div:nth-child(5)");
      $("#carousel div:nth-child(2)").css("opacity", "1");
      activateCircle(1);
    });
  
    $("#third").click(function(){
      $("#carousel").css({
        "transform": "rotateY(-144deg)", 
        "transition": "0.6s linear"
      });
      desvanecer("#carousel div:nth-child(2)");
      desvanecer("#carousel div:nth-child(1)");
      desvanecer("#carousel div:nth-child(4)");
      desvanecer("#carousel div:nth-child(5)");
      $("#carousel div:nth-child(3)").css("opacity", "1");
      activateCircle(2);
    });
  
    $("#fourth").click(function(){
      $("#carousel").css({
        "transform": "rotateY(-216deg)", 
        "transition": "0.6s linear"
      });
      desvanecer("#carousel div:nth-child(2)");
      desvanecer("#carousel div:nth-child(3)");
      desvanecer("#carousel div:nth-child(1)");
      desvanecer("#carousel div:nth-child(5)");
      $("#carousel div:nth-child(4)").css("opacity", "1");
      activateCircle(3);
    });
  
    $("#fifth").click(function(){
      $("#carousel").css({
        "transform": "rotateY(-288deg)", 
        "transition": "0.6s linear"
      });
      desvanecer("#carousel div:nth-child(2)");
      desvanecer("#carousel div:nth-child(3)");
      desvanecer("#carousel div:nth-child(4)");
      desvanecer("#carousel div:nth-child(1)");
      $("#carousel div:nth-child(5)").css("opacity", "1");
      activateCircle(4);
    });
  
    // Variable to store the current slide index
    var currentSlide = 0;
    // Variable to store the interval ID for auto-play
    var autoPlayInterval;

    // Function to fade out all slides except the current one
    function fadeOutAllExcept(index) {
        $('#carousel .slide').not(':eq(' + index + ')').css("opacity", "0.5");
        $('#carousel .slide').eq(index).css("opacity", "1");
    }

    // Function to activate the circle for the current slide
    function activateCircle(index) {
        $('.circle').removeClass('active');
        $('.circle').eq(index).addClass('active');
    }

    // Function to navigate to a specific slide
    function goToSlide(index) {
        var angle = -72 * index; // Calculate the rotation angle based on the slide index
        $("#carousel").css({
            "transform": "rotateY(" + angle + "deg)",
            "transition": "0.6s linear"
        });
        fadeOutAllExcept(index);
        activateCircle(index);
        currentSlide = index; // Update the current slide index
    }

    // Function to start auto-play
    function startAutoPlay() {
        autoPlayInterval = setInterval(function() {
            // Increment current slide index and loop back to 0 when reaching the end
            currentSlide = (currentSlide + 1) % 5;
            goToSlide(currentSlide);
        }, 2000); // Change slide every 2 seconds (adjust as needed)
    }

    // Function to stop auto-play
    function stopAutoPlay() {
        clearInterval(autoPlayInterval);
    }

    // Manual slide navigation
    $('.circle').click(function() {
        var index = $(this).index(); // Get the index of the clicked circle
        goToSlide(index);
        stopAutoPlay(); // Stop auto-play when manually navigating
    });

    // Start auto-play when the document is ready
    startAutoPlay();

    // Pause auto-play when hovering over the carousel
    $('#carousel').hover(function() {
        stopAutoPlay();
    }, function() {
        startAutoPlay();
    });
});
