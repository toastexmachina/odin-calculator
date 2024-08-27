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

// Displays numbers when a number button is clicked
const numbers = document.querySelectorAll(".number");
numbers.forEach(function(number){
    number.addEventListener("click", function(){
        array.push(number.textContent); // pushes the number to the display array
        display.textContent = array.join('').toString();

        operation.forEach(function(operationID){
            operationID.style.backgroundColor = "rgb(235, 128, 70)"
        })
    });
})

// Clears the display and display array when clear button is clicked
clear.addEventListener("click", function(){
    array = [];
    display.textContent = array.join('').toString(); 
    entries = [undefined, undefined];
})

// Main operate function
let operate = function (x, y, z){
    if (z === add){
        return x+y;
    } else if (z === subtract) {
        return x-y;
    } else if (z === multiply) {
        return x*y;
    } else if (y === 0 && z === divide) {
        return "Excuse me? Can't divide by zero?";
    } else if (z === divide) {
        return x/y;
    }
}

let entry1; // sets first parameter for operate function
let entry2; // sets second parameter for operate function
let operator; // sets operation parameter for operate function

let entries = [entry1, entry2]; // arranges operands/parameters

// Sets the operation parameter when the operation button is clicked
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
        // changes button color
        // rgb(235, 128, 70)
        operatorID.style.backgroundColor = "rgb(179, 77, 46)"; 
        
        entry = Number(display.textContent);
        array = [];

        // shifts the operands up with each new entry
        entries.shift();
        entries.push(entry);

        console.log(entries); // track operands during operations

        // prevents operate function from executing on the first iteration
        if (entries[0] && entries[1]){ 
            display.textContent = operate(entries[0], entries[1], operator);
            entries.shift();
            entries.push(Number(display.textContent));
        } else {
            entries.shift();
            entries.push(Number(display.textContent));
        };  
    });
})


equal.addEventListener('click', function(){
    entry = Number(display.textContent);
    array = [];

    entries.shift();
    entries.push(entry);
    console.log(entries);
    
    display.textContent = operate(entries[0], entries[1], operator);
    entries.shift();
    entries.push(undefined);
}) 

// MUST FIX BUG WHERE PRESSING OPERATIONS TWICE DOES NOTHING
