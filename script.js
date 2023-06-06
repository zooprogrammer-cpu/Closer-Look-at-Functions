'use strict';

// Closure

const  secureBooking = function(){
    let passengerCount = 0; 
    return function(){
        passengerCount ++; 
        console.log(`passengerCount is: ${passengerCount}`);
    }

}

const booker = secureBooking(); 
booker(); 
booker();
booker();
// prints
// passengerCount is: 1
// passengerCount is: 2
// passengerCount is: 3

// Another closeure example - 
let f;

const g = function(){
    const a = 23;
    f = function(){
        console.log(a *2)
    }
}

g();// intializing the parent function
f();// prints 46 // a is accessible even if it was in the parent function 
// even if the parent function g() is alread popped off the stack
// Re-assigning function f()
const h = function(){
    const a = 777;
    f = function(){
        console.log(a *2)
    }
}

h();
f(); // prints 1554

// Example 2: 
// if perGroup exists in scope chain and closure,
// the perGroup in closure is given preference
const boardingPassengers = function(n, wait){
    const perGroup = n/3; // closure
    setTimeout(() => {
        console.log(`We are now boarding all ${n} passengers`);
        console.log(`There are 3 groups each with ${perGroup} passengers`);

    }, wait * 1000);

    console.log(`Will start boarding in ${wait} seconds`);
}
const perGroup = 1000; // scope - chain 
boardingPassengers(180,3);

// Closure - Coding Challenge 2
// Take the IIFE below and at the end of the function, 
// attach an event listener that changes the color 
// of the selected h1 element ('header') to blue, 
// each time the BODY element is clicked. 
// Do NOT select the h1 element again!

(function (){
    const header = document.querySelector('h1');
    header.style.color = 'red';
    document.querySelector('body').addEventListener('click', function(){
        // header is still accessible inside 
        // this function due to closure
        // since this function was born here
        header.style.color = 'blue';
    })
})(); 






