// Simulated array of chat messages (replace with actual data)
const chatMessages = [
    { sender: 'User1', message: 'Hello there!', timestamp: '10:00 AM' },
    { sender: 'User2', message: 'Hi! How can I help you?', timestamp: '10:05 AM' }
    // Add more chat messages as needed
];

// Function to display chat messages
function displayChatMessages() {
    const chatMessagesContainer = document.getElementById('chat-messages');
    chatMessagesContainer.innerHTML = ''; // Clear existing messages
    
    chatMessages.forEach(message => {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message');
        messageDiv.classList.add(message.sender === 'User1' ? 'sent' : 'received');
        
        messageDiv.innerHTML = `
            <p>${message.message}</p>
            <span class="time">${message.timestamp}</span>
        `;
        
        chatMessagesContainer.appendChild(messageDiv);
    });
}

// Function to send a new message
function sendMessage() {
    const newMessage = document.getElementById('new-message').value;
    if (newMessage.trim() === '') {
        return;
    }
    
    // Add the new message to the chatMessages array (simulated)
    chatMessages.push({
        sender: 'User1',
        message: newMessage,
        timestamp: new Date().toLocaleTimeString()
    });
    
    // Display updated messages
    displayChatMessages();
    
    // Clear the input field
    document.getElementById('new-message').value = '';
}

// Attach event listeners
document.addEventListener('DOMContentLoaded', function() {
    // Display initial chat messages
    displayChatMessages();
    
    // Send message
    const sendButton = document.getElementById('send-button');
    sendButton.addEventListener('click', function(event) {
        event.preventDefault();
        sendMessage();
    });
    
    // Submit message on Enter key press
    const newMessageInput = document.getElementById('new-message');
    newMessageInput.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            sendMessage();
        }
    });
});
