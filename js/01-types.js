//  1           2         3
let username = 'Isaiah';
let password = 'weewoo10';
let id = 5;
/*  ANNOTATION
//! Must declare what type Data will be when declaring the variable
    1: Declare a variable
    2: Declare the variable data type
    3: Initialize the variable with a value and type of the specefied data type
    4: Can declare a variable without initializing it as long as data type is assigned
*/
//                  4
let phoneNumber;
let email;
let ssn;
let isMarried;
// STRING
let companyName;
companyName = 'EFA';
// NUMBER
let age = 34;
let currentYear;
currentYear = 2021;
// BOOLEAN
let isLoggedIn = true;
// ARRAY
let studentList = ['Kasey', 'Jason', 'Matt']; //! Most common syntax
let allScores = [2, 3000, -10]; //! Generic syntax
// ANY
let data = '12345';
console.log(data);
console.log(typeof data);
data = 12345;
console.log(data);
console.log(typeof data);
// VOID -- commonly seen in functions that do not return a value
function sayHello() {
    console.log('Hello');
    // return 10   // Throws error because number is not assignable to void 
}
sayHello();
// NULL and UNDEFINED -- used in cases like tokenization where token is set to undefined
let undefinedThing = undefined;
let nullThing = null;
// TUPLE -- allow you to create an array with multiple data types
let nameAndId;
nameAndId = ["userOne", 1];
// ENUM -- allow us to give names to numberic values
var WeaponType;
(function (WeaponType) {
    WeaponType[WeaponType["Sword"] = 0] = "Sword";
    WeaponType[WeaponType["Saber"] = 1] = "Saber";
    WeaponType[WeaponType["Spear"] = 2] = "Spear";
})(WeaponType || (WeaponType = {})); //! Numbered like an array {0, 1, 2}
let weapon = WeaponType.Sword;
let weapon2 = WeaponType.Spear;
var CardType;
(function (CardType) {
    CardType[CardType["Ace"] = 1] = "Ace";
    CardType[CardType["Two"] = 2] = "Two";
    CardType[CardType["Three"] = 3] = "Three";
    CardType[CardType["Four"] = 4] = "Four";
})(CardType || (CardType = {})); //! Adjust array numbering to begin with 1
let newCard = CardType[2];
console.log(newCard);
// UNION TYPES 
let x;
let y;
x = 'X gon give it to ya';
// x = 12;
console.log(x);
//# sourceMappingURL=01-types.js.map