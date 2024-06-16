$(document).ready(function() {
	// Smooth scrolling for navigation links
	$(".scroll").click(function(event){
	  event.preventDefault();
	  $("html,body").animate({scrollTop:$(this.hash).offset().top}, 500);
	  $('.navbar-default a').removeClass('selected');
	  $(this).addClass('selected');
	});
  
	// Toggle owl icon eye state
	var owlEyesClosed = true;
  
	$('#owl-icon').click(function() {
	  if (owlEyesClosed) {
		$(this).removeClass('fa-inverse'); // Opens the owl's eyes
	  } else {
		$(this).addClass('fa-inverse'); // Closes the owl's eyes
	  }
	  owlEyesClosed = !owlEyesClosed; // Toggle the state
	});
  });
  