// Case 1 - call
function greet(greeting) {
    console.log(`${greeting}, ${this.name}`)

}

const user = { name: 'Sandesh' }
const user2 = { name: 'John' };
// greet.call(user, 'Hello')
// greet.call(user2, "Hiii");

// // Case 2 - apply
// greet.apply(user, ['Hi'])

// // Case 3 - bind
// const boundGreet = greet.bind(user)
// boundGreet('Hey')

// // Case 4 - real world use case
// function Timer() {
//   this.seconds = 0
//   setInterval(function() {
//     this.seconds++
//     console.log(this.seconds)
//   }.bind(this), 1000)
// }

// const t = new Timer()



function greet(greetMsg) {
    console.log(`${greetMsg} ${this.name}`);
}
const user3 = { name: "Sandesh", city: "Pune", state: "Maharashtra" }

// greet.call(user3, "Hello") // Hello Sandesh

// greet.apply(user3, ["Welcome"]);

// greet.bind(user3, {msg:"hollaa"})

let myObject = {
    name: "Sandesh",
    age: 24,
    state: "Maharashtra",
}
let mahipal = {
    name: "Mahipal",
    age: 26,
    state: "Rajsthan"
}
// generic method for getting details
function getDetails() {
    console.log(`Name : ${this.name}\nAge: ${this.age}`);
}

getDetails.call(myObject);
getDetails.call(mahipal)

//  function borrowing

// let say we have 2 objects

let superHero = {
    name: "Superman",
    power: ["Fly", "SuperSpeed", "SuperJump", "SuperBreath", "Laser", "SuperStrength"],

    fly: function () {
        console.log(`${this.name} is flying`);
    },
    jump: function () {
        console.log(`${this.name} is jupming`);
    },
    printPowers: function () {
        this.power.forEach(p => {
            console.log(p);
        });
    },
    printCities: function (city, state) {
        console.log(`Hello I'm ${this.name} and I'm From ${city}, ${state}`)
    }
}
let superVillain = {
    name: "Black Adam",
    power: ["Fly", "SuperSpeed"],
}
// in this sitation we can create either 2 methods for the villain also
// but also we can do one thing. we can borrow method from other object
// in our case we are borrowing it from first object(superHero)

// applied jump method on the supervillain
superHero.jump.call(superVillain); // Black Adam is jumping

// apply method
superHero.fly.apply(superVillain);

// Also it can take array.
superHero.printPowers.apply(superVillain, ["Mumbai", "Maharastra"])

superHero.printCities.apply(superVillain, ["Pune", "Maharashtra"])



// bind method
// creates a new copy of method and returns a functin
// we can invoke this function later

const myNewfun = superHero.printCities.bind(superVillain, "pune", "gujrat");

// console.log(myNewfun());
myNewfun()