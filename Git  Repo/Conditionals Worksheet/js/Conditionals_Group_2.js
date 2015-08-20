/**
 Huggo Bastos
 SDI
 Conditional Worksheet
 */

var grade;
var letterGrade;

grade = Number(prompt("What grade did you earn in the class.\n " +
    "Please enter something between 0 and 100." ));

if (grade <= 100 && grade >= 95)
{
    letterGrade = 'A+';
}

else if (grade <= 95 && grade >= 90)
{
    letterGrade = 'A';
}

else if (grade <= 89 && grade >= 85)
{
    letterGrade = 'B+';

}
else if (grade <= 79 && grade >= 76)
{
    letterGrade = 'C+';
}

else if (grade <= 75 && grade >= 73)
{
    letterGrade = 'C';
}

else if (grade <= 72 && grade >= 70)
{
    letterGrade = 'D';
}

else if (grade <= 69)
{
    letterGrade = 'F';
}

console.log("You have a " + grade + "%, which means you have earned a(n) " +
    letterGrade + " in the class.");

