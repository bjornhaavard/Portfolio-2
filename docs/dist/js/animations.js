export function setupAnimations() {
    const animatedElements = document.querySelectorAll('.project-card, .skill-item, .timeline-item, .tech-card');
    // Set initial styles
    animatedElements.forEach((element) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'all 0.6s ease-out';
    });
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            const target = entry.target;
            if (entry.isIntersecting) {
                requestAnimationFrame(() => {
                    target.style.opacity = '1';
                    target.style.transform = 'translateY(0)';
                });
            }
            else {
                requestAnimationFrame(() => {
                    target.style.opacity = '0';
                    target.style.transform = 'translateY(20px)';
                });
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '50px'
    });
    // Start observing elements
    animatedElements.forEach((element) => {
        observer.observe(element);
    });
}
