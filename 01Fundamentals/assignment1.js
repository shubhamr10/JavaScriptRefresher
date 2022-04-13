/*
let country = 'India';
let continent = 'Asia';
let population = 3000000000000;
console.log(country, continent, population);*/

// Coding challenge 1
/*
* Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula:
* BMI = mass / height ** 2 = mass / (height * height) ; (mass in kg and height in meter)
*
* Your tasks:
* 1. Store Mark's and John's mass and height in variables.
* 2. Calculate both their BMIs using the formula. (You can implement the both versions)
* 3. Create a boolean variable `markHigherBMI` containing information about whether Mark has higher BMI than John.
* */

/*
const massMark1 = 78;
const massJohn1 = 92;

const heightMark1 = 1.69;
const heightJohn1 = 1.95;

const massMark2 = 95;
const massJohn2 = 85;

const heightMark2 = 1.88;
const heightJohn2 = 1.76;

const bmiMark1Formula1 = massMark1 / heightMark1 ** 2;
const bmiMark1Formula2 = massMark1 / (heightMark1 * heightMark1);

const bmiMark2Formula1 = massMark2 / heightMark2 ** 2;
const bmiMark2Formula2 = massMark2 / (heightMark2 * heightMark2);

const bmiJohn1Formula1 = massJohn1 / heightJohn1 ** 2;
const bmiJohn1Formula2 = massJohn1 / (heightJohn1 * heightJohn1);

const bmiJohn2Formula1 = massJohn2 / heightJohn2 ** 2;
const bmiJohn2Formula2 = massJohn2 / (heightJohn2 * heightJohn2);

const hasMark1HigherBMISample1 = bmiMark1Formula1 > bmiJohn1Formula1;
const hasMark2HigherBMISample1 = bmiMark1Formula2 > bmiJohn1Formula2;

const hasMark1HigherBMISample2 = bmiMark2Formula1 > bmiJohn2Formula1;
const hasMark2HigherBMISample2 = bmiMark2Formula2 > bmiJohn2Formula2;

console.log(
    hasMark1HigherBMISample1, 'is same as',
    hasMark2HigherBMISample1,
    hasMark1HigherBMISample2, 'is same as',
    hasMark2HigherBMISample2
)*/


// Coding challenge 2
/*
* Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula:
* BMI = mass / height ** 2 = mass / (height * height) ; (mass in kg and height in meter)
*
* Your tasks:
* 1. Store Mark's and John's mass and height in variables.
* 2. Calculate both their BMIs using the formula. (You can implement the both versions)
* 3. Create a boolean variable `markHigherBMI` containing information about whether Mark has higher BMI than John.
* 4. Print a nice output to the console, saying who has the higher BMI. The message is either
* "Mark's BMI is higher than John's" or "John's BMI is higher than Mark's!".
* 5. Use template literals to include the BMI values in the outputs. Example: "Mark's BMI (28.3)
* is higher than John's(23.9)"
* */

/*
const massMark1 = 78;
const massJohn1 = 92;

const heightMark1 = 1.69;
const heightJohn1 = 1.95;

const massMark2 = 95;
const massJohn2 = 85;

const heightMark2 = 1.88;
const heightJohn2 = 1.76;

const bmiMark1Formula1 = massMark1 / heightMark1 ** 2;
const bmiMark1Formula2 = massMark1 / (heightMark1 * heightMark1);

const bmiMark2Formula1 = massMark2 / heightMark2 ** 2;
const bmiMark2Formula2 = massMark2 / (heightMark2 * heightMark2);

const bmiJohn1Formula1 = massJohn1 / heightJohn1 ** 2;
const bmiJohn1Formula2 = massJohn1 / (heightJohn1 * heightJohn1);

const bmiJohn2Formula1 = massJohn2 / heightJohn2 ** 2;
const bmiJohn2Formula2 = massJohn2 / (heightJohn2 * heightJohn2);

const hasMark1HigherBMISample1 = bmiMark1Formula1 > bmiJohn1Formula1;
const hasMark2HigherBMISample1 = bmiMark1Formula2 > bmiJohn1Formula2;

const hasMark1HigherBMISample2 = bmiMark2Formula1 > bmiJohn2Formula1;
const hasMark2HigherBMISample2 = bmiMark2Formula2 > bmiJohn2Formula2;

console.log(
    hasMark1HigherBMISample1, 'is same as',
    hasMark2HigherBMISample1,
    hasMark1HigherBMISample2, 'is same as',
    hasMark2HigherBMISample2
);

if(hasMark1HigherBMISample1){
    console.log(`Mark has higher BMI (${bmiMark1Formula1}) than John's BMI (${bmiJohn1Formula1})`);
} else {
    console.log(`Mark has lower BMI (${bmiMark1Formula1}) than John's BMI (${bmiJohn1Formula1})`);
}
*/

