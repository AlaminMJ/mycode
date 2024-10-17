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