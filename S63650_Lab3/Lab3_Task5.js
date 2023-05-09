// Question 1
// Get a reference to the table
var table = document.getElementById("myTable");

// Create a new row element
var newRow = document.createElement("tr");

// Create and populate the cells
var cell1 = document.createElement("td");
cell1.textContent = "4"; // Increment the number accordingly
var cell2 = document.createElement("td");
cell2.textContent = "Mukhriz Jamil Asoka";
var cell3 = document.createElement("td");
cell3.textContent = "mukriz@corp.jo";
var cell4 = document.createElement("td");
cell4.textContent = "651181187223";

// Append the cells to the row
newRow.appendChild(cell1);
newRow.appendChild(cell2);
newRow.appendChild(cell3);
newRow.appendChild(cell4);

// Append the row to the table
table.appendChild(newRow);

// Question 2
// Create the header row
var headerRow = document.createElement("tr");

// Create and populate the header cells
var headerCell1 = document.createElement("th");
headerCell1.textContent = "#";
var headerCell2 = document.createElement("th");
headerCell2.textContent = "Name";
var headerCell3 = document.createElement("th");
headerCell3.textContent = "Email";
var headerCell4 = document.createElement("th");
headerCell4.textContent = "Phone #";

// Append the header cells to the row
headerRow.appendChild(headerCell1);
headerRow.appendChild(headerCell2);
headerRow.appendChild(headerCell3);
headerRow.appendChild(headerCell4);

// Append the header row to the table's thead element
table.querySelector("thead").appendChild(headerRow);

//Question 3
// Get all the rows in the table
var rows = table.getElementsByTagName("tr");

// Loop through each row
for (var i = 0; i < rows.length; i++) {
  // Attach a click event listener to the row
  rows[i].addEventListener("click", function() {
    // Remove the clicked row
    this.parentNode.removeChild(this);
  });
}