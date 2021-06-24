//! Interfaces aren't used to create objects, they are used to shape them. As such you can NOT instanciate an interface. We impose an interface on an object or class to dictate certain aspects of how that object should be shaped. 
let lassie = {
    name: 'Lassie',
    numberOfLegs: 4
};
// 1
class Apples {
    // 2
    setTimeOfPurchase(d) {
        console.log("Apples purchased on ", d);
    }
}
// 3
let myApples = new Apples();
myApples.setTimeOfPurchase(new Date(Date.now()));
/* //? ANNOTATION
    1: We are implementing an interface on the class, imposing its shape. Class Apples will be REQUIRED to hold the properties and methods of the interface.
    2: We implement the setTimeOfPurchase method in the class, and provide a basic implementation by logging the date to the console
    3: We create a new instance of the Apples class and call the setTimeOfPurchase method
*/ 
//# sourceMappingURL=04-interfaces.js.map