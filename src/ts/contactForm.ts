interface FormResponse {
    ok: boolean;
    status: number;
}

export function setupContactForm(): void {
    const contactForm: HTMLFormElement | null = document.querySelector('#contact-form');
    const submitButton: HTMLButtonElement | null = contactForm ? contactForm.querySelector('button[type="submit"]') : null;
    const successMessage: HTMLDivElement | null = document.querySelector('#success-message');

    if (!contactForm || !submitButton || !successMessage) {
        console.error('Required form elements not found');
        return;
    }

    contactForm.addEventListener('submit', async (e: Event) => {
        e.preventDefault();
        submitButton.disabled = true;
        submitButton.textContent = 'Sending...';

        try {
            const response: Response = await fetch(contactForm.action, {
                method: 'POST',
                body: new FormData(contactForm),
                headers: { 'Accept': 'application/json' }
            });

            const result: FormResponse = await response.json();
            
            if (result.ok) {
                contactForm.reset();
                successMessage.classList.remove('hidden');
                setTimeout(() => {
                    successMessage.classList.add('hidden');
                }, 5000);
            }
        } catch (error) {
            console.error('Error submitting form:', error);
        } finally {
            submitButton.disabled = false;
            submitButton.textContent = 'Send Message';
        }
    });
}
