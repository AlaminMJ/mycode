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
      await await delay(1000);
    }
    // Set size inputs
    const sizes = ["XS", "S", "M", "L", "XL", "XXL", "XXXL", "XXXXL"];
    // const sizes = [2, 3, 4, 5, 6, 8, 10, 12, 14, 16];
    for (const [idx, size] of sizes.entries()) {
      if (itemData[size]) {
        let sizeElement;
        if (idx === 9) {
          // Check ctn no is 10 then doen not need to add 0 before it
          sizeElement = nextSibling.querySelector(
            `input[id^="txtorder_size${2 + idx}`
          );
        } else {
          sizeElement = nextSibling.querySelector(
            `input[id^="txtorder_size0${2 + idx}`
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
    BoxNum: "1",
    Style: "US41197011_01_0000174_6_R",
    Color: "100",
    PoNum: "O00124500",
    S: "",
    M: "60",
    L: "",
    XL: "",
    XXL: "",
    XXXL: "",
    XXXXL: "",
    TotalRow: "60",
    NWeight: "9",
    GWeight: "13.5",
  },
  {
    BoxNum: "2",
    Style: "US41197011_01_0000174_6_R",
    Color: "100",
    PoNum: "O00124500",
    S: "",
    M: "",
    L: "60",
    XL: "",
    XXL: "",
    XXXL: "",
    XXXXL: "",
    TotalRow: "60",
    NWeight: "9.48",
    GWeight: "13.98",
  },
  {
    BoxNum: "3",
    Style: "US41197011_01_0000174_6_R",
    Color: "100",
    PoNum: "O00124500",
    S: "",
    M: "",
    L: "",
    XL: "52",
    XXL: "",
    XXXL: "",
    XXXXL: "",
    TotalRow: "52",
    NWeight: "9.26",
    GWeight: "13.56",
  },
  {
    BoxNum: "4",
    Style: "US41197011_01_0000174_6_R",
    Color: "100",
    PoNum: "O00124500",
    S: "",
    M: "",
    L: "",
    XL: "",
    XXL: "51",
    XXXL: "",
    XXXXL: "",
    TotalRow: "51",
    NWeight: "9.38",
    GWeight: "13.66",
  },
  {
    BoxNum: "5",
    Style: "US41197011_01_0000174_6_R",
    Color: "100",
    PoNum: "O00124500",
    S: "",
    M: "",
    L: "",
    XL: "",
    XXL: "",
    XXXL: "24",
    XXXXL: "7",
    TotalRow: "31",
    NWeight: "6.33",
    GWeight: "10.11",
  },
  {
    BoxNum: "6",
    Style: "US41197011_01_0000174_6_R",
    Color: "100",
    PoNum: "O00124500",
    S: "",
    M: "",
    L: "",
    XL: "43",
    XXL: "",
    XXXL: "",
    XXXXL: "",
    TotalRow: "43",
    NWeight: "7.65",
    GWeight: "11.73",
  },
  {
    BoxNum: "7",
    Style: "US41197011_01_0000174_6_R",
    Color: "100",
    PoNum: "O00124500",
    S: "",
    M: "",
    L: "49",
    XL: "",
    XXL: "",
    XXXL: "",
    XXXXL: "",
    TotalRow: "49",
    NWeight: "7.74",
    GWeight: "11.97",
  },
  {
    BoxNum: "8",
    Style: "US41197011_01_0000174_6_R",
    Color: "100",
    PoNum: "O00124500",
    S: "29",
    M: "24",
    L: "",
    XL: "",
    XXL: "",
    XXXL: "",
    XXXXL: "",
    TotalRow: "53",
    NWeight: "7.89",
    GWeight: "12.22",
  },
  {
    BoxNum: "9",
    Style: "US41197011_01_0000174_6_R",
    Color: "137",
    PoNum: "O00124500",
    S: "",
    M: "30",
    L: "",
    XL: "",
    XXL: "20",
    XXXL: "",
    XXXXL: "4",
    TotalRow: "54",
    NWeight: "9.05",
    GWeight: "13.4",
  },
  {
    BoxNum: "10",
    Style: "US41197011_01_0000174_6_R",
    Color: "137",
    PoNum: "O00124500",
    S: "",
    M: "",
    L: "44",
    XL: "",
    XXL: "",
    XXXL: "10",
    XXXXL: "",
    TotalRow: "54",
    NWeight: "8.95",
    GWeight: "13.3",
  },
  {
    BoxNum: "11",
    Style: "US41197011_01_0000174_6_R",
    Color: "137",
    PoNum: "O00124500",
    S: "14",
    M: "",
    L: "",
    XL: "35",
    XXL: "",
    XXXL: "",
    XXXXL: "",
    TotalRow: "49",
    NWeight: "8.3",
    GWeight: "12.53",
  },
  {
    BoxNum: "12",
    Style: "US41197011_01_0000174_6_R",
    Color: "158",
    PoNum: "O00124500",
    S: "18",
    M: "",
    L: "",
    XL: "",
    XXL: "33",
    XXXL: "14",
    XXXXL: "",
    TotalRow: "65",
    NWeight: "11.54",
    GWeight: "16.17",
  },
  {
    BoxNum: "13",
    Style: "US41197011_01_0000174_6_R",
    Color: "158",
    PoNum: "O00124500",
    S: "",
    M: "",
    L: "",
    XL: "51",
    XXL: "",
    XXXL: "",
    XXXXL: "6",
    TotalRow: "57",
    NWeight: "10.39",
    GWeight: "14.82",
  },
  {
    BoxNum: "14",
    Style: "US41197011_01_0000174_6_R",
    Color: "158",
    PoNum: "O00124500",
    S: "",
    M: "44",
    L: "",
    XL: "",
    XXL: "",
    XXXL: "",
    XXXXL: "",
    TotalRow: "44",
    NWeight: "6.6",
    GWeight: "10.7",
  },
  {
    BoxNum: "15",
    Style: "US41197011_01_0000174_6_R",
    Color: "158",
    PoNum: "O00124500",
    S: "",
    M: "",
    L: "55",
    XL: "",
    XXL: "",
    XXXL: "",
    XXXXL: "",
    TotalRow: "55",
    NWeight: "8.69",
    GWeight: "13.07",
  },
  {
    BoxNum: "16",
    Style: "US41197011_01_0000174_6_R",
    Color: "179",
    PoNum: "O00124500",
    S: "",
    M: "60",
    L: "",
    XL: "",
    XXL: "",
    XXXL: "",
    XXXXL: "",
    TotalRow: "60",
    NWeight: "9",
    GWeight: "13.5",
  },
  {
    BoxNum: "17",
    Style: "US41197011_01_0000174_6_R",
    Color: "179",
    PoNum: "O00124500",
    S: "",
    M: "",
    L: "60",
    XL: "",
    XXL: "",
    XXXL: "",
    XXXXL: "",
    TotalRow: "60",
    NWeight: "9.48",
    GWeight: "13.98",
  },
  {
    BoxNum: "18",
    Style: "US41197011_01_0000174_6_R",
    Color: "179",
    PoNum: "O00124500",
    S: "",
    M: "",
    L: "",
    XL: "52",
    XXL: "",
    XXXL: "",
    XXXXL: "",
    TotalRow: "52",
    NWeight: "9.26",
    GWeight: "13.56",
  },
  {
    BoxNum: "19",
    Style: "US41197011_01_0000174_6_R",
    Color: "179",
    PoNum: "O00124500",
    S: "",
    M: "",
    L: "",
    XL: "",
    XXL: "52",
    XXXL: "",
    XXXXL: "",
    TotalRow: "52",
    NWeight: "9.57",
    GWeight: "13.87",
  },
  {
    BoxNum: "20",
    Style: "US41197011_01_0000174_6_R",
    Color: "179",
    PoNum: "O00124500",
    S: "33",
    M: "22",
    L: "",
    XL: "",
    XXL: "",
    XXXL: "",
    XXXXL: "",
    TotalRow: "55",
    NWeight: "8.18",
    GWeight: "12.56",
  },
  {
    BoxNum: "21",
    Style: "US41197011_01_0000174_6_R",
    Color: "179",
    PoNum: "O00124500",
    S: "",
    M: "",
    L: "48",
    XL: "",
    XXL: "",
    XXXL: "",
    XXXXL: "",
    TotalRow: "48",
    NWeight: "7.58",
    GWeight: "11.78",
  },
  {
    BoxNum: "22",
    Style: "US41197011_01_0000174_6_R",
    Color: "179",
    PoNum: "O00124500",
    S: "",
    M: "",
    L: "",
    XL: "44",
    XXL: "",
    XXXL: "",
    XXXXL: "",
    TotalRow: "44",
    NWeight: "7.83",
    GWeight: "11.93",
  },
  {
    BoxNum: "23",
    Style: "US41197011_01_0000174_6_R",
    Color: "179",
    PoNum: "O00124500",
    S: "",
    M: "",
    L: "",
    XL: "",
    XXL: "4",
    XXXL: "21",
    XXXXL: "8",
    TotalRow: "33",
    NWeight: "6.68",
    GWeight: "10.51",
  },
  {
    BoxNum: "24",
    Style: "US41197011_01_0000174_6_R",
    Color: "269",
    PoNum: "O00124500",
    S: "",
    M: "60",
    L: "",
    XL: "",
    XXL: "",
    XXXL: "",
    XXXXL: "",
    TotalRow: "60",
    NWeight: "9",
    GWeight: "13.5",
  },
  {
    BoxNum: "25",
    Style: "US41197011_01_0000174_6_R",
    Color: "269",
    PoNum: "O00124500",
    S: "",
    M: "",
    L: "60",
    XL: "",
    XXL: "",
    XXXL: "",
    XXXXL: "",
    TotalRow: "60",
    NWeight: "9.48",
    GWeight: "13.98",
  },
  {
    BoxNum: "26",
    Style: "US41197011_01_0000174_6_R",
    Color: "269",
    PoNum: "O00124500",
    S: "",
    M: "",
    L: "",
    XL: "52",
    XXL: "",
    XXXL: "",
    XXXXL: "",
    TotalRow: "52",
    NWeight: "9.26",
    GWeight: "13.56",
  },
  {
    BoxNum: "27",
    Style: "US41197011_01_0000174_6_R",
    Color: "269",
    PoNum: "O00124500",
    S: "",
    M: "",
    L: "",
    XL: "",
    XXL: "49",
    XXXL: "",
    XXXXL: "",
    TotalRow: "49",
    NWeight: "9.02",
    GWeight: "13.25",
  },
  {
    BoxNum: "28",
    Style: "US41197011_01_0000174_6_R",
    Color: "269",
    PoNum: "O00124500",
    S: "24",
    M: "10",
    L: "",
    XL: "",
    XXL: "",
    XXXL: "",
    XXXXL: "4",
    TotalRow: "38",
    NWeight: "5.92",
    GWeight: "9.87",
  },
  {
    BoxNum: "29",
    Style: "US41197011_01_0000174_6_R",
    Color: "269",
    PoNum: "O00124500",
    S: "",
    M: "",
    L: "29",
    XL: "",
    XXL: "",
    XXXL: "10",
    XXXXL: "",
    TotalRow: "39",
    NWeight: "6.58",
    GWeight: "10.56",
  },
  {
    BoxNum: "30",
    Style: "US41197011_01_0000174_6_R",
    Color: "269",
    PoNum: "O00124500",
    S: "",
    M: "",
    L: "",
    XL: "26",
    XXL: "",
    XXXL: "11",
    XXXXL: "",
    TotalRow: "37",
    NWeight: "6.83",
    GWeight: "10.76",
  },
  {
    BoxNum: "31",
    Style: "US41197011_01_0000174_6_R",
    Color: "328",
    PoNum: "O00124500",
    S: "",
    M: "60",
    L: "",
    XL: "",
    XXL: "",
    XXXL: "",
    XXXXL: "",
    TotalRow: "60",
    NWeight: "9",
    GWeight: "13.5",
  },
  {
    BoxNum: "32",
    Style: "US41197011_01_0000174_6_R",
    Color: "328",
    PoNum: "O00124500",
    S: "",
    M: "",
    L: "60",
    XL: "",
    XXL: "",
    XXXL: "",
    XXXXL: "",
    TotalRow: "60",
    NWeight: "9.48",
    GWeight: "13.98",
  },
  {
    BoxNum: "33",
    Style: "US41197011_01_0000174_6_R",
    Color: "328",
    PoNum: "O00124500",
    S: "",
    M: "",
    L: "",
    XL: "52",
    XXL: "",
    XXXL: "",
    XXXXL: "",
    TotalRow: "52",
    NWeight: "9.26",
    GWeight: "13.56",
  },
  {
    BoxNum: "34",
    Style: "US41197011_01_0000174_6_R",
    Color: "328",
    PoNum: "O00124500",
    S: "30",
    M: "15",
    L: "",
    XL: "",
    XXL: "",
    XXXL: "",
    XXXXL: "7",
    TotalRow: "52",
    NWeight: "8.22",
    GWeight: "12.52",
  },
  {
    BoxNum: "35",
    Style: "US41197011_01_0000174_6_R",
    Color: "328",
    PoNum: "O00124500",
    S: "",
    M: "",
    L: "39",
    XL: "",
    XXL: "",
    XXXL: "",
    XXXXL: "",
    TotalRow: "39",
    NWeight: "6.16",
    GWeight: "10.14",
  },
  {
    BoxNum: "36",
    Style: "US41197011_01_0000174_6_R",
    Color: "328",
    PoNum: "O00124500",
    S: "",
    M: "",
    L: "",
    XL: "30",
    XXL: "",
    XXXL: "23",
    XXXXL: "",
    TotalRow: "53",
    NWeight: "9.94",
    GWeight: "14.27",
  },
  {
    BoxNum: "37",
    Style: "US41197011_01_0000174_6_R",
    Color: "328",
    PoNum: "O00124500",
    S: "",
    M: "",
    L: "",
    XL: "",
    XXL: "49",
    XXXL: "",
    XXXXL: "",
    TotalRow: "49",
    NWeight: "9.02",
    GWeight: "13.25",
  },
];
update(data);
