// console.log("Start of the Script");

// setTimeout(() => {
//     console.log("A");
// }, 0);

// setTimeout(() => {
//     console.log("B");
// }, 0);

// setTimeout(() => {
//     console.log("C");
// }, 2 * 1000);

// console.log("End of the Script");
// console.log("Bye Bye");

console.log("start");

setTimeout(() => console.log("timeout"), 0);

Promise.resolve().then(() => console.log("promise"));

console.log("end");

// ouput -
// start
// end
// promise
// timeout 

/*
Basically Javascript is single threaded languguge, it does not no anything about 
Asynchronous.
When we are running the program the js code gets execute line by line.
And there's nothing in the js to handle asynhronous programming.
But we have Webapi's which works for asynhronous behaviour.
1. So when the code is running the start and end prints first, 
because the are normal statements, (means they are in global context),
and every function, statement is executed in the call stack,
so when the execution gets to the settimeout function, 
it get into the webapis, webapis checks the which callback should run and 
after what time. after the waiting time the callback is get into 
the taskQueue, (callback Queue). and after the call stack is empty
we the event take the callback from the task queue and push to the stack 
for execution,

in the code above, we have promise and a setimeout function, 
although the promise is executed first, even though the timeout is defind first.,
this is because of the promise are not in the callback queue, the 
goes into the microtask queue, which has higher priority than
callback queue,after the promises are end eventloop moves to the callback queue.
*/