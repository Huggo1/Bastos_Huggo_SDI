/**
 Huggo Bastos
 SDI
 Conditional Worksheet
 */

var temperatureScale;
var temperature;

temperatureScale = prompt("Today we are going to convert the temperature. " +
    "If the temperature is Celsius enter \"C\" if it is Fahrenheit enter \"F\"");

temperature = Number(prompt("What is the current temperature;"));


if (temperatureScale === 'F')
{
    temperature = (temperature - 32) * 5/9;
    console.log("The temperature in Celsius is " + temperature + " degrees Celsius.");

}

else if (temperatureScale === 'C')
{
    temperature = (temperature * 1.8) + 32
    console.log("The temperature in Fahrenheit is " + temperature + " degrees Fahrenheit.");
}