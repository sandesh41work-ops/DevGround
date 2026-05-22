// function outer() {
//     let count = 0;
//     function inner() {
//         count++;
//         console.log("Im inner function : ", count);
//     }
//     inner()
//     return count;
// }

// let Outer = outer()
// console.log(Outer)


// {
//   // do some job with local variables that should not be seen outside

//   let message = "Hello"; // only visible in this block

//   console.log(message); // Hello
// }

// console.log(message); // Error: message is not defined

// {
//   // show message
//   let message = "Hello";
//   console.log(message);
// }

// {
//   // show another message
//   let message = "Goodbye";
//   console.log(message);
// }

// // show message
// let message = "Hello";
// console.log(message);

// // show another message
// let message = "Goodbye"; // Error: variable already declared
// console.log(message);



// if (true) {
//     let phrase = "Hello!";

//     console.log(phrase); // Hello!
// }

// console.log(phrase); // Error, no such variable!



// for (let i = 0; i < 3; i++) {
//     // the variable i is only visible inside this for
//     console.log(i); // 0, then 1, then 2
// }

// console.log(i); // Error, no such variable


function sayHiBye(firstName, lastName) {

  // helper nested function to use below
  function getFullName() {
    return firstName + " " + lastName;
  }

  console.log( "Hello, " + getFullName() );
  console.log( "Bye, " + getFullName() );

}

sayHiBye("Sandesh", "Pawar");