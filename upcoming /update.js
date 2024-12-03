const update = async (data) => {
  const formatNumber = (value) => {
    const num = parseFloat(value);
    return isNaN(num) ? "0,00" : num.toFixed(2).replace(".", ",");
  };

  // Cache commonly used selectors and configurations
  const inputs = Array.from(
    document.querySelectorAll('input[id^="txtcounter_"]')
  ).reverse();
  inputs.pop();
  // Skip last element

  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  // Iterate through each input and update based on data
  for (let input of inputs) {
    input.onchange = null;
    const itemData = data.find(
      (item) => item.BoxNum == input.value && item.isEntry === undefined
    );
    if (!itemData) continue;
    itemData.isEntry = true;
    const parent = input.parentElement?.parentElement;
    const nextSibling = parent?.nextElementSibling;
    if (!parent || !nextSibling) continue;
    // Directly update color
    if (itemData.Color) {
      const colorSelect = nextSibling.querySelector('select[id^="cbColor_"]');
      if (colorSelect) {
        colorSelect.value = itemData.Color;
        colorSelect.dispatchEvent(new Event("change", { bubbles: true }));
      }
    }

    // Set size inputs
    // const sizes = ["XS", "S", "M", "L", "XL", "XXL", "XXXL", "XXXXL"];
    const sizes = [2, 3, 4, 5, 6, 8, 10, 12, 14, 16];
    for (const [idx, size] of sizes.entries()) {
      if (itemData[size]) {
        let sizeElement = nextSibling.querySelector(
          `input[id^="txtorder_size0${1 + idx}`
        );
        if (idx === 10) {
          sizeElement = nextSibling.querySelector(
            `input[id^="txtorder_size${1 + idx}`
          );
        }
        if (sizeElement) {
          sizeElement.value = itemData[size];
          sizeElement.dispatchEvent(new Event("change", { bubbles: true }));
        }
      }
    }

    // Directly update Net Weight
    if (itemData.NWeight) {
      const netInput = nextSibling.querySelector('input[id^="txtnet_"]');
      if (netInput) {
        netInput.value = formatNumber(itemData.NWeight);
        netInput.dispatchEvent(new Event("keyup", { bubbles: true }));
      }
    }

    // Directly update Gross Weight
    if (itemData.GWeight) {
      const grossInput = nextSibling.querySelector('input[id^="txtgross_"]');
      if (grossInput) {
        grossInput.value = formatNumber(itemData.GWeight);
        grossInput.dispatchEvent(new Event("keyup", { bubbles: true }));
      }
    }

    // Directly update Counter Box Number
    if (itemData.CBoxNum) {
      input.value = itemData.CBoxNum;
      input.dispatchEvent(new Event("keyup", { bubbles: true }));
    }

    // Wait 1 second before clicking save
    await delay(1000);
    const saveButton = parent.querySelector('[id^="bSaveDettaglio_"]');
    if (saveButton) saveButton.click();
  }
};

const data = [
  {
    2: "5",
    3: "5",
    4: "5",
    5: "5",
    6: "5",
    8: "15",
    10: "20",
    12: "",
    14: "",
    16: "",
    BoxNum: "1",
    Color: "101",
    TotalRow: "60",
    NWeight: "7.28",
    GWeight: "11.49",
  },
  {
    2: "",
    3: "",
    4: "",
    5: "",
    6: "",
    8: "",
    10: "",
    12: "20",
    14: "20",
    16: "20",
    BoxNum: "2",
    Color: "101",
    TotalRow: "60",
    NWeight: "10.48",
    GWeight: "14.69",
  },
  {
    2: "8",
    3: "9",
    4: "9",
    5: "8",
    6: "10",
    8: "",
    10: "",
    12: "",
    14: "",
    16: "",
    BoxNum: "3",
    Color: "101",
    TotalRow: "44",
    NWeight: "4.47",
    GWeight: "8.06",
  },
  {
    2: "",
    3: "",
    4: "",
    5: "",
    6: "",
    8: "3",
    10: "10",
    12: "14",
    14: "11",
    16: "6",
    BoxNum: "4",
    Color: "101",
    TotalRow: "44",
    NWeight: "7.08",
    GWeight: "10.67",
  },
  {
    2: "13",
    3: "11",
    4: "15",
    5: "15",
    6: "15",
    8: "",
    10: "",
    12: "",
    14: "",
    16: "",
    BoxNum: "5",
    Color: "247",
    TotalRow: "69",
    NWeight: "7.03",
    GWeight: "11.59",
  },
  {
    2: "",
    3: "",
    4: "",
    5: "",
    6: "",
    8: "",
    10: "21",
    12: "21",
    14: "11",
    16: "",
    BoxNum: "6",
    Color: "247",
    TotalRow: "53",
    NWeight: "8.19",
    GWeight: "12.13",
  },
  {
    2: "",
    3: "",
    4: "",
    5: "",
    6: "",
    8: "18",
    10: "",
    12: "",
    14: "10",
    16: "16",
    BoxNum: "7",
    Color: "247",
    TotalRow: "44",
    NWeight: "7.14",
    GWeight: "10.73",
  },
];
update(data);
