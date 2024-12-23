// advance code
const cartonIncrement = (startFrom = undefined, repeatPattern = []) => {
  const inputs = Array.from(
    document.querySelectorAll('input[id^="txtcounter_"]')
  ).reverse();
  inputs.pop();

  // Start with startFrom if provided, otherwise default to the first input's value
  let counter = startFrom !== undefined ? startFrom : Number(inputs[0].value);
  console.log("Starting from:", counter);

  // To track the current repeat value and the remaining repetitions
  let repeatCount = 0;
  let currentRepeatValue = null;

  for (const input of inputs) {
    const parent = input?.parentElement?.parentElement;
    input.onchange = null;

    // Check if we have a repeat value in progress
    if (repeatCount > 0) {
      input.value = currentRepeatValue; // Set the repeat value
      repeatCount--; // Decrement the repeat count
    } else {
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

    // Simulate the click action
    parent.querySelector('[id^="bSaveDettaglio_"]')?.click();

    // Increment counter only if not in a repeat phase
    if (repeatCount <= 0) {
      counter++; // Increment normally if no repeats are pending
    }
  }
  console.log("done");
};

// Example usage:
cartonIncrement(1, [[2, 3]]);
// This will start from 1, then when it reaches 2, it will repeat 2 three times, then continue to 3, 4, etc.

// old code
// const cartonIncriment = (startFrom = undefined) => {
//   const inputs = Array.from(
//     document.querySelectorAll('input[id^="txtcounter_"]')
//   ).reverse();
//   inputs.pop();
//   startFrom = startFrom ? startFrom : Number(inputs[0].value);
//   for (const input of inputs) {
//     const parent = input?.parentElement?.parentElement;
//     input.onchange = null;
//     input.value = startFrom;
//     parent.querySelector('[id^="bSaveDettaglio_"]').click();
//     startFrom++;
//   }
//   console.log("done");
// };
// cartonIncriment();
