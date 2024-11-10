const toggleButton: HTMLButtonElement = document.getElementById('toggle-btn') as HTMLButtonElement;
const skillSection: HTMLElement = document.querySelector('.toggle-section') as HTMLElement;


toggleButton.addEventListener('click', () => {

  skillSection.classList.toggle('show-skills');

  if (skillSection.classList.contains('show-skills')) {
    toggleButton.textContent = 'Hide Skills';
  } else {
    toggleButton.textContent = 'Show Skills';
  }
});
