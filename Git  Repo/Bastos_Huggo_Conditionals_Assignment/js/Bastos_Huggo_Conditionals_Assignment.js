/**
 Huggo Bastos
 SDI
 Conditional
 */

alert("This is a coin counting machine");

var pennies;
var nickles;
var dimes;
var quarters;


pennies = prompt("Please tell us how many pennies you have. Our machine can only count up to 1,000 at a time");

if (pennies > 1000)
{
 do
  pennies = prompt("Please re-enter the amount of pennies. We cannot count that high.\n" +
      "Our machine can only count up to 1,000 at a time");
 while (pennies > 1000);

}

else if (pennies < 0)
{
 do
  pennies = prompt("You cannot have negative pennies. Please re-enter the amount. \n" +
      "Our machine can only count up to 1,000 at a time");
 while (pennies < 0);
}

else (pennies != clearInterval())
{
 do
 pennies = prompt("Please enter in an actual number.");
}





