const f = async () => {
  const OrderSelect = document.getElementById("cbClientSpecial_0");
  const styleSelect = document.getElementById("cbPoClientSpecial_0");
  const colorSelect = document.getElementById("cbPoClientSpecial_0");

  // Helper function to create a delay
  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  // Convert the options collection to an array
  const orderOptions = Array.from(OrderSelect.options);
  // Initialize an array to store results
  const result = [];
  // Loop through all customer options
  for (const order of orderOptions) {
    order.selected = true; // Select the customer
    OrderSelect.dispatchEvent(new Event("change")); // Trigger change event

    // Wait for the fetch request to update PO options
    await delay(2000); // Adjust this delay depending on your fetch time

    // Fetch updated PO options
    const styleOptions = Array.from(styleSelect.options);

    // Loop through all customer options
    for (const style of styleOptions) {
      style.selected = true; // Select the customer
      styleSelect.dispatchEvent(new Event("change")); // Trigger change event

      // Wait for the fetch request to update PO options
      await delay(2000); // Adjust this delay depending on your fetch time

      // Fetch updated PO options
      const colorOptions = Array.from(colorSelect.options);
      // Collect all PO data for this customer
      const color = colorOptions.map((po) => ({
        name: po.textContent,
        value: po.value,
      }));

      // Add customer and their POs to the result array
      result.push({
        Order: { name: order.textContent, value: order.value },
        style: { name: style.textContent, value: style.value },
        color,
      });

      // Wait before moving to the next customer
      await delay(100);
    }

    return result;
  }
};

f().then((res) => {
  const d = res.flatMap((entry) =>
    entry.pos.map((color) => ({
      OrderNumber: entry.order.name,
      OrderValue: entry.order.value,
      styleName: entry.order.name,
      StyleValue: entry.order.value,
      colorName: color.name,
      colorValue: color.value,
    }))
  );
  console.log(d);
});
