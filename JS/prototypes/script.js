
console.log("All ookk")

let object = {
    name : "Sandesh",
    myFun(){
        console.log("Hii ",this.name)
    }
}



// just object attached to another object
// So basically, what i get is from that video, everything in javascript is object, (derived from the Object) and we can link the objects using __proto__, becasue every object has hidden property called __proto__.
// but in js we dont have inheritance like other oop languages.
// we follow prototypal inheritancce
// for example

console.log(object.__proto__);
console.log(Object.__proto__.__proto__)
// in above example we have object which is also derived from proto
// and in the second console.log we can see it is the Object.

// we can also check the type of function
console.log(object.myFun.__proto__.__proto__)
// so the Function is also object

// and about chaining we chain the objects

let objectA = {
    name : "Sandesh",
    myFun(){
        console.log("hello, ", this.name)
    }
}

let objectB = {
   
}

objectB.__proto__ = objectA

console.log("Chain",objectB.__proto__.__proto__
)
// let objectC = {
//     __proto__ : objectB
// }



// The practical React Native connection — know this:
// When you write:
class Dog extends Animal {}
// JS is literally doing Dog.prototype.__proto__ = Animal.prototype under the hood. That's it. class is just cleaner syntax over what you traced today.