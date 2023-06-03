function displayData(jsonData) {
    var attributes = Object.keys(jsonData[0]);
    console.log("Attributes in each record: " + attributes.join(", "));

}