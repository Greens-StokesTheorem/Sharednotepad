const notepad = document.getElementById('notepad');
const saveButton = document.getElementById('saveButton');

// Fetch the saved message when the page loads
fetch('/api/message')
  .then(response => response.text())
  .then(message => {
    notepad.value = message;
  });

// Save the message when the button is clicked
saveButton.addEventListener('click', () => {
  const message = notepad.value;
  fetch('/api/message', {
    method: 'POST',
    headers: {
      'Content-Type': 'text/plain',
    },
    body: message,
  });
});