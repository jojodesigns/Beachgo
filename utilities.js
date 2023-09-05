// Function to format a date in a user-friendly way
function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
}

// Function to display a success message
function showSuccessMessage(message) {
    const successMessage = document.getElementById('success-message');
    successMessage.textContent = message;
    successMessage.style.display = 'block';
    setTimeout(() => {
        successMessage.style.display = 'none';
    }, 3000); // Display for 3 seconds
}

// Function to display an error message
function showErrorMessage(message) {
    const errorMessage = document.getElementById('error-message');
    errorMessage.textContent = message;
    errorMessage.style.display = 'block';
    setTimeout(() => {
        errorMessage.style.display = 'none';
    }, 5000); // Display for 5 seconds
}

// Attach utility functions to the global scope
window.utilities = {
    formatDate,
    showSuccessMessage,
    showErrorMessage
};
