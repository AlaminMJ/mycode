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
    // const sizes = ["S", "M", "L", "XL", "XXL", "XXXL", "XXXXL"];
    const sizes = [2, 3, 4, 5, 6, 8, 10, 12, 14, 16];
    for (const [idx, size] of sizes.entries()) {
      if (itemData[size]) {
        let sizeElement;
        if (idx === 9) {
          sizeElement = nextSibling.querySelector(
            `input[id^="txtorder_size${1 + idx}`
          );
        } else {
          sizeElement = nextSibling.querySelector(
            `input[id^="txtorder_size0${1 + idx}`
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
    10: "",
    12: "",
    14: "",
    16: "",
    BoxNum: "1",
    Style: "US41618002_01_0000164_6_R",
    Color: "205",
    "Po Num": "O00133046",
    SpecialClientPO: "ZZO2Y86",
    SpecialClient2: "ZALANDO",
    TotalRow: "40",
    NWeight: "5.82",
    GWeight: "9.6",
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
    16: "",
    BoxNum: "2",
    Style: "US41618002_01_0000164_6_R",
    Color: "205",
    "Po Num": "O00133046",
    SpecialClientPO: "ZZO2Y86",
    SpecialClient2: "ZALANDO",
    TotalRow: "40",
    NWeight: "8.4",
    GWeight: "12.18",
  },
  {
    2: "",
    3: "",
    4: "",
    5: "",
    6: "",
    8: "",
    10: "20",
    12: "",
    14: "",
    16: "20",
    BoxNum: "3",
    Style: "US41618002_01_0000164_6_R",
    Color: "205",
    "Po Num": "O00133046",
    SpecialClientPO: "ZZO2Y86",
    SpecialClient2: "ZALANDO",
    TotalRow: "40",
    NWeight: "8.4",
    GWeight: "12.18",
  },
  {
    2: "9",
    3: "8",
    4: "10",
    5: "10",
    6: "11",
    8: "",
    10: "",
    12: "",
    14: "",
    16: "",
    BoxNum: "4",
    Style: "US41618002_01_0000164_6_R",
    Color: "205",
    "Po Num": "O00133046",
    SpecialClientPO: "",
    SpecialClient2: "",
    TotalRow: "48",
    NWeight: "6.45",
    GWeight: "10.61",
  },
  {
    2: "",
    3: "",
    4: "",
    5: "",
    6: "",
    8: "10",
    10: "9",
    12: "10",
    14: "6",
    16: "6",
    BoxNum: "5",
    Style: "US41618002_01_0000164_6_R",
    Color: "205",
    "Po Num": "O00133046",
    SpecialClientPO: "",
    SpecialClient2: "",
    TotalRow: "41",
    NWeight: "8.04",
    GWeight: "11.87",
  },
  {
    2: "11",
    3: "9",
    4: "15",
    5: "15",
    6: "",
    8: "",
    10: "",
    12: "",
    14: "",
    16: "",
    BoxNum: "6",
    Style: "US41618002_01_0000164_6_R",
    Color: "303",
    "Po Num": "O00133046",
    SpecialClientPO: "",
    SpecialClient2: "",
    TotalRow: "50",
    NWeight: "6.52",
    GWeight: "10.77",
  },
  {
    2: "",
    3: "",
    4: "",
    5: "",
    6: "20",
    8: "18",
    10: "",
    12: "",
    14: "",
    16: "",
    BoxNum: "7",
    Style: "US41618002_01_0000164_6_R",
    Color: "303",
    "Po Num": "O00133046",
    SpecialClientPO: "",
    SpecialClient2: "",
    TotalRow: "38",
    NWeight: "6.03",
    GWeight: "9.72",
  },
  {
    2: "",
    3: "",
    4: "",
    5: "",
    6: "",
    8: "",
    10: "21",
    12: "17",
    14: "",
    16: "",
    BoxNum: "8",
    Style: "US41618002_01_0000164_6_R",
    Color: "303",
    "Po Num": "O00133046",
    SpecialClientPO: "",
    SpecialClient2: "",
    TotalRow: "38",
    NWeight: "7.18",
    GWeight: "10.87",
  },
  {
    2: "",
    3: "",
    4: "",
    5: "",
    6: "",
    8: "",
    10: "",
    12: "",
    14: "19",
    16: "16",
    BoxNum: "9",
    Style: "US41618002_01_0000164_6_R",
    Color: "303",
    "Po Num": "O00133046",
    SpecialClientPO: "",
    SpecialClient2: "",
    TotalRow: "35",
    NWeight: "8.02",
    GWeight: "11.57",
  },
];
update(data);