/*
* Coding challenge 3
* Problem: There are two gymnastics team, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins a trophy!.
*
* Your tasks:
* 1. Calculate the average score for each team, using the test data below.
* 2. Compare the team's average score to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so
*    test  for that as well. (Draw means they have the same average score)
* 3. Bonus 1 :  Include a requirement of minimum score of 100. With this rule, a team only wins if it has a higher score that the other team, and the same time
*    a score of least 100 points. Hints: Use a logical operator to test for minimum score , as well as multiple else if blocks.
* 4. Bonus 2 : Minimum score also applies to a draw!. So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy.
* */
/*

const roundOneDolphins = [96, 108, 89];
const roundTwoDolphins = [97, 112, 101];
const roundThreeDolphins = [97,112, 101];

const roundOneKoalas = [88,91,110];
const roundTwoKoalas = [105, 95, 123];
const roundThreeKoalas = [109, 95, 106];

const averageRoundOneDolphins = Math.round(roundOneDolphins.reduce((a, b) => a+b)/3);
const averageRoundTwoDolphins = Math.round(roundTwoDolphins.reduce((a, b) => a+b)/3);
const averageRoundThreeDolphins = Math.round(roundThreeDolphins.reduce((a, b) => a+b)/3);

const averageRoundOneKoalas = Math.round(roundOneKoalas.reduce((a, b) => a+b)/3);
const averageRoundTwoKoalas = Math.round(roundTwoKoalas.reduce((a, b) => a+b)/3);
const averageRoundThreeKoalas = Math.round(roundThreeKoalas.reduce((a, b) => a+b)/3);

console.log('-------ROUND ONE --------------');
console.log('-------ROUND ONE --------------');
if(averageRoundOneDolphins < averageRoundOneKoalas && averageRoundOneKoalas >= 100){
    console.log(`Koalas have won by ${averageRoundOneKoalas - averageRoundOneDolphins} points!`);
} else if( averageRoundOneDolphins > averageRoundOneKoalas && averageRoundOneDolphins >= 100){
    console.log(`Dolphins have won by ${averageRoundOneDolphins - averageRoundOneKoalas} points!`);
} else if(averageRoundOneDolphins === averageRoundOneKoalas && averageRoundOneDolphins >= 100) {
    console.log(`Match draw, both teams have equal points ${averageRoundOneDolphins}`);
} else {
    console.log('No one won')
}

console.log('-------ROUND TWO --------------');
if(averageRoundTwoDolphins < averageRoundTwoKoalas && averageRoundTwoKoalas >= 100){
    console.log(`Koalas have won by ${averageRoundTwoKoalas - averageRoundTwoDolphins} points!`);
} else if( averageRoundTwoDolphins > averageRoundTwoKoalas && averageRoundTwoDolphins >= 100){
    console.log(`Dolphins have won by ${averageRoundTwoDolphins - averageRoundTwoKoalas} points!`);
} else if(averageRoundTwoDolphins === averageRoundTwoKoalas && averageRoundTwoDolphins >= 100) {
    console.log(`Match draw, both teams have equal points ${averageRoundTwoDolphins}`);
} else {
    console.log('No one won')
}


console.log('-------ROUND Three --------------');
if(averageRoundThreeDolphins < averageRoundThreeKoalas && averageRoundThreeKoalas >= 100){
    console.log(`Koalas have won by ${averageRoundThreeKoalas - averageRoundThreeDolphins} points!`);
} else if( averageRoundThreeDolphins > averageRoundThreeKoalas && averageRoundThreeDolphins >= 100){
    console.log(`Dolphins have won by ${averageRoundThreeDolphins - averageRoundThreeKoalas} points!`);
} else if(averageRoundThreeDolphins === averageRoundThreeKoalas && averageRoundThreeDolphins >= 100) {
    console.log(`Match draw, both teams have equal points ${averageRoundThreeDolphins}`);
} else {
    console.log('No one won')
}

console.log('***************BONUS ONE*****************');

*/

/*
* CODING CHALLENGE 04
* Steven wants to build a very simple tip calculator for whenever he goes eating in a restaurant. In his country, it is usual to tip 15% if the
* bill value is between 50 and 300. If the value is different, the tip is 20%.
*
* Your tasks:
* 1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for
*    this. It's not allowed to use an if/else statement � (If it's easier for you, you can
*    start with an if/else statement, and then try to convert it to a ternary
*    operator!)
* 2. Print a string to the console containing the bill value, the tip, and the final value
*    (bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value
*    316.25”
* */

/*
const billAmount = [275, 40, 430];

billAmount.map(el => {
    let tip = el > 50 && el < 300 ? (15*el)/100 : (20*el)/100;
    console.log(` Bill Summary
        Net Amount  : ${el}
        Tip         : ${tip}
        Total Amount: ${el+tip}
    `)
})*/
