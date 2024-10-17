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
    const dataEntry = async (daata) => {
      try {
        
      document.getElementById("txtcounter_0").onchange = null;
      for (let d of daata) {
        // Select Order
        if (d.PoNum) {
          selectOptionByText(document.getElementById("cbOrdini_0"), d.PoNum,d);
          await new Promise((resolve) => setTimeout(resolve, 2000));
        }
        // Select Style
        if (d.Style) {
          selectOptionByValue(document.getElementById("cbStyle_0"), d.Style,d);
          await new Promise((resolve) => setTimeout(resolve, 2500));
        }
        //Color
        if (d.Color) {
          selectOrCreateOption(document.getElementById("cbColor_0"), d.Color,d);
          await new Promise((resolve) => setTimeout(resolve, 1000));
        }
        //s size
        if (d.S) {
          document.getElementById("txtorder_size03_0").value = d.S;
          document
            .getElementById("txtorder_size03_0")
            .dispatchEvent(new Event("change", { bubbles: true }));
        }
        //m size
        if (d.M) {
          document.getElementById("txtorder_size04_0").value = d.M;
          document
            .getElementById("txtorder_size04_0")
            .dispatchEvent(new Event("change", { bubbles: true }));
        }
        //l size
        if (d.L) {
          document.getElementById("txtorder_size05_0").value = d.L;
          document
            .getElementById("txtorder_size05_0")
            .dispatchEvent(new Event("change", { bubbles: true }));
        }
        //xl size
        if (d.XL) {
          document.getElementById("txtorder_size06_0").value = d.XL;
          document
            .getElementById("txtorder_size06_0")
            .dispatchEvent(new Event("change", { bubbles: true }));
        }
        //xxl size
        if (d.XXL) {
          document.getElementById("txtorder_size07_0").value = d.XXL;
          document
            .getElementById("txtorder_size07_0")
            .dispatchEvent(new Event("change", { bubbles: true }));
        }
        //3xl size
        if (d.XXXL) {
          document.getElementById("txtorder_size08_0").value = d.XXXL;
          document
            .getElementById("txtorder_size08_0")
            .dispatchEvent(new Event("change", { bubbles: true }));
        }
        //4xl size
        if (d.XXXXL) {
          document.getElementById("txtorder_size09_0").value = d.XXXXL;
          document
            .getElementById("txtorder_size09_0")
            .dispatchEvent(new Event("change", { bubbles: true }));
        }
        // Net Weight
        if (d.NWeight) {
          document.getElementById("txtnet_0").value =formatNumber(d.NWeight);
          document
            .getElementById("txtnet_0")
            .dispatchEvent(new Event("keyup", { bubbles: true }));
        }
        // Gross Weight
        if (d.GWeight) {
          document.getElementById("txtgross_0").value = formatNumber(d.GWeight);
          document
            .getElementById("txtgross_0")
            .dispatchEvent(new Event("keyup", { bubbles: true }));
        }
        // Box Measure
        if (d.BoxMeasure) {
          selectOptionByText(
            document.getElementById("cbBoxMeasure_0"),
            d.BoxMeasure,d
  
          );
          await new Promise((resolve) => setTimeout(resolve, 500));
        }
        // carton no
        if (d.BoxNum) {
          document.getElementById("txtcounter_0").onchange = null;
          document.getElementById("txtcounter_0").value = d.BoxNum;
          document.getElementById("txtcounter_0");
          // .dispatchEvent(new Event("change", { bubbles: true }));
          document.getElementById("txtcounter_0").onchange = null;
        }
        // Save
        document.getElementById("bSaveDettaglio_0").click();
        await new Promise((resolve) => setTimeout(resolve, 2500));
      }
      } catch (error) {
        console.log(error)
      }
    };
    
    let mydata =[
      
  ]
    
  dataEntry(mydata);





//   

async function updateCustomer() {
    
    const inputs = document.querySelectorAll('input[id^="txtcounter_"]');

    for (let input of inputs) {
     
        const parent = input?.parentElement?.parentElement;
 
        const customerSelect= parent.querySelector('select[id^="cbClientSpecial_"]')
        const poSelect= parent.querySelector('select[id^="cbPoClientSpecial_"]')
        customerSelect.value=13            
        customerSelect.dispatchEvent(new Event('change', { bubbles: true }))
        await new Promise((resolve) => setTimeout(resolve, 2000));
        poSelect.value=3199
        poSelect.dispatchEvent(new Event('change', { bubbles: true }))
        //Save
         parent.querySelector('[id^="bSaveDettaglio_"]').click();
        await new Promise((resolve) => setTimeout(resolve, 500));
      }
    }
  
    updateCustomer()


    async function updateweight() {

        const inputs = document.querySelectorAll('input[id^="txtcounter_"]');
    
        for (let input of inputs) {
         
            const parent = input?.parentElement?.parentElement?.nextElementSibling;
               // Net Weight
   
        parent.querySelector('input[id^="txtnet_"]').value = 0;
        parent
          .querySelector('input[id^="txtnet_"]')
          .dispatchEvent(new Event("keyup", { bubbles: true }));
    
      // Gross Weight
     
        parent.querySelector('input[id^="txtgross_"]').value = 0;
        parent
          .querySelector('input[id^="txtgross_"]')
          .dispatchEvent(new Event("keyup", { bubbles: true }));
     
          
            //Save
             parent.previousElementSibling.querySelector('[id^="bSaveDettaglio_"]').click();
            await new Promise((resolve) => setTimeout(resolve, 500));
          }
        }
      
        updateweight()


        //----------------------------------------------------------------
        async function updateweight() {
            function formatNumber(value) {
                // 1. Replace comma with dot to handle European-style decimal input
                const sanitizedValue = value.replace(',', '.');
              
                // 2. Convert to a floating-point number
                const num = parseFloat(sanitizedValue);
              
                // 3. Check if the conversion was successful
                if (isNaN(num)) {
                  throw new Error("Invalid input: Please provide a valid number.");
                }
              
                // 4. Round to one decimal place and replace the dot with a comma
                return num.toFixed(2).replace('.', ',');
              }
            const inputs = document.querySelectorAll('input[id^="txtcounter_"]');
        
            for (let input of inputs) {
             
                const parent = input?.parentElement?.parentElement?.nextElementSibling;
                   // Net Weight
       
           parent.querySelector('input[id^="txtnet_"]').value=formatNumber(parent.querySelector('input[id^="txtnet_"]').value)
            parent
              .querySelector('input[id^="txtnet_"]')
              .dispatchEvent(new Event("keyup", { bubbles: true }));
        
          // Gross Weight
         
          parent.querySelector('input[id^="txtgross_"]').value=formatNumber(parent.querySelector('input[id^="txtgross_"]').value)
            parent
              .querySelector('input[id^="txtgross_"]')
              .dispatchEvent(new Event("keyup", { bubbles: true }));
         
              
                //Save
                 parent.previousElementSibling.querySelector('[id^="bSaveDettaglio_"]').click();
                await new Promise((resolve) => setTimeout(resolve, 500));
              }
            }
          
            updateweight()