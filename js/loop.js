// Q1. What are conditional statements? Explain conditional statements with syntax and examples.
// Conditional statements allow a program to make decisions based on certain conditions or criteria. These statements are used to control the flow of execution depending on whether a condition is true or false. The primary conditional statements in most programming languages are if, else, and else if.

// Syntax:

// if statement: Checks if a condition is true.
// javascript
// Copy
// Edit
// if (condition) {
//     // code to execute if the condition is true
// }
// else statement: Executes code when the if condition is false.
// javascript
// Copy
// Edit
// if (condition) {
//     // code if true
// } else {
//     // code if false
// }
// else if statement: Checks multiple conditions in sequence.
// javascript
// Copy
// Edit
// if (condition1) {
//     // code if condition1 is true
// } else if (condition2) {
//     // code if condition2 is true
// } else {
//     // code if both conditions are false
// }
// Example:

// javascript
// Copy
// Edit
// let num = 10;
// if (num > 5) {
//    console.log("Greater than 5");
// } else {
//    console.log("Less than or equal to 5");
// }
// Q2. Write a program that grades students based on their marks.
// javascript
// Copy
// Edit
// function gradeStudent(marks) {
//    if (marks > 90) {
//        return "A Grade";
//    } else if (marks >= 70 && marks <= 90) {
//        return "B Grade";
//    } else if (marks >= 50 && marks < 70) {
//        return "C Grade";
//    } else {
//        return "F Grade";
//    }
// }

// // Example usage:
// let marks = 85;
// console.log(gradeStudent(marks)); // Output: B Grade
// Q3. What are loops, and what do we need them? Explain different types of loops with their syntax and examples.
// Loops are used to repeat a block of code multiple times. We need loops when we want to perform repetitive tasks efficiently, without writing the same code over and over.

// Types of loops:

// for loop: A loop that repeats a block of code a specified number of times. Syntax:

// javascript
// Copy
// Edit
// for (let i = 0; i < 5; i++) {
//     console.log(i);  // Outputs 0, 1, 2, 3, 4
// }
// while loop: A loop that continues as long as a condition is true. Syntax:

// javascript
// Copy
// Edit
// let i = 0;
// while (i < 5) {
//     console.log(i);  // Outputs 0, 1, 2, 3, 4
//     i++;
// }
// do...while loop: Similar to while, but guarantees that the code block runs at least once, even if the condition is false. Syntax:

// javascript
// Copy
// Edit
// let i = 0;
// do {
//     console.log(i);  // Outputs 0, 1, 2, 3, 4
//     i++;
// } while (i < 5);
// Q4. Generate numbers between any 2 given numbers.
// javascript
// Copy
// Edit
// const num1 = 10;
// const num2 = 25;

// for (let i = num1 + 1; i <= num2; i++) {
//    console.log(i); // Output: 11, 12, 13, ..., 25
// }
// Q5. Use the while loop to print numbers from 1 to 25 in ascending and descending order.
// Ascending Order:

// javascript
// Copy
// Edit
// let i = 1;
// while (i <= 25) {
//    console.log(i);  // Outputs 1, 2, 3, ..., 25
//    i++;
// }
// Descending Order:

// javascript
// Copy
// Edit
// let i = 25;
// while (i >= 1) {
//    console.log(i);  // Outputs 25, 24, 23, ..., 1
//    i--;
// }