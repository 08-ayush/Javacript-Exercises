function countValues() {
    const input = document.getElementById("valuesInput").value;
    const values = input.split(",").map((value) => value.trim());
  
    if (input.length === 0) {
      document.getElementById("valuesResult").innerText = "No values provide";
      return;
    }
  
    let truthyCount = 0;
    let falsyCount = 0;
  
    values.forEach((value) => {
      if (isFalsy(value)) {
        falsyCount++;
      } else {
        truthyCount++;
      }
    });
  
    document.getElementById(
      "valuesResult"
    ).innerText = `Truthy values: ${truthyCount}, Falsy values: ${falsyCount}`;
  }
  
  // Function to check if a value is falsy
  function isFalsy(value) {
    if (
      value === "false" ||
      value === "0" ||
      value === "" ||
      value.toLowerCase() === "null" ||
      value.toLowerCase() === "undefined" ||
      value.toLowerCase() === "nan"
    ) {
      return true;
    }
    return false;
  }
  