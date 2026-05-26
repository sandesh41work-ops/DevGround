// const obj = {
//   name: "Arjun",
//   greet() {
//     console.log(this.name);
//   }
// };
// obj.greet(); 
// /* output -> Arjun (as we have directly called greet() method on 
// the obj, the this will refer to the curent object which it is called on.)
// */

// const user = {
//     name : "Sandesh",
//     age : 25,

//     myFunc(){
//        console.log("Hii,", user.name); 
//        // we can use object name also, which is outer variable
//     }
// }

// let o = user
// o.myFunc();

// let admin = user
// admin.name="sandesh-admin";
// console.log(admin.name)
// admin.myFunc()



// let user = {
//     name: "John",
//     age: 30,

//     sayHi() {
//         console.log(this.name); // leads to an error
//     }

// };


// let admin = user;
// user = null // overwrite to make things obvious

// admin.sayHi(); // TypeError: Cannot read property 'name' of null

// function myFunction() {

// }
// Case 1
const obj = {
  name: "Arjun",
  greet() {
    console.log(this.name);
  }
};
obj.greet(); // this will print the Arjun
// cause we are using this.name -> this will refer the current object

// Case 2
const fn = obj.greet;
fn(); // undefined because we are just referencing the function not the whole object.

// Case 3
const obj2 = {
  name: "Arjun",
  greet: () => {
    console.log(this.name);
  }
};
obj2.greet(); // undefined -> because arrow function do not create their own this.
// they borrrow it from outer scope.

// Case 4
function Timer() {
  this.seconds = 0;
  setInterval(function() {
    this.seconds++;
    console.log(this.seconds);
  }, 1000);
}
const t = new Timer();