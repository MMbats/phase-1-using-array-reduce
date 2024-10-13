

// Code your solution here
// Example data for products and coupons
const products = [
    { name: "Shampoo", price: 4.99 },
    { name: "Donuts", price: 7.99 },
    { name: "Cookies", price: 6.49 },
    { name: "Bath Gel", price: 13.99 },
  ];
  
  const couponLocations = [
    { room: "Living room", amount: 5 },
    { room: "Kitchen", amount: 2 },
    { room: "Bathroom", amount: 1 },
    { room: "Master bedroom", amount: 7 },
  ];
  
  // Custom reduce function implementation
  function ourReduce(arr, reducer, init) {
    let accum = init;
    for (const element of arr) {
      accum = reducer(accum, element);
    }
    return accum;
  }
  
  // Coupon counter function
  function couponCounter(totalAmount, location) {
    return totalAmount + location.amount;
  }
  
  // Calculate total amount for products
  function getTotalAmountForProducts(products) {
    let totalPrice = 0;
  
    for (const product of products) {
      totalPrice += product.price;
    }
  
    return totalPrice;
  }
  
  // Using our custom reduce function
  console.log(ourReduce(couponLocations, couponCounter, 0)); // LOG: 15
  
  // Demonstrating native reduce
  console.log(couponLocations.reduce(couponCounter, 0)); // also logs 15!
  
  // Another simple numerical example with reduce
  const doubledAndSummed = [1, 2, 3].reduce(function (accumulator, element) {
    return element * 2 + accumulator;
  }, 0);
  console.log(doubledAndSummed); // => 12
  
  // Demonstrate using reduce to count letters
  const letters = ["a", "b", "c", "b", "a", "a"];
  const lettersCount = letters.reduce(function (countObj, currentLetter) {
    if (currentLetter in countObj) {
      countObj[currentLetter]++;
    } else {
      countObj[currentLetter] = 1;
    }
    return countObj;
  }, {});
  
  console.log(lettersCount); // { a: 3, b: 2, c: 1 }
  
  // Arts showcase example
  const incomingStudents = ["Alice", "Bob", "Charlie"]; // Example student names
  const artsShowcases = {
    Dance: [],
    Visual: [],
    Music: [],
    Theater: [],
    Writing: [],
  };
  
  // Simulated student sorter object
  const studentSorter = {
    showcaseAssign: function (student) {
      // Mock logic for assigning showcases
      const showcases = ["Dance", "Visual", "Music", "Theater", "Writing"];
      return showcases[Math.floor(Math.random() * showcases.length)];
    },
  };
  
  // Use reduce to assign students to showcases
  incomingStudents.reduce(function (showcases, student) {
    showcases[studentSorter.showcaseAssign(student)].push(student);
    return showcases;
  }, artsShowcases);
  
  console.log(artsShowcases); // View the distribution of students in showcases
  
  // Lab task: Sum total batteries
  const batteryBatches = [4, 5, 3, 4, 4, 6, 5]; // Example battery batches
  const totalBatteries = batteryBatches.reduce((accumulator, currentBatch) => {
    return accumulator + currentBatch;
  }, 0); // Start with an initial value of 0
  
  console.log(totalBatteries); // Output the total number of batteries
  