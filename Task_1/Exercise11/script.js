function Grade() {
    const marksInput = document.getElementById("marksInput").value; // Updated ID
    const gradeResult = document.getElementById("output");

    // Split input and filter only valid numeric values
    const marksArray = marksInput
      .split(",")
      .map(mark => parseFloat(mark.trim()))
      .filter(mark => !isNaN(mark));

    // If no valid marks are found
    if (marksArray.length === 0) {
      gradeResult.textContent = "Please enter valid marks.";
      return;
    }

    // Calculate the sum using reduce and then the average
    const sum = marksArray.reduce((total, mark) => total + mark, 0);
    const average = sum / marksArray.length;
    let grade;

    // Determine grade based on average
    switch (true) {
      case average >= 90:
        grade = "A+";
        break;
      case average >= 80:
        grade = "A";
        break;
      case average >= 70:
        grade = "B";
        break;
      case average >= 60:
        grade = "C";
        break;
      case average >= 40:
        grade = "D";
        break;
      default:
        grade = "F";
    }

    // Display result
    gradeResult.textContent = `Average: ${average.toFixed(2)}, Grade: ${grade}`;
}
