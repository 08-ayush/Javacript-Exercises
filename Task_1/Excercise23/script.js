let Person = function (name, age) {
    let person = {};
  
    person.name = name;
    person.age = age;
  
    person.greeting = function () {
      return "Hello I am " + person.name + ". I am " + person.age + " years old.";
    };
    return person;
  };
  
  function FactoryFunction() {
    const name = document.getElementById("personName").value;
    const age = document.getElementById("personAge").value;
  
    if (!name || age <= 0) {
      document.getElementById("output").textContent =
        "Please enter a valid name and age.";
      return;
    }
  
    const person = Person(name, age);
    document.getElementById("output").textContent = person.greeting();
  }
  