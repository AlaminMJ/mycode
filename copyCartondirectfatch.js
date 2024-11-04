const copy = (id, num) => {
  const loginUrl =
    "https://gate.incomitaly.com/PackingList_outlet_new/CopiaDettaglio";
  const formData = new FormData();
  formData.append("id", id);
  let count = 1;
  let intervalId;
  intervalId = setInterval(() => {
    fetch(loginUrl, {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        console.dir(response);
      })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
    if (count === num) {
      clearInterval(intervalId);
      console.log("Done");
    }
    count++;
  }, 2000);
};
copy();
