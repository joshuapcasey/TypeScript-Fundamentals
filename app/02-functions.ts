// function demo(someNumber){
//     return someNumber;
// }

// demo(1);
// demo("stuff");
// demo(1, "something");

function addNumbers(numOne: number, numTwo: number){
    return numOne + numTwo;
}

addNumbers(1, 2);

// addNumbers(1, 2, 3);
// addNumbers(1, "string");

// Create a TS function that takes in two strings(firstName, lastName) concatenates them, and returns a fullName

function fullName(first: string, last: string, middle?: string) {
    if(middle !== undefined){
        return first + ' ' + middle + ' ' + last;
    } else {
        return first + ' ' + last
    }
}

console.log(fullName('Joshua', 'Casey', 'P'));
