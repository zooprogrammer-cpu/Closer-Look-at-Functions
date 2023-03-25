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
