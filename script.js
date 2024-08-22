// Calculator JS

// Operate function
// takes an operator and 2 numbers and produces an outcome 
let operate = function (x, y, z){
    if (z === add){
        return x+y;
    } else if (z === subtract) {
        return x-y;
    } else if (z === multiply) {
        return x*y;
    } else if (z === divide) {
        return x/y;
    }
}

const display = document.querySelector('#display');
const equal = document.querySelector(".equal");
const clear = document.querySelector(".clear");

// Define operation variables
const add = document.querySelector('#add');
const subtract = document.querySelector('#subtract');
const multiply = document.querySelector('#multiply');
const divide = document.querySelector('#divide');

const operation = document.querySelectorAll('.operation');

// Define button variables
const zero = document.querySelector("#zero");
const one = document.querySelector('#one');
const two = document.querySelector('#two');
const three = document.querySelector('#three');
const four = document.querySelector('#four');
const five = document.querySelector('#five');
const six = document.querySelector('#six');
const seven = document.querySelector('#seven');
const eight = document.querySelector('#eight');
const nine = document.querySelector('#nine');

let array = [];

// Adds event listener to every number button
const numbers = document.querySelectorAll(".number");
numbers.forEach(function(number){
    number.addEventListener("click", function(){
        array.push(number.textContent); // pushes the number to the display array
        display.textContent = array.join('').toString(); 
    });
})

// Event Listener for clear button
clear.addEventListener("click", function(){
    array = [];
    display.textContent = array.join('').toString(); 
})

/*
button.addEventListener("click", function(){
    display.textContent = array.join('').toString();
});
*/

// button click adds the number to the end
// build an array that automatically displays?
// let array = ["1", '2', '3'];

// display.textContent = array.join('').toString();

/* 
PLAN LOOK HERE FIRST
- Build text display



- Operation event listener -> store displayed value as entry1 value
- Build new text display
- Operation OR equals event listener 
    -> store displayed value as entry2 value 
    -> store operator as operation value
    -> execute operation(entry1, entry2, operation)
*/



/*
let entry1 = display.textContent;
let entry2 = 6;
let operation = subtract;
display.textContent = operate(entry1, entry2, operation).toString();
*/