


// Function to show/hide password in input fields
function togglePasswordVisibility(inputId) {
    const passwordInput = document.getElementById(inputId);
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
    } else {
        passwordInput.type = 'password';
    }
}

// Function to display a modal
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = 'block';
}

// Function to close a modal
function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = 'none';
}



// Attach event listeners
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.querySelector('.nav-toggle');
    if (navToggle) {
        navToggle.addEventListener('click', toggleNavMenu);
    }

    const showPasswordButtons = document.querySelectorAll('.show-password-button');
    showPasswordButtons.forEach(button => {
        button.addEventListener('click', function() {
            const inputId = button.getAttribute('data-target');
            togglePasswordVisibility(inputId);
        })
    })
})