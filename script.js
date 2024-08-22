// Calculator JS

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

/* ——————————————————————————————————————————————————— */

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

// OPERATIONS

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


let entry1;
let entry2;
let operator;

add.addEventListener('click', function(){
    operator = add; 
})
subtract.addEventListener('click', function(){
    operator = subtract; 
})
divide.addEventListener('click', function(){
    operator = divide;
})
multiply.addEventListener('click', function(){
    operator = multiply;
})

operation.forEach(function(operatorID){
    operatorID.addEventListener('click', function(){
        entry1 = Number(display.textContent);
        array = [];
        entry2 = 10; // NEXT TIME! Figure out how to store entry2
        display.textContent = operate(entry1, entry2, operator);
    });
})


/*
- Operation OR equals event listener 
    -> store displayed value as entry2 value 
    -> store operator as operation value
    -> execute operation(entry1, entry2, operation)
    */
/* 
PLAN LOOK HERE FIRST
- Operation event listener -> store displayed value as entry1 value
- Build new text display
- Operation OR equals event listener 
    -> store displayed value as entry2 value 
    -> store operator as operation value
    -> execute operation(entry1, entry2, operation)
*/