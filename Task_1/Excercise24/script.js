function generateObject(name, value) {
    return { [name]: value };
  }
  
  function compareObjectsFunction() {
    const obj1Name = document.getElementById("obj1Name").value;
    const obj1Value = document.getElementById("obj1Value").value;
    const obj2Name = document.getElementById("obj2Name").value;
    const obj2Value = document.getElementById("obj2Value").value;
  
    const obj1 = generateObject(obj1Name, obj1Value);
    const obj2 = generateObject(obj2Name, obj2Value);
  
    const objectsEqual = checkEquality(obj1, obj2);
    document.getElementById("output").textContent = objectsEqual
      ? "The objects are equal."
      : "The objects are not equal.";
  }
  
  function checkEquality(obj1, obj2) {
    const obj1Keys = Object.keys(obj1);
    const obj2Keys = Object.keys(obj2);
  
    if (obj1Keys.length !== obj2Keys.length) {
      return false;
    }
  
    for (let key of obj1Keys) {
      if (obj1[key] !== obj2[key]) {
        return false;
      }
    }
  
    return true;
  }
  