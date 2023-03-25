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

lufthansa.book('A500', 'Jonah');
lufthansa.book('4545', 'John Smith');
console.log(lufthansa);

const eurowings = {
    airline: 'Eurowings',
    iataCode: 'EW',
    bookings: [],
    
}

const book = lufthansa.book; 
//DOES NOT work 
//book(23, 'Sarah Williams');
// using call method explicitly calls the book function and passes eurowings object
// Call  Method
book.call(eurowings, 23, 'Srarh Williams'); 
console.log(eurowings);
book.call(lufthansa, 55, 'Johnny appleseed' );
book.call(lufthansa, 239, 'Mary Cooper');

const swiss = {
    airline : 'Swiss Air Lines',
    iataCode : 'LX',
    bookings : []

}
book.call(swiss, 583, 'Mary Cooper'); 

// Apply Method - does not receive arguements but an array
// Apply is not used anymore
const flightData = [583, 'George Cooper'];
book.apply(swiss, flightData); 
console.log(swiss);
// with modern javascrip, use call method and spread the array
book.call(swiss, ...flightData);

// Bind method 


console.log(Math.sqrt(25));
console.log(25 ** (1/2));

console.log(Math.min(5,18,'23'));

console.log(Math.trunc(Math.random() * 6) + 1);

const randomInt = (min, max)=> Math.trunc(Math.random() *(max-min) + 1)
