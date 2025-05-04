

interface FormResponse {
    ok: boolean;
    status: number;
}

export function setupContactForm(): void {
    const contactForm: HTMLFormElement | null = document.querySelector('#contactForm');
    const submitButton: HTMLButtonElement | null = contactForm ? contactForm.querySelector('button[type="submit"]') : null;
    const successMessage: HTMLDivElement | null = document.querySelector('#successMessage');


    if (!contactForm || !submitButton || !successMessage) {
        console.error('Required form elements not found');
        return;
    }

    contactForm.addEventListener('submit', async (e: Event) => {
        e.preventDefault();
    
        // Get form field values
        const nameInput = contactForm.querySelector<HTMLInputElement>('#name');
        const emailInput = contactForm.querySelector<HTMLInputElement>('#email');
        const messageInput = contactForm.querySelector<HTMLTextAreaElement>('#message');
    
        // Clear previous errors
        document.querySelectorAll('.validation-error').forEach(el => el.remove());
    
        let isValid = true;
    
        // Validate name
        if (nameInput && nameInput.value.trim().length < 3) {
            showError(nameInput, 'Name must be at least 3 characters.');
            isValid = false;
        }
    
        // Validate email
        if (emailInput && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value.trim())) {
            showError(emailInput, 'Please enter a valid email address.');
            isValid = false;
        }
    
        // Validate message
        if (messageInput && messageInput.value.trim().length < 5) {
            showError(messageInput, 'Message must be at least 5 characters.');
            isValid = false;
        }
    
        if (!isValid) {
            submitButton!.disabled = false;
            return;
        }
    
        submitButton!.disabled = true;
        submitButton!.textContent = 'Sending...';
    
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
            submitButton!.disabled = false;
            submitButton!.textContent = 'Send Message';
        }
    });
    
};   
    

// Helper function to show error in the form input

function showError(input: HTMLElement, message: string): void {
    const error = document.createElement('div');
    error.textContent = message;
    error.className = 'validation-error text-red-500 text-sm mt-1';
    input.parentElement?.appendChild(error);
}
