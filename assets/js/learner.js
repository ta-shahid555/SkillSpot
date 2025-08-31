const form = document.getElementById("learnerForm");
const successMsg = document.getElementById("successMessage");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const interest = form.interest.value;

    if (name && email && interest) {
      successMsg.classList.remove("d-none");

      // simulate redirect after 2 seconds
      setTimeout(() => {
        window.location.href = "explore-skills.html"; // change this to your target page
      }, 2000);
    } else {
      alert("Please fill all required fields.");
    }
});