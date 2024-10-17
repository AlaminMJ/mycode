function selectOptionByText(selectElement, textToMatch,data=undefined) {
    let isfound= false
      for (let option of selectElement.options) {
        if (option.text?.trim() == textToMatch?.trim()) {
          option.selected = true;
          isfound=true
          selectElement.dispatchEvent(new Event("change", { bubbles: true }));
          break; // Stop once the option is found
        }
      }
      if(!isfound){
        console.log(`${textToMatch} is not found box ${data.BoxNum}`)
      }
    }
  
    function formatNumber(value) {
      // 1. Ensure the input is a number
      const num = parseFloat(value);  
      // 2. Check if the conversion was successful
      if (isNaN(num)) {
        throw new Error("Invalid input: Please provide a valid number.");
      }  
      // 3. Round to one decimal place and replace the dot with a comma
      return num.toFixed(2).replace('.', ',');
    }
    
  
    
    function selectOrCreateOption(selectElement, valueToMatch,data=undefined) {
      let optionFound = Array.from(selectElement.options).some(d=>d.value == valueToMatch);
      // Check if the option with the given value exists
      if(optionFound){ 
        for (let option of selectElement.options) {
        if (option.value == valueToMatch) {
          option.selected = true;        
          // Dispatch change event
          selectElement.dispatchEvent(new Event("change", { bubbles: true }));
          return;
          // Stop once the option is found
        }
      }}
    
      // If the option was not found, ask the user if they want to create it
      if (!optionFound) {
          console.log(`${valueToMatch} COLOR is not match on ${data.BoxNum}`)
          const newOption = document.createElement("option");
          newOption.value = valueToMatch;
          newOption.text = valueToMatch;
          selectElement.add(newOption);
          newOption.selected = true;
          selectElement.dispatchEvent(new Event("change", { bubbles: true }));      
      }
    }
    
    function selectOptionByValue(selectElement, valueToMatch,data=undefined) {
      let isfound = false;
      for (let option of selectElement.options) {
        if (option.value == valueToMatch) {
          option.selected = true;
          isfound= true;
          selectElement.dispatchEvent(new Event("change", { bubbles: true }));
          break;
        }
      }
      if(!isfound){
        console.log(`${valueToMatch} is not found box ${data.BoxNum}`)
      }
    }
    document.getElementById("txtcounter_0").onchange = null;
  
  async function updateDataByCtn(mydata) {
      // Get all input elements with IDs starting with 'txtctn_'
      const inputs = document.querySelectorAll('input[id^="txtcounter_"]');
      for (let input of inputs) {
        input.onchange = null;
        const d = mydata.find((item) => item.BoxNum === input.value);
        if (d) {
          const parent = input?.parentElement?.parentElement;
          const nextSibling = parent?.nextElementSibling;
    
          // Select Order
          if (d.PoNum) {
            selectOptionByText(
              parent.querySelector('select[id^="cbOrdini_"]'),
              d.PoNum,
              d,
            );
            await new Promise((resolve) => setTimeout(resolve, 2000));
          }
          // Select Style
          if (d.Style) {
            selectOptionByValue(
              parent.querySelector('select[id^="cbStyle_"]'),
              d.Style,
              d,
            );
            await new Promise((resolve) => setTimeout(resolve, 2000));
          }
          //   Color
          if (d.Color) {
            selectOrCreateOption(
              nextSibling.querySelector('select[id^="cbColor_"]'),
              d.Color,
              d,
            );
            await new Promise((resolve) => setTimeout(resolve, 1000));
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
            nextSibling.querySelector('input[id^="txtorder_size07_"]').value = d.XXL;
            nextSibling
              .querySelector('input[id^="txtorder_size07_"]')
              .dispatchEvent(new Event("change", { bubbles: true }));
          }
          //3xl size
          if (d.XXXL) {
            nextSibling.querySelector('input[id^="txtorder_size08_"]').value = d.XXXL;
            nextSibling
              .querySelector('input[id^="txtorder_size08_"]')
              .dispatchEvent(new Event("change", { bubbles: true }));
          }
          //4xl size
          if (d.XXXXL) {
            nextSibling.querySelector('input[id^="txtorder_size09_"]').value = d.XXXXL;
            nextSibling
              .querySelector('input[id^="txtorder_size09_"]')
              .dispatchEvent(new Event("change", { bubbles: true }));
          }
          // Net Weight
          if (d.NWeight) {
            nextSibling.querySelector('input[id^="txtnet_"]').value =formatNumber(d.NWeight);
            nextSibling
              .querySelector('input[id^="txtnet_"]')
              .dispatchEvent(new Event("keyup", { bubbles: true }));
          }
          // Gross Weight
          if (d.GWeight) {
            nextSibling.querySelector('input[id^="txtgross_"]').value =formatNumber(d.GWeight);
            nextSibling
              .querySelector('input[id^="txtgross_"]')
              .dispatchEvent(new Event("keyup", { bubbles: true }));
          }
          // Box Measure
          if (d.BoxMeasure) {
            selectOptionByText(
              nextSibling.querySelector('select[id^="cbBoxMeasure_"]'),
              d.BoxMeasure,
              d,
            );
            await new Promise((resolve) => setTimeout(resolve, 1000));
          }
          // carton no
          if (d.CBoxNum) {
            input.onchange = null;
            input.value = d.CBoxNum;
            //parent.querySelector("txtcounter_0")
            // .dispatchEvent(new Event("change", { bubbles: true }));
            input.onchange = null;
          }
          //Save
          //   parent.querySelector('[id^="bSaveDettaglio_"]').click();
          await new Promise((resolve) => setTimeout(resolve, 2000));
        }
      }
    }
    