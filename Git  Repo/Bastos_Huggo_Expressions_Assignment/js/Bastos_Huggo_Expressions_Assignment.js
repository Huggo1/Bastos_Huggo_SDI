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
var fourthNumber;
var fifthNumber;

// Asking user to list a group of numbers.

firstNumber = prompt("Enter in a number.");
secondNumber = prompt("Please enter in a second number.");
thirdNumber = prompt("Please enter in a third number.");
fourthNumber = prompt("Please enter in a fourth number.");
fifthNumber = prompt("Please enter in a fifth number.");

// This determines the average of the numbers the user enters by adding them all together then dividing by the total.
var average = (Number(firstNumber) + Number(secondNumber) + Number(thirdNumber) +
    Number(fourthNumber) + Number(fifthNumber)) / 5;

// The sum works by adding all of the numbers together.
var sum = (Number(firstNumber) + Number(secondNumber) + Number(thirdNumber) +
Number(fourthNumber) + Number(fifthNumber));

// Multiplying the numbers all together.
var multiplied = (Number(firstNumber) * Number(secondNumber) * Number(thirdNumber) *
Number(fourthNumber) * Number(fifthNumber));

//outputs
console.log("These are the calculations of the numbers you entered.");

// Outputting the average
console.log("Average: " + average);

// Outputting the sum
console.log("Sum: " + sum);

// Outputting the multiplication of all the numbers.
console.log("All your numbers multiplied together = " + multiplied);

/*
I tried different inputs like all 5 or all 4 or even a variety of numbers.
The system always gave me the correct average.
A specific example is I tried 10/20/30/40/50 and I got 30 as the average.
The sum variable was added and now works.
*/