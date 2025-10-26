
//http methods in fetch API

//get method is default method in fetch API
//Example of a GET request using Fetch API
fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'GET', // Specify the HTTP method
}).then(response => response.json()) // Parse the JSON response
.then(data => console.log('GET Response:', data)) // Handle the parsed data
.catch(error => console.error('Error:', error)); // Handle any errors
// Output: GET Response: {userId: 1, id: 1, title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
// body: "quia et suscipit\nsuscipit..."}

//get methods using async/await
async function fetchGet() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1', {
            method: 'GET', // Specify the HTTP method
        });
        const data = await response.json(); // Parse the JSON response
        console.log('GET Response (async/await):', data); // Handle the parsed data
    } catch (error) {
        console.error('Error:', error); // Handle any errors
    }   
}

fetchGet();


// Example of a POST request using Fetch API
const postData = {
    title: 'foo',
    body: 'bar',
    userId: 1,
};
fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST', // Specify the HTTP method
    headers: {  //Tell the server we are sending JSON data (content type). (important for POST and PUT requests)
        'Content-Type': 'application/json', // Set the content type to JSON
    },
    body: JSON.stringify(postData), // Convert the data to a JSON string. Data to be sent in the request body, must be a string.   
}).then(response => response.json()) // Parse the JSON response. Response from the server after creating the resource.
.then(data => console.log('POST Response:', data)) // Handle the parsed data
.catch(error => console.error('Error:', error)); // Handle any errors
// Output: POST Response: {id: 101, title: "foo", body: "bar", userId: 1}

// using async/await for POST request
async function createPost() {
    const postData = {
        title: 'foo',
        body: 'bar',
        userId: 1,
    };
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST', // Specify the HTTP method
            headers: {  
                'Content-Type': 'application/json', // Set the content type to JSON
            },
            body: JSON.stringify(postData), // Convert the data to a JSON string 
        });
        const data = await response.json(); // Parse the JSON response. Response from the server after creating the resource.
        console.log('POST Response (async/await):', data); // Handle the parsed data
    } catch (error) {
        console.error('Error:', error); // Handle any errors
    }   
}

createPost();

// Example of a PUT request using Fetch API
const putData = {
    id: 1,
    title: 'updated title',
    body: 'updated body',
    userId: 1,
};
fetch('https://jsonplaceholder.typicode.com/posts/1', { //You need to specify the resource to update (here post with ID 1)
    method: 'PUT', // Specify the HTTP method
    headers: {  
        'Content-Type': 'application/json', // Set the content type to JSON
    },
    body: JSON.stringify(putData), // Convert the data to a JSON string 
}).then(response => response.json()) // Parse the JSON response
.then(data => console.log('PUT Response:', data)) // Handle the parsed data
.catch(error => console.error('Error:', error)); // Handle any errors
// Output: PUT Response: {id: 1, title: "updated title", body: "updated body", userId: 1}

// using async/await for PUT request
async function updatePost() {
    const putData = {   
        id: 1,
        title: 'updated title',
        body: 'updated body',
        userId: 1,
    };
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1', { //You need to specify the resource to update (here post with ID 1)
            method: 'PUT', // Specify the HTTP method
            headers: {  
                'Content-Type': 'application/json', // Set the content type to JSON
            },
            body: JSON.stringify(putData), // Convert the data to a JSON string 
        });
        const data = await response.json(); // Parse the JSON response
        console.log('PUT Response (async/await):', data); // Handle the parsed data
    } catch (error) {
        console.error('Error:', error); // Handle any errors
    }   
}

updatePost();


// Example of a DELETE request using Fetch API
fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'DELETE', // Specify the HTTP method. The body is not required for DELETE requests. Content-type header is also not necessary here.    
}).then(response => {
    if (response.ok) {
        console.log('DELETE Response: Resource deleted successfully');
    } else {
        console.error('Error: Failed to delete resource');
    }       
}).catch(error => console.error('Error:', error)); // Handle any errors
// Output: DELETE Response: Resource deleted successfully


