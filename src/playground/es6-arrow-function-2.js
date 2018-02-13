// arg. obj. - no longer bound with arrow func.
const add = function (a, b) {
    console.log(arguments);
    return a + b;
};

// rewrite above
const addArrow = (a, b) => {
    // console.log(arguments); no longer available in arrow func syntax
    return a + b;
}
console.log('add', add(55, 1));
console.log('addArrow', addArrow(56, 1));

const user = {
    name: 'Chip',
    cities: ['Detroit', 'Jakarta', 'Kyoto'],
    // printPlacesLived: function () {
    //     console.log('this.name', this.name);
    //     console.log('this.cities', this.cities);

    //     // this.cities.forEach(function (city) {
    //     //     console.log('this.name', this.name);
    //     //     console.log('city', city);
    //     // });
    //     // arrow func should work because it unbinds to local scope
    //     this.cities.forEach((city) => {
    //         console.log('this.name', this.name);
    //         console.log('city', city);
    //     });
    // }
    printPlacesLived() {
        console.log('this.name', this.name);
        console.log('this.cities', this.cities);

        const placesLived = this.cities.map((city) => city);
        console.log(placesLived);

        return placesLived;
    }
};

user.printPlacesLived();

// Challenge area
const multiplier = {
    // numbers - array of number to multiply
    // multiplyBy - a single number
    // run multiply func. return numbers that each is multiplied By
    numbers: [1, 2, 3],
    multiplyBy: 2,
    multiply() {
        const numbers = this.numbers.map((number) => number * this.multiplyBy);

        console.log('numbers', numbers);
        return numbers;
    }
};

multiplier.multiply();