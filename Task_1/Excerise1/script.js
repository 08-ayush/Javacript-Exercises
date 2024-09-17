function SwapValues() {
    let value1 = document.getElementById("value1").value;
    let value2 = document.getElementById("value2").value;
    let result = document.getElementById("output");
  
    if (value1 === "" || value2 === "") {
      output.innerHTML = "Please Enter The Values";
      return;
    }
  
    [value1, value2] = [value2, value1];
  
    document.getElementById("value1").value = value1;
    document.getElementById("value2").value = value2;
  
    result.innerHTML = `Swapped Values Result: Value 1 = ${value1}, Value 2 = ${value2}`;
  }
  