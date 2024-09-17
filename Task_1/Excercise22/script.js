const students = [
    { name: "Oliver", rank: 3, division: "Technology", city: "Los Angeles" },
    { name: "Sophia", rank: 7, division: "Arts", city: "Houston" },
    { name: "Liam", rank: 1, division: "Business", city: "Chicago" },
    { name: "Emma", rank: 5, division: "Technology", city: "Austin" },
    { name: "Noah", rank: 4, division: "Science", city: "Phoenix" },
    { name: "Ava", rank: 10, division: "Arts", city: "Las Vegas" },
    { name: "James", rank: 9, division: "Business", city: "Philadelphia" },
    { name: "Mia", rank: 6, division: "Science", city: "Orlando" },
    { name: "Lucas", rank: 8, division: "Arts", city: "San Diego" },
    { name: "Isabella", rank: 2, division: "Technology", city: "San Francisco" }
  ];
  
  
  function applyFilterAndSort(sortBy = "rank") {
    const divisionFilter = document.getElementById("divisionFilter").value;
    let filteredStudents = students.filter((student) =>
      divisionFilter ? student.division === divisionFilter : true
    );
  
    filteredStudents.sort((a, b) => {
      if (sortBy === "rank") {
        return a.rank - b.rank;
      } else if (sortBy === "city") {
        return a.city.localeCompare(b.city);
      }
    });
  
    displayStudents(filteredStudents);
  }
  
  function displayStudents(studentArray) {
    const tbody = document
      .getElementById("studentTable")
      .getElementsByTagName("tbody")[0];
    tbody.innerHTML = "";
  
    studentArray.forEach((student) => {
      const row = tbody.insertRow();
      row.insertCell(0).textContent = student.name;
      row.insertCell(1).textContent = student.rank;
      row.insertCell(2).textContent = student.division;
      row.insertCell(3).textContent = student.city;
    });7
  }
  
  document.getElementById("divisionFilter").onchange = () => applyFilterAndSort();
  window.onload = () => applyFilterAndSort();
  