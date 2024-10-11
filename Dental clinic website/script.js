document.getElementById("contact-form").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Your message has been sent! We will contact you shortly.");
  });
  
  document.getElementById("contact-form").addEventListener("reset", function(e) {
    e.preventDefault();
    alert("Are you sure that you want to reset the page");
  });
  