// Example of a PATCH request using Fetch API
const patchData = {
    title: 'patched title',
};
fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'PATCH', // Specify the HTTP method 
    headers: {  
        'Content-Type': 'application/json', // Set the content type to JSON
    },
    body: JSON.stringify(patchData), // Convert the data to a JSON string 
}).then(response => response.json()) // Parse the JSON response
.then(data => console.log('PATCH Response:', data)) // Handle the parsed data
.catch(error => console.error('Error:', error)); // Handle any errors
// Output: PATCH Response: {id: 1, title: "patched title", body: "quia et suscipit...", userId: 1}
// Example of a HEAD request using Fetch API
fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'HEAD', // Specify the HTTP method    
}).then(response => {
    console.log('HEAD Response Headers:', [...response.headers]); // Log all headers
}).catch(error => console.error('Error:', error)); // Handle any errors
// Output: HEAD Response Headers: [Array of headers]
// Example of an OPTIONS request using Fetch API
fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'OPTIONS', // Specify the HTTP method    
}).then(response => {
    console.log('OPTIONS Response Headers:', [...response.headers]); // Log all headers
}).catch(error => console.error('Error:', error)); // Handle any errors
// Output: OPTIONS Response Headers: [Array of headers] 
// Example of a TRACE request using Fetch API
fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'TRACE', // Specify the HTTP method    
}).then(response => {
    console.log('TRACE Response Status:', response.status); // Log the response status
}).catch(error => console.error('Error:', error)); // Handle any errors
// Output: TRACE Response Status: 405 (Method Not Allowed)  
// Example of a CONNECT request using Fetch API
fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'CONNECT', // Specify the HTTP method    
}).then(response => {
    console.log('CONNECT Response Status:', response.status); // Log the response status
}).catch(error => console.error('Error:', error)); // Handle any errors
// Output: CONNECT Response Status: 405 (Method Not Allowed)

// Example of a custom method using Fetch API
fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'CUSTOM', // Specify a custom HTTP method    
}).then(response => {
    console.log('CUSTOM Response Status:', response.status); // Log the response status
}).catch(error => console.error('Error:', error)); // Handle any errors
// Output: CUSTOM Response Status: 405 (Method Not Allowed)
// Note: Some HTTP methods like TRACE, CONNECT, and custom methods may not be supported by all servers and can result in a 405 Method Not Allowed response.


//Fetch Methods 
/*
1: GET - Retrieve data from a server. Does not modify any data. 
2: POST - Send data to a server to create a new resource. Sends data in the request body.
3: PUT - Update an existing resource on the server. Modifies the entire resource.
4: DELETE - Remove a resource from the server. Deletes the specified resource.
5: PATCH - Partially update an existing resource on the server. Modifies only specified fields.
6: HEAD - Retrieve only the headers of a resource, without the body.
7: OPTIONS - Retrieve the supported HTTP methods for a resource.
8: TRACE - Echo the received request for debugging purposes.
9: CONNECT - Establish a tunnel to the server (primarily used with HTTPS).  
10: CUSTOM - A user-defined method for specific use cases (not standard).
*/
// These methods allow developers to perform various operations on web resources using the Fetch API.

//Fetch API is a modern interface that allows you to make HTTP requests to servers from web browsers. It provides a more powerful and flexible way to interact with resources over the network compared to older methods like XMLHttpRequest.

//Commonly used methods in Fetch API are GET, POST, PUT, DELETE, and PATCH. 
//Each method serves a specific purpose in CRUD (Create, Read, Update, Delete) operations when working with web APIs.
//Fetching Data from an API

//Example of a GET request using Fetch API
fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => response.json()) // Parse the JSON response
    .then(data => console.log(data)) // Handle the parsed data
    .catch(error => console.error('Error:', error)); // Handle any errors
// Output: {userId: 1, id: 1, title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
// body: "quia et suscipit\nsuscipit..."}
//Example of fetching data using async/await
async function fetchPost() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1'); // Await the fetch call to complete and get the response.
        const data = await response.json(); // Await the parsing of the JSON data from the response.
        console.log(data);
    } catch (error) {
        console.error('Error:', error);
    }   
}

fetchPost();

