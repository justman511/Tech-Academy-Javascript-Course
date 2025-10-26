//Promise returns an object representing the eventual completion or failure of an asynchronous operation.

// Example of creating a Promise
const myPromise = new Promise((resolve, reject) => { // It takes two callbacks: resolve and reject
    const success = true; // Simulate success or failure    
    setTimeout(() => {
        if (success) {
            resolve("Operation was successful!"); // You invoke the callback to indicate success
        } else {
            reject("Operation failed."); // You invoke the callback to indicate failure
        }
    }, 2000);
});

// An executor function is executed immediately when the Promise is created
function executorFunction(resolve, reject) {
    // Simulate an asynchronous operation using setTimeout
    setTimeout(() => {  
        const operationSuccessful = true; // Change this to false to simulate failure
        if (operationSuccessful) {
            resolve("Executor: Operation completed successfully!"); // Call resolve on success
        } else {
            reject("Executor: Operation failed.");// Call reject on failure
        }   
    }, 1000);
}   


console.log(myPromise); // Logs the Promise object immediately

// Consuming a Promise using then and catch
myPromise
    .then((message) => { // Handles the resolved value. Function passed to then is called when the Promise is resolved. this is a handler for successful completion.
        console.log(message); // Logs "Operation was successful!" if resolved
    })
    .catch((error) => { // Handles the rejected value. Function passed to catch is called when the Promise is rejected. this is a handler for failure.
        console.error(error); // Logs "Operation failed." if rejected
    });


//States of a Promise:
// 1. Pending: Initial state, neither fulfilled nor rejected.
// 2. Fulfilled: The operation completed successfully.
// 3. Rejected: The operation failed.
// Once a Promise is fulfilled or rejected, it is settled and cannot change state again.


//Result from the Promise
//Undefined: At the time of logging, the Promise is still pending.
// Value: Will be available once the Promise is settled (either fulfilled or rejected).
// Error: Handled using .catch() method as shown above.

//Result of the executor function
const anotherPromise = new Promise(executorFunction);
// Can be undefined at this point since the executor runs asynchronously
// Value will be available once the Promise is settled
//Error handling is done using .catch() method as shown above.


//Handling multiple Promises
const promise1 = new Promise((resolve) => setTimeout(() => resolve("Promise 1 resolved"), 1000));
const promise2 = new Promise((resolve) => setTimeout(() => resolve("Promise 2 resolved"), 2000));
const promise3 = new Promise((resolve, reject) => setTimeout(() => reject("Promise 3 rejected"), 1500));
Promise.all([promise1, promise2, promise3])
    .then((results) => {
        console.log("All promises resolved:", results); // This will not run because one promise is rejected
    })
    .catch((error) => {
        console.error("One of the promises rejected:", error); // Logs "One of the promises rejected: Promise 3 rejected"
    }); 
// Promise.all waits for all promises to settle. If any promise rejects, it immediately rejects with that reason.   

//Chaining Promises
myPromise
    .then((message) => {    
        console.log("First then:", message);
        return "Data from first then"; // Return a value to the next then
    })
    .then((data) => {    
        console.log("Second then:", data); // Receives the value returned from the previous then        
    })
    .catch((error) => {    
        console.error("Error in chain:", error); // Catches any error in the chain        
    }); 
// Each then returns a new Promise, allowing for chaining multiple asynchronous operations. 

//Promise.finally
myPromise
    .then((message) => {    
        console.log("Finally example:", message);        
    })
    .catch((error) => {    
        console.error("Finally example error:", error);        
    })
    .finally(() => {    
        console.log("This runs regardless of the Promise outcome.");        
    }); 
// finally is called after the Promise is settled, regardless of whether it was fulfilled or rejected.


//Async/Await with Promises
async function asyncFunction() {
    try {   
        const result = await myPromise; // Waits for the Promise to resolve
        console.log("Async/Await result:", result);    
    } catch (error) {   
        console.error("Async/Await error:", error);    
    }   
}
asyncFunction(); 
// async/await provides a cleaner syntax for working with Promises, making asynchronous code look synchronous.


// Promise.resolve and Promise.reject
const resolvedPromise = Promise.resolve("Resolved immediately");
const rejectedPromise = Promise.reject("Rejected immediately");
resolvedPromise.then((message) => console.log(message)); // Logs "Resolved immediately"
rejectedPromise.catch((error) => console.error(error)); // Logs "Rejected immediately"
// These methods create Promises that are already resolved or rejected, useful for testing or default values.   


//.then() 
const promise = new Promise(function (resolve, reject) {
    resolve("Success!");
});

promise.then( // onFulfilled, onRejected. The then method takes two optional callback functions as arguments:
    function (value) { console.log(value); }, // onFulfilled
    function (error) { console.log(error); }  // onRejected
);

// The rules.
// Promise Chain Behavior:
// 1. If the onFulfilled or onRejected callback returns a value, the next Promise in the chain is resolved with that value.
// 2. If the callback throws an error, the next Promise is rejected with that error.
// 3. If the callback returns a Promise, the next Promise adopts the state of that returned Promise.    
// 4. If onFulfilled or onRejected is not a function, the next Promise is resolved or rejected with the same value or reason as the previous Promise.

