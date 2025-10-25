document.addEventListener('DOMContentLoaded', function() {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');

    question.addEventListener('click', () => {
      // Toggle 'active' class on the clicked item
      item.classList.toggle('active');

      // Adjust max-height for smooth transition
      if (item.classList.contains('active')) {
        answer.style.maxHeight = answer.scrollHeight + 'px'; // Set to actual height
      } else {
        answer.style.maxHeight = '0';
      }
    });
  });
});