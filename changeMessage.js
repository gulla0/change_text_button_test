// Function to change the message
function changeMessage() {
    // Get the message element
    const messageElement = document.getElementById('message');
    
    // Change its text content
    if (messageElement.textContent !== 'This is the new message!') {
        messageElement.textContent = 'This is the new message!';
    } else {
    messageElement.textContent = 'This is the original message.';
    }
}

// Add an event listener to the button
document.getElementById('changeMessageButton').addEventListener('click', changeMessage);
