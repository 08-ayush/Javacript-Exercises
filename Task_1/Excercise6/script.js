function oddEven() {
    const startNumber = parseInt(document.getElementById("value1").value);
    const endNumber = parseInt(document.getElementById("value2").value);
    const oddNumbersDiv = document.getElementById("oddNumbers");
    const evenNumbersDiv = document.getElementById("evenNumbers");

    oddNumbersDiv.innerHTML = "<h2>Odd Numbers:</h2>";
    evenNumbersDiv.innerHTML = "<h2>Even Numbers:</h2>";

 
    if (isNaN(startNumber) || isNaN(endNumber)||startNumber > endNumber ||startNumber===""||endNumber==="" ) {
        oddNumbersDiv.innerHTML = "<p>Please enter valid start and end numbers.</p>";
        evenNumbersDiv.innerHTML = ""; 
        return;
    }

    for (let i = startNumber; i <= endNumber; i++) {
        if (i % 2 === 0) {
          evenNumbersDiv.innerHTML += `<p>${i}</p>`;
        } else {
          oddNumbersDiv.innerHTML += `<p>${i}</p>`;
        }
      }
  
    resultContainer.innerHTML = resultHTML;
}
