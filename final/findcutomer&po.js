const f = async (findPo) => {
  const customerSelect = document.getElementById("cbClientSpecial_0");
  const customerPOSelect = document.getElementById("cbPoClientSpecial_0");

  // Convert the options collection to an array
  const customerOptions = Array.from(customerSelect.options);

  // Helper function to create a delay
  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  // Loop through the customer options and set each as selected with a delay
  for (const item of customerOptions) {
    item.selected = true; // Select the customer
    customerSelect.dispatchEvent(new Event("change")); // Trigger change event

    // Wait for the fetch request to update PO options (delay for now)
    await delay(3000); // Adjust this delay depending on your fetch time

    // Fetch PO options again to see the updated data
    const customerPOOptions = Array.from(customerPOSelect.options);

    // Loop through PO options to find the specified PO
    for (const po of customerPOOptions) {
      // Log PO option text and value

      // Check if the PO matches the one we are looking for
      if (po.textContent === findPo) {
        console.log(`Found PO: ${findPo}`);
        po.selected = true;
        customerPOSelect.dispatchEvent(new Event("change")); // Trigger change event
        console.log("Customer", item.textContent, item.value);
        console.log("PO", po.textContent, po.value);
        return; // Stop the loop if the PO is found
      }
    }

    // Wait for 2 seconds before moving to the next customer
    await delay(500);
  }

  console.log("PO not found.");
};

// Example usage: Call f with the PO name you are looking for
f("53356"); // Replace with the actual PO name you're searching for
