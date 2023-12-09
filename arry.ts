// Variables storing fruit names

let fruit1 = "apple";
let fruit2 = "orange";
let fruit3 = "apple";
let fruit4 = "apple";

// Create an array of strings


let fruits = ["apple", "banana", "orange", "mango"];

// Array of school subjects


let subjects: string[] = ["math", "urdu", "english", "physics"];

// Create an array of numbers


let ages: number[] = [1, 2, 3, 4, 5, 6];

// Create an array of boolean values


let a = [true, false, true];

// Example: Accessing elements in an array


console.log(fruits[2], fruits[3]); // Output: orange mango

// Example: Manipulating an array using pop and push


let menu = ["kofta", "kheer", "biryani", "gajer ka hulwa"];

// Pop: Remove the last element


let lastItem = menu.pop();
console.log("Popped item:", lastItem); // Output: Popped item: gajer ka hulwa

// Push: Add elements to the end


menu.push("chicken tikka", "chicken karhai");
console.log("After push:", menu);

// Example: Using shift and unshift
// Shift: Remove the first element


let firstItem = menu.shift();
console.log("Shifted item:", firstItem); // Output: Shifted item: kofta

// Unshift: Add elements to the beginning


menu.unshift("shahi tukda", "seekh kebab");
console.log("After unshift:", menu);

// Example: Using slice to create a new array


const citrus = fruits.slice(1, 3); // Extract elements from index 1 to 2 (exclusive)
console.log("Citrus fruits:", citrus); // Output: Citrus fruits: ["banana", "orange"]

// Example: Using splice to modify an array
// Splice: Remove and/or insert elements at a specific position


let removedItems = fruits.splice(1, 2, "grape", "kiwi");
console.log("Removed items:", removedItems); // Output: Removed items: ["banana", "orange"]
console.log("Modified fruits:", fruits); // Output: Modified fruits: ["apple", "grape", "kiwi", "mango"]

// More Examples:


// Creating a 2D array (array of arrays)


let matrix: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

// Using forEach to iterate through an array


fruits.forEach((fruit, index) => {
  console.log(`Fruit at index ${index}: ${fruit}`);
});

// Using map to create a new array based on an existing array


let fruitLengths = fruits.map(fruit => fruit.length);
console.log("Fruit lengths:", fruitLengths); // Output: Fruit lengths: [5, 5, 4, 5]
