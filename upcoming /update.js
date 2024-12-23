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
    BoxNum: "1",
    GWeight: "11.18",
  },
  {
    BoxNum: "2",
    GWeight: "12.6",
  },
  {
    BoxNum: "3",
    GWeight: "12.93",
  },
  {
    BoxNum: "4",
    GWeight: "12.93",
  },
  {
    BoxNum: "5",
    GWeight: "12.93",
  },
  {
    BoxNum: "6",
    GWeight: "12.93",
  },
  {
    BoxNum: "7",
    GWeight: "13.38",
  },
  {
    BoxNum: "8",
    GWeight: "13.38",
  },
  {
    BoxNum: "9",
    GWeight: "13.38",
  },
  {
    BoxNum: "10",
    GWeight: "13.38",
  },
  {
    BoxNum: "11",
    GWeight: "13.38",
  },
  {
    BoxNum: "12",
    GWeight: "14.17",
  },
  {
    BoxNum: "13",
    GWeight: "14.17",
  },
  {
    BoxNum: "14",
    GWeight: "14.17",
  },
  {
    BoxNum: "15",
    GWeight: "12.95",
  },
  {
    BoxNum: "16",
    GWeight: "12.95",
  },
  {
    BoxNum: "17",
    GWeight: "13.9",
  },
  {
    BoxNum: "18",
    GWeight: "11.75",
  },
  {
    BoxNum: "19",
    GWeight: "15.74",
  },
  {
    BoxNum: "20",
    GWeight: "12.9",
  },
  {
    BoxNum: "21",
    GWeight: "12.88",
  },
  {
    BoxNum: "22",
    GWeight: "12.64",
  },
  {
    BoxNum: "23",
    GWeight: "11.69",
  },
  {
    BoxNum: "24",
    GWeight: "13.01",
  },
  {
    BoxNum: "25",
    GWeight: "13.96",
  },
  {
    BoxNum: "26",
    GWeight: "12.47",
  },
  {
    BoxNum: "27",
    GWeight: "13.16",
  },
  {
    BoxNum: "28",
    GWeight: "12.93",
  },
  {
    BoxNum: "29",
    GWeight: "12.93",
  },
  {
    BoxNum: "30",
    GWeight: "13.38",
  },
  {
    BoxNum: "31",
    GWeight: "13.38",
  },
  {
    BoxNum: "32",
    GWeight: "14.17",
  },
  {
    BoxNum: "33",
    GWeight: "14.17",
  },
  {
    BoxNum: "34",
    GWeight: "12.95",
  },
  {
    BoxNum: "35",
    GWeight: "15.29",
  },
  {
    BoxNum: "36",
    GWeight: "12.6",
  },
  {
    BoxNum: "37",
    GWeight: "12.93",
  },
  {
    BoxNum: "38",
    GWeight: "12.93",
  },
  {
    BoxNum: "39",
    GWeight: "12.93",
  },
  {
    BoxNum: "40",
    GWeight: "13.38",
  },
  {
    BoxNum: "41",
    GWeight: "13.38",
  },
  {
    BoxNum: "42",
    GWeight: "13.38",
  },
  {
    BoxNum: "43",
    GWeight: "13.38",
  },
  {
    BoxNum: "44",
    GWeight: "14.17",
  },
  {
    BoxNum: "45",
    GWeight: "14.17",
  },
  {
    BoxNum: "46",
    GWeight: "14.17",
  },
  {
    BoxNum: "47",
    GWeight: "12.95",
  },
  {
    BoxNum: "48",
    GWeight: "12.95",
  },
  {
    BoxNum: "49",
    GWeight: "15",
  },
  {
    BoxNum: "50",
    GWeight: "12.93",
  },
  {
    BoxNum: "51",
    GWeight: "13.38",
  },
  {
    BoxNum: "52",
    GWeight: "13.38",
  },
  {
    BoxNum: "53",
    GWeight: "14.17",
  },
  {
    BoxNum: "54",
    GWeight: "12.95",
  },
  {
    BoxNum: "55",
    GWeight: "11.06",
  },
  {
    BoxNum: "56",
    GWeight: "11.87",
  },
  {
    BoxNum: "57",
    GWeight: "11.57",
  },
  {
    BoxNum: "58",
    GWeight: "12.6",
  },
  {
    BoxNum: "59",
    GWeight: "12.93",
  },
  {
    BoxNum: "60",
    GWeight: "12.93",
  },
  {
    BoxNum: "61",
    GWeight: "12.93",
  },
  {
    BoxNum: "62",
    GWeight: "13.38",
  },
  {
    BoxNum: "63",
    GWeight: "13.38",
  },
  {
    BoxNum: "64",
    GWeight: "13.38",
  },
  {
    BoxNum: "65",
    GWeight: "14.17",
  },
  {
    BoxNum: "66",
    GWeight: "14.17",
  },
  {
    BoxNum: "67",
    GWeight: "12.95",
  },
  {
    BoxNum: "68",
    GWeight: "12.97",
  },
  {
    BoxNum: "69",
    GWeight: "14.76",
  },
  {
    BoxNum: "70",
    GWeight: "14.36",
  },
  {
    BoxNum: "71",
    GWeight: "12.93",
  },
  {
    BoxNum: "72",
    GWeight: "13.38",
  },
  {
    BoxNum: "73",
    GWeight: "14.17",
  },
  {
    BoxNum: "74",
    GWeight: "10.01",
  },
  {
    BoxNum: "75",
    GWeight: "13.47",
  },
  {
    BoxNum: "76",
    GWeight: "12.2",
  },
  {
    BoxNum: "77",
    GWeight: "12.6",
  },
  {
    BoxNum: "78",
    GWeight: "12.93",
  },
  {
    BoxNum: "79",
    GWeight: "12.93",
  },
  {
    BoxNum: "80",
    GWeight: "13.38",
  },
  {
    BoxNum: "81",
    GWeight: "13.38",
  },
  {
    BoxNum: "82",
    GWeight: "14.17",
  },
  {
    BoxNum: "83",
    GWeight: "13.16",
  },
  {
    BoxNum: "84",
    GWeight: "9.2",
  },
  {
    BoxNum: "85",
    GWeight: "10.13",
  },
  {
    BoxNum: "86",
    GWeight: "12.04",
  },
  {
    BoxNum: "87",
    GWeight: "13.38",
  },
  {
    BoxNum: "88",
    GWeight: "13.82",
  },
  {
    BoxNum: "89",
    GWeight: "12.96",
  },
  {
    BoxNum: "90",
    GWeight: "13.29",
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
