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

// Define operation variables
const add = document.querySelector('#add');
const subtract = document.querySelector('#subtract');
const multiply = document.querySelector('#multiply');
const divide = document.querySelector('#divide');
