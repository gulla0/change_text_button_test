## change_text_button_test

Sample Implementation for Text Change on Button Click

This project demonstrates a simple implementation of changing text on a webpage when a button is clicked. The text toggles between an original message and a new message each time the button is clicked.

### JavaScript Logic:

1. **Getting the Message Element**:
   - Use `document.getElementById('message')` to get the HTML element that contains the message text.

2. **Toggling the Text Content**:
   - Check the current text content of the message element using `messageElement.textContent`.
   - If the current text is "This is the original message.", change it to "This is the new message!".
   - Otherwise, change the text back to "This is the original message.".

3. **Event Listener for Button Click**:
   - Add an event listener to the button using `document.getElementById('changeMessageButton').addEventListener('click', changeMessage)`.
   - When the button is clicked, the `changeMessage` function is called to toggle the message text.

## Languages

- HTML
- CSS
- JavaScript

## Files

1. `index.html`: The main HTML file containing the structure of the webpage.
2. `styles.css`: The CSS file for styling the webpage.
3. `changeMessage.js`: The JavaScript file containing the logic to change the message text on button click.

## How to Run:
Ensure all files (index.html, styles.css, and changeMessage.js) are in the same directory.
Open index.html in a web browser to see the implementation in action.
Click the "Change Message" button to toggle the message text between the original and new messages.
