// Functions returning functions
// works due to closure

// const greet = function(greeting){
//     return function(name){
//         console.log(`${greeting} ${name}`);
//     }
// }
// const greeterHey = greet('Hey');
// greeterHey('Jonas')
// greeterHey('Steven')

//greet('Hey')('Jonas') //prints Hey Jonas

//Challenge - conver to arrow

const greet =(greeting)=>(name)=>
    console.log(`${greeting} ${name}`);   

const greeterHey = greet('Hey')
greeterHey('Jonas') // prints Hey Jonas
