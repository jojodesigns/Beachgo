// Function to validate a form
function validateForm(formId) {
    const form = document.getElementById(formId);
    const inputs = form.querySelectorAll('input, select, textarea');
    let isValid = true;
    
    inputs.forEach(input => {
        if (input.required && input.value.trim() === '') {
            isValid = false;
            input.classList.add('invalid');
        } else {
            input.classList.remove('invalid');
        }
    });
    
    return isValid;
}

// Function to submit a form
function submitForm(formId) {
    const isValid = validateForm(formId);
    
    if (isValid) {
        const form = document.getElementById(formId);
        // Perform form submission (e.g., AJAX request)
        // Handle success or error response
    }
}

// Attach event listeners
document.addEventListener('DOMContentLoaded', function() {
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            const formId = form.getAttribute('id');
            submitForm(formId);
        });
    });
});
