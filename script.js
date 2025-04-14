(function () {
    emailjs.init("YOUR_USER_ID"); // Replace with your EmailJS user ID
  })();
  
  // EmailJS form handler
  document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const formStatus = document.getElementById("form-status");
    formStatus.textContent = "Sending...";
  
    emailjs.sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", this)
      .then(() => {
        formStatus.textContent = "Message sent successfully!";
        this.reset();
      }, (error) => {
        formStatus.textContent = "Failed to send message. Try again.";
        console.error("EmailJS error:", error);
      });
  });
  
  // Hamburger menu toggle
  document.getElementById("hamburger").addEventListener("click", () => {
    document.getElementById("nav-links").classList.toggle("show");
  });
  
  // Entrance animation using IntersectionObserver
  const sections = document.querySelectorAll("section");
  
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  }, {
    threshold: 0.1
  });
  
  sections.forEach(section => {
    observer.observe(section);
  });
  