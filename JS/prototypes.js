
// let Hero = {
//     name: "Superman",
//     power: "Flight",
//     sayPower() {
//         console.log(this.power);
//     },
//     fly() {
//         console.log("I am flying");
//     },
//     savePeople() {
//         console.log("I am saving people");
//     }
// }

// let Villain = {
//     name: "Black Adam",
//     power: "Magic",
//     killPeople() {
//         console.log("I am killing people");
//     },
//     throwPeople() {
//         console.log("I am throwing people");
//     }
// }

// Villain.__proto__ = Hero;

// console.log(Villain.name); // Black Adam
// // console.log(Villain.power); // Magic
// Villain.sayPower(); // Magic

// let hero2 = {
//     name: "Green Lantern",
//     __proto__: Hero
// }

// console.log(hero2.name); // Green Lantern


// var deathStar = {
//     name: "Death Star",
//     __proto__: Villain,

// }
// console.log(deathStar.name); // Death Star
// deathStar.sayPower(); // Magic
// deathStar.fly(); // I am flying
// deathStar.savePeople(); // I am saving people
// deathStar.killPeople(); // I am killing people
// deathStar.throwPeople(); // I am throwing people    

// var nullValueProto = {
//     name: "Null Value Proto",
//     __proto__: null,
//     // values of proto can be null , but not primitive values like string, number, boolean

// }
// console.log(nullValueProto.name); // Null Value Proto

// most important it cant go in the reference cant be in circle.

// let say

// let animal = {
//     eats: true,
//     walk: true,
//     swim: true,
//     fly: true
// }

// let godzill = {
//     name: "Godzill",
//     __proto__: animal,

// }
// godzill.fly = false; // we can override the property of the prototype in the current object
// // console.log(godzill.eats); // true
// // console.log(godzill.walk); // true
// // console.log(godzill.swim); // true
// // console.log(godzill.fly); // false

// let kingKong = {
//     name: "King Kong",
//     __proto__: godzill,

// }
// console.log(kingKong.fly); // true
// kingKong.fly = false;
// console.log(kingKong.fly); // false

// let gidorah = {
//     name: "Gidorah",
//     __proto__: godzill,
// }
// console.log(gidorah.fly); // true

// we should not do the circular reference in the prototype, it will lead to the infinite loop and stack overflow error.

// let a = {};
// let b = {};
// a.__proto__ = b;
// b.__proto__ = a; // this will lead to the infinite loop and stack overflow error.


// get set

// let student = {
//     name: null,
//     age: null,

//     get getName() {
//         return this.name;
//     },
//     set setName(name) {
//         this.name = name;
//     },
//     get getAge() {
//         return this.age;
//     },
//     set setAge(age) {
//         this.age = age;
//     }
// }

// let sandesh = {
//     __proto__: student
// }
// let mahipal = {
//     __proto__: student
// }
// // mahipal.setName = "Mahipal";
// console.log(sandesh.getName); // Sandesh
// console.log(mahipal.getName); // Mahipal
console.log("-------------------------------");


// Animal is function constructor 
// function constructor weere used before ES6
// function Animal(name) {
//   this.name = name;
// }
// used like 
// new Animal("Tiger")

// // it creates 
// {
//     name  : "Tiger"
// }
// Animal.prototype.speak = function() {
//   console.log(this.name + " makes a sound");
// };

// function Dog(name) {
//   Animal.call(this, name);
// }

// Dog.prototype = Object.create(Animal.prototype);
// Dog.prototype.constructor = Dog;

// Dog.prototype.bark = function() {
//   console.log(this.name + " barks");
// };

// const d = new Dog("Bruno");
// d.speak();
// d.bark();
// console.log(d instanceof  Dog);
// console.log(d instanceof Animal);

// // 1. call()


// // class User {}
// // console.log(typeof User); // "function"
// // console.log(User.prototype) // {} just a normal

// let animal = {
//   jumps: null
// };
// let rabbit = {
//   __proto__: animal,
//   jumps: true
// };

// console.log( rabbit.jumps ); // ? (1)

// delete rabbit.jumps; // logs nothing

// console.log( rabbit.jumps ); // ? (2) null

// delete animal.jumps; 

// console.log( rabbit.jumps ); // ? (3) undefined


let head = {
    glasses: 1

};

let table = {
    pen: 3,
    __proto__: head
};

let bed = {
    sheet: 1,
    pillow: 2,

    __proto__: table
};

let pockets = {
    money: 2000,
    __proto__: bed
};

// pockets → bed → table → head

// console.log(pockets.pen)
// console.log(bed.glasses)


let animal = {
    eat() {
        this.full = true;
    }
};

let rabbit = {
    __proto__: animal
};

rabbit.eat();



let hamster = {
    stomach: [],

    eat(food) {
        // this.stomach.push(food);
        this.stomach = [food]
    }
};

let speedy = {
    __proto__: hamster
};

let lazy = {
    __proto__: hamster
};

// This one found the food
speedy.eat("apple");
console.log(speedy.stomach); // apple

// This one also has it, why? fix please.
console.log(lazy.stomach); // apple



let object = {
    name : "Sandesh"
}


console.log(object.__proto__)