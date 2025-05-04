import { setupAnimations, scrollToProjects } from './animations.js';
import { setupContactForm } from './contactForm.js';
document.addEventListener('DOMContentLoaded', () => {
    setupAnimations();
    setupContactForm();
    // Add click event listener to the projects link
    const projectsLink = document.querySelector('a[href="#projects"]');
    if (projectsLink) {
        projectsLink.addEventListener('click', scrollToProjects);
    }
});
