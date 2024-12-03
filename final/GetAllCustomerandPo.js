const f = async () => {
  const customerSelect = document.getElementById("cbClientSpecial_0");
  const customerPOSelect = document.getElementById("cbPoClientSpecial_0");

  // Convert the options collection to an array
  const customerOptions = Array.from(customerSelect.options);

  // Helper function to create a delay
  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  // Initialize an array to store results
  const result = [];

  // Loop through all customer options
  for (const customer of customerOptions) {
    customer.selected = true; // Select the customer
    customerSelect.dispatchEvent(new Event("change")); // Trigger change event

    // Wait for the fetch request to update PO options
    await delay(3000); // Adjust this delay depending on your fetch time

    // Fetch updated PO options
    const customerPOOptions = Array.from(customerPOSelect.options);

    // Collect all PO data for this customer
    const poData = customerPOOptions.map((po) => ({
      name: po.textContent,
      value: po.value,
    }));

    // Add customer and their POs to the result array
    result.push({
      customer: { name: customer.textContent, value: customer.value },
      pos: poData,
    });

    // Wait before moving to the next customer
    await delay(500);
  }

  return result;
};

// Example usage: Call the function and log the result
const data = f().then((res) => {
  const d = res.flatMap((entry) =>
    entry.pos.map((po) => ({
      CustomerName: entry.customer.name,
      CustomerValue: entry.customer.value,
      POName: po.name,
      POValue: po.value,
    }))
  );
  console.log(d);
});

// \\server\D\MASURA\2024-\283+284+285-INVOICE PI-1229+1291 GI TEX SAMPLE
