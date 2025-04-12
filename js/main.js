"use strict";

  document.addEventListener('DOMContentLoaded', () => {

    document.querySelectorAll('.bn-number').forEach((element) => {
      element.addEventListener('click', () => {

        const value = element.querySelector('.bn-value').textContent;
        navigator.clipboard.writeText(value).then(() => {
          console.log('copied');

          const tooltip = document.querySelector('.tooltip');
          if (tooltip) {
            tooltip.classList.add('active');
            setTimeout(() => {
              tooltip.classList.remove('active');
            }, 2000);
          }

        }).catch((err) => {
          console.error('Copy error: ', err);
        });
      });
    });

});



// animations

document.addEventListener('DOMContentLoaded', () => {

  const animElements = document.querySelectorAll('.anim-el');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('anim-go');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.3
  });

  animElements.forEach((el) => observer.observe(el));

});
