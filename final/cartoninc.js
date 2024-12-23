const cartonIncrement = async (options) => {
  const {
    startFrom = undefined,
    skipNumbers = [],
    repeatPattern = [],
    skipItems = { first: 0, last: 0 },
    delayTime = 200, // Delay between each operation (in ms)
  } = options;

  // Grab all input elements and reverse the array
  const inputs = Array.from(
    document.querySelectorAll('input[id^="txtcounter_"]')
  )
    .reverse()
    .slice(skipItems.first, -skipItems.last || undefined);

  // Start from `startFrom` or the value of the first input if not provided
  let counter = startFrom ?? Number(inputs[0]?.value);
  console.log("Starting from:", counter);

  // Track repeat logic
  let repeatCount = 0;
  let currentRepeatValue = null;

  // Helper function to find the next valid counter, skipping numbers in `skipNumbers`
  const getNextValidCounter = (currentCounter) => {
    while (skipNumbers.includes(currentCounter)) currentCounter++;
    return currentCounter;
  };

  // Delay function to pause between actions
  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  // Loop through the inputs and update values
  for (const input of inputs) {
    const parent = input?.parentElement?.parentElement;

    // Remove any previous onchange events
    input.onchange = null;

    // If repeat count is active, use the repeat value
    if (repeatCount > 0) {
      input.value = currentRepeatValue;
      repeatCount--;
    } else {
      counter = getNextValidCounter(counter);

      // Check if there's a repeat pattern for the current counter
      const repeat = repeatPattern.find(([val]) => val === counter);
      if (repeat) {
        currentRepeatValue = repeat[0];
        repeatCount = repeat[1] - 1; // Set the remaining repeat count
        input.value = currentRepeatValue;
      } else {
        input.value = counter; // Regular counter assignment
      }
    }

    // Click save button after updating value
    await delay(delayTime);
    parent.querySelector('[id^="bSaveDettaglio_"]')?.click();

    // Only increment counter if not in repeat phase
    if (repeatCount <= 0) counter++;
  }
};
const opt = {
  startFrom: 1,
  // skipNumbers: [3, 7, 12],
  // repeatPattern: [
  //   [5, 2],
  //   [10, 3],
  // ],
  // skipItems: { first: 5, last: 3 },
};
// Usage example:
cartonIncrement(opt).finally(() => console.log("Oparation Done"));
