const square = function (x) {
    return x * x;
};

// const squareArrow = (x) => { 
//     return x * x 
// };

const squareArrow = (x) => x * x;

console.log('square', square(8));
console.log('squareArrow', squareArrow(8));

// Challenge - Use arrow func
// getFirstName('Chip Salim') -> "Chip"
// Create regular arrow func. then shorthand syntax

const getFirstName = function(fullName) {
    return fullName.split(' ')[0];
};

const getFirstNameArrow = (fullName) => fullName.split(' ')[0];

console.log('getFirstName', getFirstName('Chip Salim'));
console.log('getFirstNameArrow', getFirstNameArrow('Chip Salim'));