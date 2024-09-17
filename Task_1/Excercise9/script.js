function calculateMultiples() {
    const start = parseInt(document.getElementById("start").value);
    const end = parseInt(document.getElementById("end").value);
    const number = parseInt(document.getElementById("number").value);
    const result = document.getElementById("output");
  
    if (isNaN(start) || isNaN(end) || isNaN(number)) {
      result.textContent = "Please enter valid numbers";
      return;
    }
  
    let sum = 0;
  
    for (let i = start; i <= end; i++) {
      if (number % i === 0) {
        sum += i;
      }        
    }
  
    result.textContent = `Sum: ${sum}`;
  }
  