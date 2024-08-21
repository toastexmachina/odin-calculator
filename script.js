// Calculator JS

/*
- operate function
- number buttons show up on display
- operations
- results show up on display
*/

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

// Define operation variables
const add = document.querySelector('#add');
const subtract = document.querySelector('#subtract');
const multiply = document.querySelector('#multiply');
const divide = document.querySelector('#divide');

// Define button variables
const one = document.querySelector('#one');
const two = document.querySelector('#two');
const three = document.querySelector('#three');
const four = document.querySelector('#four');
const five = document.querySelector('#five');
const six = document.querySelector('#six');
const seven = document.querySelector('#seven');
const eight = document.querySelector('#eight');
const nine = document.querySelector('#nine');

// Button Event Listeners -> display text content
one.addEventListener("click", function(){
    display.textContent = "1";
})