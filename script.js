'use strict';

// Immediately Invoked Function (IIFE)
// Normal function 
function runOnce (){
    console.log('Run once');
}
runOnce();
// IIFEE function
(function(){
    console.log('This will never run again');
})();

// arrow function 
(()=>console.log('This will also never run again'))();

// This was invented because function creates scopes. 
// One scope does not have access to varaibles in a inner scope

