const originalArray = [23, 8, 54, 3, 29, 30, 91, 82];
document.getElementById("originalArray").textContent = `Original Array: ${JSON.stringify(originalArray)}`;

function excludeValues() {
    const excludeInput = document.getElementById("excludeNumbers").value;

    
    // Convert input into an array of numbers
    const numbersToExclude = excludeInput
        .split(",")
        .map(item => item.trim())
        .map(item => Number(item))
        .filter(item => !isNaN(item));
    

    // Filter out the numbers from the original array
    const newArray = originalArray.filter(item => !numbersToExclude.includes(item));

    
    // Display the new array
    document.getElementById("newArray").textContent = `New Array: ${JSON.stringify(newArray)}`;
}
