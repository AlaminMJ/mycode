async function updateDataByCtn(mydata) {
  function formatNumber(value) {
    // 1. Ensure the input is a number
    const num = parseFloat(value);
    // 2. Check if the conversion was successful
    if (isNaN(num)) {
      throw new Error("Invalid input: Please provide a valid number.");
    }
    // 3. Round to one decimal place and replace the dot with a comma
    return num.toFixed(2).replace(".", ",");
  }

  // Get all input elements with IDs starting with 'txtctn_'
  const inputs = Array.from(
    document.querySelectorAll('input[id^="txtcounter_"]')
  ).reverse();
  inputs.pop();
  for (let input of inputs) {
    input.onchange = null;
    const d = mydata.find((item) => item.BoxNum === input.value);
    if (d) {
      const parent = input?.parentElement?.parentElement;
      const nextSibling = parent?.nextElementSibling;

      //   Color
      if (d.Color) {
        nextSibling.querySelector('select[id^="cbColor_"]').value = d.Color;
      }
      //s size
      if (d.S) {
        nextSibling.querySelector('input[id^="txtorder_size03_"]').value = d.S;
        nextSibling
          .querySelector('input[id^="txtorder_size03_"]')
          .dispatchEvent(new Event("change", { bubbles: true }));
      }
      //m size
      if (d.M) {
        nextSibling.querySelector('input[id^="txtorder_size04_"]').value = d.M;
        nextSibling
          .querySelector('input[id^="txtorder_size04_"]')
          .dispatchEvent(new Event("change", { bubbles: true }));
      }
      //l size
      if (d.L) {
        nextSibling.querySelector('input[id^="txtorder_size05_"]').value = d.L;
        nextSibling
          .querySelector('input[id^="txtorder_size05_"]')
          .dispatchEvent(new Event("change", { bubbles: true }));
      }
      //xl size
      if (d.XL) {
        nextSibling.querySelector('input[id^="txtorder_size06_"]').value = d.XL;
        nextSibling
          .querySelector('input[id^="txtorder_size06_"]')
          .dispatchEvent(new Event("change", { bubbles: true }));
      }
      //xxl size
      if (d.XXL) {
        nextSibling.querySelector('input[id^="txtorder_size07_"]').value =
          d.XXL;
        nextSibling
          .querySelector('input[id^="txtorder_size07_"]')
          .dispatchEvent(new Event("change", { bubbles: true }));
      }
      //3xl size
      if (d.XXXL) {
        nextSibling.querySelector('input[id^="txtorder_size08_"]').value =
          d.XXXL;
        nextSibling
          .querySelector('input[id^="txtorder_size08_"]')
          .dispatchEvent(new Event("change", { bubbles: true }));
      }
      //4xl size
      if (d.XXXXL) {
        nextSibling.querySelector('input[id^="txtorder_size09_"]').value =
          d.XXXXL;
        nextSibling
          .querySelector('input[id^="txtorder_size09_"]')
          .dispatchEvent(new Event("change", { bubbles: true }));
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

      parent.querySelector('[id^="bSaveDettaglio_"]').click();
    }
  }
  console.log("Done");
}

const data =[
  {
      "BoxNum": "1",
      "Color": "100",
      "S": "40",
      "M": "",
      "L": "",
      "XL": "",
      "XXL": "",
      "XXXL": "",
      "XXXXL": "",
      "NWeight": "",
      "GWeight": ""
  },
  {
      "BoxNum": "2",
      "Color": "100",
      "S": "40",
      "M": "",
      "L": "",
      "XL": "",
      "XXL": "",
      "XXXL": "",
      "XXXXL": "",
      "NWeight": "",
      "GWeight": ""
  },
  {
      "BoxNum": "3",
      "Color": "100",
      "S": "40",
      "M": "",
      "L": "",
      "XL": "",
      "XXL": "",
      "XXXL": "",
      "XXXXL": "",
      "NWeight": "",
      "GWeight": ""
  },
  {
      "BoxNum": "4",
      "Color": "100",
      "S": "",
      "M": "40",
      "L": "",
      "XL": "",
      "XXL": "",
      "XXXL": "",
      "XXXXL": "",
      "NWeight": "",
      "GWeight": ""
  },
  {
      "BoxNum": "5",
      "Color": "100",
      "S": "",
      "M": "40",
      "L": "",
      "XL": "",
      "XXL": "",
      "XXXL": "",
      "XXXXL": "",
      "NWeight": "",
      "GWeight": ""
  },
  {
      "BoxNum": "6",
      "Color": "100",
      "S": "",
      "M": "40",
      "L": "",
      "XL": "",
      "XXL": "",
      "XXXL": "",
      "XXXXL": "",
      "NWeight": "",
      "GWeight": ""
  },
  {
      "BoxNum": "7",
      "Color": "100",
      "S": "",
      "M": "40",
      "L": "",
      "XL": "",
      "XXL": "",
      "XXXL": "",
      "XXXXL": "",
      "NWeight": "",
      "GWeight": ""
  },
  {
      "BoxNum": "8",
      "Color": "100",
      "S": "",
      "M": "40",
      "L": "",
      "XL": "",
      "XXL": "",
      "XXXL": "",
      "XXXXL": "",
      "NWeight": "",
      "GWeight": ""
  },
  {
      "BoxNum": "9",
      "Color": "100",
      "S": "",
      "M": "40",
      "L": "",
      "XL": "",
      "XXL": "",
      "XXXL": "",
      "XXXXL": "",
      "NWeight": "",
      "GWeight": ""
  },
  {
      "BoxNum": "10",
      "Color": "100",
      "S": "",
      "M": "40",
      "L": "",
      "XL": "",
      "XXL": "",
      "XXXL": "",
      "XXXXL": "",
      "NWeight": "",
      "GWeight": ""
  },
  {
      "BoxNum": "11",
      "Color": "100",
      "S": "",
      "M": "",
      "L": "40",
      "XL": "",
      "XXL": "",
      "XXXL": "",
      "XXXXL": "",
      "NWeight": "",
      "GWeight": ""
  },
  {
      "BoxNum": "12",
      "Color": "100",
      "S": "",
      "M": "",
      "L": "40",
      "XL": "",
      "XXL": "",
      "XXXL": "",
      "XXXXL": "",
      "NWeight": "",
      "GWeight": ""
  },
  {
      "BoxNum": "13",
      "Color": "100",
      "S": "",
      "M": "",
      "L": "40",
      "XL": "",
      "XXL": "",
      "XXXL": "",
      "XXXXL": "",
      "NWeight": "",
      "GWeight": ""
  },
  {
      "BoxNum": "14",
      "Color": "100",
      "S": "",
      "M": "",
      "L": "40",
      "XL": "",
      "XXL": "",
      "XXXL": "",
      "XXXXL": "",
      "NWeight": "",
      "GWeight": ""
  },
  {
      "BoxNum": "15",
      "Color": "100",
      "S": "",
      "M": "",
      "L": "40",
      "XL": "",
      "XXL": "",
      "XXXL": "",
      "XXXXL": "",
      "NWeight": "",
      "GWeight": ""
  },
  {
      "BoxNum": "16",
      "Color": "100",
      "S": "",
      "M": "",
      "L": "40",
      "XL": "",
      "XXL": "",
      "XXXL": "",
      "XXXXL": "",
      "NWeight": "",
      "GWeight": ""
  },
  {
      "BoxNum": "17",
      "Color": "100",
      "S": "",
      "M": "",
      "L": "40",
      "XL": "",
      "XXL": "",
      "XXXL": "",
      "XXXXL": "",
      "NWeight": "",
      "GWeight": ""
  },
  {
      "BoxNum": "18",
      "Color": "100",
      "S": "",
      "M": "",
      "L": "40",
      "XL": "",
      "XXL": "",
      "XXXL": "",
      "XXXXL": "",
      "NWeight": "",
      "GWeight": ""
  },
  {
      "BoxNum": "19",
      "Color": "100",
      "S": "",
      "M": "",
      "L": "40",
      "XL": "",
      "XXL": "",
      "XXXL": "",
      "XXXXL": "",
      "NWeight": "",
      "GWeight": ""
  },
  {
      "BoxNum": "20",
      "Color": "100",
      "S": "",
      "M": "",
      "L": "",
      "XL": "36",
      "XXL": "",
      "XXXL": "",
      "XXXXL": "",
      "NWeight": "",
      "GWeight": ""
  },
  {
      "BoxNum": "21",
      "Color": "100",
      "S": "",
      "M": "",
      "L": "",
      "XL": "36",
      "XXL": "",
      "XXXL": "",
      "XXXXL": "",
      "NWeight": "",
      "GWeight": ""
  },
  {
      "BoxNum": "22",
      "Color": "100",
      "S": "",
      "M": "",
      "L": "",
      "XL": "36",
      "XXL": "",
      "XXXL": "",
      "XXXXL": "",
      "NWeight": "",
      "GWeight": ""
  },
  {
      "BoxNum": "23",
      "Color": "100",
      "S": "",
      "M": "",
      "L": "",
      "XL": "36",
      "XXL": "",
      "XXXL": "",
      "XXXXL": "",
      "NWeight": "",
      "GWeight": ""
  },
  {
      "BoxNum": "24",
      "Color": "100",
      "S": "",
      "M": "",
      "L": "",
      "XL": "36",
      "XXL": "",
      "XXXL": "",
      "XXXXL": "",
      "NWeight": "",
      "GWeight": ""
  },
  {
      "BoxNum": "25",
      "Color": "100",
      "S": "",
      "M": "",
      "L": "",
      "XL": "36",
      "XXL": "",
      "XXXL": "",
      "XXXXL": "",
      "NWeight": "",
      "GWeight": ""
  },
  {
      "BoxNum": "26",
      "Color": "100",
      "S": "",
      "M": "",
      "L": "",
      "XL": "36",
      "XXL": "",
      "XXXL": "",
      "XXXXL": "",
      "NWeight": "",
      "GWeight": ""
  },
  {
      "BoxNum": "27",
      "Color": "100",
      "S": "",
      "M": "",
      "L": "",
      "XL": "36",
      "XXL": "",
      "XXXL": "",
      "XXXXL": "",
      "NWeight": "",
      "GWeight": ""
  },
  {
      "BoxNum": "28",
      "Color": "100",
      "S": "",
      "M": "",
      "L": "",
      "XL": "36",
      "XXL": "",
      "XXXL": "",
      "XXXXL": "",
      "NWeight": "",
      "GWeight": ""
  },
  {
      "BoxNum": "29",
      "Color": "100",
      "S": "",
      "M": "",
      "L": "",
      "XL": "",
      "XXL": "36",
      "XXXL": "",
      "XXXXL": "",
      "NWeight": "",
      "GWeight": ""
  },
  {
      "BoxNum": "30",
      "Color": "100",
      "S": "",
      "M": "",
      "L": "",
      "XL": "",
      "XXL": "36",
      "XXXL": "",
      "XXXXL": "",
      "NWeight": "",
      "GWeight": ""
  },
  {
      "BoxNum": "31",
      "Color": "100",
      "S": "",
      "M": "",
      "L": "",
      "XL": "",
      "XXL": "36",
      "XXXL": "",
      "XXXXL": "",
      "NWeight": "",
      "GWeight": ""
  },
  {
      "BoxNum": "32",
      "Color": "100",
      "S": "",
      "M": "",
      "L": "",
      "XL": "",
      "XXL": "36",
      "XXXL": "",
      "XXXXL": "",
      "NWeight": "",
      "GWeight": ""
  },
  {
      "BoxNum": "33",
      "Color": "100",
      "S": "",
      "M": "",
      "L": "",
      "XL": "",
      "XXL": "36",
      "XXXL": "",
      "XXXXL": "",
      "NWeight": "",
      "GWeight": ""
  },
  {
      "BoxNum": "34",
      "Color": "100",
      "S": "",
      "M": "",
      "L": "",
      "XL": "",
      "XXL": "29",
      "XXXL": "",
      "XXXXL": "",
      "NWeight": "",
      "GWeight": ""
  },
  {
      "BoxNum": "35",
      "Color": "100",
      "S": "",
      "M": "",
      "L": "",
      "XL": "",
      "XXL": "",
      "XXXL": "32",
      "XXXXL": "",
      "NWeight": "",
      "GWeight": ""
  },
  {
      "BoxNum": "36",
      "Color": "100",
      "S": "",
      "M": "",
      "L": "",
      "XL": "",
      "XXL": "",
      "XXXL": "32",
      "XXXXL": "",
      "NWeight": "",
      "GWeight": ""
  },
  {
      "BoxNum": "37",
      "Color": "100",
      "S": "",
      "M": "",
      "L": "",
      "XL": "",
      "XXL": "",
      "XXXL": "32",
      "XXXXL": "",
      "NWeight": "",
      "GWeight": ""
  },
  {
      "BoxNum": "38",
      "Color": "100",
      "S": "",
      "M": "",
      "L": "",
      "XL": "",
      "XXL": "",
      "XXXL": "",
      "XXXXL": "30",
      "NWeight": "",
      "GWeight": ""
  },
  {
      "BoxNum": "39",
      "Color": "100",
      "S": "2",
      "M": "23",
      "L": "",
      "XL": "16",
      "XXL": "",
      "XXXL": "",
      "XXXXL": "",
      "NWeight": "",
      "GWeight": ""
  },
  {
      "BoxNum": "40",
      "Color": "100",
      "S": "",
      "M": "",
      "L": "37",
      "XL": "",
      "XXL": "",
      "XXXL": "3",
      "XXXXL": "",
      "NWeight": "",
      "GWeight": ""
  },
  {
      "BoxNum": "41",
      "Color": "115",
      "S": "",
      "M": "40",
      "L": "",
      "XL": "",
      "XXL": "",
      "XXXL": "",
      "XXXXL": "",
      "NWeight": "",
      "GWeight": ""
  },
  {
      "BoxNum": "42",
      "Color": "115",
      "S": "",
      "M": "",
      "L": "40",
      "XL": "",
      "XXL": "",
      "XXXL": "",
      "XXXXL": "",
      "NWeight": "",
      "GWeight": ""
  },
  {
      "BoxNum": "43",
      "Color": "115",
      "S": "",
      "M": "",
      "L": "40",
      "XL": "",
      "XXL": "",
      "XXXL": "",
      "XXXXL": "",
      "NWeight": "",
      "GWeight": ""
  },
  {
      "BoxNum": "44",
      "Color": "115",
      "S": "",
      "M": "",
      "L": "",
      "XL": "36",
      "XXL": "",
      "XXXL": "",
      "XXXXL": "",
      "NWeight": "",
      "GWeight": ""
  },
  {
      "BoxNum": "45",
      "Color": "115",
      "S": "",
      "M": "",
      "L": "",
      "XL": "36",
      "XXL": "",
      "XXXL": "",
      "XXXXL": "",
      "NWeight": "",
      "GWeight": ""
  },
  {
      "BoxNum": "46",
      "Color": "115",
      "S": "",
      "M": "",
      "L": "",
      "XL": "",
      "XXL": "36",
      "XXXL": "",
      "XXXXL": "",
      "NWeight": "",
      "GWeight": ""
  },
  {
      "BoxNum": "47",
      "Color": "115",
      "S": "29",
      "M": "",
      "L": "11",
      "XL": "",
      "XXL": "",
      "XXXL": "",
      "XXXXL": "",
      "NWeight": "",
      "GWeight": ""
  },
  {
      "BoxNum": "48",
      "Color": "115",
      "S": "",
      "M": "31",
      "L": "",
      "XL": "",
      "XXL": "",
      "XXXL": "",
      "XXXXL": "8",
      "NWeight": "",
      "GWeight": ""
  },
  {
      "BoxNum": "49",
      "Color": "115",
      "S": "",
      "M": "",
      "L": "",
      "XL": "8",
      "XXL": "14",
      "XXXL": "21",
      "XXXXL": "",
      "NWeight": "",
      "GWeight": ""
  },
  {
      "BoxNum": "50",
      "Color": "137",
      "S": "40",
      "M": "",
      "L": "",
      "XL": "",
      "XXL": "",
      "XXXL": "",
      "XXXXL": "",
      "NWeight": "",
      "GWeight": ""
  },
  {
      "BoxNum": "51",
      "Color": "137",
      "S": "40",
      "M": "",
      "L": "",
      "XL": "",
      "XXL": "",
      "XXXL": "",
      "XXXXL": "",
      "NWeight": "",
      "GWeight": ""
  },
  {
      "BoxNum": "52",
      "Color": "137",
      "S": "40",
      "M": "",
      "L": "",
      "XL": "",
      "XXL": "",
      "XXXL": "",
      "XXXXL": "",
      "NWeight": "",
      "GWeight": ""
  },
  {
      "BoxNum": "53",
      "Color": "137",
      "S": "",
      "M": "40",
      "L": "",
      "XL": "",
      "XXL": "",
      "XXXL": "",
      "XXXXL": "",
      "NWeight": "",
      "GWeight": ""
  },
  {
      "BoxNum": "54",
      "Color": "137",
      "S": "",
      "M": "40",
      "L": "",
      "XL": "",
      "XXL": "",
      "XXXL": "",
      "XXXXL": "",
      "NWeight": "",
      "GWeight": ""
  },
  {
      "BoxNum": "55",
      "Color": "137",
      "S": "",
      "M": "40",
      "L": "",
      "XL": "",
      "XXL": "",
      "XXXL": "",
      "XXXXL": "",
      "NWeight": "",
      "GWeight": ""
  },
  {
      "BoxNum": "56",
      "Color": "137",
      "S": "",
      "M": "40",
      "L": "",
      "XL": "",
      "XXL": "",
      "XXXL": "",
      "XXXXL": "",
      "NWeight": "",
      "GWeight": ""
  },
  {
      "BoxNum": "57",
      "Color": "137",
      "S": "",
      "M": "40",
      "L": "",
      "XL": "",
      "XXL": "",
      "XXXL": "",
      "XXXXL": "",
      "NWeight": "",
      "GWeight": ""
  },
  {
      "BoxNum": "58",
      "Color": "137",
      "S": "",
      "M": "40",
      "L": "",
      "XL": "",
      "XXL": "",
      "XXXL": "",
      "XXXXL": "",
      "NWeight": "",
      "GWeight": ""
  },
  {
      "BoxNum": "59",
      "Color": "137",
      "S": "",
      "M": "40",
      "L": "",
      "XL": "",
      "XXL": "",
      "XXXL": "",
      "XXXXL": "",
      "NWeight": "",
      "GWeight": ""
  },
  {
      "BoxNum": "60",
      "Color": "137",
      "S": "",
      "M": "",
      "L": "40",
      "XL": "",
      "XXL": "",
      "XXXL": "",
      "XXXXL": "",
      "NWeight": "",
      "GWeight": ""
  },
  {
      "BoxNum": "61",
      "Color": "137",
      "S": "",
      "M": "",
      "L": "40",
      "XL": "",
      "XXL": "",
      "XXXL": "",
      "XXXXL": "",
      "NWeight": "",
      "GWeight": ""
  },
  {
      "BoxNum": "62",
      "Color": "137",
      "S": "",
      "M": "",
      "L": "40",
      "XL": "",
      "XXL": "",
      "XXXL": "",
      "XXXXL": "",
      "NWeight": "",
      "GWeight": ""
  },
  {
      "BoxNum": "63",
      "Color": "137",
      "S": "",
      "M": "",
      "L": "40",
      "XL": "",
      "XXL": "",
      "XXXL": "",
      "XXXXL": "",
      "NWeight": "",
      "GWeight": ""
  },
  {
      "BoxNum": "64",
      "Color": "137",
      "S": "",
      "M": "",
      "L": "40",
      "XL": "",
      "XXL": "",
      "XXXL": "",
      "XXXXL": "",
      "NWeight": "",
      "GWeight": ""
  },
  {
      "BoxNum": "65",
      "Color": "137",
      "S": "",
      "M": "",
      "L": "40",
      "XL": "",
      "XXL": "",
      "XXXL": "",
      "XXXXL": "",
      "NWeight": "",
      "GWeight": ""
  },
  {
      "BoxNum": "66",
      "Color": "137",
      "S": "",
      "M": "",
      "L": "40",
      "XL": "",
      "XXL": "",
      "XXXL": "",
      "XXXXL": "",
      "NWeight": "",
      "GWeight": ""
  },
  {
      "BoxNum": "67",
      "Color": "137",
      "S": "",
      "M": "",
      "L": "40",
      "XL": "",
      "XXL": "",
      "XXXL": "",
      "XXXXL": "",
      "NWeight": "",
      "GWeight": ""
  },
  {
      "BoxNum": "68",
      "Color": "137",
      "S": "",
      "M": "",
      "L": "40",
      "XL": "",
      "XXL": "",
      "XXXL": "",
      "XXXXL": "",
      "NWeight": "",
      "GWeight": ""
  },
  {
      "BoxNum": "69",
      "Color": "137",
      "S": "",
      "M": "",
      "L": "",
      "XL": "36",
      "XXL": "",
      "XXXL": "",
      "XXXXL": "",
      "NWeight": "",
      "GWeight": ""
  },
  {
      "BoxNum": "70",
      "Color": "137",
      "S": "",
      "M": "",
      "L": "",
      "XL": "36",
      "XXL": "",
      "XXXL": "",
      "XXXXL": "",
      "NWeight": "",
      "GWeight": ""
  },
  {
      "BoxNum": "71",
      "Color": "137",
      "S": "",
      "M": "",
      "L": "",
      "XL": "36",
      "XXL": "",
      "XXXL": "",
      "XXXXL": "",
      "NWeight": "",
      "GWeight": ""
  },
  {
      "BoxNum": "72",
      "Color": "137",
      "S": "",
      "M": "",
      "L": "",
      "XL": "36",
      "XXL": "",
      "XXXL": "",
      "XXXXL": "",
      "NWeight": "",
      "GWeight": ""
  },
  {
      "BoxNum": "73",
      "Color": "137",
      "S": "",
      "M": "",
      "L": "",
      "XL": "36",
      "XXL": "",
      "XXXL": "",
      "XXXXL": "",
      "NWeight": "",
      "GWeight": ""
  },
  {
      "BoxNum": "74",
      "Color": "137",
      "S": "",
      "M": "",
      "L": "",
      "XL": "36",
      "XXL": "",
      "XXXL": "",
      "XXXXL": "",
      "NWeight": "",
      "GWeight": ""
  },
  {
      "BoxNum": "75",
      "Color": "137",
      "S": "",
      "M": "",
      "L": "",
      "XL": "36",
      "XXL": "",
      "XXXL": "",
      "XXXXL": "",
      "NWeight": "",
      "GWeight": ""
  },
  {
      "BoxNum": "76",
      "Color": "137",
      "S": "",
      "M": "",
      "L": "",
      "XL": "36",
      "XXL": "",
      "XXXL": "",
      "XXXXL": "",
      "NWeight": "",
      "GWeight": ""
  },
  {
      "BoxNum": "77",
      "Color": "137",
      "S": "",
      "M": "",
      "L": "",
      "XL": "36",
      "XXL": "",
      "XXXL": "",
      "XXXXL": "",
      "NWeight": "",
      "GWeight": ""
  },
  {
      "BoxNum": "78",
      "Color": "137",
      "S": "",
      "M": "",
      "L": "",
      "XL": "",
      "XXL": "36",
      "XXXL": "",
      "XXXXL": "",
      "NWeight": "",
      "GWeight": ""
  },
  {
      "BoxNum": "79",
      "Color": "137",
      "S": "",
      "M": "",
      "L": "",
      "XL": "",
      "XXL": "36",
      "XXXL": "",
      "XXXXL": "",
      "NWeight": "",
      "GWeight": ""
  },
  {
      "BoxNum": "80",
      "Color": "137",
      "S": "",
      "M": "",
      "L": "",
      "XL": "",
      "XXL": "36",
      "XXXL": "",
      "XXXXL": "",
      "NWeight": "",
      "GWeight": ""
  },
  {
      "BoxNum": "81",
      "Color": "137",
      "S": "",
      "M": "",
      "L": "",
      "XL": "",
      "XXL": "36",
      "XXXL": "",
      "XXXXL": "",
      "NWeight": "",
      "GWeight": ""
  },
  {
      "BoxNum": "82",
      "Color": "137",
      "S": "",
      "M": "",
      "L": "",
      "XL": "",
      "XXL": "36",
      "XXXL": "",
      "XXXXL": "",
      "NWeight": "",
      "GWeight": ""
  },
  {
      "BoxNum": "83",
      "Color": "137",
      "S": "",
      "M": "",
      "L": "",
      "XL": "",
      "XXL": "30",
      "XXXL": "",
      "XXXXL": "",
      "NWeight": "",
      "GWeight": ""
  },
  {
      "BoxNum": "84",
      "Color": "137",
      "S": "",
      "M": "",
      "L": "",
      "XL": "",
      "XXL": "",
      "XXXL": "32",
      "XXXXL": "",
      "NWeight": "",
      "GWeight": ""
  },
  {
      "BoxNum": "85",
      "Color": "137",
      "S": "",
      "M": "",
      "L": "",
      "XL": "",
      "XXL": "",
      "XXXL": "32",
      "XXXXL": "",
      "NWeight": "",
      "GWeight": ""
  },
  {
      "BoxNum": "86",
      "Color": "137",
      "S": "",
      "M": "",
      "L": "",
      "XL": "",
      "XXL": "",
      "XXXL": "32",
      "XXXXL": "",
      "NWeight": "",
      "GWeight": ""
  },
  {
      "BoxNum": "87",
      "Color": "137",
      "S": "",
      "M": "",
      "L": "",
      "XL": "",
      "XXL": "",
      "XXXL": "",
      "XXXXL": "32",
      "NWeight": "",
      "GWeight": ""
  },
  {
      "BoxNum": "88",
      "Color": "137",
      "S": "",
      "M": "",
      "L": "32",
      "XL": "",
      "XXL": "",
      "XXXL": "6",
      "XXXXL": "",
      "NWeight": "",
      "GWeight": ""
  },
  {
      "BoxNum": "89",
      "Color": "137",
      "S": "3",
      "M": "23",
      "L": "",
      "XL": "14",
      "XXL": "",
      "XXXL": "",
      "XXXXL": "",
      "NWeight": "",
      "GWeight": ""
  },
  {
      "BoxNum": "90",
      "Color": "144",
      "S": "",
      "M": "40",
      "L": "",
      "XL": "",
      "XXL": "",
      "XXXL": "",
      "XXXXL": "",
      "NWeight": "",
      "GWeight": ""
  },
  {
      "BoxNum": "91",
      "Color": "144",
      "S": "",
      "M": "40",
      "L": "",
      "XL": "",
      "XXL": "",
      "XXXL": "",
      "XXXXL": "",
      "NWeight": "",
      "GWeight": ""
  },
  {
      "BoxNum": "92",
      "Color": "144",
      "S": "",
      "M": "",
      "L": "40",
      "XL": "",
      "XXL": "",
      "XXXL": "",
      "XXXXL": "",
      "NWeight": "",
      "GWeight": ""
  },
  {
      "BoxNum": "93",
      "Color": "144",
      "S": "",
      "M": "",
      "L": "40",
      "XL": "",
      "XXL": "",
      "XXXL": "",
      "XXXXL": "",
      "NWeight": "",
      "GWeight": ""
  },
  {
      "BoxNum": "94",
      "Color": "144",
      "S": "",
      "M": "",
      "L": "",
      "XL": "36",
      "XXL": "",
      "XXXL": "",
      "XXXXL": "",
      "NWeight": "",
      "GWeight": ""
  },
  {
      "BoxNum": "95",
      "Color": "144",
      "S": "",
      "M": "",
      "L": "",
      "XL": "36",
      "XXL": "",
      "XXXL": "",
      "XXXXL": "",
      "NWeight": "",
      "GWeight": ""
  },
  {
      "BoxNum": "96",
      "Color": "144",
      "S": "",
      "M": "",
      "L": "",
      "XL": "",
      "XXL": "36",
      "XXXL": "",
      "XXXXL": "",
      "NWeight": "",
      "GWeight": ""
  },
  {
      "BoxNum": "97",
      "Color": "144",
      "S": "32",
      "M": "2",
      "L": "",
      "XL": "",
      "XXL": "",
      "XXXL": "",
      "XXXXL": "6",
      "NWeight": "",
      "GWeight": ""
  },
  {
      "BoxNum": "98",
      "Color": "144",
      "S": "",
      "M": "",
      "L": "29",
      "XL": "",
      "XXL": "",
      "XXXL": "",
      "XXXXL": "",
      "NWeight": "",
      "GWeight": ""
  },
  {
      "BoxNum": "99",
      "Color": "144",
      "S": "",
      "M": "",
      "L": "",
      "XL": "20",
      "XXL": "20",
      "XXXL": "",
      "XXXXL": "",
      "NWeight": "",
      "GWeight": ""
  },
  {
      "BoxNum": "100",
      "Color": "144",
      "S": "",
      "M": "",
      "L": "",
      "XL": "",
      "XXL": "",
      "XXXL": "23",
      "XXXXL": "",
      "NWeight": "",
      "GWeight": ""
  },
  {
      "BoxNum": "101",
      "Color": "355",
      "S": "",
      "M": "40",
      "L": "",
      "XL": "",
      "XXL": "",
      "XXXL": "",
      "XXXXL": "",
      "NWeight": "",
      "GWeight": ""
  },
  {
      "BoxNum": "102",
      "Color": "355",
      "S": "",
      "M": "",
      "L": "40",
      "XL": "",
      "XXL": "",
      "XXXL": "",
      "XXXXL": "",
      "NWeight": "",
      "GWeight": ""
  },
  {
      "BoxNum": "103",
      "Color": "355",
      "S": "",
      "M": "",
      "L": "40",
      "XL": "",
      "XXL": "",
      "XXXL": "",
      "XXXXL": "",
      "NWeight": "",
      "GWeight": ""
  },
  {
      "BoxNum": "104",
      "Color": "355",
      "S": "",
      "M": "",
      "L": "",
      "XL": "36",
      "XXL": "",
      "XXXL": "",
      "XXXXL": "",
      "NWeight": "",
      "GWeight": ""
  },
  {
      "BoxNum": "105",
      "Color": "355",
      "S": "",
      "M": "",
      "L": "",
      "XL": "35",
      "XXL": "",
      "XXXL": "",
      "XXXXL": "",
      "NWeight": "",
      "GWeight": ""
  },
  {
      "BoxNum": "106",
      "Color": "355",
      "S": "",
      "M": "",
      "L": "",
      "XL": "",
      "XXL": "36",
      "XXXL": "",
      "XXXXL": "",
      "NWeight": "",
      "GWeight": ""
  },
  {
      "BoxNum": "107",
      "Color": "355",
      "S": "22",
      "M": "20",
      "L": "",
      "XL": "",
      "XXL": "",
      "XXXL": "",
      "XXXXL": "",
      "NWeight": "",
      "GWeight": ""
  },
  {
      "BoxNum": "108",
      "Color": "355",
      "S": "",
      "M": "",
      "L": "",
      "XL": "",
      "XXL": "7",
      "XXXL": "18",
      "XXXXL": "6",
      "NWeight": "",
      "GWeight": ""
  }
]
updateDataByCtn(data);
