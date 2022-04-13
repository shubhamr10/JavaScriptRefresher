/*
let js = 'amazing';
console.log(js, 120 + 56 + 236 + 65);

console.log('Values');
console.log('Shubham');
console.log(23);

let firstName = "Shubham Rauniyar";
let $function = "allowed";
let PI = 3.1452;
console.log(firstName,$function, PI);
*/
/*
let javaScriptIsFun = true;
console.log(javaScriptIsFun);

console.log(typeof true);
console.log(typeof javaScriptIsFun);
console.log(typeof 1);
console.log(typeof 'Shubham');

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

// BUG in JS
console.log(typeof null);
 */

/*
let age;
age = 31; // mutating the variable age to store 31
console.log(age);

const birthYear = 1991;
// birthYear = 1990; // It will yield an error.

// const job; // This will cause an error since, declaring a const needs a variable assignment as required.

var job;
job = 'Teacher';
// Never use var
// var is a function scoped and `let` is a blocked scoped.
console.log(job)*/

/*
const currentYear = 2022;
const ageShubham = currentYear - 1998;
const ageSarah = currentYear - 1999;
console.log(ageShubham, ageSarah);

console.log(ageShubham *2 , ageSarah / 2, 2**3);
// 2**3 means 2 to the power of 3 => 2 * 2* 2

const firstName = "Shubham";
const lastName = "Rauniyar";
// concatenation of string using +;
console.log(firstName + ' ' + lastName);

// assignment operator
let x = 10+5;
x += 10; //x = x + 10;
x *= 4;
x++;
x--;
console.log(x);

// comparison operator
console.log( ageSarah > ageShubham); // <, >, <=, >=*/

/*
let x, y;
x = y = 15-10+5;
console.log(x, y);*/

// Strings

/*
const firstName = 'Shubham';
const job = 'Software Engineer';
const birthYear = 1998;
const currentYear = 2022;
const shubham = "I'm " + firstName + ', a ' + (currentYear - birthYear) + ' years old ' + job + '!';
console.log(shubham);

const shubhamNew = `I'm ${firstName}, a ${currentYear - birthYear} years old ${job}!`;
console.log(shubhamNew);

console.log('String with \n\
multiple \n\
lines');

console.log(`
Multiple line
 with
  string
 literals`)*/

// Decision: if/else
/*
const age = 15;

if(age >=18){
    console.log('Sarah can start driving license.');
} else {
    const yearLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearLeft} years :)`);
}

const birthYear = 1998;
let century;
if(birthYear <= 2000){
    century = 20;
} else {
    century = 21;
}
console.log(century);*/

// Type conversion
/*const inputYear = '1991';
console.log(Number(inputYear));
console.log(Number(inputYear) + 18);

console.log(Number('Shubham')); // Return NaN

console.log(String(122));

// Type coercion
console.log('I am ' + 23 + ' years old.');

let n = '1' + 1;
n -=1;
console.log(n);*/

// truthy and falsy values

/*
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Shubham'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 1000;
if (money) {
    console.log('Do not spend it all;');
} else {
    console.log("You should get a job");
}

let height = 0;
if(height){
    console.log('Height is defined');
} else {
    console.log('Height is not defined!');
}*/
/*

const age = 18;
if (age === 18) console.log('You just became an adult:(strict)');

if (age == 18) console.log('You just became an adult:(loose)');

const favourite = Number(prompt("What's your favourite number ? "));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) {
    console.log('Strictly Cool!')
} else if( favourite === 7 ){
    console.log('7 is also a cool number');
} else {
    console.log('Not cool')
}*/
/*

const day = 'friday';

switch (day) {
    case 'monday':
        console.log('Plan course structure');
        console.log('Go to coding meetup');
        break;
    case 'tuesday':
        console.log('Prepare theory videos!');
        break;
    case 'wednesday':
    case 'thursday':
        console.log('Write code examples');
        break;
    case 'friday':
        console.log('Record videos');
        break;
    case 'saturday':
    case 'sunday':
        console.log('Enjoy the weekend :D');
        break;
    default:
        console.log('Not a valid day!');
}

if(day === 'monday'){
    console.log('Plan course structure');
    console.log('Go to coding meetup');
} else if (day === 'tuesday'){
    console.log('Prepare theory videos!');
} else if (day === 'wednesday' || day === 'thursday'){
    console.log('Write code examples');
} else if( day === 'friday' ){
    console.log('Record videos');
} else if( day === 'saturday' || day === 'sunday'){
    console.log('Enjoy the weekend :D');
} else {
    console.log('Not a valid day!');
}

*/
/*

const age = 23;
age > 18 ? console.log('I like to drink wine') : console.log('I like to drink water.');

const drink = age >= 18 ? 'wine' : 'water';
console.log(drink);

let drink2;
if(age >=19){
    drink2 = 'wine';
} else {
    drink2 = 'water';
}
console.log(drink2);

console.log(`I like to drink ${age >=18 ? 'wine' : 'water'}`);*/
