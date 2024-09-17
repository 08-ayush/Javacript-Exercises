const numbersArray = [23,8,54,3,55,55,91,824, 50, 55, 5, 99];
document.getElementById("originalArray").textContent = `Array: ${JSON.stringify(
  numbersArray
)}`;

function countOccurrences() {
  const numberToSearch = parseInt(
    document.getElementById("searchNumber").value
  );
  let count = 0;
  for (let number of numbersArray) {
    if (number === numberToSearch) {
      count++;
    }
  }
  document.getElementById(
    "output"
  ).textContent = `The number ${numberToSearch} occurs ${count} time(s) in  Array.`;
}
