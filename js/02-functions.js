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
//! Optional params MUST go after all required params
function fullName(first, last, middle) {
    if (middle !== undefined) {
        return first + ' ' + middle + ' ' + last;
    }
    else {
        return first + ' ' + last;
    }
}
console.log(fullName('Joshua', 'Casey', 'P'));
//! Practice Function from Typescript module 2.06
function practiceLogin(username, password) {
    if (username === "elevenfiftyuser" && password === "Letmein1234!") {
        return true;
    }
    else {
        return false;
    }
}
console.log(practiceLogin("elevenfiftyuser", "Letmein1234!"));
//# sourceMappingURL=02-functions.js.map