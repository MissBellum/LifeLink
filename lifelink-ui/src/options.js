document.getElementById('options-dropdown').addEventListener('change', () => {
    const messageBox = document.getElementById('message-box');
    const selectedOptionText = this.options[this.selectedIndex].text;
  
    messageBox.value = selectedOptionText;
  
    sendMessage(selectedOptionText);
  });
  
  function sendMessage(message) {
    console.log(`Message sent: ${message}`);
  }
  