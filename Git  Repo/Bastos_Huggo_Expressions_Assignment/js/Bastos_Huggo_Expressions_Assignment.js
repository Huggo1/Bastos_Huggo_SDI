/**
 * Created by huggobastos on 8/13/15.
 */
/**
Huggo bastos
August 13, 2015
Expressions Assignment
*/

// Variables
var firstNumber;
var secondNumber;
var thirdNumber;
var exampleNumbers = [10, 20, 30];

// Asking user to list a group of numbers.
// While entering in the numbers they are being converted from a string to a number.
firstNumber = Number(prompt("Enter in a number."));
secondNumber = Number(prompt("Please enter in a second number."));
thirdNumber = Number(prompt("Please enter in a third number."));

// This determines the average of the numbers the user enters by adding them all together then dividing by the total.
var average = (firstNumber + secondNumber + thirdNumber) / 5;

// An array used in calculation for showing an example to the user.
var exampleAverage = (exampleNumbers[0] + exampleNumbers[1] + exampleNumbers[2]) / 3;

// The sum works by adding all of the numbers together.
var sum = firstNumber + secondNumber + thirdNumber;

// Calculating the sum of the array numbers.
var exampleSum = exampleNumbers[0] + exampleNumbers[1] + exampleNumbers[2];

// Multiplying the numbers all together.
var multiplied = firstNumber * secondNumber * thirdNumber;

// Multiplying all the numbers in the array together.
var exampleMultiplied = exampleNumbers[0] * exampleNumbers[1] * exampleNumbers[2];

//outputs
console.log("These are the calculations of the numbers you entered.");

// Outputting the average
console.log("Average: " + average);

// Outputting the sum
console.log("Sum: " + sum);

// Outputting the multiplication of all the numbers.
console.log("All your numbers multiplied together = " + multiplied);

// Example Numbers
console.log("The example numbers we used were 10, 20, and 30");

// Example Average
console.log("Average: " + exampleAverage);

// Example Sum
console.log("Sum: " + exampleSum);

// Example Multiplication
console.log("The example numbers multiplied together = " + exampleMultiplied);


/*
I tried different inputs like all 5 or all 4 or even a variety of numbers.
The system always gave me the correct average.
A specific example is I tried 10/20/30/40/50 and I got 30 as the average.
The sum variable was added and now works.
*/