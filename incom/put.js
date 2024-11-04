const put = (data) => {
  const formatNumber = (value) => {
    const num = parseFloat(value);
    if (isNaN(num)) {
      console.error("Invalid input: Please provide a valid number.");
      return "0,00";
    }
    return num.toFixed(2).replace(".", ",");
  };

  const inputs = Array.from(
    document.querySelectorAll('input[id^="txtcounter_"]')
  ).reverse();
  inputs.pop();

  for (let input of inputs) {
    input.onchange = null;
    const d = data.find((item) => item.BoxNum === input.value);
    if (d) {
      const parent = input?.parentElement?.parentElement;
      const nextSibling = parent?.nextElementSibling;

      //   Color
      if (d.Color) {
        nextSibling.querySelector('select[id^="cbColor_"]').value = d.Color;
      }
      // Set size inputs
      const sizes = ["S", "M", "L", "XL", "XXL", "XXXL", "XXXXL"];
      for (const [idx, size] of sizes.entries()) {
        if (d[size]) {
          const sizeElement = nextSibling.querySelector(
            `input[id^="txtorder_size0${3 + idx}`
          );
          if (sizeElement) {
            sizeElement.value = d[size];
            sizeElement.dispatchEvent(new Event("change", { bubbles: true }));
          }
        }
      }
      // Net Weight
      if (d.NWeight) {
        nextSibling.querySelector('input[id^="txtnet_"]').value = formatNumber(
          d.NWeight
        );
        nextSibling
          .querySelector('input[id^="txtnet_"]')
          .dispatchEvent(new Event("keyup", { bubbles: true }));
      }
      // Gross Weight
      if (d.GWeight) {
        nextSibling.querySelector('input[id^="txtgross_"]').value =
          formatNumber(d.GWeight);
        nextSibling
          .querySelector('input[id^="txtgross_"]')
          .dispatchEvent(new Event("keyup", { bubbles: true }));
      }
      if (d.CBoxNum) {
        parent.querySelector('input[id^="txtcounter_"]').value = d.CBoxNum;
        parent
          .querySelector('input[id^="txtcounter_"]')
          .dispatchEvent(new Event("keyup", { bubbles: true }));
      }
      parent.querySelector('[id^="bSaveDettaglio_"]').click();
    }
  }
};

const data = [
  {
    BoxNum: "1",
    Color: "100",
    S: "11",
    M: "2",
    L: "3",
    XL: "4",
    XXL: "5",
    XXXL: "6",
    XXXXL: "7",
    "total pcs": "44",
    NWeight: "1",
    GWeight: "1.1",
    Column1: "",
  },
  {
    BoxNum: "2",
    Color: "100",
    S: "22",
    M: "",
    L: "",
    XL: "",
    XXL: "",
    XXXL: "",
    XXXXL: "",
    "total pcs": "44",
    NWeight: "2",
    GWeight: "2.2",
    Column1: "",
  },
  {
    BoxNum: "3",
    Color: "100",
    S: "33",
    M: "",
    L: "",
    XL: "",
    XXL: "",
    XXXL: "",
    XXXXL: "",
    "total pcs": "44",
    NWeight: "8.8",
    GWeight: "3",
    CBoxNum: "3.3",
  },
  {
    BoxNum: "4",
    Color: "100",
    S: "44",
    M: "",
    L: "",
    XL: "",
    XXL: "",
    XXXL: "",
    XXXXL: "",
    "total pcs": "44",
    NWeight: "4",
    GWeight: "4.4",
    Column1: "",
  },
  {
    BoxNum: "5",
    Color: "100",
    S: "55",
    M: "44",
    L: "",
    XL: "",
    XXL: "",
    XXXL: "",
    XXXXL: "",
    "total pcs": "44",
    NWeight: "5",
    GWeight: "5.5",
    Column1: "",
  },
  {
    BoxNum: "6",
    Color: "100",
    S: "66",
    M: "44",
    L: "",
    XL: "",
    XXL: "",
    XXXL: "",
    XXXXL: "",
    "total pcs": "44",
    NWeight: "6",
    GWeight: "6.6",
    Column1: "",
  },
  {
    BoxNum: "7",
    Color: "100",
    S: "77",
    M: "44",
    L: "",
    XL: "",
    XXL: "",
    XXXL: "",
    XXXXL: "",
    "total pcs": "44",
    NWeight: "7",
    GWeight: "7.7",
    Column1: "",
  },
  {
    BoxNum: "8",
    Color: "100",
    S: "88",
    M: "44",
    L: "",
    XL: "",
    XXL: "",
    XXXL: "",
    XXXXL: "",
    "total pcs": "44",
    NWeight: "8",
    GWeight: "8.8",
    Column1: "",
  },
  {
    BoxNum: "99",
    Color: "100",
    S: "",
    M: "44",
    L: "",
    XL: "",
    XXL: "",
    XXXL: "",
    XXXXL: "",
    "total pcs": "44",
    NWeight: "9",
    GWeight: "9.9",
    Column1: "",
  },
  {
    BoxNum: "10",
    Color: "100",
    S: "100",
    M: "44",
    L: "",
    XL: "",
    XXL: "",
    XXXL: "",
    XXXXL: "",
    "total pcs": "44",
    NWeight: "10",
    GWeight: "10.10",
  },
];
put(data);
