/* Kennebunk Savings Bank - Location Pages JavaScript */

document.addEventListener('DOMContentLoaded', function () {
  // FAQ Accordion
  var faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(function (item) {
    var question = item.querySelector('.faq-question');
    var answer = item.querySelector('.faq-answer');

    question.addEventListener('click', function () {
      var isActive = item.classList.contains('active');

      // Close all other FAQ items
      faqItems.forEach(function (other) {
        if (other !== item) {
          other.classList.remove('active');
          var otherAnswer = other.querySelector('.faq-answer');
          if (otherAnswer) otherAnswer.style.maxHeight = null;
        }
      });

      // Toggle current item
      if (isActive) {
        item.classList.remove('active');
        answer.style.maxHeight = null;
      } else {
        item.classList.add('active');
        answer.style.maxHeight = answer.scrollHeight + 'px';
      }
    });
  });

  // Open first FAQ by default
  if (faqItems.length > 0) {
    var firstItem = faqItems[0];
    var firstAnswer = firstItem.querySelector('.faq-answer');
    firstItem.classList.add('active');
    firstAnswer.style.maxHeight = firstAnswer.scrollHeight + 'px';
  }
});
