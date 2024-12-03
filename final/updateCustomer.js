async function updateDataByCtn(data) {
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
    // Special Client
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
    // Wait 1 second before clicking save
    await delay(1000);
    const saveButton = parent.querySelector('[id^="bSaveDettaglio_"]');
    if (saveButton) saveButton.click();
  }
}
const data = [
  {
    BoxNum: "1",
    SpecialClientPO: "3153",
    SpecialClient: "7",
  },
  {
    BoxNum: "2",
    SpecialClientPO: "3153",
    SpecialClient: "7",
  },
  {
    BoxNum: "3",
    SpecialClientPO: "3153",
    SpecialClient: "7",
  },
  {
    BoxNum: "4",
    SpecialClientPO: "3153",
    SpecialClient: "7",
  },
  {
    BoxNum: "5",
    SpecialClientPO: "3153",
    SpecialClient: "7",
  },
  {
    BoxNum: "6",
    SpecialClientPO: "3153",
    SpecialClient: "7",
  },
  {
    BoxNum: "7",
    SpecialClientPO: "3153",
    SpecialClient: "7",
  },
  {
    BoxNum: "8",
    SpecialClientPO: "3153",
    SpecialClient: "7",
  },
  {
    BoxNum: "9",
    SpecialClientPO: "3153",
    SpecialClient: "7",
  },
  {
    BoxNum: "10",
    SpecialClientPO: "3153",
    SpecialClient: "7",
  },
  {
    BoxNum: "11",
    SpecialClientPO: "3153",
    SpecialClient: "7",
  },
  {
    BoxNum: "12",
    SpecialClientPO: "3153",
    SpecialClient: "7",
  },
  {
    BoxNum: "13",
    SpecialClientPO: "3153",
    SpecialClient: "7",
  },
  {
    BoxNum: "14",
    SpecialClientPO: "3153",
    SpecialClient: "7",
  },
  {
    BoxNum: "15",
    SpecialClientPO: "3153",
    SpecialClient: "7",
  },
  {
    BoxNum: "16",
    SpecialClientPO: "3153",
    SpecialClient: "7",
  },
  {
    BoxNum: "17",
    SpecialClientPO: "3153",
    SpecialClient: "7",
  },
  {
    BoxNum: "18",
    SpecialClientPO: "3153",
    SpecialClient: "7",
  },
  {
    BoxNum: "19",
    SpecialClientPO: "3153",
    SpecialClient: "7",
  },
  {
    BoxNum: "20",
    SpecialClientPO: "3153",
    SpecialClient: "7",
  },
  {
    BoxNum: "21",
    SpecialClientPO: "2555",
    SpecialClient: "2",
  },
  {
    BoxNum: "22",
    SpecialClientPO: "2555",
    SpecialClient: "2",
  },
  {
    BoxNum: "23",
    SpecialClientPO: "2613",
    SpecialClient: "351",
  },
  {
    BoxNum: "23",
    SpecialClientPO: "2613",
    SpecialClient: "351",
  },
  {
    BoxNum: "24",
    SpecialClientPO: "2950",
    SpecialClient: "398",
  },
  {
    BoxNum: "25",
    SpecialClientPO: "2950",
    SpecialClient: "398",
  },
  {
    BoxNum: "26",
    SpecialClientPO: "2950",
    SpecialClient: "398",
  },
  {
    BoxNum: "27",
    SpecialClientPO: "2950",
    SpecialClient: "398",
  },
  {
    BoxNum: "28",
    SpecialClientPO: "2950",
    SpecialClient: "398",
  },
  {
    BoxNum: "29",
    SpecialClientPO: "2950",
    SpecialClient: "398",
  },
  {
    BoxNum: "30",
    SpecialClientPO: "2950",
    SpecialClient: "398",
  },
  {
    BoxNum: "31",
    SpecialClientPO: "2950",
    SpecialClient: "398",
  },
  {
    BoxNum: "32",
    SpecialClientPO: "2950",
    SpecialClient: "398",
  },
  {
    BoxNum: "33",
    SpecialClientPO: "2950",
    SpecialClient: "398",
  },
  {
    BoxNum: "34",
    SpecialClientPO: "2951",
    SpecialClient: "398",
  },
  {
    BoxNum: "35",
    SpecialClientPO: "2951",
    SpecialClient: "398",
  },
  {
    BoxNum: "36",
    SpecialClientPO: "2951",
    SpecialClient: "398",
  },
  {
    BoxNum: "37",
    SpecialClientPO: "2951",
    SpecialClient: "398",
  },
  {
    BoxNum: "38",
    SpecialClientPO: "2951",
    SpecialClient: "398",
  },
  {
    BoxNum: "39",
    SpecialClientPO: "2951",
    SpecialClient: "398",
  },
  {
    BoxNum: "40",
    SpecialClientPO: "2951",
    SpecialClient: "398",
  },
  {
    BoxNum: "41",
    SpecialClientPO: "2951",
    SpecialClient: "398",
  },
  {
    BoxNum: "42",
    SpecialClientPO: "2951",
    SpecialClient: "398",
  },
  {
    BoxNum: "43",
    SpecialClientPO: "2951",
    SpecialClient: "398",
  },
];
updateDataByCtn(data);
