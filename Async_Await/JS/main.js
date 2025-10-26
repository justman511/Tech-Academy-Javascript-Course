//Async await example
// We use async and await to handle asynchronous operations in a more readable way.
// Try to fetch data from a public API and log the result to the console.
// Make sure to handle errors appropriately.
async function fetchData() {
    try {   
        let response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        let data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }   
}

fetchData();

// Async function returns a promise
async function exampleAsyncFunction() {
    return "Hello, Async/Await!";
}   
exampleAsyncFunction().then(message => console.log(message));

// Using await with a delay function
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}   
async function delayedMessage() {
    console.log("Waiting for 2 seconds...");
    await delay(2000);
    console.log("2 seconds have passed!");
}   
delayedMessage();

// Handling multiple asynchronous operations
async function fetchMultipleData() {
    try {
        let [postResponse, userResponse] = await Promise.all([
            fetch('https://jsonplaceholder.typicode.com/posts/1'),
            fetch('https://jsonplaceholder.typicode.com/users/1')
        ]); 
        let postData = await postResponse.json();
        let userData = await userResponse.json();
        console.log('Post Data:', postData);
        console.log('User Data:', userData);
    } catch (error) {
        console.error('Error fetching multiple data:', error);
    }   
}
fetchMultipleData();

// Error handling in async functions
async function fetchWithError() {
    try {   
        let response = await fetch('https://jsonplaceholder.typicode.com/invalid-endpoint');
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }   
        let data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Fetch error:', error);
    }   
}
fetchWithError();

// Chaining async functions
async function firstAsyncFunction() {
    return "First function result";
}   
async function secondAsyncFunction() {
    let firstResult = await firstAsyncFunction();
    return `Second function received: ${firstResult}`;
}   
secondAsyncFunction().then(result => console.log(result));  

// Using async/await in event listeners
document.getElementById('fetchButton').addEventListener('click', async () => {
    try {   
        let response = await fetch('https://jsonplaceholder.typicode.com/posts/2');
        let data = await response.json();
        console.log('Button fetch data:', data);
    } catch (error) {
        console.error('Error fetching data on button click:', error);
    }   
});

// Note: Make sure to have an HTML element with id 'fetchButton' for the last example to work.

//Await resolves promises before proceeding
async function sequentialFetch() {
    try {
        let response1 = await fetch('https://jsonplaceholder.typicode.com/posts/3');
        let data1 = await response1.json();
        console.log('First fetch data:', data1);
        let response2 = await fetch('https://jsonplaceholder.typicode.com/posts/4');
        let data2 = await response2.json();
        console.log('Second fetch data:', data2);
    } catch (error) {
        console.error('Error in sequential fetch:', error);
    }   
}
sequentialFetch();