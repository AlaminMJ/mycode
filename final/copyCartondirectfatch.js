const copy = (id, num=1) => {
  if (!id || num <= 0) return console.error("Invalid parameters");

  const loginUrl =
    "https://gate.incomitaly.com/PackingList_outlet_new/CopiaDettaglio";
  const formData = new FormData();
  formData.append("id", id);

  const makeRequest = (count = 1) => {
    fetch(loginUrl, { method: "POST", body: formData })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return;
      })
      .catch((error) => console.error("Fetch error:", error));

    if (count < num) setTimeout(() => makeRequest(count + 1), 100);
    else console.log("Done");
  };

  makeRequest();
};

copy(id,1);
