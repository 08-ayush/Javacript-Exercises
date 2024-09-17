 const numbersArray = [10, 20, 30, 40, 50,99, 88];
document.getElementById("arrayDisplay").textContent =
  JSON.stringify(numbersArray);

function IfPresent() {
  const number = parseInt(document.getElementById("numberInput").value, 10);
  const resultElement = document.getElementById("output");

  if (isNaN(number)) {
    resultElement.textContent = "Please enter a valid number.";
    return;
  }

  const isPresent = numbersArray.includes(number);
  resultElement.textContent = isPresent
    ? `${number} is present in the array.`
    : `${number} is not present in the array.`;
}