//Query Parameters in Fetch API
//Example of using query parameters in a GET request with Fetch API
const userId = 1;   
fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`) // Using query parameters to filter posts by userId
//after the ? we can add key value pairs to filter data (here userId=1) is the key value pair
    .then(response => response.json()) // Parse the JSON response
    .then(data => console.log(data)) // Handle the parsed data
    .catch(error => console.error('Error:', error)); // Handle any errors
// Output: Array of posts with userId 1


//Fetch using a request object and async/await
async function fetchWithRequest() {
    const request = new Request('https://jsonplaceholder.typicode.com/posts/1', {   
        method: 'GET', // Specify the HTTP method
        headers: {
            'Content-Type': 'application/json', // Set the content type to JSON
        },
    }); 
    try {
        const response = await fetch(request); // Await the fetch call with the request object
        const data = await response.json(); // Await the parsing of the JSON data from the response.
        console.log(data);
    } catch (error) {
        console.error('Error:', error);
    }   
}

fetchWithRequest();

//Using query search object 
const url = new URL('https://jsonplaceholder.typicode.com/posts');
const params = { userId: 1, id: 1 };    
Object.keys(params).forEach(key => url.searchParams.append(key, params[key])); // Append each key-value pair to the search parameters
console.log(url.toString()); // Log the constructed URL with query parameters
// Output: https://jsonplaceholder.typicode.com/posts?userId=1&id=1. uses & to separate multiple key value pairs

fetch(url) // Fetch using the constructed URL with query parameters 
    .then(response => response.json()) // Parse the JSON response
    .then(data => console.log(data)) // Handle the parsed data
    .catch(error => console.error('Error:', error)); // Handle any errors
// Output: Array of posts with userId 1 and id 1    
// Here we used URL and URLSearchParams to construct a URL with query parameters in a more structured way.


// Reusing Request Object
const reusableRequest = new Request('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
    },
});
// Function to fetch data using the reusable request object
async function fetchUsingReusableRequest() {
    try {   
        const response = await fetch(reusableRequest); // Use the reusable request object
        const data = await response.json();
        console.log('First Fetch:', data);
        const secondResponse = await fetch(reusableRequest); // Reuse the same request object
        const secondData = await secondResponse.json();
        console.log('Second Fetch:', secondData);
    } catch (error) {
        console.error('Error:', error);
    }       
}

fetchUsingReusableRequest();
// This demonstrates how to create a Request object once and reuse it for multiple fetch calls.
// Output: First Fetch: {userId: 1, id: 1, title: "...", body: "..."}
//         Second Fetch: {userId: 1, id: 1, title: "...", body: "..."}

// Reusing request object to modify body for POST request
const postRequest = new Request('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({ title: 'initial title', body: 'initial body', userId: 1 }), // Initial body
}); 
// Function to create posts using the reusable request object with different bodies

const sendPostRequest  = new request(postRequest, {
    body: JSON.stringify({ title: 'modified title', body: 'modified body', userId: 1 }), // Modified body
}); 
fetch(sendPostRequest) // Use the modified request object   
    .then(response => response.json()) // Parse the JSON response
    .then(data => console.log('POST with modified body Response:', data)) // Handle the parsed data
    .catch(error => console.error('Error:', error)); // Handle any errors
// Output: POST with modified body Response: {id: 101, title: "modified title", body: "modified body", userId: 1}  
// This shows how to create a base Request object and then create new Request objects based on it with modified properties like the body.

// Use the modified request object to send another POST request with async/await
async function sendModifiedPost() {
    try {   
        const response = await fetch(sendPostRequest); // Use the modified request object   
        const data = await response.json();
        console.log('POST with modified body Response (async/await):', data);
    } catch (error) {
        console.error('Error:', error);
    }   
}

sendModifiedPost();
// Output: POST with modified body Response (async/await): {id: 101, title: "modified title", body: "modified body", userId: 1}

//Handliging Responses and Errors in Fetch API using async/await
async function fetchWithHandling() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        if (!response.ok) { // Check if the response status is not OK (200-299)
            throw new Error(`HTTP error! status: ${response.status}`); // Throw an error with the status code
        }
        const contentType = response.headers.get('Content-Type'); // Get the content type from headers
        if (!contentType || !contentType.includes('application/json')) {
            throw new Error('Invalid content type, expected application/json'); // Check for expected content type
        }   
        const data = await response.json(); // Parse the JSON response
        console.log('Fetched Data:', data); // Handle the parsed data
    } catch (error) {
        console.error('Fetch Error:', error.message); // Handle any errors
    }   
}

fetchWithHandling();
// This example demonstrates how to check the response status and handle errors appropriately when using Fetch API with async/await.

//Cancelling Fetch Requests using AbortController
const controller = new AbortController();
const signal = controller.signal; // Get the signal from the controller

// Start a fetch request with the abort signal  
fetch('https://jsonplaceholder.typicode.com/posts/1', { signal })
    .then(response => response.json())
    .then(data => console.log('Fetch completed:', data))    
    .catch(error => {
        if (error.name === 'AbortError') {
            console.log('Fetch aborted'); // Handle the abort error 
        } else {
            console.error('Fetch error:', error); // Handle other errors
        }
    });

// Abort the fetch request after 100 milliseconds
setTimeout(() => {
    controller.abort(); // Cancel the fetch request
}, 100); 
// This example shows how to use AbortController to cancel an ongoing fetch request. If the request is aborted, it throws an AbortError which can be handled in the catch block.    

// Start a fetch request with the abort signal using async/await
async function fetchWithAbort() {
    const controller = new AbortController();
    const signal = controller.signal; // Get the signal from the controller 
    // Abort the fetch request after 100 milliseconds
    setTimeout(() => {
        controller.abort(); // Cancel the fetch request
    }, 100);
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1', { signal });
        const data = await response.json();
        console.log('Fetch completed (async/await):', data);
    } catch (error) {
        if (error.name === 'AbortError') {
            console.log('Fetch aborted (async/await)'); // Handle the abort error 
        } else {
            console.error('Fetch error (async/await):', error); // Handle other errors
        }
    }   
}   
fetchWithAbort();
// This example shows how to use AbortController to cancel an ongoing fetch request using async/await. If the request is aborted, it throws an AbortError which can be handled in the catch block.