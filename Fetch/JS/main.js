//Fetch 

fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => response.json()) //Parsing the JSON response. Here we pick up the JSON data from the response. 
    // The .json() method also returns a promise.
    .then(data => console.log(data))// Here we handle the parsed data. In this case, we log it to the console.
    .catch(error => console.error('Error:', error)); //API to get a post with ID 1 from JSONPlaceholder
// Output: {userId: 1, id: 1, title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
// body: "quia et suscipit\nsuscipit..."}


//Fecth with async/await

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
