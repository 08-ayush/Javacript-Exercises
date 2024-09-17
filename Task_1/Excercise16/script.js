function Circle(radius) {
    this.radius = radius;
  
    // Method to calculate the area
    this.getArea = function () {
      return Math.PI * this.radius * this.radius;
    };
  }
  
  let circle = new Circle(0);
  
  function CircleArea() {
    const radius = parseFloat(document.getElementById("radiusInput").value);
  
    // Validate input
    if (isNaN(radius) || radius <= 0) {
      alert("Please enter a valid radius greater than 0.");
      return;
    }
  
    // Update the circle radius
    circle.radius = radius;
  
    // Calculate and display the area
    document.getElementById("output").textContent =
      "Area: " + circle.getArea().toFixed(2);
  }
  