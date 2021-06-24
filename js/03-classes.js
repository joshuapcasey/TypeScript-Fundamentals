// 1
class Person {
    // 3
    sayHello() {
        console.log("Hello", this.firstName + ' ' + this.lastName);
    }
}
// 5    // 6   // 7   //8
let kenn = new Person();
// 9
kenn.firstName = "Kenn";
kenn.lastName = "Burns";
// 10
kenn.sayHello();
/* //? ANNOTATION
    1: declaring new class called person using ES6 syntax (not actually part of TypeScript)
    2: create 2 properties with types in class Person. TypeScript allwos us to set the data types of these properties such that they are required when we instatiate the class and use these properties
    3: Here we have a method (functions inside the body of a class) that prints "Hello, " then a name to the console
    4: this.Firstname will refer to th firstName for the specific instance
    5: We declare a custom variable "kenn"
    6: We declare the type, its a custom type of Person
    7: we instantiate (create an instance) of the Person class by using new keyword
    8: we call the class with the parens. The parens invoke the constructor function
    9: we set the properties on the instance of the kenn object Person
    10:we call the method on the kenn object
*/
// 1
class Game {
    constructor(name, maker) {
        this.gameName = name; // 4
        this.gameMaker = maker;
    }
}
// 5                                // 6
let battleship = new Game('Battleship', 'Hasbro');
/* //? ANNOTATION
    1: create a new class called Game
    2: create a constructor for the class that takes in a parameter that is of type string
    3: set up a property called gameName
    4: set the value of gameName equal to the value that is passed into the constructors arguement
    5: create an instance of the Game class battleship
    6: pass in values to satisfy the requirements of the constructor. If we do not pass the correct values in for the constructors arguements, we get an error
*/
class Vehicle {
}
//! EXAMPLE ONE
// 1
class Automobile extends Vehicle {
}
let myCar = new Automobile();
myCar.isSelfDriving = false; // 2
myCar.topSpeed = 200; // 3
myCar.make = "Volvo";
console.log(myCar);
//! EXAMPLE TWO 
// 1
class Motorcycle extends Vehicle {
}
let myMotorcycle = new Motorcycle();
myMotorcycle.easyToDoWheelie = true; // 2  
myMotorcycle.topSpeed = 180; // 3
/* //? ANNOTATION
    1: Extend keyword declares a class that is going to inherit all of the properties and methods from another class. This is called subclassing. Both Motorcycle and Automobile inherit properties and methods from the parent class Vehicle
    2: These are properties declared in the subclass The Motorcycle class does not have access to the isSelfDriving property and the Automobile class does not have acces to easyToDoWheelie property
    3: These are inherited properties from the parent Vehicle class
*/
class Store {
    // 1                                    // 2
    constructor(name, city) {
        this.name = name;
        this.city = city;
    }
}
let ikea = new Store('Ikea', 'Fishers');
console.log(ikea);
/* //? ANNOTATION
    1: We add a public accessor. With this approach we don't have to do all of the bindings for our properties inside of our constructor. We don't need this.name = name;
    2: TypeScript infers that there is a property called name that will be the value of the arguement that is passed into the constructor
*/
// 1
class Employee extends Person {
    // 5
    getSalary() {
        return this._salary.toString();
    }
    //4
    setSalary(newSalary) {
        this._salary = newSalary;
    }
}
let newEmployee = new Employee();
newEmployee.setSalary(30000);
let salaryResult = newEmployee.getSalary();
console.log("The salary is:", salaryResult);
/* //? ANNOTATION
    1: We have a subclass called Employee that extends parent class Person
    2: We create a private property denoted by the private keyword
    3: It is a best practice to see private properties in classes start with an underscore
    4: We have a method called setSalary that takes in a number. It sets the value of the private property to the value that is passed in as an arguement. These are both number types.
    5: We have a method called getSalary that returns a string. Inside the method, we perform some low-level business logic of converting the salary number value to a string in the return statement.
*/ 
//# sourceMappingURL=03-classes.js.map