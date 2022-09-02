// Function accepting callback functions
const oneWord = function (str){
    return str.replace(/ /g, '').toLowerCase()
};

const upperFirstWord = function(str){
    const [first, ...others] = str.split(' ')
    return [first.toUpperCase(), ...others].join(' ');
}

// Higher Order Function 
const transformer = function (str,fn){
    console.log(`Original string: ${str}`);
    console.log(`Transformed string: ${fn(str)}`);

    console.log(`Transformed by: ${fn.name}`); 
}
// transform this string using the upperFirstWord function 
transformer('JavaScript is the best', upperFirstWord)
//prints
//Original string: JavaScript is the best
//Transformed string: JAVASCRIPT is the best
// Transformed by: upperFirstWord. prints the name of the function

transformer('JavaScript is the best', oneWord)

const high5 = function(){
    console.log('🖐');
}

document.body.addEventListener('click', high5)

