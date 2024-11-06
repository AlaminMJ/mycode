const put = (data) => {
  const formatNumber = (value) => {
    const num = parseFloat(value);
    if (isNaN(num)) {
      console.error("Invalid input: Please provide a valid number.");
      return "0,00";
    }
    return num.toFixed(2).replace(".", ",");
  };

  const inputs = Array.from(
    document.querySelectorAll('input[id^="txtcounter_"]')
  ).reverse();
  inputs.pop();

  for (let input of inputs) {
    input.onchange = null;
    const d = data.find((item) => item.BoxNum === input.value);
    if (d) {
      const parent = input?.parentElement?.parentElement;
      const nextSibling = parent?.nextElementSibling;

      //   Color
      if (d.Color) {
        nextSibling.querySelector('select[id^="cbColor_"]').value = d.Color;
      }
      // Set size inputs
      const sizes = ["S", "M", "L", "XL", "XXL", "XXXL", "XXXXL"];
      for (const [idx, size] of sizes.entries()) {
        if (d[size]) {
          const sizeElement = nextSibling.querySelector(
            `input[id^="txtorder_size0${3 + idx}`
          );
          if (sizeElement) {
            sizeElement.value = d[size];
            sizeElement.dispatchEvent(new Event("change", { bubbles: true }));
          }
        }
      }
      // Net Weight
      if (d.NWeight) {
        nextSibling.querySelector('input[id^="txtnet_"]').value = formatNumber(
          d.NWeight
        );
        nextSibling
          .querySelector('input[id^="txtnet_"]')
          .dispatchEvent(new Event("keyup", { bubbles: true }));
      }
      // Gross Weight
      if (d.GWeight) {
        nextSibling.querySelector('input[id^="txtgross_"]').value =
          formatNumber(d.GWeight);
        nextSibling
          .querySelector('input[id^="txtgross_"]')
          .dispatchEvent(new Event("keyup", { bubbles: true }));
      }
      if (d.CBoxNum) {
        parent.querySelector('input[id^="txtcounter_"]').value = d.CBoxNum;
        parent
          .querySelector('input[id^="txtcounter_"]')
          .dispatchEvent(new Event("keyup", { bubbles: true }));
      }
      parent.querySelector('[id^="bSaveDettaglio_"]').click();
    }
  }
};

const data = [];

put(data);
