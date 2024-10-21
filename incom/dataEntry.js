const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const getElement = (id) => {
  const element = document.getElementById(id);
  if (!element) console.warn(`Element with ID "${id}" not found.`);
  return element;
};

const formatNumber = (value) => {
  const num = parseFloat(value);
  if (isNaN(num)) {
    console.error("Invalid input: Please provide a valid number.");
    return "0,00";
  }
  return num.toFixed(2).replace(".", ",");
};

const selectOption = async (
  element,
  matchValue,
  findBy = "value",
  retries = 6
) => {
  if (!element) {
    console.error("Element not provided.");
    return false;
  }

  const findOption = () =>
    Array.from(element.options).find((opt) =>
      findBy === "value"
        ? opt.value?.trim() === matchValue?.trim()
        : opt.text?.trim() === matchValue?.trim()
    );

  for (let attempt = 0; attempt < retries; attempt++) {
    await wait(1000);
    const option = findOption();
    if (option) {
      option.selected = true;
      element.dispatchEvent(new Event("change", { bubbles: true }));
      return true;
    }
    console.log(`Attempt ${attempt + 1}: "${matchValue}" not found.`);
  }

  console.error(`Failed to select "${matchValue}" after ${retries} attempts.`);
  return false;
};

const setInputValue = (element, value, eventType = "change") => {
  if (element) {
    element.value = value;
    element.dispatchEvent(new Event(eventType, { bubbles: true }));
  } else {
    console.warn("Element not found for setting value.");
  }
};

const dataEntry = async (data) => {
  try {
    const elements = {
      txtCounter: getElement("txtcounter_0"),
      cbOrdini: getElement("cbOrdini_0"),
      cbStyle: getElement("cbStyle_0"),
      cbClientSpecial: getElement("cbClientSpecial_0"),
      cbPoClientSpecial: getElement("cbPoClientSpecial_0"),
      cbColor: getElement("cbColor_0"),
      txtNet: getElement("txtnet_0"),
      txtGross: getElement("txtgross_0"),
      cbBoxMeasure: getElement("cbBoxMeasure_0"),
      btnSave: getElement("bSaveDettaglio_0"),
    };

    for (const d of data) {
      await wait(3000);
      const selectionTasks = [
        { element: elements.cbOrdini, value: d.PoNum },
        { element: elements.cbStyle, value: d.Style },
        { element: elements.cbClientSpecial, value: d.SpecialClient },
        { element: elements.cbPoClientSpecial, value: d.SpecialClientPO },
        { element: elements.cbColor, value: d.Color },
        { element: elements.cbBoxMeasure, value: d.BoxMeasure, findBy: "text" },
      ];

      // Perform all select operations with error handling
      for (const task of selectionTasks) {
        if (
          task.value &&
          !(await selectOption(task.element, task.value, task.findBy))
        ) {
          console.warn(`Skipping entry due to missing value: ${task.value}`);
          continue;
        }
      }

      // Set size inputs
      ["S", "M", "L", "XL", "XXL", "XXXL", "XXXXL"].forEach((size, idx) => {
        if (d[size]) {
          setInputValue(getElement(`txtorder_size0${3 + idx}_0`), d[size]);
        }
      });

      // Set net and gross weight
      setInputValue(elements.txtNet, formatNumber(d.NWeight), "keyup");
      setInputValue(elements.txtGross, formatNumber(d.GWeight), "keyup");

      // Set box number with specific error handling
      if (d.BoxNum) {
        if (!elements.txtCounter) {
          console.error("txtCounter element not found.");
        } else {
          elements.txtCounter.onchange = null;
          setInputValue(elements.txtCounter, d.BoxNum);
        }
      } else {
        console.warn("BoxNum not provided for entry.");
      }

      // Save the entry
      if (elements.btnSave) {
        elements.btnSave.click();
        console.log(`${d.BoxNum}`);
      } else {
        console.error("Save button not found. Cannot save entry.");
      }
    }
  } catch (error) {
    console.error("An error occurred during data entry:", error);
  }
};
