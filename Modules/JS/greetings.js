//Dynamic exporting of greetings based on time of the day
function getGreeting() {
    const currentHour = new Date().getHours();  
    if (currentHour < 12) {
        return "Good Morning!";
    } else if (currentHour < 18) {
        return "Good Afternoon!";
    } else {
        return "Good Evening!";
    }       
}

const sayHi = () => {
    return "Hi there!";
}

const sayHola = () => {
    return "¡Hola!";
}   

export { getGreeting, sayHi, sayHola };