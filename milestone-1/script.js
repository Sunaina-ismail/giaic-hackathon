"use strict";
// const toggleButton = document.querySelector('.toggle-btn') as HTMLButtonElement; 
// const toggleSection = document.querySelector('.toggle-section') as HTMLElement | null;
// if (toggleButton && toggleSection) {
//     toggleButton.addEventListener('click', () => {
//         toggleSection.classList.toggle('show-skills');
//     });
// }
// Get the toggle button and the section to toggle
const toggleButton = document.getElementById('toggle-btn');
const skillSection = document.querySelector('.toggle-section');
// Add an event listener to the button to toggle the section visibility
toggleButton.addEventListener('click', () => {
    // Toggle the 'show-skills' class on the skill section
    skillSection.classList.toggle('show-skills');
    // Change the button text depending on whether the section is shown or hidden
    if (skillSection.classList.contains('show-skills')) {
        toggleButton.textContent = 'Hide Skills';
    }
    else {
        toggleButton.textContent = 'Show Skills';
    }
});
