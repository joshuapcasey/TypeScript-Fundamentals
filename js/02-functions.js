// function demo(someNumber){
//     return someNumber;
// }
// demo(1);
// demo("stuff");
// demo(1, "something");
function addNumbers(numOne, numTwo) {
    return numOne + numTwo;
}
addNumbers(1, 2);
// addNumbers(1, 2, 3);
// addNumbers(1, "string");
// Create a TS function that takes in two strings(firstName, lastName) concatenates them, and returns a fullName
function fullName(first, last, middle) {
    if (middle !== undefined) {
        return first + ' ' + middle + ' ' + last;
    }
    else {
        return first + ' ' + last;
    }
}
console.log(fullName('Joshua', 'Casey', 'P'));
//# sourceMappingURL=02-functions.js.map