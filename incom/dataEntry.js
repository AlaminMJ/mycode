const dataEntry = async (daata) => {
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

  try {
    document.getElementById("txtcounter_0").onchange = null;
    for (let d of daata) {
      // Select Order
      if (d.PoNum) {
        selectOption(document.getElementById("cbOrdini_0"), d.PoNum, {
          data: d,
        });
        await new Promise((resolve) => setTimeout(resolve, 2000));
      }
      // Select Style
      if (d.Style) {
        selectOption(document.getElementById("cbStyle_0"), d.Style, {
          data: d,
          matchBy: "value",
        });
        await new Promise((resolve) => setTimeout(resolve, 2000));
      }
      // Special Client
      if (d.SpecialClient) {
        selectOption(
          document.getElementById("cbClientSpecial_0"),
          d.SpecialClient,
          { data: d }
        );
        await new Promise((resolve) => setTimeout(resolve, 1000));
      }
      // Special Client PO
      if (d.SpecialClientPO) {
        selectOption(
          document.getElementById("cbPoClientSpecial_0"),
          d.SpecialClientPO,
          { data: d }
        );
        await new Promise((resolve) => setTimeout(resolve, 500));
      }
      //Color
      if (d.Color) {
        selectOption(document.getElementById("cbColor_0"), d.Color, {
          data: d,
          isCreate: true,
        });
        await new Promise((resolve) => setTimeout(resolve, 1000));
      }
      //s size
      if (d.S) {
        document.getElementById("txtorder_size03_0").value = d.S;
        document
          .getElementById("txtorder_size03_0")
          .dispatchEvent(new Event("change", { bubbles: true }));
      }
      //m size
      if (d.M) {
        document.getElementById("txtorder_size04_0").value = d.M;
        document
          .getElementById("txtorder_size04_0")
          .dispatchEvent(new Event("change", { bubbles: true }));
      }
      //l size
      if (d.L) {
        document.getElementById("txtorder_size05_0").value = d.L;
        document
          .getElementById("txtorder_size05_0")
          .dispatchEvent(new Event("change", { bubbles: true }));
      }
      //xl size
      if (d.XL) {
        document.getElementById("txtorder_size06_0").value = d.XL;
        document
          .getElementById("txtorder_size06_0")
          .dispatchEvent(new Event("change", { bubbles: true }));
      }
      //xxl size
      if (d.XXL) {
        document.getElementById("txtorder_size07_0").value = d.XXL;
        document
          .getElementById("txtorder_size07_0")
          .dispatchEvent(new Event("change", { bubbles: true }));
      }
      //3xl size
      if (d.XXXL) {
        document.getElementById("txtorder_size08_0").value = d.XXXL;
        document
          .getElementById("txtorder_size08_0")
          .dispatchEvent(new Event("change", { bubbles: true }));
      }
      //4xl size
      if (d.XXXXL) {
        document.getElementById("txtorder_size09_0").value = d.XXXXL;
        document
          .getElementById("txtorder_size09_0")
          .dispatchEvent(new Event("change", { bubbles: true }));
      }
      // Net Weight
      if (d.NWeight) {
        document.getElementById("txtnet_0").value = formatNumber(d.NWeight);
        document
          .getElementById("txtnet_0")
          .dispatchEvent(new Event("keyup", { bubbles: true }));
      }
      // Gross Weight
      if (d.GWeight) {
        document.getElementById("txtgross_0").value = formatNumber(d.GWeight);
        document
          .getElementById("txtgross_0")
          .dispatchEvent(new Event("keyup", { bubbles: true }));
      }
      // Box Measure
      if (d.BoxMeasure) {
        selectOption(document.getElementById("cbBoxMeasure_0"), d.BoxMeasure, {
          findBy: "text",
          data: d,
        });
        await new Promise((resolve) => setTimeout(resolve, 500));
      }
      // carton no
      if (d.BoxNum) {
        document.getElementById("txtcounter_0").onchange = null;
        document.getElementById("txtcounter_0").value = d.BoxNum;
        document.getElementById("txtcounter_0");
        // .dispatchEvent(new Event("change", { bubbles: true }));
        document.getElementById("txtcounter_0").onchange = null;
      }
      // Save
      document.getElementById("bSaveDettaglio_0").click();
      await new Promise((resolve) => setTimeout(resolve, 2500));
    }
  } catch (error) {
    console.log(error);
  }
};