// Example demonstrating the rules
const examplePromise = new Promise((resolve, reject) => {
    resolve("Initial success");
});
examplePromise
    .then((value) => {
        console.log("First then:", value);
        return "Value from first then"; // Rule 1
    })
    .then((value) => {
        console.log("Second then:", value); 
        throw new Error("Error in second then"); // Rule 2
    })
    .then(
        (value) => {    
            console.log("Third then:", value); // This will be skipped due to the error in the previous then
        },
        (error) => {    
            console.error("Caught error:", error.message); // Handles the error from the previous then  
        }
    )
    .then(() => {
        return new Promise((resolve) => { // Rule 3
            setTimeout(() => resolve("Value from new Promise"), 1000);
        });
    })
    .then((value) => {
        console.log("Fourth then:", value); // Logs "Value from new Promise"
    });     
// This example illustrates how values and errors propagate through a chain of Promises according to the defined rules. 

// Rule 1: Every promise gives you a .then() handler method. Every rejected promise also gives you a .catch() handler method.
// Rule 2: You can chain multiple .then() methods together to handle a sequence of asynchronous operations.
// Rule 3: Each .then() returns a new promise, allowing for further chaining.
// Rule 4: If a .then() handler throws an error, the next .catch() in the chain will handle it.
// Rule 5: If a .then() handler returns a promise, the next .then() will wait for that promise to resolve before executing.
// Rule 6: You can use .finally() to execute code after a promise settles, regardless of its outcome.

//Rule 2: You can do mainly three valuable things from the .then() handler:
// 1. Return a value (which becomes the resolved value of the next promise in the chain).
// 2. Throw an error (which becomes the rejected reason of the next promise in the chain).
// 3. Return another promise (which causes the next promise in the chain to adopt the state of that returned promise).

let getUser = new Promise(function(resolve, reject) {
    const user = {
        name: "Alice Doe",
        email: 'jdoe@email.com',
        password: 'password123'
    };
    resolve(user); // Simulating successful user retrieval
});

getUser.then(function(user) {       
    console.log("User retrieved:", user);
    // Simulating an error during processing
    throw new Error("Error processing user data");
}).catch(function(error) {
    console.error("Caught an error:", error.message);   

});
// In this example, we create a promise to simulate user retrieval. The .then() handler processes the user data but throws an error, 
// which is then caught by the .catch() handler.


//Example demonstrating returning values through .then() chain
let promisews = new Promise(function(resolve, reject) {
    resolve(10);
});

promisews.then(function(value) {
    console.log("First then value:", value); // Logs 10
    return value * 2; // Returns 20 to the next then
}).then(function(value) {
    console.log("Second then value:", value); // Logs 20
    return value + 5; // Returns 25 to the next then
}).then(function(value) {
    console.log("Third then value:", value); // Logs 25
});


// Handle Multiple Promises
// Promise static methods
// Promise.all(): Waits for all promises to resolve or any to reject.
// Promise.race(): Resolves or rejects as soon as one promise settles.
// Promise.allSettled(): Waits for all promises to settle (either resolve or reject).
// Promise.any(): Resolves as soon as any one promise resolves, ignores rejections unless all reject.   
const p1 = new Promise((resolve) => setTimeout(() => resolve("P1 resolved"), 1000));
const p2 = new Promise((resolve) => setTimeout(() => resolve("P2 resolved"), 2000));
const p3 = new Promise((_, reject) => setTimeout(() => reject("P3 rejected"), 1500));
Promise.all([p1, p2, p3])
    .then((results) => {
        console.log("Promise.all results:", results);   
    })
    .catch((error) => {
        console.error("Promise.all error:", error); // Logs "Promise.all error: P3 rejected"
    }); 
Promise.race([p1, p2, p3])
    .then((result) => {
        console.log("Promise.race result:", result); // Logs "Promise.race result: P1 resolved"
    })
    .catch((error) => {
        console.error("Promise.race error:", error);   
    });
Promise.allSettled([p1, p2, p3])
    .then((results) => {
        console.log("Promise.allSettled results:", results);   
    });     
Promise.any([p1, p2, p3])
    .then((result) => {
        console.log("Promise.any result:", result); // Logs "Promise.any result: P1 resolved"   
    })
    .catch((error) => {
        console.error("Promise.any error:", error);   
    }); 
// These static methods are useful for managing multiple asynchronous operations concurrently.
//Promise.resolve(value) and Promise.reject(reason) are utility methods to create resolved or rejected promises respectively.
const resolved = Promise.resolve("Resolved value");
resolved.then((value) => {
    console.log("Promise.resolve result:", value); // Logs "Promise.resolve result: Resolved value"
});
const rejected = Promise.reject("Rejected reason");
rejected.catch((reason) => {
    console.error("Promise.reject reason:", reason); // Logs "Promise.reject reason: Rejected reason"
});

