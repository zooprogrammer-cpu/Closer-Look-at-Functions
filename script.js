'use strict';

const lufthansa = {
    airline: 'lufthansa',
    iataCode: 'LH',
    bookings: [],
    book(flightNum, name) {
        console.log(
            `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
            );
            this.bookings.push({
            flight: `${this.iataCode} ${flightNum}`, name });
    }
}

//lufthansa.book('A500', 'Jonah Schmit');
//console.log(lufthansa);

const eurowings = {
    airline: 'Eurowings',
    iataCode: 'EW',
    bookings: []
}

const book = lufthansa.book; // setting lufthansa.book function as a variable 
//This below DOES NOT work since this is undefined
//book(23, 'Sarah Williams');
// Instead use call method. 
// In the call method, the first arguement is what you want the this keyword to point to. 
// In this case, this keyword points to eurowings. And then the usual arguements. 
// call method calls the book function with the this keyword set to eurowings
// the rest are the regular arguements of the book function
// Call  Method
book.call(eurowings, 23, 'Sarah Williams'); // prints Sarah Williams booked a seat on Eurowings flight EW23
console.log(eurowings); // has one bookings, Sarah Williams

book.call(lufthansa, 55, 'Johnny appleseed' ); //Johnny appleseed booked a seat on lufthansa flight LH55

book.call(lufthansa, 239, 'Mary Cooper');
console.log(lufthansa); // has two bookings , Johnny appleseed and Mary Cooper

// Apply Method - does not receive arguements but an array
// Apply is not used anymore
const swiss ={
    airline : 'Swiss Air Lines',
    iataCode: 'LX',
    bookings: []
};
const flightData = [583, 'George Cooper'];
book.apply(swiss, flightData); // first arguement is the this keyword. The second is the array of data
// prints George Cooper booked a seat on Swiss Air Lines flight LX583
// console.log(swiss);
// with modern javascript, use call method and spread the array
book.call(swiss, ...flightData); //George Cooper booked a seat on Swiss Air Lines flight LX583

// Bind method 
// Also sets the this keyword manually. But Bind immediately does not call the function
// Instead it returns a functin where the this keword is bound. It is set to whatever value we send to bind
// Here is the call method from above
// book.call(eurowings, 23, 'Sarah Williams')
const bookEW = book.bind(eurowings); // this does not call the book function. 
//Instead it returns a new function where this is set to eurowings
// we can bind multiple airlines 
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);
bookEW(23, 'Steven Williams'); // Here this is already set to eurowings
// prints Steven Williams booked a seat on Eurowings flight EW23

// We can take it further. Can pass multiple arguements to be more specific.
const bookEW23 = book.bind(eurowings, 23);
// no need to pass 23 when creating a new booking
bookEW23 ('Jonas Samenthal');//Jonas Samenthal booked a seat on Eurowings flight EW23
bookEW23('Martha Cooper');//Martha Cooper booked a seat on Eurowings flight EW23
console.log(eurowings.bookings);
// prints 
/*
{flight: 'EW 23', name: 'Sarah Williams'}
{flight: 'EW 23', name: 'Steven Williams'}
{flight: 'EW 23', name: 'Jonas Samenthal'}
{flight: 'EW 23', name: 'Martha Cooper'}
*/

// With Event listeners
// add a new property to lufthansa object
lufthansa.planes = 300; 
lufthansa.buyPlane = function (){
    console.log(`this:`, this);
    this.planes ++; 
    console.log(`this.planes`, this.planes);
}
// lufthansa.buyPlane();
// need to use bind here to point to lufthansa
//otherwise the this points to the button itself. 
document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane.bind(lufthansa));
// clickng the button does this runts the buyPlane function increasing to 301

// Partial application of bind
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.10, 200)); // prints 220
// we can create a more specific function addVAT based on the general function addTax
// first arguemnt of bind is this, we set to to null
const addVAT = addTax.bind(null, 0.23);
// this is the same as
// const addVat = value =>  value + value * 0.23; 
console.log(addVAT(100)); //prints 123

//// same as above but by calling one function by another
const addTaxRate = function (rate){
    return function (value){
        return value + value * rate; 
    }
}
const addVat2 = addTaxRate(0.23);
console.log(addVat2(100)); // prints 123


