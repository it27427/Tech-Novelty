document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.querySelector('#toggle-button');
  const cardSection = document.querySelector('#servicecontent');

  toggleButton.addEventListener('click', () => {
    cardSection.classList.toggle('expanded');

    if (cardSection.classList.contains('expanded')) {
      toggleButton.textContent = 'View Less';
    } else {
      toggleButton.textContent = 'Show All';
    }
  });
});
