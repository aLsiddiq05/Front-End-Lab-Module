// Question 1
function square(number) {
  return number * number;
}
//Call the function like this
console.log(square(7));
console.log(square(-4));

//Question 2
function sumOfCubes(num1, num2) {
  var cube1 = num1 * num1 * num1;
  var cube2 = num2 * num2 * num2;
  return cube1 + cube2;
}
//To use this function, call it
console.log(sumOfCubes(3, 3));
console.log(sumOfCubes(0, 7));

//Question 3
function reverseNumber(n) {
  var reversed = 0;
  while (n !== 0) {
    reversed = reversed * 10 + (n % 10);
    n = Math.floor(n / 10);
  }
  return reversed;
}
//To use this function,call it
console.log(reverseNumber(12345));
console.log(reverseNumber(301));

//Question 4
function printDivisibleByZ(z) {
  for (var i = 1; i <= 100; i++) {
    if (i % z === 0) {
      console.log(i);
    }
  }
}
//To use this function, call it
printDivisibleByZ(5);
printDivisibleByZ(8);
