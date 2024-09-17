function FizzBuzz() {
    const startNumber = parseInt(document.getElementById("value1").value);
    const endNumber = parseInt(document.getElementById("value2").value);
    const resultContainer = document.getElementById("output");

    resultContainer.innerHTML = "";

 
    if (isNaN(startNumber) || isNaN(endNumber) || startNumber > endNumber) {
        resultContainer.innerHTML = "<p>Please enter valid start and end numbers.</p>";
        return;
    }

    let resultHTML = ""; 
    for (let i = startNumber; i <= endNumber; i++) {
        let output = "";
        if (i % 2 === 0) output += "Fizz";
        if (i % 7 === 0) output += "Buzz";
        resultHTML += `<p>${output || i}</p>`; 
    }

    // Update innerHTML once after the loop
    resultContainer.innerHTML = resultHTML;
}
