// Function to switch between tabs in the user dashboard
function switchDashboardTab(tabName) {
    const tabs = document.querySelectorAll('.dashboard-tab');
    tabs.forEach(tab => {
        tab.style.display = 'none';
    });
    
    const selectedTab = document.getElementById(tabName);
    selectedTab.style.display = 'block';
}

// Function to display user profile information
function displayUserProfile(userId) {
    // Fetch user information based on userId and populate the profile section
    const profileSection = document.getElementById('user-profile');
    // Update profile information with fetched data
}

// Attach event listeners
document.addEventListener('DOMContentLoaded', function() {
    // Initial tab display
    switchDashboardTab('tab-items');
    
    // Switching tabs
    const tabLinks = document.querySelectorAll('.dashboard-tab-link');
    tabLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const tabName = link.getAttribute('data-tab');
            switchDashboardTab(tabName);
        });
    });
    
    // Display user profile
    const userId = 123; // Replace with actual user ID
    displayUserProfile(userId);
});
