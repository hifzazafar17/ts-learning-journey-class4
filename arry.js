// Declare and initialize string variables
var fruit1 = "apple";
var fruit2 = "orange";
var fruit3 = "apple";
var fruit4 = "apple";
// Create an array of strings
var fruits = ["apple", "banana", "orange", "mango"];
// Create an array of strings explicitly specifying the type
var subjects = ["math", "urdu", "english", "physics"];
// Create an array of numbers
var ages = [1, 2, 3, 4, 5, 6];
// Create an array of boolean values
var a = [true, false, true];
// Example: Accessing elements in an array
console.log(fruits[2], fruits[3]); // Output: orange mango
// Example: Manipulating an array using pop and push
var menu = ["kofta", "kheer", "biryani", "gajer ka hulwa"];
// Pop: Remove the last element
var lastItem = menu.pop();
console.log("Popped item:", lastItem); // Output: Popped item: gajer ka hulwa
// Push: Add elements to the end
menu.push("chicken tikka", "chicken karhai");
console.log("After push:", menu);
// Example: Using shift and unshift
// Shift: Remove the first element
var firstItem = menu.shift();
console.log("Shifted item:", firstItem); // Output: Shifted item: kofta
// Unshift: Add elements to the beginning
menu.unshift("shahi tukda", "seekh kebab");
console.log("After unshift:", menu);
// Example: Using slice to create a new array
var citrus = fruits.slice(1, 3); // Extract elements from index 1 to 2 (exclusive)
console.log("Citrus fruits:", citrus); // Output: Citrus fruits: ["banana", "orange"]
// Example: Using splice to modify an array
// Splice: Remove and/or insert elements at a specific position
var removedItems = fruits.splice(1, 2, "grape", "kiwi");
console.log("Removed items:", removedItems); // Output: Removed items: ["banana", "orange"]
console.log("Modified fruits:", fruits); // Output: Modified fruits: ["apple", "grape", "kiwi", "mango"]
// More Examples:
// Creating a 2D array (array of arrays)
var matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
// Using forEach to iterate through an array
fruits.forEach(function (fruit, index) {
    console.log("Fruit at index ".concat(index, ": ").concat(fruit));
});
// Using map to create a new array based on an existing array
var fruitLengths = fruits.map(function (fruit) { return fruit.length; });
console.log("Fruit lengths:", fruitLengths); // Output: Fruit lengths: [5, 5, 4, 5]
