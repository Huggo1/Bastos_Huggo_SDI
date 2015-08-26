/**
Huggo Bastos
SDI
Functions
*/

var lottery;
var randomNum;
var powerballNum;

lottery = prompt("Would you like to get numbers for the Florida lottery or the Powerball lottery. " +
    "\n \n Enter \"Florida\" for Florida and \"Powerball\" for Powerball");

function chooseLottery(lotterySelection)
{

 while (lotterySelection != "Florida" || lotterySelection != "Powerball")
 {

     if (lotterySelection === "Florida")
     {
         console.log("You have chosen numbers for the Florida lottery.");
         break;
     }

     else if (lotterySelection === "Powerball")
     {
         console.log("You have chosen numbers for the Powerball");
         break;
     }

     lotterySelection = prompt("Please enter in \"Florida\" or \"Powerball\"");
 }

return lotterySelection;

}

function lotteryRoll(max, min, num)
{
    var randomNums = [];

        for (var i = 0; i < num; i++)
        {
            randomNums[i] = Math.random() * (max - min) + min;
            randomNums[i] = Math.round(randomNums[i]);


        }


    return randomNums;
}


lottery = chooseLottery(lottery);
powerballNum = Math.random() * (35-1) + 1;
powerballNum = Math.round(powerballNum);

if (lottery === "Florida")
{
    randomNum = lotteryRoll(1, 53, 6);
    console.log("Your random numbers for the Florida lottery are " + randomNum);
}

else if (lottery === "Powerball") 
{
    randomNum = lotteryRoll(1, 59, 5);
    console.log("Your random numbers for the Powerball are " + randomNum);
    console.log("Your Powerball number is " + powerballNum);
}