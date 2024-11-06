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
  const sizes = ["S", "M", "L", "XL", "XXL", "XXXL", "XXXXL"];
  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  // Iterate through each input and update based on data
  for (let input of inputs) {
    input.onchange = null;
    const itemDataIndex = data.findIndex((item) => item.BoxNum === input.value);
    const itemData = data[itemDataIndex];
    if (!itemData) continue;
    data[itemDataIndex].isEntry = true;
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

    // Directly update each size
    sizes.forEach((size, idx) => {
      if (itemData[size]) {
        const sizeInput = nextSibling.querySelector(
          `input[id^="txtorder_size0${3 + idx}]`
        );
        if (sizeInput) {
          sizeInput.value = itemData[size];
          sizeInput.dispatchEvent(new Event("change", { bubbles: true }));
        }
      }
    });

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
    BoxNum: "415",
    CBoxNum: "525",
  },
  {
    BoxNum: "416",
    CBoxNum: "526",
  },
  {
    BoxNum: "417",
    CBoxNum: "527",
  },
  {
    BoxNum: "418",
    CBoxNum: "528",
  },
  {
    BoxNum: "419",
    CBoxNum: "529",
  },
  {
    BoxNum: "420",
    CBoxNum: "530",
  },
  {
    BoxNum: "421",
    CBoxNum: "531",
  },
  {
    BoxNum: "422",
    CBoxNum: "532",
  },
  {
    BoxNum: "423",
    CBoxNum: "400",
  },
  {
    BoxNum: "424",
    CBoxNum: "401",
  },
  {
    BoxNum: "425",
    CBoxNum: "402",
  },
  {
    BoxNum: "426",
    CBoxNum: "403",
  },
  {
    BoxNum: "427",
    CBoxNum: "404",
  },
  {
    BoxNum: "428",
    CBoxNum: "405",
  },
  {
    BoxNum: "429",
    CBoxNum: "406",
  },
  {
    BoxNum: "430",
    CBoxNum: "407",
  },
  {
    BoxNum: "431",
    CBoxNum: "408",
  },
  {
    BoxNum: "432",
    CBoxNum: "409",
  },
  {
    BoxNum: "433",
    CBoxNum: "410",
  },
  {
    BoxNum: "434",
    CBoxNum: "411",
  },
  {
    BoxNum: "435",
    CBoxNum: "412",
  },
  {
    BoxNum: "436",
    CBoxNum: "413",
  },
  {
    BoxNum: "437",
    CBoxNum: "414",
  },
  {
    BoxNum: "438",
    CBoxNum: "415",
  },
];
update(data);
