// function sendCode(e){
//   e.preventDefault();
//   alert("A verification code has been sent to your email.");
//   document.getElementById("step1").style.display = "none";
//   document.getElementById("step2").style.display = "block";
// }

// function verifyCode(e){
//   e.preventDefault();
//   alert("Code verified successfully.");
//   document.getElementById("step2").style.display = "none";
//   document.getElementById("step3").style.display = "block";
// }

// function resetPassword(e){
//   e.preventDefault();
//   alert("Your password has been reset successfully!");
// }
    function sendCode(e){
      e.preventDefault();
      alert("A verification code has been sent to your email.");
      document.getElementById("step1").style.display = "none";
      document.getElementById("step2").style.display = "block";
    }

    function verifyCode(e){
      e.preventDefault();
      let code = document.getElementById("verificationCode").value;

      // sirf 6 digits allow
      if(!/^\d{6}$/.test(code)){
        alert("Please enter a valid 6-digit code.");
        return;
      }

      alert("Code verified successfully.");
      document.getElementById("step2").style.display = "none";
      document.getElementById("step3").style.display = "block";
    }

    function resetPassword(e){
      e.preventDefault();
      let pass = document.getElementById("newPassword").value;
      let confirm = document.getElementById("confirmPassword").value;

      if(pass !== confirm){
        alert("Passwords do not match. Please try again.");
        return;
      }

      if(pass.length < 8){
        alert("Password must be at least 8 characters long.");
        return;
      }

      alert("Your password has been reset successfully!");
      // Redirect to index.html
      window.location.href = "index.html";
    }