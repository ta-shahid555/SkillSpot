
  const faqButtons = document.querySelectorAll('.faq-question');

  faqButtons.forEach(button => {
    button.addEventListener('click', () => {
      const answer = button.nextElementSibling;

      // Close all other answers
      document.querySelectorAll('.faq-answer').forEach(otherAnswer => {
        if (otherAnswer !== answer) {
          otherAnswer.style.maxHeight = null;
          otherAnswer.style.paddingTop = 0;
          otherAnswer.style.paddingBottom = 0;
        }
      });

      // Remove active class from all buttons
      document.querySelectorAll('.faq-question').forEach(otherBtn => {
        if (otherBtn !== button) {
          otherBtn.classList.remove('active');
        }
      });

      // Toggle current answer
      const isOpen = answer.style.maxHeight;

      if (isOpen) {
        answer.style.maxHeight = null;
        answer.style.paddingTop = 0;
        answer.style.paddingBottom = 0;
        button.classList.remove('active');
      } else {
        answer.style.maxHeight = answer.scrollHeight + "px";
        answer.style.paddingTop = "10px";
        answer.style.paddingBottom = "15px";
        button.classList.add('active');
      }
    });
  });

