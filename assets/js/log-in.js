document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".form-wrapper .log-in-form");
  const emailInput = form.querySelector('input[type="email"]');
  const passwordInput = form.querySelector('input[type="password"]');

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    // Email validation regex
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      alert("Please enter a valid email address.");
      emailInput.focus();
      return;
    }

    if (password.length < 6) {
      alert("Password must be at least 6 characters long.");
      passwordInput.focus();
      return;
    }

    // Frontend simulation of success
    alert("Login successful!");
    
    // Redirect to index.html
    window.location.href = "index.html";
  });
});