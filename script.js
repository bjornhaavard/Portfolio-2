// Add smooth scroll behavior for navigation links
document.addEventListener('DOMContentLoaded', () => {
    // Initialize animations for all animated elements
    const animatedElements = document.querySelectorAll('.project-card, .skill-item, .timeline-item, .tech-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                
                // Handle skill progress bars
                if (entry.target.classList.contains('skill-item')) {
                    const progressBar = entry.target.querySelector('.skill-progress');
                    const progressValue = progressBar.style.width;
                    progressBar.style.setProperty('--progress-width', progressValue);
                }
            } else {
                // Remove the visible class when element is out of view
                entry.target.classList.remove('visible');
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: '-50px 0px -50px 0px' // Trigger slightly earlier when scrolling up
    });

    animatedElements.forEach(element => observer.observe(element));
});
