function BingoCard() {
  const cardBody = document.getElementById("output").querySelector("tbody");
  cardBody.innerHTML = "";  // Clear the table body content before adding new rows
  let usedNumber = [];

  for (let i = 0; i < 5; i++) {
    let row = cardBody.insertRow(); // Insert a new row in the table body
    for (let j = 0; j < 5; j++) {
      let cell = row.insertCell(); // Insert a new cell in the row
      if (i === 2 && j === 2) {
        cell.innerHTML = "Free"; // The center cell is 'Free'
        continue;
      }
      let min = j * 25 + 10;
      let max = j * 35 + 25;
      let num = getUniqueNumber(min, max, usedNumber);
      usedNumber.push(num);
      cell.innerHTML = num; // Assign the unique number to the cell
    }
  }
}

function getUniqueNumber(min, max, usedNumber) {
  let num;
  do {
    num = getRandomNumber(min, max);
  } while (usedNumber.includes(num));
  return num;
}

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
