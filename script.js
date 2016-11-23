$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 1000, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});

function showContent() {
    document.getElementById("mobileOverlay").classList.toggle("show");
    document.getElementById("innerWrapper").classList.toggle("hide");
    document.getElementById("menuToggle").classList.toggle("change");
}

function myFunction(x) {
    document.getElementById("mobileOverlay").classList.toggle("show");
    document.getElementById("innerWrapper").classList.toggle("hide");
    x.classList.toggle("change");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.menuToggle')) {

    var dropdowns = document.getElementById("mobileOverlay");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }

    var wrappers = document.getElementById("innerWrapper");
    var i;
    for (i = 0; i < wrappers.length; i++) {
      var openWrapper = wrappers[i];
      if (openWrapper.classList.contains('hide')) {
        openWrapper.classList.remove('hide');
      }
    }
  }
}