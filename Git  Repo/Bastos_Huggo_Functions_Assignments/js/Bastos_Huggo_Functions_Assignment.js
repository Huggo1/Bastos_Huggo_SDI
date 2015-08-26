/**
Huggo Bastos
SDI
Functions
*/

// Variables
var lottery;        // This is the user selection for which lottery they would like to do.
var randomNum;      // What gets passed in for the user rolls in the lotterRoll function.
var powerballNum;   // The number the user gets for his Powerball number.

// Prompt asking user to input which lottery they would like to do.
lottery = prompt("Would you like to get numbers for the Florida lottery or the Powerball lottery. " +
    "\n \n Enter \"Florida\" for Florida and \"Powerball\" for Powerball");

// Sets up the function asking the user to choose the lottery.
// This is in case they type in something wrong.
function chooseLottery(lotterySelection)
{

 // If the user does not input one of these two choices then the loop keeps running.
 while (lotterySelection != "Florida" || lotterySelection != "Powerball")
 {
     // If the user types in "Florida" it breaks out of the loop.
     if (lotterySelection === "Florida")
     {
         console.log("You have chosen numbers for the Florida lottery.");
         break;
     }

     // If the user types in "Powerball" it breaks them out of the loop.
     else if (lotterySelection === "Powerball")
     {
         console.log("You have chosen numbers for the Powerball");
         break;
     }

     // Makes sure the user re-enters the prompt if they don't type in either "Powerball" or "Florida".
     lotterySelection = prompt("Please enter in \"Florida\" or \"Powerball\"");
 }

// Returns lotterySelection out of the function.
return lotterySelection;

}

// Setting up the function to roll the numbers the user gets for the lottery.
function lotteryRoll(min, max, num) // Making the lotteryRoll function take in a min, a max, and num.
{

    {
        // Setting up the randomNums variable array.
        var randomNums = [];

        // This entire while loop checks to see if any of the possibilities of
        // numbers are the same at all. If there is a single duplicate it will
        // re-roll all the numbers. There is definitely a nicer and easier way
        // to write this, but this is the way I knew how to do it.'
        while (randomNums[0] == randomNums[1] || randomNums[0] == randomNums[2] ||
        randomNums[0] == randomNums[3] || randomNums[0] == randomNums[4] ||
        randomNums[0] == randomNums[5] || randomNums[1] == randomNums[2] ||
        randomNums[1] == randomNums[3] || randomNums[1] == randomNums[4] ||
        randomNums[1] == randomNums[5] || randomNums[2] == randomNums[3] ||
        randomNums[2] == randomNums[4] || randomNums[2] == randomNums[5] ||
        randomNums[3] == randomNums[4] || randomNums[3] == randomNums[5] ||
        randomNums[4] == randomNums[5]) {

            // Setting up the for loop to run a certain amount of times based on what is passed in.
            for (var i = 0; i < num; i++)
            {
                randomNums[i] = Math.random() * (max - min) + min;  // Calculates the random number.
                randomNums[i] = Math.round(randomNums[i]);          // Rounds it to the nearest whole number.


            }
        }
    }

    // Returning randomNums out of the function.
    return randomNums;
}


lottery = chooseLottery(lottery);          // Passing in lottery for the chooseLottery function.
powerballNum = Math.random() * (35-1) + 1; // Setting up the calculation for the Powerball number.
powerballNum = Math.round(powerballNum);   // Setting up the calculation for the Powerball number.


// Runs the function with the numbers set-up for the
// Florida lottery if the users input was "Florida".
if (lottery === "Florida")
{
    // Sets up the min, max, and the amount of numbers.
    randomNum = lotteryRoll(1, 53, 6); // Passing in 1 as min, 53 as max, and setting up 6 random numbers.
    console.log("Your random numbers for the Florida lottery are " + randomNum);  // Outputs random numbers for the lottery.
}

// Runs the function with the numbers set-up for the
// Powerball lottery if the users input was "Powerball".

else if (lottery === "Powerball")
{
    // Sets up the min, max, and the amount of numbers.
    randomNum = lotteryRoll(1, 59, 5); // Passing in 1 as min, 59 as max, and setting up 5 random numbers.
    console.log("Your random numbers for the Powerball are " + randomNum);  // Outputs random numbers for the lottery.
    console.log("Your Powerball number is " + powerballNum);                // Outputs their random Powerball number.
}

// Tested the code a bunch of times and did not get a
// single repeat in the numbers for the lottery.