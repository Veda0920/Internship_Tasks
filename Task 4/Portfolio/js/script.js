document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');
  
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      if (form.checkValidity()) {
        alert('Thank you for your message!');
        form.reset();
      } else {
        alert('Please fill out all required fields.');
      }
    });
  }
});
