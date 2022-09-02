
// passing arguements - value vs reference
const flight = 'LH234'
const jonas = {
    name: 'Jonas Smith',
    passport : 23444343434
};

const checkIn = function(flightNum, passenger){
    flightNum = 'LH999';
    passenger.name = 'Mr.' + passenger.name

    if (passenger.passport === 23444343434){
        alert('Checked in')
    } else{
        alert("Wrong passport")
    }
}

// checkIn(flight, jonas)
// console.log(flight); // prints LH234. Note here that flight which is a primitive did not change value
// console.log(jonas); // this changed to "Mr. Jonas Smith"

// This is the same as doing
// const flightNum = flight // this just copies the value
// const passenger = jonas  // copying the reference in the heap. both point to same object.

//This can cause problems when multiple developers are working

const newPassport = function(person){
    person.passport = Math.trunc(Math.random()) * 100000000000
}
// Two functions are manipluating the same object causing issues
newPassport(jonas) // this changes the passport for jonas object
checkIn(flight, jonas) // passes the jonas object with the altered passport value
