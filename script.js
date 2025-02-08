document.addEventListener("DOMContentLoaded", function () {
  // Smooth scrolling function
  function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
  }

  // Button to trigger smooth scrolling to contact section
  let getInTouchButton = document.getElementById("get-in-touch-btn");
  if (getInTouchButton) {
    getInTouchButton.addEventListener("click", function () {
      scrollToSection("contact");
    });
  }

  // Contact form handling
  let contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
      event.preventDefault();
      let name = document.getElementById("name").value;
      let email = document.getElementById("email").value;
      let message = document.getElementById("message").value;

      if (name && email && message) {
        alert(
          "Thanks for reaching out, " + name + "! We'll get back to you soon."
        );
        contactForm.reset();
      } else {
        alert("Please fill out all fields.");
      }
    });
  }
});