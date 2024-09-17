
  function TotalSum() {
    const input = document.getElementById("inputArgs").value;

   
    const cleanedInput = input.replace(/[\[\]]/g, ""); // Remove [ and ]
    const args = cleanedInput.split(",").map(item => parseFloat(item.trim()));

    // Check for invalid input
    if (args.some(isNaN)) {
      document.getElementById("output").textContent = "Invalid input. Please follow the format [1,2],3.";
      return;
    }

    const sum = sumOfAllNumbers(...args);
    document.getElementById("output").textContent = `Total Sum: ${sum}`;
  }

  function sumOfAllNumbers(...args) {
    let sum = 0;
    for (const arg of args) {
      sum += arg;
    }
    return sum;
  }

