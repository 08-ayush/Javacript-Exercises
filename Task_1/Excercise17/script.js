function createArray() {
    const input = document.getElementById("inputs").value;
    
    // Split the input by commas
    const items = input.split(",").map(item => item.trim());
  
    // Convert each item
    const convertedItems = items.map(item => {
      if (item === "true") return true;
      if (item === "false") return false;
      
      const num = Number(item);
      if (!isNaN(num)) return num;
  
      return item.replace(/^["']|["']$/g, ''); // Remove quotes if present
    });
  
    // Display the array
    document.getElementById("output").textContent =
      "Array: " + JSON.stringify(convertedItems);
  }
  