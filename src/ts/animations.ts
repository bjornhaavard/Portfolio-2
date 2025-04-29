export function setupAnimations(): void {

    const animatedElements: NodeListOf<HTMLElement> = document.querySelectorAll('.project-card, .skill-item, .timeline-item, .tech-card');
    

    // Set initial styles
    animatedElements.forEach((element: HTMLElement) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'all 0.6s ease-out';
    });

    const observer = new IntersectionObserver((entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry: IntersectionObserverEntry) => {
            const target = entry.target as HTMLElement;

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
        
    });
}
