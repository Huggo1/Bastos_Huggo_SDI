/**
 Huggo Bastos
 SDI
 Conditional Worksheet
 */

var age;
var ticketPrice = 12;
var discountPrice = 7;
var time;

age = Number(prompt("What is your current age"));

time = confirm("Is it currently between 3-5pm (Click OK for yes and Cancel for No)");

if (time == true)
{
    console.log("The ticket price is " + discountPrice);
}

else if (time == false)
{

    if (age >= 55 || age < 10)
        {
            console.log("The ticket price is " + discountPrice);
        }

    else if (age > 10 && age < 55)
        {
         console.log ("The ticket price is " + ticketPrice);
        }

}


