function Pattern() {
    const n = document.getElementById("line").value;
    const patternContainer = document.getElementById("output");
  
    if (isNaN(n) || n <= 0) {
      patternContainer.textContent =
        "Please enter a +ve no.";
      return;
    }
  
    let pattern = "";
    for (let rows = 1; rows <= n; rows++) {
      for (let cols = 1; cols <= rows; cols++) {
        pattern += "*";
      }
      pattern += "\n";
    }
  
    patternContainer.textContent = pattern;
  }
  