document.addEventListener('DOMContentLoaded', () => {
    const ratingContainers = document.querySelectorAll('.rating-container');
  
    ratingContainers.forEach(container => {
      const stars = container.querySelectorAll('.star');
      const ratingValueElement = container.querySelector('p');
      let selectedRating = 0;
  
      stars.forEach(star => {
        star.addEventListener('click', () => {
          selectedRating = star.getAttribute('data-value');
          updateRating(selectedRating, ratingValueElement, stars);
        });
  
        star.addEventListener('mouseover', () => {
          const value = star.getAttribute('data-value');
          highlightStars(value, stars);
        });
  
        star.addEventListener('mouseout', () => {
          highlightStars(selectedRating, stars);
        });
      });
  
      function updateRating(value, ratingElement, stars) {
        ratingElement.textContent = `Rating: ${value}`;
        highlightStars(value, stars);
      }
  
      function highlightStars(value, stars) {
        stars.forEach(star => {
          star.classList.remove('selected');
          if (star.getAttribute('data-value') <= value) {
            star.classList.add('selected');
          }
        });
      }
    });
  });
  