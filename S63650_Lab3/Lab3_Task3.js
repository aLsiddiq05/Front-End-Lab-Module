// Question 1
// a)
// Create an object "product"
var product = {
  productName: "Kuetiau",
  quantity: 8,
  price: 5.50,
};

// b)
// Access and display properties
console.log("Product Name: " + product.productName);
console.log("Quantity: " + product.quantity);
console.log("Price: " + product.price);

// Question 2
// a)
// Create an object "book"
function Book(bookName, authorName) {
  this.bookName = bookName;
  this.authorName = authorName;
}

// b)
// Add prototype property "price" to "book"
Book.prototype.price = 15.30;
var myBook = new Book("5 Ways to be Happy", "Siddiq");

// c)
// Display all properties
console.log("Book Name: " + myBook.bookName);
console.log("Author Name: " + myBook.authorName);
console.log("Price: " + myBook.price.toFixed(2));

// Question 3
// Create Parent object "employee"
var employee = {
    employeeName: "Hakim",
    employeeId: "SD123",
    salary: 10000
  };
  
  // Create Child object "Manager" with inheritance
  var Manager = Object.create(employee);
  Manager.managerName = "Nuruddin";
  Manager.branch = "Changlun";
  
  // Display all properties
  console.log("Employee Name: " + Manager.employeeName);
  console.log("Employee ID: " + Manager.employeeId);
  console.log("Salary: RM" + Manager.salary);
  console.log("Manager Name: " + Manager.managerName);
  console.log("Branch: " + Manager.branch);
  