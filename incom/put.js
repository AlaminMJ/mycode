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
          let sizeElement = nextSibling.querySelector(
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
    BoxNum: "179",
    Color: "144",
    S: "0",
    M: "54",
    L: "0",
    XL: "0",
    XXL: "0",
    XXXL: "0",
    XXXXL: "0",
    TotalRow: "54",
    NWeight: "11.23",
    GWeight: "13.94",
  },
  {
    BoxNum: "180",
    Color: "144",
    S: "0",
    M: "54",
    L: "0",
    XL: "0",
    XXL: "0",
    XXXL: "0",
    XXXXL: "0",
    TotalRow: "54",
    NWeight: "11.23",
    GWeight: "13.94",
  },
  {
    BoxNum: "181",
    Color: "144",
    S: "0",
    M: "54",
    L: "0",
    XL: "0",
    XXL: "0",
    XXXL: "0",
    XXXXL: "0",
    TotalRow: "54",
    NWeight: "11.23",
    GWeight: "13.94",
  },
  {
    BoxNum: "182",
    Color: "144",
    S: "0",
    M: "54",
    L: "0",
    XL: "0",
    XXL: "0",
    XXXL: "0",
    XXXXL: "0",
    TotalRow: "54",
    NWeight: "11.23",
    GWeight: "13.94",
  },
  {
    BoxNum: "183",
    Color: "144",
    S: "4",
    M: "23",
    L: "18",
    XL: "0",
    XXL: "0",
    XXXL: "0",
    XXXXL: "0",
    TotalRow: "45",
    NWeight: "9.51",
    GWeight: "12.09",
  },
  {
    BoxNum: "184",
    Color: "273",
    S: "0",
    M: "54",
    L: "0",
    XL: "0",
    XXL: "0",
    XXXL: "0",
    XXXXL: "0",
    TotalRow: "54",
    NWeight: "11.23",
    GWeight: "13.94",
  },
  {
    BoxNum: "185",
    Color: "273",
    S: "0",
    M: "0",
    L: "0",
    XL: "48",
    XXL: "0",
    XXXL: "0",
    XXXXL: "0",
    TotalRow: "48",
    NWeight: "11.71",
    GWeight: "14.33",
  },
  {
    BoxNum: "186",
    Color: "273",
    S: "0",
    M: "0",
    L: "0",
    XL: "48",
    XXL: "0",
    XXXL: "0",
    XXXXL: "0",
    TotalRow: "48",
    NWeight: "11.71",
    GWeight: "14.33",
  },
  {
    BoxNum: "187",
    Color: "273",
    S: "0",
    M: "0",
    L: "0",
    XL: "0",
    XXL: "0",
    XXXL: "44",
    XXXXL: "0",
    TotalRow: "44",
    NWeight: "12.32",
    GWeight: "14.88",
  },
  {
    BoxNum: "188",
    Color: "273",
    S: "7",
    M: "22",
    L: "11",
    XL: "15",
    XXL: "0",
    XXXL: "0",
    XXXXL: "0",
    TotalRow: "55",
    NWeight: "12.03",
    GWeight: "14.76",
  },
  {
    BoxNum: "189",
    Color: "273",
    S: "0",
    M: "0",
    L: "0",
    XL: "0",
    XXL: "8",
    XXXL: "6",
    XXXXL: "14",
    TotalRow: "28",
    NWeight: "7.8",
    GWeight: "10.12",
  },
  {
    BoxNum: "190",
    Color: "230",
    S: "0",
    M: "0",
    L: "1",
    XL: "2",
    XXL: "1",
    XXXL: "18",
    XXXXL: "0",
    TotalRow: "22",
    NWeight: "6",
    GWeight: "8.23",
  },
  {
    BoxNum: "191",
    Color: "115",
    S: "0",
    M: "0",
    L: "0",
    XL: "0",
    XXL: "0",
    XXXL: "45",
    XXXXL: "0",
    TotalRow: "45",
    NWeight: "12.6",
    GWeight: "15.18",
  },
  {
    BoxNum: "192",
    Color: "115",
    S: "0",
    M: "0",
    L: "0",
    XL: "0",
    XXL: "0",
    XXXL: "0",
    XXXXL: "30",
    TotalRow: "30",
    NWeight: "8.82",
    GWeight: "11.17",
  },
  {
    BoxNum: "193",
    Color: "106",
    S: "17",
    M: "28",
    L: "0",
    XL: "0",
    XXL: "3",
    XXXL: "0",
    XXXXL: "0",
    TotalRow: "48",
    NWeight: "9.97",
    GWeight: "12.59",
  },
  {
    BoxNum: "194",
    Color: "157",
    S: "8",
    M: "7",
    L: "7",
    XL: "5",
    XXL: "4",
    XXXL: "7",
    XXXXL: "5",
    TotalRow: "43",
    NWeight: "10.23",
    GWeight: "12.78",
  },
  {
    BoxNum: "195",
    Color: "350",
    S: "0",
    M: "13",
    L: "0",
    XL: "24",
    XXL: "13",
    XXXL: "0",
    XXXXL: "0",
    TotalRow: "50",
    NWeight: "11.81",
    GWeight: "14.46",
  },
  {
    BoxNum: "196",
    Color: "350",
    S: "0",
    M: "0",
    L: "9",
    XL: "0",
    XXL: "0",
    XXXL: "12",
    XXXXL: "10",
    TotalRow: "31",
    NWeight: "8.26",
    GWeight: "10.63",
  },
  {
    BoxNum: "197",
    Color: "148",
    S: "0",
    M: "0",
    L: "0",
    XL: "48",
    XXL: "0",
    XXXL: "0",
    XXXXL: "0",
    TotalRow: "48",
    NWeight: "11.71",
    GWeight: "14.33",
  },
  {
    BoxNum: "198",
    Color: "148",
    S: "0",
    M: "0",
    L: "50",
    XL: "0",
    XXL: "0",
    XXXL: "0",
    XXXXL: "0",
    TotalRow: "50",
    NWeight: "10.9",
    GWeight: "13.55",
  },
  {
    BoxNum: "199",
    Color: "148",
    S: "11",
    M: "32",
    L: "0",
    XL: "5",
    XXL: "0",
    XXXL: "0",
    XXXXL: "0",
    TotalRow: "48",
    NWeight: "10.08",
    GWeight: "12.7",
  },
  {
    BoxNum: "200",
    Color: "148",
    S: "0",
    M: "0",
    L: "0",
    XL: "19",
    XXL: "16",
    XXXL: "5",
    XXXXL: "0",
    TotalRow: "40",
    NWeight: "10.04",
    GWeight: "12.54",
  },
  {
    BoxNum: "201",
    Color: "111",
    S: "0",
    M: "1",
    L: "2",
    XL: "2",
    XXL: "0",
    XXXL: "32",
    XXXXL: "9",
    TotalRow: "46",
    NWeight: "12.74",
    GWeight: "15.33",
  },
  {
    BoxNum: "202",
    Color: "103",
    S: "0",
    M: "0",
    L: "13",
    XL: "14",
    XXL: "8",
    XXXL: "15",
    XXXXL: "0",
    TotalRow: "50",
    NWeight: "12.45",
    GWeight: "15.1",
  },
  {
    BoxNum: "203",
    Color: "158",
    S: "0",
    M: "7",
    L: "12",
    XL: "7",
    XXL: "13",
    XXXL: "2",
    XXXXL: "3",
    TotalRow: "44",
    NWeight: "10.47",
    GWeight: "13.03",
  },
  {
    BoxNum: "204",
    Color: "328",
    S: "0",
    M: "0",
    L: "28",
    XL: "24",
    XXL: "0",
    XXXL: "0",
    XXXXL: "0",
    TotalRow: "52",
    NWeight: "11.96",
    GWeight: "14.64",
  },
  {
    BoxNum: "205",
    Color: "328",
    S: "4",
    M: "9",
    L: "0",
    XL: "0",
    XXL: "17",
    XXXL: "0",
    XXXXL: "0",
    TotalRow: "30",
    NWeight: "6.92",
    GWeight: "9.27",
  },
];

put(data);
