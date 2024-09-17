function Sum() {
    const input = document.getElementById("numbersInput").value;
    const numbers = input
      .split(",")
      .map((item) => parseFloat(item))
      .filter((item) => !isNaN(item));
    const sum = sumOfNumbers(...numbers);
    document.getElementById("output").textContent = `Sum: ${sum}`;
  }
  
  function sumOfNumbers(...args) {
    let sum = 0;
    for (const arg of args) {
      if (typeof arg === "number") {
        sum += arg;
      }
    }
    return sum;
  }
  