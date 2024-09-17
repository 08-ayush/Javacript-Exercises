function displayString() {
    const jsonInput = document.getElementById("jsonInput").value;
    const stringResult = document.getElementById("stringResult");
    try {
      const obj = JSON.parse(jsonInput);
      const stringProps = getObjectStringProperties(obj);
  
      stringResult.innerHTML = `<p>String Properties:</p><code><pre>${JSON.stringify(
        stringProps,
        null,
        2
      )}</pre></code>`;
    } catch (error) {
      stringResult.innerText = "Error: Please enter a valid JSON object.";
    }
  }
  
  function getObjectStringProperties(obj) {
    const stringProps = {};
    for (const key in obj) {
      if (typeof obj[key] === "string") {
        stringProps[key] = obj[key];
      }
    }
    return stringProps;
  }
  