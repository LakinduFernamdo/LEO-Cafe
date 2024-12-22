function changeMode() {
    const triggerMode = document.getElementById('mode-changeid'); // Get the button by its ID
    document.body.classList.toggle('dark-mode'); // Toggle the 'dark-mode' class on the <body> white font and black background
  
    // Update the button's text and class based on the current mode
    if (document.body.classList.contains('dark-mode')) {
      triggerMode.textContent = 'Light'; // Update button text
      triggerMode.classList.add('light-mode'); // Optional: Add a class for button styling in light mode
    } else {
      //now on light mode
      triggerMode.textContent = 'Dark'; // Revert button text
      triggerMode.classList.add('dark-mode'); // Remove the class for light mode styling
    }
  }
triggerMode.addEventListener('click', changeMode);
  