function switchRole(role) {
  const title = document.getElementById("form-title");
  const desc = document.getElementById("form-desc");
  const checkboxLabel = document.getElementById("checkbox-label");

  if (role === "instructor") {
    title.innerHTML = `Become a SkillSpot<span> Instructor</span>`;
    desc.innerText = "Discover a supportive community of online instructors. Get instant access to all course creation resources.";
    checkboxLabel.innerText = "I want to get the most out of my experience, by receiving emails with insider tips, motivation, special updates and promotions reserved for instructors.";
  } else {
    title.innerHTML = `Sign up as a <span>Student</span>`;
    desc.innerText = "Access thousands of courses and start learning today.";
    checkboxLabel.innerText = "Send me special offers, personalized recommendations, and learning tips.";
  }
}


// URL Role Params
const params = new URLSearchParams(window.location.search);
const role = params.get("role");
if (role) {
  switchRole(role);
} else {
  switchRole("student"); // default student
}

//Form Submission
const form = document.querySelector(".log-in-form");
const checkbox = document.getElementById("check");

checkbox.checked = false;

// Handle form submission
form.addEventListener("submit", function(e) {
  e.preventDefault(); // Prevent default form submission
    // Check if the checkbox is checked
  if (!checkbox.checked) {
    alert("Please agree to the terms by checking the box.");
    return; // Stop submission
  }

  // Show success message
  alert("Signup successful! Welcome to SkillSpot.");

  // Reset the form
  form.reset();

  // Ensure checkbox stays unchecked
  checkbox.checked = false;
      
  // Redirect to index.html
  window.location.href = "index.html";
});