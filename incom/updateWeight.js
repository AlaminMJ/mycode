
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