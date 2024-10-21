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
  const inputs = document.querySelectorAll('input[id^="txtcounter_"]');
  for (let input of inputs) {
    input.onchange = null;
    const d = mydata.find((item) => item.BoxNum === input.value);
    if (d) {
      const parent = input?.parentElement?.parentElement;
      const nextSibling = parent?.nextElementSibling;

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

      //Save
      //   parent.querySelector('[id^="bSaveDettaglio_"]').click();
      // await new Promise((resolve) => setTimeout(resolve, 2000));
    }
  }
}
const data = [
  {
      "BoxNum": "15",
      "NWeight": "10.1",
      "GWeight": "13.1"
  },
  {
      "BoxNum": "16",
      "NWeight": "10.5",
      "GWeight": "13.5"
  },
  {
      "BoxNum": "17",
      "NWeight": "10.5",
      "GWeight": "13.5"
  },
  {
      "BoxNum": "18",
      "NWeight": "11.4",
      "GWeight": "14.4"
  },
  {
      "BoxNum": "19",
      "NWeight": "11.4",
      "GWeight": "14.4"
  },
  {
      "BoxNum": "20",
      "NWeight": "9.9",
      "GWeight": "12.9"
  },
  {
      "BoxNum": "21",
      "NWeight": "8.2",
      "GWeight": "11.2"
  },
  {
      "BoxNum": "22",
      "NWeight": "12.6",
      "GWeight": "15.6"
  },
  {
      "BoxNum": "23",
      "NWeight": "12.6",
      "GWeight": "15.6"
  },
  {
      "BoxNum": "24",
      "NWeight": "10.5",
      "GWeight": "13.5"
  },
  {
      "BoxNum": "25",
      "NWeight": "10.5",
      "GWeight": "13.5"
  },
  {
      "BoxNum": "26",
      "NWeight": "10.5",
      "GWeight": "13.5"
  },
  {
      "BoxNum": "27",
      "NWeight": "10.5",
      "GWeight": "13.5"
  },
  {
      "BoxNum": "28",
      "NWeight": "11.4",
      "GWeight": "14.4"
  },
  {
      "BoxNum": "29",
      "NWeight": "11.4",
      "GWeight": "14.4"
  },
  {
      "BoxNum": "30",
      "NWeight": "11.4",
      "GWeight": "14.4"
  },
  {
      "BoxNum": "31",
      "NWeight": "11.4",
      "GWeight": "14.4"
  },
  {
      "BoxNum": "32",
      "NWeight": "9.9",
      "GWeight": "12.9"
  },
  {
      "BoxNum": "33",
      "NWeight": "9.9",
      "GWeight": "12.9"
  },
  {
      "BoxNum": "34",
      "NWeight": "9.5",
      "GWeight": "12.5"
  },
  {
      "BoxNum": "35",
      "NWeight": "8.4",
      "GWeight": "11.4"
  },
  {
      "BoxNum": "36",
      "NWeight": "10.5",
      "GWeight": "13.5"
  },
  {
      "BoxNum": "37",
      "NWeight": "11.4",
      "GWeight": "14.4"
  },
  {
      "BoxNum": "38",
      "NWeight": "10.1",
      "GWeight": "13.1"
  },
  {
      "BoxNum": "39",
      "NWeight": "11.0",
      "GWeight": "14.0"
  },
  {
      "BoxNum": "40",
      "NWeight": "7.7",
      "GWeight": "10.7"
  },
  {
      "BoxNum": "41",
      "NWeight": "8.4",
      "GWeight": "11.4"
  },
  {
      "BoxNum": "42",
      "NWeight": "8.4",
      "GWeight": "11.4"
  },
  {
      "BoxNum": "43",
      "NWeight": "10.4",
      "GWeight": "13.4"
  },
  {
      "BoxNum": "44",
      "NWeight": "10.5",
      "GWeight": "13.5"
  },
  {
      "BoxNum": "45",
      "NWeight": "11.4",
      "GWeight": "14.4"
  },
  {
      "BoxNum": "46",
      "NWeight": "9.6",
      "GWeight": "12.6"
  },
  {
      "BoxNum": "47",
      "NWeight": "6.9",
      "GWeight": "9.9"
  },
  {
      "BoxNum": "48",
      "NWeight": "7.5",
      "GWeight": "10.5"
  },
  {
      "BoxNum": "49",
      "NWeight": "10.5",
      "GWeight": "13.5"
  },
  {
      "BoxNum": "50",
      "NWeight": "11.4",
      "GWeight": "14.4"
  },
  {
      "BoxNum": "51",
      "NWeight": "9.2",
      "GWeight": "12.2"
  },
  {
      "BoxNum": "52",
      "NWeight": "8.5",
      "GWeight": "11.5"
  },
  {
      "BoxNum": "53",
      "NWeight": "10.3",
      "GWeight": "13.3"
  },
  {
      "BoxNum": "54",
      "NWeight": "7.7",
      "GWeight": "10.7"
  },
  {
      "BoxNum": "55",
      "NWeight": "8.4",
      "GWeight": "11.4"
  },
  {
      "BoxNum": "56",
      "NWeight": "8.4",
      "GWeight": "11.4"
  },
  {
      "BoxNum": "57",
      "NWeight": "7.7",
      "GWeight": "10.7"
  },
  {
      "BoxNum": "58",
      "NWeight": "8.4",
      "GWeight": "11.4"
  },
  {
      "BoxNum": "59",
      "NWeight": "8.4",
      "GWeight": "11.4"
  },
  {
      "BoxNum": "60",
      "NWeight": "10.1",
      "GWeight": "13.1"
  },
  {
      "BoxNum": "61",
      "NWeight": "10.1",
      "GWeight": "13.1"
  },
  {
      "BoxNum": "62",
      "NWeight": "10.5",
      "GWeight": "13.5"
  },
  {
      "BoxNum": "63",
      "NWeight": "10.5",
      "GWeight": "13.5"
  },
  {
      "BoxNum": "64",
      "NWeight": "10.5",
      "GWeight": "13.5"
  },
  {
      "BoxNum": "65",
      "NWeight": "10.5",
      "GWeight": "13.5"
  },
  {
      "BoxNum": "66",
      "NWeight": "11.4",
      "GWeight": "14.4"
  },
  {
      "BoxNum": "67",
      "NWeight": "11.4",
      "GWeight": "14.4"
  },
  {
      "BoxNum": "68",
      "NWeight": "11.4",
      "GWeight": "14.4"
  },
  {
      "BoxNum": "69",
      "NWeight": "11.4",
      "GWeight": "14.4"
  },
  {
      "BoxNum": "70",
      "NWeight": "11.6",
      "GWeight": "14.6"
  },
  {
      "BoxNum": "71",
      "NWeight": "11.6",
      "GWeight": "14.6"
  },
  {
      "BoxNum": "72",
      "NWeight": "10.1",
      "GWeight": "13.1"
  },
  {
      "BoxNum": "73",
      "NWeight": "10.5",
      "GWeight": "13.5"
  },
  {
      "BoxNum": "74",
      "NWeight": "10.5",
      "GWeight": "13.5"
  },
  {
      "BoxNum": "75",
      "NWeight": "11.4",
      "GWeight": "14.4"
  },
  {
      "BoxNum": "76",
      "NWeight": "11.4",
      "GWeight": "14.4"
  },
  {
      "BoxNum": "77",
      "NWeight": "9.9",
      "GWeight": "12.9"
  },
  {
      "BoxNum": "78",
      "NWeight": "8.2",
      "GWeight": "11.2"
  },
  {
      "BoxNum": "79",
      "NWeight": "10.1",
      "GWeight": "13.1"
  },
  {
      "BoxNum": "80",
      "NWeight": "10.1",
      "GWeight": "13.1"
  },
  {
      "BoxNum": "81",
      "NWeight": "10.5",
      "GWeight": "13.5"
  },
  {
      "BoxNum": "82",
      "NWeight": "10.5",
      "GWeight": "13.5"
  },
  {
      "BoxNum": "83",
      "NWeight": "10.5",
      "GWeight": "13.5"
  },
  {
      "BoxNum": "84",
      "NWeight": "10.5",
      "GWeight": "13.5"
  },
  {
      "BoxNum": "85",
      "NWeight": "10.5",
      "GWeight": "13.5"
  },
  {
      "BoxNum": "86",
      "NWeight": "11.4",
      "GWeight": "14.4"
  },
  {
      "BoxNum": "87",
      "NWeight": "11.4",
      "GWeight": "14.4"
  },
  {
      "BoxNum": "88",
      "NWeight": "11.4",
      "GWeight": "14.4"
  },
  {
      "BoxNum": "89",
      "NWeight": "11.4",
      "GWeight": "14.4"
  },
  {
      "BoxNum": "90",
      "NWeight": "11.4",
      "GWeight": "14.4"
  },
  {
      "BoxNum": "91",
      "NWeight": "9.9",
      "GWeight": "12.9"
  },
  {
      "BoxNum": "92",
      "NWeight": "9.9",
      "GWeight": "12.9"
  },
  {
      "BoxNum": "93",
      "NWeight": "5.1",
      "GWeight": "8.1"
  },
  {
      "BoxNum": "94",
      "NWeight": "9.4",
      "GWeight": "12.4"
  },
  {
      "BoxNum": "95",
      "NWeight": "12.6",
      "GWeight": "15.6"
  },
  {
      "BoxNum": "96",
      "NWeight": "10.5",
      "GWeight": "13.5"
  },
  {
      "BoxNum": "97",
      "NWeight": "10.5",
      "GWeight": "13.5"
  },
  {
      "BoxNum": "98",
      "NWeight": "11.4",
      "GWeight": "14.4"
  },
  {
      "BoxNum": "99",
      "NWeight": "11.4",
      "GWeight": "14.4"
  },
  {
      "BoxNum": "100",
      "NWeight": "9.9",
      "GWeight": "12.9"
  },
  {
      "BoxNum": "101",
      "NWeight": "8.2",
      "GWeight": "11.2"
  },
  {
      "BoxNum": "102",
      "NWeight": "10.1",
      "GWeight": "13.1"
  },
  {
      "BoxNum": "103",
      "NWeight": "10.1",
      "GWeight": "13.1"
  },
  {
      "BoxNum": "104",
      "NWeight": "10.1",
      "GWeight": "13.1"
  },
  {
      "BoxNum": "105",
      "NWeight": "10.5",
      "GWeight": "13.5"
  },
  {
      "BoxNum": "106",
      "NWeight": "10.5",
      "GWeight": "13.5"
  },
  {
      "BoxNum": "107",
      "NWeight": "10.5",
      "GWeight": "13.5"
  },
  {
      "BoxNum": "108",
      "NWeight": "10.5",
      "GWeight": "13.5"
  },
  {
      "BoxNum": "109",
      "NWeight": "10.5",
      "GWeight": "13.5"
  },
  {
      "BoxNum": "110",
      "NWeight": "10.5",
      "GWeight": "13.5"
  },
  {
      "BoxNum": "111",
      "NWeight": "9.1",
      "GWeight": "12.1"
  },
  {
      "BoxNum": "112",
      "NWeight": "11.4",
      "GWeight": "14.4"
  },
  {
      "BoxNum": "113",
      "NWeight": "11.4",
      "GWeight": "14.4"
  },
  {
      "BoxNum": "114",
      "NWeight": "11.4",
      "GWeight": "14.4"
  },
  {
      "BoxNum": "115",
      "NWeight": "11.4",
      "GWeight": "14.4"
  },
  {
      "BoxNum": "116",
      "NWeight": "11.4",
      "GWeight": "14.4"
  },
  {
      "BoxNum": "117",
      "NWeight": "11.4",
      "GWeight": "14.4"
  },
  {
      "BoxNum": "118",
      "NWeight": "9.9",
      "GWeight": "12.9"
  },
  {
      "BoxNum": "119",
      "NWeight": "9.9",
      "GWeight": "12.9"
  },
  {
      "BoxNum": "120",
      "NWeight": "9.9",
      "GWeight": "12.9"
  },
  {
      "BoxNum": "121",
      "NWeight": "9.9",
      "GWeight": "12.9"
  },
  {
      "BoxNum": "122",
      "NWeight": "9.4",
      "GWeight": "12.4"
  },
  {
      "BoxNum": "123",
      "NWeight": "10.1",
      "GWeight": "13.1"
  },
  {
      "BoxNum": "124",
      "NWeight": "10.1",
      "GWeight": "13.1"
  },
  {
      "BoxNum": "125",
      "NWeight": "9.6",
      "GWeight": "12.6"
  },
  {
      "BoxNum": "126",
      "NWeight": "10.5",
      "GWeight": "13.5"
  },
  {
      "BoxNum": "127",
      "NWeight": "10.5",
      "GWeight": "13.5"
  },
  {
      "BoxNum": "128",
      "NWeight": "10.5",
      "GWeight": "13.5"
  },
  {
      "BoxNum": "129",
      "NWeight": "10.5",
      "GWeight": "13.5"
  },
  {
      "BoxNum": "130",
      "NWeight": "10.5",
      "GWeight": "13.5"
  },
  {
      "BoxNum": "131",
      "NWeight": "11.3",
      "GWeight": "14.3"
  },
  {
      "BoxNum": "132",
      "NWeight": "11.4",
      "GWeight": "14.4"
  },
  {
      "BoxNum": "133",
      "NWeight": "11.4",
      "GWeight": "14.4"
  },
  {
      "BoxNum": "134",
      "NWeight": "11.4",
      "GWeight": "14.4"
  },
  {
      "BoxNum": "135",
      "NWeight": "11.4",
      "GWeight": "14.4"
  },
  {
      "BoxNum": "136",
      "NWeight": "11.4",
      "GWeight": "14.4"
  },
  {
      "BoxNum": "137",
      "NWeight": "12.5",
      "GWeight": "15.5"
  },
  {
      "BoxNum": "138",
      "NWeight": "9.9",
      "GWeight": "12.9"
  },
  {
      "BoxNum": "139",
      "NWeight": "9.9",
      "GWeight": "12.9"
  },
  {
      "BoxNum": "140",
      "NWeight": "9.9",
      "GWeight": "12.9"
  },
  {
      "BoxNum": "141",
      "NWeight": "10.1",
      "GWeight": "13.1"
  },
  {
      "BoxNum": "142",
      "NWeight": "10.5",
      "GWeight": "13.5"
  },
  {
      "BoxNum": "143",
      "NWeight": "10.5",
      "GWeight": "13.5"
  },
  {
      "BoxNum": "144",
      "NWeight": "10.1",
      "GWeight": "13.1"
  },
  {
      "BoxNum": "145",
      "NWeight": "11.4",
      "GWeight": "14.4"
  },
  {
      "BoxNum": "146",
      "NWeight": "11.4",
      "GWeight": "14.4"
  },
  {
      "BoxNum": "147",
      "NWeight": "11.0",
      "GWeight": "14.0"
  },
  {
      "BoxNum": "148",
      "NWeight": "9.9",
      "GWeight": "12.9"
  },
  {
      "BoxNum": "149",
      "NWeight": "13.0",
      "GWeight": "16.0"
  },
  {
      "BoxNum": "150",
      "NWeight": "10.1",
      "GWeight": "13.1"
  },
  {
      "BoxNum": "151",
      "NWeight": "10.5",
      "GWeight": "13.5"
  },
  {
      "BoxNum": "152",
      "NWeight": "10.5",
      "GWeight": "13.5"
  },
  {
      "BoxNum": "153",
      "NWeight": "10.1",
      "GWeight": "13.1"
  },
  {
      "BoxNum": "154",
      "NWeight": "11.4",
      "GWeight": "14.4"
  },
  {
      "BoxNum": "155",
      "NWeight": "11.4",
      "GWeight": "14.4"
  },
  {
      "BoxNum": "156",
      "NWeight": "11.0",
      "GWeight": "14.0"
  },
  {
      "BoxNum": "157",
      "NWeight": "9.9",
      "GWeight": "12.9"
  },
  {
      "BoxNum": "158",
      "NWeight": "13.0",
      "GWeight": "16.0"
  },
  {
      "BoxNum": "159",
      "NWeight": "10.1",
      "GWeight": "13.1"
  },
  {
      "BoxNum": "160",
      "NWeight": "10.1",
      "GWeight": "13.1"
  },
  {
      "BoxNum": "161",
      "NWeight": "10.5",
      "GWeight": "13.5"
  },
  {
      "BoxNum": "162",
      "NWeight": "10.5",
      "GWeight": "13.5"
  },
  {
      "BoxNum": "163",
      "NWeight": "10.5",
      "GWeight": "13.5"
  },
  {
      "BoxNum": "164",
      "NWeight": "10.5",
      "GWeight": "13.5"
  },
  {
      "BoxNum": "165",
      "NWeight": "10.5",
      "GWeight": "13.5"
  },
  {
      "BoxNum": "166",
      "NWeight": "11.4",
      "GWeight": "14.4"
  },
  {
      "BoxNum": "167",
      "NWeight": "11.4",
      "GWeight": "14.4"
  },
  {
      "BoxNum": "168",
      "NWeight": "11.4",
      "GWeight": "14.4"
  },
  {
      "BoxNum": "169",
      "NWeight": "11.4",
      "GWeight": "14.4"
  },
  {
      "BoxNum": "170",
      "NWeight": "11.4",
      "GWeight": "14.4"
  },
  {
      "BoxNum": "171",
      "NWeight": "9.9",
      "GWeight": "12.9"
  },
  {
      "BoxNum": "172",
      "NWeight": "9.9",
      "GWeight": "12.9"
  },
  {
      "BoxNum": "173",
      "NWeight": "9.9",
      "GWeight": "12.9"
  },
  {
      "BoxNum": "174",
      "NWeight": "9.4",
      "GWeight": "12.4"
  },
  {
      "BoxNum": "175",
      "NWeight": "7.7",
      "GWeight": "10.7"
  },
  {
      "BoxNum": "176",
      "NWeight": "10.1",
      "GWeight": "13.1"
  },
  {
      "BoxNum": "177",
      "NWeight": "10.5",
      "GWeight": "13.5"
  },
  {
      "BoxNum": "178",
      "NWeight": "10.5",
      "GWeight": "13.5"
  },
  {
      "BoxNum": "179",
      "NWeight": "10.1",
      "GWeight": "13.1"
  },
  {
      "BoxNum": "180",
      "NWeight": "11.4",
      "GWeight": "14.4"
  },
  {
      "BoxNum": "181",
      "NWeight": "11.4",
      "GWeight": "14.4"
  },
  {
      "BoxNum": "182",
      "NWeight": "11.0",
      "GWeight": "14.0"
  },
  {
      "BoxNum": "183",
      "NWeight": "9.9",
      "GWeight": "12.9"
  },
  {
      "BoxNum": "184",
      "NWeight": "13.0",
      "GWeight": "16.0"
  },
  {
      "BoxNum": "185",
      "NWeight": "7.4",
      "GWeight": "10.4"
  },
  {
      "BoxNum": "186",
      "NWeight": "10.5",
      "GWeight": "13.5"
  },
  {
      "BoxNum": "187",
      "NWeight": "11.4",
      "GWeight": "14.4"
  },
  {
      "BoxNum": "188",
      "NWeight": "8.5",
      "GWeight": "11.5"
  },
  {
      "BoxNum": "189",
      "NWeight": "10.3",
      "GWeight": "13.3"
  },
  {
      "BoxNum": "190",
      "NWeight": "10.1",
      "GWeight": "13.1"
  },
  {
      "BoxNum": "191",
      "NWeight": "10.5",
      "GWeight": "13.5"
  },
  {
      "BoxNum": "192",
      "NWeight": "10.5",
      "GWeight": "13.5"
  },
  {
      "BoxNum": "193",
      "NWeight": "10.5",
      "GWeight": "13.5"
  },
  {
      "BoxNum": "194",
      "NWeight": "11.4",
      "GWeight": "14.4"
  },
  {
      "BoxNum": "195",
      "NWeight": "11.4",
      "GWeight": "14.4"
  },
  {
      "BoxNum": "196",
      "NWeight": "11.4",
      "GWeight": "14.4"
  },
  {
      "BoxNum": "197",
      "NWeight": "9.9",
      "GWeight": "12.9"
  },
  {
      "BoxNum": "198",
      "NWeight": "9.6",
      "GWeight": "12.6"
  },
  {
      "BoxNum": "199",
      "NWeight": "6.8",
      "GWeight": "9.8"
  },
  {
      "BoxNum": "200",
      "NWeight": "7.7",
      "GWeight": "10.7"
  },
  {
      "BoxNum": "201",
      "NWeight": "7.4",
      "GWeight": "10.4"
  },
  {
      "BoxNum": "202",
      "NWeight": "10.5",
      "GWeight": "13.5"
  },
  {
      "BoxNum": "203",
      "NWeight": "11.4",
      "GWeight": "14.4"
  },
  {
      "BoxNum": "204",
      "NWeight": "8.5",
      "GWeight": "11.5"
  },
  {
      "BoxNum": "205",
      "NWeight": "10.3",
      "GWeight": "13.3"
  },
  {
      "BoxNum": "206",
      "NWeight": "10.1",
      "GWeight": "13.1"
  },
  {
      "BoxNum": "207",
      "NWeight": "10.5",
      "GWeight": "13.5"
  },
  {
      "BoxNum": "208",
      "NWeight": "10.5",
      "GWeight": "13.5"
  },
  {
      "BoxNum": "209",
      "NWeight": "11.4",
      "GWeight": "14.4"
  },
  {
      "BoxNum": "210",
      "NWeight": "11.4",
      "GWeight": "14.4"
  },
  {
      "BoxNum": "211",
      "NWeight": "9.9",
      "GWeight": "12.9"
  },
  {
      "BoxNum": "212",
      "NWeight": "10.2",
      "GWeight": "13.2"
  },
  {
      "BoxNum": "213",
      "NWeight": "13.2",
      "GWeight": "16.2"
  },
  {
      "BoxNum": "214",
      "NWeight": "10.1",
      "GWeight": "13.1"
  },
  {
      "BoxNum": "215",
      "NWeight": "10.5",
      "GWeight": "13.5"
  },
  {
      "BoxNum": "216",
      "NWeight": "10.5",
      "GWeight": "13.5"
  },
  {
      "BoxNum": "217",
      "NWeight": "11.4",
      "GWeight": "14.4"
  },
  {
      "BoxNum": "218",
      "NWeight": "11.4",
      "GWeight": "14.4"
  },
  {
      "BoxNum": "219",
      "NWeight": "9.9",
      "GWeight": "12.9"
  },
  {
      "BoxNum": "220",
      "NWeight": "12.3",
      "GWeight": "15.3"
  },
  {
      "BoxNum": "221",
      "NWeight": "9.7",
      "GWeight": "12.7"
  },
  {
      "BoxNum": "222",
      "NWeight": "10.6",
      "GWeight": "13.6"
  },
  {
      "BoxNum": "223",
      "NWeight": "7.4",
      "GWeight": "10.4"
  },
  {
      "BoxNum": "224",
      "NWeight": "10.5",
      "GWeight": "13.5"
  },
  {
      "BoxNum": "225",
      "NWeight": "11.4",
      "GWeight": "14.4"
  },
  {
      "BoxNum": "226",
      "NWeight": "8.5",
      "GWeight": "11.5"
  },
  {
      "BoxNum": "227",
      "NWeight": "10.3",
      "GWeight": "13.3"
  }
]
updateDataByCtn(data)