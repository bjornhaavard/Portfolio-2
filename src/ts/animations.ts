export function setupAnimations(): void {
    console.log('Setting up animations...');
    const animatedElements: NodeListOf<HTMLElement> = document.querySelectorAll('.project-card, .skill-item, .timeline-item, .tech-card');
    console.log('Found elements:', animatedElements.length);

    // Set initial styles
    animatedElements.forEach((element: HTMLElement) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'all 0.6s ease-out';
    });

    const observer = new IntersectionObserver((entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry: IntersectionObserverEntry) => {
            const target = entry.target as HTMLElement;
            console.log('Element intersecting:', entry.isIntersecting);
            
            if (entry.isIntersecting) {
                requestAnimationFrame(() => {
                    target.style.opacity = '1';
                    target.style.transform = 'translateY(0)';
                });
            } else {
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
    animatedElements.forEach((element: HTMLElement) => {
        observer.observe(element);
        console.log('Observing element:', element.className);
    });
}
