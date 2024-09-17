function MaxNumber() {
    let value1 = document.getElementById("value1").value;
    let value2 = document.getElementById("value2").value;
    let result = document.getElementById("output");
  
    if (value1 === "" || value2 === "") {
      output.innerHTML = "Please Enter The Values";
      return;
    }
    const maxNumber = Math.max(value1, value2);

    result.innerText = `The maximum number is: ${maxNumber}`;
  }
  