/**
 Huggo Bastos
 SDI
 Conditional Worksheet
 */

var temperaturescale;
var temperature;

temperaturescale = prompt("Today we are going to convert the temperature. " +
    "If the temperature is Celsius enter \"C\" if it is Fahrenheit enter \"F\"");

temperature = Number(prompt("What is the current temperature;"));


if (temperaturescale === 'F')
{
    temperature = (temperature - 32) * 5/9;
    console.log("The temperature in Celsius is " + temperature + " degrees Celsius.");

}

else if (temperaturescale === 'C')
{
    temperature = (temperature * 1.8) + 32
    console.log("The temperature in Fahrenheit is " + temperature + " degrees Fahrenheit.");
}

else
{
    console.log("That is not a valid choice.")
}