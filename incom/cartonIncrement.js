const cartonIncriment = () => {
  const inputs = Array.from(
    document.querySelectorAll('input[id^="txtcounter_"]')
  ).reverse();
  inputs.pop();
  let StartFrom = Number(inputs[0].value);
  console.log(StartFrom);
  for (const input of inputs) {
    const parent = input?.parentElement?.parentElement;
    input.value = StartFrom;
    parent.querySelector('[id^="bSaveDettaglio_"]').click();
    StartFrom++;
  }
  console.log("done");
};
cartonIncriment();
