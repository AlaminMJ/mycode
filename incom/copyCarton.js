// Function to start clicking elements at a specified interval with a click limit
function startClicking(clickLimit) {
  let clickCount = 0; // Track the number of clicks
  let intervalId; // Store the interval ID

  // Execute the function every 2000 milliseconds (2 seconds)
  intervalId = setInterval(() => {
    const element = document.querySelector('[id^="bCopyDettaglio_"]'); // Select the target element

    if (element) {
      element.click(); // Simulate a click
      clickCount++; // Increment the click count

      // Stop if the click limit is reached
      if (clickCount >= clickLimit) {
        clearInterval(intervalId); // Stop the interval
        console.log(`Stopped after ${clickLimit} clicks`);
      }
    } else {
      clearInterval(intervalId); // Stop if the element is not found
      console.log("No element found, stopping clicks.");
    }
  }, 2000); // Set interval duration
}

// Example usage: Start clicking with a limit of 10
try {
  startClicking(10);
} catch (error) {}
