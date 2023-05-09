// Question 1
function sumOfDigits(number) {
    //Convert the number to a string
    const numberString = number.toString();
  
    // Initialize the sum variable
    let sum = 0;
  
    // Iterate through each character in the number string
    for (let i = 0; i < numberString.length; i++) {
      // Convert the character back to a number and add it to the sum
      sum += parseInt(numberString[i]);
    }
  
    // Return the final sum
    return sum;
  }
  
  console.log(sumOfDigits(56789))

// Question 2
function power(x, y) {
    if (y === 0) {
      return 1;
    } else if (y > 0) {
      return x * power(x, y - 1);
    } else {
      return 1 / (x * power(x, -y - 1));
    }
  }
  
  console.log(power(3, 3)); // Output: 8
  console.log(power(5, 0)); // Output: 1
  console.log(power(2, -2)); // Output: 0.25
  
  