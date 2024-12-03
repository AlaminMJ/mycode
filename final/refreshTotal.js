// Collect all input elements with an 'onchange' attribute
const onchangeFunctions = Array.from(
  document.querySelectorAll("input[onchange]")
).map((input) => ({
  id: input.id,
  onchangeFunction: input.getAttribute("onchange"),
}));

// Log the collected functions for verification
console.log(onchangeFunctions);

// Call each 'onchange' function
onchangeFunctions.forEach((item) => {
  console.log(`Calling function: ${item.onchangeFunction}`);

  // Use eval to execute the function
  eval(item.onchangeFunction);
});
