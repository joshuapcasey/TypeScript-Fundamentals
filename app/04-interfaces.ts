interface Animal {
    name: string;
    numberOfLegs: number;
}

//! Interfaces aren't used to create objects, they are used to shape them. As such you can NOT instanciate an interface. We impose an interface on an object or class to dictate certain aspects of how that object should be shaped. 

let lassie: Animal = {
    name: 'Lassie',
    numberOfLegs: 4
}

//! TS module 2.15 (every line throws an error.. wtf)
// sayHello(name: string) : string {
//     var someNum = 1 + 2;
//     var someOtherNum = 1 + 2;
//     return name;
// }

interface Product {
    name: string;
    price: number;
    setTimeOfPurchase(d: Date);
}
                // 1
class Apples implements Product {
    name: "Apples";
    price: 5.50;
    // 2
    setTimeOfPurchase(d: Date) {
        console.log("Apples purchased on ", d);
    }
}
// 3
let myApples: Apples = new Apples();
myApples.setTimeOfPurchase(new Date(Date.now()));

/* //? ANNOTATION
    1: We are implementing an interface on the class, imposing its shape. Class Apples will be REQUIRED to hold the properties and methods of the interface. 
    2: We implement the setTimeOfPurchase method in the class, and provide a basic implementation by logging the date to the console
    3: We create a new instance of the Apples class and call the setTimeOfPurchase method
*/