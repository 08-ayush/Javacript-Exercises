function Primes() {
    const startNumber = parseInt(
      document.getElementById("startNumber").value,
      10
    );
    const endNumber = parseInt(document.getElementById("endNumber").value, 10);
    const primeNumbersDiv = document.getElementById("output");
  
    if (isNaN(startNumber) || isNaN(endNumber) || startNumber < 2) {
      primeNumbersDiv.textContent =
        "Please enter valid numbers, with the start number at least 2.";
      return;
    }
  
    let primes = [];
    for (let number = startNumber; number <= endNumber; number++) {
      if (isPrime(number)) {
        primes.push(number);
      }
    }
  
    primeNumbersDiv.textContent =
      primes.length > 0
        ? `Prime numbers: ${primes.join(", ")}`
        : "No prime numbers found in the given range.";
  }
  
  function isPrime(number) {
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false;
      }
    }
    return number;
  }
  