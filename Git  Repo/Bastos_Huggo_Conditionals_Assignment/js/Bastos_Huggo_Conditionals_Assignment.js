/**
 Huggo Bastos
 SDI
 Conditional
 */
// Alert to display original message.
alert("This is a coin counting machine \n" +
    "We charge 10% of your total unless you deposit at least $10");

// Variables
var pennies; // Amount of pennies
var nickles; // Amount of nickles
var dimes; // Amount of dimes
var quarters; // Amount of quarters
var moneyYouKeep; // Amount you get back depending on amount you deposit.

pennies = Number(prompt("Please tell us how many pennies you have. Our machine can only count up to 1,000 at a time"));
// Taking in user prompt to determine their amount of pennies and converts it to number.
nickles = Number(prompt("Please tell us how many nickles you have. Our machine can only count up to 1,000 at a time"));
// Taking in user prompt to determine their amount of nickles and converts it to number.
dimes = Number(prompt("Please tell us how many dimes you have. Our machine can only count up to 1,000 at a time"));
// Taking in user prompt to determine their amount of dimes and converts it to number.
quarters = Number(prompt("Please tell us how many quarters you have. Our machine can only count up to 1,000 at a time"));
// Taking in user prompt to determine their amount of quarters and converts it to number.

// Set up a do while loop to determine if there is an error the user will have to re-enter in their data.
do
if (pennies > 1000 || nickles > 1000 || dimes > 1000 || quarters > 1000)
// The machine only counts to 1,000. If the user enters a single variable over 1,000 they must re-enter all data.
{
  pennies = prompt("We cannot count that high.\n" +
      "Our machine can only count up to 1,000 at a time." +
      "\nPlease re-enter in pennies");                              // Asks user to re-enter pennies.
  nickles = prompt("Now please re-enter nickles.")                  // Asks user to re-enter nickles.
  dimes = prompt("Now please re-enter dimes.")                      // Asks user to re-enter dimes.
  quarters = prompt("Now please re-enter quarters.")                // Asks user to re-enter quarters.
}

else if (pennies < 0 || nickles < 0 || dimes < 0 || quarters < 0)
{
  pennies = prompt("The number cannot be negative. \n" +
      "\nPlease re-enter in pennies");                              // Asks user to re-enter pennies.
  nickles = prompt("Now please re-enter nickles.")                  // Asks user to re-enter nickles.
  dimes = prompt("Now please re-enter dimes.")                      // Asks user to re-enter dimes.
  quarters = prompt("Now please re-enter quarters.")                // Asks user to re-enter quarters.
}

else if (pennies == "" || nickles == "" || dimes == "" || quarters == "")
{
  pennies = prompt("Please re-enter in pennies you left a blank");  // Asks user to re-enter pennies.
  nickles = prompt("Now please re-enter nickles.")                  // Asks user to re-enter nickles.
  dimes = prompt("Now please re-enter dimes.")                      // Asks user to re-enter dimes.
  quarters = prompt("Now please re-enter quarters.")                // Asks user to re-enter quarters.
}

else if (isNaN(pennies) || isNaN(nickles) || isNaN(dimes) || isNaN(quarters))
{
  pennies = prompt("Please re-enter in pennies you entered a " +
      "non-number character.");                                     // Asks user to re-enter pennies.
  nickles = prompt("Now please re-enter nickles.")                  // Asks user to re-enter nickles.
  dimes = prompt("Now please re-enter dimes.")                      // Asks user to re-enter dimes.
  quarters = prompt("Now please re-enter quarters.")                // Asks user to re-enter quarters.
}

while (pennies > 1000 || nickles > 1000 || dimes > 1000 || quarters > 1000 || // Checks to make sure nothing is over 1,000.
pennies < 0 || nickles < 0 || dimes < 0 || quarters < 0 ||                    // Checks to make sure nothing is under 0.
pennies == "" || nickles == "" || dimes == ""|| quarters == "" ||             // Checks to make sure there is no blank.
isNaN(pennies) || isNaN(nickles) || isNaN(dimes)|| isNaN(quarters));          // Makes sure user types in a number.

var totalCash; // Total amount of money user has in coins.
totalCash = ((pennies * 1) + (nickles * 5) + (dimes * 10) + (quarters * 25)) / 100; // This is how the calculator sets that up.

console.log("Your total amount of money is $" + totalCash); // This tells you the total amount of money you deposited.

moneyYouKeep = (totalCash < 10) ? totalCash * .9 : totalCash; // This sets up how much you keep depending on how much you deposited.

console.log("You are keeping $" + moneyYouKeep); // This displays how much you are keeping.

// I tested 1 for everything and got .41 which is 41 cents and is correct.
// It also worked correctly and told me what I was keeping and if it was under 10 it deducted the 10%.
// It also worked that if you got exactly $10 you would keep the $10.







