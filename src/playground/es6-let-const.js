var nameVar = 'Chip';
var nameVar = 'Mike';
console.log('nameVar', nameVar);

let nameLet = 'ChipLet';
nameLet = 'MikeLet';
console.log('nameLet', nameLet);

const nameConst = 'ChipConst';
// nameConst = 'MikeConst'; syntax error
console.log('nameConst', nameConst);

function getPetName() {
    var petName = 'Hal';
    return petName;
}

const petName = getPetName();
console.log('petName', petName);

var fullName = 'Chip Salim';
let firstName;

if (fullName) {
     firstName = fullName.split(' ')[0]; // const and let will be in this block level only
    console.log('firstName', firstName);
}

console.log('firstName', firstName);