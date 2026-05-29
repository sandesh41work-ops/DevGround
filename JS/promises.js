// const cart = ["apple", "banana", "orange"];

// // function createOrder(cart); // returns orderid

// // function proceedToPayment(orderId); // returns paymentId

// // so basically callback is like

// createOrder(cart, function(orderid){
//     proceedToPayment(orderid)
// })
// // in this case we are blindly trusting the create order api function to work accordingly.

// const promise = createOrder(cart);
// promise.then(function(orderid){
//     proceedToPayment(orderid);
// })





// const url = "https://api.github.com/users/sp";

// const user = fetch(url);
// console.log(user)

// user.then(function(data){
//     console.log(data)
// })
// user.catch(function(error){
//     console.log("Some issue : ". error)
// })

// Case 1
// const p = new Promise((resolve, reject) => {
//     resolve("done");
//     reject("error"); // does this run? no error will not run because once the promise is resolved on the first resolve, the promise is settled and it will not change its state, so the reject will not run.    

// });

// p.then(val => console.log(val))
//     .catch(err => console.log(err));

// // Case 2
// async function fetchData() {
//     try {
//         const result = await Promise.resolve("data");
//         console.log(result);
//     } catch (e) {
//         console.log(e);
//     }
// }
// fetchData();

// // Case 3 — What's the difference in behavior?
// await Promise.all([
//     Promise.resolve(1),
//     Promise.reject("fail"),
//     Promise.resolve(3)
// ]);

// await Promise.allSettled([
//     Promise.resolve(1),
//     Promise.resolve(3)
// ]);

// You have 3 API calls that can run in parallel — 
// user profile, notifications, and feed.
//  How do you run them together and handle the case where one fails but the others succeed?

// Promise.all(
//     [
//         fetchUserProfile(),
//         fetchNotifications(),
//         fetchFeed()
//     ]
// ).then(([profile, notifications, feed]) => {
//     // Handle successful responses
//     console.log("User Profile:", profile);
//     console.log("Notifications:", notifications);
//     console.log("Feed:", feed);
// }).catch(error => {
//     // Handle any error that occurs in any of the promises
//     console.error("An error occurred:", error);
//     // You can also check which promise failed and handle it accordingly
// }
// )

const fetchUserProfile = () => Promise.resolve({ name: "John Doe", age: 30 });
const fetchNotifications = () => Promise.reject("Failed to fetch notifications");
const fetchFeed = () => Promise.resolve(["Post 1", "Post 2", "Post 3"]);

const results = await Promise.allSettled([
  fetchUserProfile(),
  fetchNotifications(),
  fetchFeed()
]);

results.forEach((result, index) => {
    if (result.status === "fulfilled") {
        console.log(`Promise ${index + 1} fulfilled with value:`, result.value);
    } else {
        console.error(`Promise ${index + 1} rejected with reason:`, result.reason);
    }
});

// now handle each result — some may have succeeded, some may have failed
// results is an array of objects with status: "fulfilled" or "rejected"