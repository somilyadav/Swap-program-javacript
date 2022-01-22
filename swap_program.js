// first connect your javascript file to the .html file and then start writing the code written below:

// a = Give number
let a = prompt('enter the number here');
// b = first digit
let b = a;
//  To find the first digit of the entered number
while( b >= 10){
    b = parseInt(b/10)
}

// c = last digit
let c = a % 10;

// Find total number of digits - 1
let digits = Math.log10(a);

// code to swap and find the number ~
let swap = c * Math.pow(10, Math.floor(digits));
swap = swap + a % Math.pow(10, Math.floor(digits));
swap = swap - c; 
swap = swap + b;

// writing the numbers from the javascript file to the webpage:
// using template literal 

document.write(`original number: ${a}`);        /*this will print the original number*/
document.write('<br>');

document.write(`First digit: ${b}`);            /*this will print the first digit of the given number*/
document.write('<br>');

document.write(`Last digit: ${c}`);             /*this will print the last digit of the given number*/
document.write('<br>');

document.write(`new number: ${swap}`);          /*this will print the new nubmer formed*/