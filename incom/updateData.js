async function updateDataByCtn(mydata) {
  function selectOption(
    selectElement,
    matchValue,
    options = {
      matchBy: "value",
      isCreate: false,
      data: {},
    }
  ) {
    const { matchBy, isCreate, data: logData } = options;

    // Find the option by value or text
    const option = Array.from(selectElement.options).find((opt) => {
      if (matchBy === "value") {
        return opt.value?.trim() == matchValue?.trim();
      }
      return opt.text?.trim() == matchValue?.trim();
    });

    if (option) {
      // Select the found option

      option.selected = true;
      selectElement.dispatchEvent(new Event("change", { bubbles: true }));
    } else if (isCreate) {
      // Create and select a new option if `isCreate` is true
      console.log(
        `${matchValue} is not found in box ${logData?.BoxNum}, creating a new option.`
      );

      const newOption = document.createElement("option");
      newOption.value = matchValue;
      newOption.text = matchValue;

      selectElement.add(newOption);
      newOption.selected = true;
      selectElement.dispatchEvent(new Event("change", { bubbles: true }));
    } else {
      // Log message if the option is not found and `isCreate` is false
      console.log(
        `${matchValue} is not found in box ${logData?.BoxNum}. No option created.`
      );
    }
  }
  function formatNumber(value) {
    // 1. Ensure the input is a number
    const num = parseFloat(value);
    // 2. Check if the conversion was successful
    if (isNaN(num)) {
      throw new Error("Invalid input: Please provide a valid number.");
    }
    // 3. Round to one decimal place and replace the dot with a comma
    return num.toFixed(2).replace(".", ",");
  }

  // Get all input elements with IDs starting with 'txtctn_'
  const inputs = Array.from(
    document.querySelectorAll('input[id^="txtcounter_"]')
  ).reverse();
  inputs.pop();
  for (let input of inputs) {
    input.onchange = null;
    const d = mydata.find((item) => item.BoxNum === input.value);
    if (d) {
      const parent = input?.parentElement?.parentElement;
      const nextSibling = parent?.nextElementSibling;

      // Select Order
      if (d.PoNum) {
        selectOption(parent.querySelector('select[id^="cbOrdini_"]'), d.PoNum, {
          matchBy: "text",
          data: d,
        });
        await new Promise((resolve) => setTimeout(resolve, 2000));
      }
      // Select Style
      if (d.Style) {
        selectOption(parent.querySelector('select[id^="cbStyle_"]'), d.Style, {
          matchBy: "value",
          data: d,
        });
        await new Promise((resolve) => setTimeout(resolve, 2000));
      }
      // Special Client
      if (d.SpecialClient) {
        selectOption(
          parent.querySelector('select[id^="cbClientSpecial_"]'),
          d.SpecialClient,
          { data: d, matchBy: "value" }
        );
        await new Promise((resolve) => setTimeout(resolve, 1000));
      }
      // Special Client PO
      if (d.SpecialClientPO) {
        selectOption(
          parent.querySelector('select[id^="cbPoClientSpecial_"]'),
          d.SpecialClientPO,
          { data: d, matchBy: "value" }
        );
        await new Promise((resolve) => setTimeout(resolve, 500));
      }
      //   Color
      if (d.Color) {
        selectOption(
          nextSibling.querySelector('select[id^="cbColor_"]'),
          d.Color,
          { data: d, matchBy: "value", isCreate: true }
        );
        await new Promise((resolve) => setTimeout(resolve, 1000));
      }
      //s size
      if (d.S) {
        nextSibling.querySelector('input[id^="txtorder_size03_"]').value = d.S;
        nextSibling
          .querySelector('input[id^="txtorder_size03_"]')
          .dispatchEvent(new Event("change", { bubbles: true }));
      }
      //m size
      if (d.M) {
        nextSibling.querySelector('input[id^="txtorder_size04_"]').value = d.M;
        nextSibling
          .querySelector('input[id^="txtorder_size04_"]')
          .dispatchEvent(new Event("change", { bubbles: true }));
      }
      //l size
      if (d.L) {
        nextSibling.querySelector('input[id^="txtorder_size05_"]').value = d.L;
        nextSibling
          .querySelector('input[id^="txtorder_size05_"]')
          .dispatchEvent(new Event("change", { bubbles: true }));
      }
      //xl size
      if (d.XL) {
        nextSibling.querySelector('input[id^="txtorder_size06_"]').value = d.XL;
        nextSibling
          .querySelector('input[id^="txtorder_size06_"]')
          .dispatchEvent(new Event("change", { bubbles: true }));
      }
      //xxl size
      if (d.XXL) {
        nextSibling.querySelector('input[id^="txtorder_size07_"]').value =
          d.XXL;
        nextSibling
          .querySelector('input[id^="txtorder_size07_"]')
          .dispatchEvent(new Event("change", { bubbles: true }));
      }
      //3xl size
      if (d.XXXL) {
        nextSibling.querySelector('input[id^="txtorder_size08_"]').value =
          d.XXXL;
        nextSibling
          .querySelector('input[id^="txtorder_size08_"]')
          .dispatchEvent(new Event("change", { bubbles: true }));
      }
      //4xl size
      if (d.XXXXL) {
        nextSibling.querySelector('input[id^="txtorder_size09_"]').value =
          d.XXXXL;
        nextSibling
          .querySelector('input[id^="txtorder_size09_"]')
          .dispatchEvent(new Event("change", { bubbles: true }));
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
      // Box Measure
      if (d.BoxMeasure) {
        selectOption(
          nextSibling.querySelector('select[id^="cbBoxMeasure_"]'),
          d.BoxMeasure,
          { data: d, matchBy: "text" }
        );
        await new Promise((resolve) => setTimeout(resolve, 1000));
      }
      // carton no
      if (d.CBoxNum) {
        input.onchange = null;
        input.value = d.CBoxNum;
        // .dispatchEvent(new Event("change", { bubbles: true }));
        input.onchange = null;
      }
      //Save
      //   parent.querySelector('[id^="bSaveDettaglio_"]').click();
      // await new Promise((resolve) => setTimeout(resolve, 2000));
    }
  }
}
