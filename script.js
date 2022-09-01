'use strict';
// Default Values or Default Parameters in Functions
const bookings = []
const createBooking = function (flightNum, numPassengers = 1, price = 199 *numPassengers) {
    //ES5 way
    // numPassengers = numPassengers || 1;
    // price = price || 199;
    const booking = {
        flightNum,
        numPassengers,
        price
    };
    console.log(booking);
    bookings.push(booking);
}

createBooking('LH123'); //{flightNum: "LH123", numPassengers: 1, price: 199}
createBooking('LH456', 2 , 899) //{flightNum: "LH456", numPassengers: 2, price: 899}
createBooking('LH899', 5) //{flightNum: "LH899", numPassengers: 5, price: 995}
createBooking('LH000', undefined, 9) // this skips the second parameter. 
//prints {flightNum: "LH000", numPassengers: 1, price: 9}
