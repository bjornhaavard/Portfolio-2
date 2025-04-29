export function setupContactForm() {
    const contactForm = document.querySelector('#contactForm');
    const submitButton = contactForm ? contactForm.querySelector('button[type="submit"]') : null;
    const successMessage = document.querySelector('#successMessage');
    if (!contactForm || !submitButton || !successMessage) {
        console.error('Required form elements not found');
        return;
    }
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        submitButton.disabled = true;
        submitButton.textContent = 'Sending...';
        try {
            const response = await fetch(contactForm.action, {
                method: 'POST',
                body: new FormData(contactForm),
                headers: { 'Accept': 'application/json' }
            });
            const result = await response.json();
            if (result.ok) {
                contactForm.reset();
                successMessage.classList.remove('hidden');
                setTimeout(() => {
                    successMessage.classList.add('hidden');
                }, 5000);
            }
        }
        catch (error) {
            console.error('Error submitting form:', error);
        }
        finally {
            submitButton.disabled = false;
            submitButton.textContent = 'Send Message';
        }
    });
}
