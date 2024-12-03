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
    SpecialClientPO: "2555",
    SpecialClient: "2",
  },
  {
    BoxNum: "5",
    SpecialClientPO: "2555",
    SpecialClient: "2",
  },
];

updateDataByCtn(data) 
