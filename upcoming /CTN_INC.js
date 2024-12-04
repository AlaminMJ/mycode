// const cartonIncrement = async (
//   startFrom = undefined,
//   skipNumbers = [],
//   repeatPattern = []
// ) => {
//   const inputs = Array.from(
//     document.querySelectorAll('input[id^="txtcounter_"]')
//   ).reverse();
//   inputs.pop();

//   // Start with startFrom if provided, otherwise default to the first input's value
//   let counter = startFrom !== undefined ? startFrom : Number(inputs[0].value);
//   console.log("Starting from:", counter);

//   // To track the current repeat value and the remaining repetitions
//   let repeatCount = 0;
//   let currentRepeatValue = null;

//   // Delay function for 1 second
//   const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

//   // Helper function to find the next valid counter (skipping unwanted numbers)
//   const getNextValidCounter = (currentCounter) => {
//     while (skipNumbers.includes(currentCounter)) {
//       currentCounter++;
//     }
//     return currentCounter;
//   };

//   for (const input of inputs) {
//     const parent = input?.parentElement?.parentElement;
//     input.onchange = null;

//     // Check if we have a repeat value in progress
//     if (repeatCount > 0) {
//       input.value = currentRepeatValue; // Set the repeat value
//       repeatCount--; // Decrement the repeat count
//     } else {
//       // Skip numbers that should be ignored
//       counter = getNextValidCounter(counter);

//       // Check if the current counter has a matching repeat pattern
//       const match = repeatPattern.find((pattern) => pattern[0] === counter);
//       if (match) {
//         // Start repeating this value
//         currentRepeatValue = match[0]; // The value to repeat
//         repeatCount = match[1] - 1; // The number of times to repeat minus one (as we set it already)
//         input.value = currentRepeatValue; // Set the repeat value
//       } else {
//         // No repeat pattern found, set the input to the current counter
//         input.value = counter;
//       }
//     }

//     // Wait 1 second before clicking the save button
//     await delay(200);
//     parent.querySelector('[id^="bSaveDettaglio_"]')?.click();

//     // Increment counter only if not in a repeat phase
//     if (repeatCount <= 0) {
//       counter++;
//     }
//   }
//   console.log("done");
// };

// // Usage example:
// cartonIncrement(
//   undefined,
//   [3, 7, 12],
//   [
//     [5, 2],
//     [10, 3],
//   ]
// );

const cartonIncrement = async (
  startFrom = undefined,
  skipNumbers = [],
  repeatPattern = [],
  skipFirst = 0 // Number of items to skip at the start
) => {
  const inputs = Array.from(
    document.querySelectorAll('input[id^="txtcounter_"]')
  ).reverse();
  inputs.pop(); // Remove the last input (if needed per your logic)

  // Remove the first `skipFirst` items
  const inputsToProcess = inputs.slice(skipFirst);

  // Start with startFrom if provided, otherwise default to the first input's value
  let counter = startFrom !== undefined ? startFrom : Number(inputs[0]?.value);
  console.log("Starting from:", counter);

  // To track the current repeat value and the remaining repetitions
  let repeatCount = 0;
  let currentRepeatValue = null;

  // Delay function for 1 second
  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  // Helper function to find the next valid counter (skipping unwanted numbers)
  const getNextValidCounter = (currentCounter) => {
    while (skipNumbers.includes(currentCounter)) {
      currentCounter++;
    }
    return currentCounter;
  };

  for (const input of inputsToProcess) {
    const parent = input?.parentElement?.parentElement;
    input.onchange = null;

    // Check if we have a repeat value in progress
    if (repeatCount > 0) {
      input.value = currentRepeatValue; // Set the repeat value
      repeatCount--; // Decrement the repeat count
    } else {
      // Skip numbers that should be ignored
      counter = getNextValidCounter(counter);

      // Check if the current counter has a matching repeat pattern
      const match = repeatPattern.find((pattern) => pattern[0] === counter);
      if (match) {
        // Start repeating this value
        currentRepeatValue = match[0]; // The value to repeat
        repeatCount = match[1] - 1; // The number of times to repeat minus one (as we set it already)
        input.value = currentRepeatValue; // Set the repeat value
      } else {
        // No repeat pattern found, set the input to the current counter
        input.value = counter;
      }
    }

    // Wait 1 second before clicking the save button
    await delay(200);
    parent.querySelector('[id^="bSaveDettaglio_"]')?.click();

    // Increment counter only if not in a repeat phase
    if (repeatCount <= 0) {
      counter++;
    }
  }
  console.log("done");
};

// Usage example:
cartonIncrement(
  undefined,
  [3, 7, 12], // Numbers to skip
  [
    [5, 2], // Repeat 5 two times
    [10, 3], // Repeat 10 three times
  ],
  5 // Skip the first 5 items
);
