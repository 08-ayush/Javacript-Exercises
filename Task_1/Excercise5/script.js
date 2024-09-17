function SpeedLimits() {
    const speedLimit = document.getElementById("value1").value;
    const vehicleSpeed = document.getElementById("value2").value;
    const resultContainer = document.getElementById("output");
  
    if (isNaN(speedLimit) || isNaN(vehicleSpeed) ||speedLimit === "" || vehicleSpeed === "" ) {
      resultContainer.textContent =
        "Please enter valid numbers speed.";
      return;
    }
  
    const OverLimit = vehicleSpeed - speedLimit;
    if (OverLimit <= 0) {
      resultContainer.textContent = "Speed is in the limit.";
      return;
    } else {
      resultContainer.textContent = `Speed is over  limit by ${OverLimit} km/h.`;
    }
  }
  