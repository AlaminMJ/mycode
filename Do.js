const dataEntry = async (data) => {
  // Asynchronous delay function to avoid blocking the main thread
  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const selectOption = (selector, findValue, matchBy = "value") => {
    const option = Array.from(selector.options).find((option) => {
      if (matchBy === "value") {
        return option.value == findValue;
      } else {
        return option.text == findValue;
      }
    });
    if (option) {
      option.selected = true;
      selector.dispatchEvent(new Event("change", { bubbles: true }));
      console.log(selector.value);
      return true;
    } else {
      console.log(`Value ${findValue} is Not Found`);
      return false;
    }
  };

  const formatNumber = (value) => {
    const num = parseFloat(value);
    if (isNaN(num)) {
      console.error("Invalid input: Please provide a valid number.");
      return "0,00";
    }
    return num.toFixed(2).replace(".", ",");
  };

  for (const d of data) {
    const elements = {
      txtCounter: document.getElementById("txtcounter_0"),
      cbOrdini: document.getElementById("cbOrdini_0"),
      cbStyle: document.getElementById("cbStyle_0"),
      cbClientSpecial: document.getElementById("cbClientSpecial_0"),
      cbPoClientSpecial: document.getElementById("cbPoClientSpecial_0"),
      cbColor: document.getElementById("cbColor_0"),
      txtNet: document.getElementById("txtnet_0"),
      txtGross: document.getElementById("txtgross_0"),
      cbBoxMeasure: document.getElementById("cbBoxMeasure_0"),
      btnSave: document.getElementById("bSaveDettaglio_0"),
    };
    elements.txtCounter.onchange = null;

    await delay(3000);
      // Counter and Box Measure
      if (d.BoxNum) {
        elements.txtCounter.onchange = null;
        elements.txtCounter.value = d.BoxNum;
        elements.txtCounter.dispatchEvent(new Event("change"));
      }
    if (d.PoNum) {
      const selectedPo = selectOption(elements.cbOrdini, d.PoNum);
      await delay(3000);
      if (d.Style && selectedPo) {
        const selectedStyle = selectOption(elements.cbStyle, d.Style);
        await delay(2000);
        if (d.Color && selectedStyle) {
          const selectedColor = selectOption(elements.cbColor, d.Color);
          await delay(1000);
          if (!selectedColor) continue;
        } else continue;
      } else continue;
    } else {
      console.log(`${d.PoNum} is missing in ${d.BoxNum}`);
      continue;
    }

    // Set size inputs
    const sizes = ["S", "M", "L", "XL", "XXL", "XXXL", "XXXXL"];
    for (const [idx, size] of sizes.entries()) {
      if (d[size]) {
        const sizeElement = document.getElementById(
          `txtorder_size0${3 + idx}_0`
        );
        if (sizeElement) {
          sizeElement.value = d[size];
          sizeElement.dispatchEvent(new Event("change", { bubbles: true }));
          await delay(500);
        }
      }
    }

    // Net Weight
    if (d.NWeight && elements.txtNet) {
      elements.txtNet.value = formatNumber(d.NWeight);
      elements.txtNet.dispatchEvent(new Event("change", { bubbles: true }));
    }

    // Gross Weight
    if (d.GWeight && elements.txtGross) {
      elements.txtGross.value = formatNumber(d.GWeight);
      elements.txtGross.dispatchEvent(new Event("change", { bubbles: true }));
    }

  
    if (d.BoxMeasure) selectOption(elements.cbBoxMeasure, d.BoxMeasure, "text");

    // Check required values and click save if valid
    if (
      elements.cbOrdini.value &&
      elements.cbStyle.value &&
      elements.cbColor.value
    ) {
      console.dir(elements.txtCounter);
      elements.btnSave.click();
    } else {
      console.log(`Missing required fields on Carton ${d.BoxNum}`);
    }
  }
  console.log("Finished");
};

// Sample data to be processed
const data = [
  {
    BoxNum: "70",
    Style: "US41197062_01_0000147_6_R",
    Color: "100",
    PoNum: "O00121382",
    SpecialClientPoNum: "-",
    SpecialClient: "Incom",
    S: "1",
    M: "2",
    L: "3",
    XL: "4",
    XXL: "5",
    XXXL: "6",
    XXXXL: "7",
    BoxMeasure: "60X39,5X39",
    GWeight: "14.9",
    NWeight: "11.9",
  },
  {
    BoxNum: "75",
    Style: "US41197062_01_0000147_6_R",
    Color: "198",
    PoNum: "O00121382",
    SpecialClientPoNum: "-",
    SpecialClient: "Incom",
    S: "11",
    M: "22",
    L: "33",
    XL: "44",
    XXL: "55",
    XXXL: "66",
    XXXXL: "77",
    BoxMeasure: "60x40x20",
    GWeight: "104.9",
    NWeight: "101.9",
  },
  {
    BoxNum: "78",
    Style: "US41197062_01_0000147_6_R",
    Color: "199",
    PoNum: "O00121382",
    SpecialClientPoNum: "-",
    SpecialClient: "Incom",
    S: "11",
    M: "22",
    L: "33",
    XL: "44",
    XXL: "55",
    XXXL: "66",
    XXXXL: "77",
    BoxMeasure: "60x40x20",
    GWeight: "104.9",
    NWeight: "101.9",
  },
  {
    BoxNum: "85",
    Style: "US41197062_01_0000147_6_R",
    Color: "205",
    PoNum: "O00121382",
    SpecialClientPoNum: "-",
    SpecialClient: "Incom",
    S: "11",
    M: "22",
    L: "33",
    XL: "44",
    XXL: "55",
    XXXL: "66",
    XXXXL: "77",
    BoxMeasure: "60x40x20",
    GWeight: "104.9",
    NWeight: "101.9",
  },
];

dataEntry(data);
