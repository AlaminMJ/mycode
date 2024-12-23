const update = async (data, skipBoxNumbers = []) => {
  const formatNumber = (value) => {
    const num = parseFloat(value);
    return isNaN(num) ? "0,00" : num.toFixed(2).replace(".", ",");
  };

  const inputs = Array.from(
    document.querySelectorAll('input[id^="txtcounter_"]')
  ).reverse();
  inputs.pop(); // Skip last element

  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  for (let input of inputs) {
    input.onchange = null;

    // Skip processing if the carton number is in the skip list
    if (skipBoxNumbers.includes(input.value)) {
      console.log(`Skipping BoxNum: ${input.value}`);
      continue;
    }

    const itemData = data.find(
      (item) => item.BoxNum == input.value && item.isEntry === undefined
    );
    if (!itemData) continue;

    itemData.isEntry = true;
    const parent = input.parentElement?.parentElement;
    const nextSibling = parent?.nextElementSibling;
    if (!parent || !nextSibling) continue;
    // Customer
    if (itemData.SpecialClient) {
      const SpecialClient = parent.querySelector(
        'select[id^="cbClientSpecial_"]'
      );
      SpecialClient.value = itemData.SpecialClient;
      SpecialClient.dispatchEvent(new Event("change", { bubbles: true }));
      await delay(2000);
    }
    // Special Client PO
    if (itemData.SpecialClientPO) {
      const SpecialClientPO = parent.querySelector(
        'select[id^="cbPoClientSpecial_"]'
      );
      SpecialClientPO.value = itemData.SpecialClientPO;
      SpecialClientPO.dispatchEvent(new Event("change", { bubbles: true }));
      // await delay(1000);
    }
    // color
    if (itemData.Color) {
      const colorSelect = nextSibling.querySelector('select[id^="cbColor_"]');
      if (colorSelect) {
        colorSelect.value = itemData.Color;
        colorSelect.dispatchEvent(new Event("change", { bubbles: true }));
      }
    }

    // const sizes = [2, 3, 4, 5, 6, 8, 10, 12, 14, 16];
    const sizes = ["XS", "S", "M", "L", "XL", "XXL", "XXXL", "XXXXL"];
    for (const [idx, size] of sizes.entries()) {
      if (itemData[size]) {
        let sizeElement = nextSibling.querySelector(
          `input[id^="txtorder_size0${2 + idx}`
        );
        if (idx === 10) {
          sizeElement = nextSibling.querySelector(
            `input[id^="txtorder_size${2 + idx}`
          );
        }
        if (sizeElement) {
          sizeElement.value = itemData[size];
          sizeElement.dispatchEvent(new Event("change", { bubbles: true }));
        }
      }
    }

    if (itemData.NWeight) {
      const netInput = nextSibling.querySelector('input[id^="txtnet_"]');
      if (netInput) {
        netInput.value = formatNumber(itemData.NWeight);
        netInput.dispatchEvent(new Event("keyup", { bubbles: true }));
      }
    }

    if (itemData.GWeight) {
      const grossInput = nextSibling.querySelector('input[id^="txtgross_"]');
      if (grossInput) {
        grossInput.value = formatNumber(itemData.GWeight);
        grossInput.dispatchEvent(new Event("keyup", { bubbles: true }));
      }
    }

    if (itemData.CBoxNum) {
      input.value = itemData.CBoxNum;
      input.dispatchEvent(new Event("keyup", { bubbles: true }));
    }

    await delay(1000);
    const saveButton = parent.querySelector('[id^="bSaveDettaglio_"]');
    if (saveButton) saveButton.click();
  }
};
const data = [
  {
    BoxNum: "40",
    CBoxNum: "1",
  },
  {
    BoxNum: "40",
    CBoxNum: "2",
  },
  {
    BoxNum: "40",
    CBoxNum: "3",
  },
  {
    BoxNum: "40",
    CBoxNum: "4",
  },
  {
    BoxNum: "40",
    CBoxNum: "5",
  },
  {
    BoxNum: "40",
    CBoxNum: "6",
  },
  {
    BoxNum: "40",
    CBoxNum: "7",
  },
  {
    BoxNum: "40",
    CBoxNum: "8",
  },
  {
    BoxNum: "40",
    CBoxNum: "9",
  },
  {
    BoxNum: "40",
    CBoxNum: "10",
  },
  {
    BoxNum: "40",
    CBoxNum: "11",
  },
  {
    BoxNum: "40",
    CBoxNum: "12",
  },
  {
    BoxNum: "40",
    CBoxNum: "13",
  },
  {
    BoxNum: "40",
    CBoxNum: "14",
  },
  {
    BoxNum: "40",
    CBoxNum: "15",
  },
  {
    BoxNum: "40",
    CBoxNum: "16",
  },
  {
    BoxNum: "40",
    CBoxNum: "17",
  },
  {
    BoxNum: "40",
    CBoxNum: "18",
  },
  {
    BoxNum: "40",
    CBoxNum: "19",
  },
  {
    BoxNum: "40",
    CBoxNum: "20",
  },
  {
    BoxNum: "40",
    CBoxNum: "21",
  },
  {
    BoxNum: "40",
    CBoxNum: "22",
  },
  {
    BoxNum: "40",
    CBoxNum: "23",
  },
  {
    BoxNum: "40",
    CBoxNum: "24",
  },
  {
    BoxNum: "40",
    CBoxNum: "25",
  },
  {
    BoxNum: "40",
    CBoxNum: "26",
  },
  {
    BoxNum: "40",
    CBoxNum: "27",
  },
  {
    BoxNum: "40",
    CBoxNum: "28",
  },
  {
    BoxNum: "40",
    CBoxNum: "29",
  },
  {
    BoxNum: "40",
    CBoxNum: "30",
  },
  {
    BoxNum: "40",
    CBoxNum: "31",
  },
  {
    BoxNum: "40",
    CBoxNum: "32",
  },
  {
    BoxNum: "40",
    CBoxNum: "33",
  },
  {
    BoxNum: "40",
    CBoxNum: "34",
  },
  {
    BoxNum: "40",
    CBoxNum: "35",
  },
  {
    BoxNum: "40",
    CBoxNum: "36",
  },
  {
    BoxNum: "40",
    CBoxNum: "37",
  },
  {
    BoxNum: "40",
    CBoxNum: "38",
  },
  {
    BoxNum: "40",
    CBoxNum: "39",
  },
  {
    BoxNum: "40",
    CBoxNum: "40",
  },
  {
    BoxNum: "40",
    CBoxNum: "41",
  },
  {
    BoxNum: "40",
    CBoxNum: "42",
  },
];
// Example usage
// const skipBoxNumbers = [
//   "1",
//   "34",
//   "35",
//   "177",
//   "178",
//   "179",
//   "180",
//   "34",
//   "35",
//   "34",
//   "35",
// ]; // Add the carton numbers you want to skip
update(data).finally(() => console.log("Finished"));
