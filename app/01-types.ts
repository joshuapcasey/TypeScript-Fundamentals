//  1           2         3
let username: string = 'Isaiah';
let password: string | number = 'weewoo10';
let id: number = 5;

/*  ANNOTATION
//! Must declare what type Data will be when declaring the variable
    1: Declare a variable
    2: Declare the variable data type
    3: Initialize the variable with a value and type of the specefied data type
    4: Can declare a variable without initializing it as long as data type is assigned
*/

//                  4
let phoneNumber: number;
let email: string;
let ssn: number;
let isMarried: boolean;

// STRING
let companyName: string;
companyName = 'EFA';

// NUMBER
let age: number = 34;
let currentYear: number;
currentYear = 2021;

// BOOLEAN
let isLoggedIn: boolean = true;

// ARRAY
let studentList: string[] = ['Kasey', 'Jason', 'Matt'];     //! Most common syntax
let allScores: Array<number> = [2, 3000, -10];              //! Generic syntax

// ANY
let data: any = '12345';
console.log(data);
console.log(typeof data);

data = 12345;
console.log(data);
console.log(typeof data);

// VOID -- commonly seen in functions that do not return a value
function sayHello(): void {
    console.log('Hello');
    // return 10   // Throws error because number is not assignable to void 
}
sayHello();

// NULL and UNDEFINED -- used in cases like tokenization where token is set to undefined
let undefinedThing: undefined = undefined;
let nullThing: null = null;

// TUPLE -- allow you to create an array with multiple data types
let nameAndId: [string, number];
nameAndId = ["userOne", 1];

// ENUM -- allow us to give names to numberic values
enum WeaponType {Sword, Saber, Spear}       //! Numbered like an array {0, 1, 2}
let weapon: WeaponType = WeaponType.Sword;
let weapon2: WeaponType = WeaponType.Spear;

enum CardType {Ace = 1, Two, Three, Four}   //! Adjust array numbering to begin with 1
let newCard: string = CardType[2];
console.log(newCard);

// UNION TYPES 
let x: number | string;
let y: number | null;

x = 'X gon give it to ya';
// x = 12;
console.log(x);





