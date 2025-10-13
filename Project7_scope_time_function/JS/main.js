
let foo = 50;

function scopeFunction () {
   let foo = 20;
   return foo += 4; // returns 24
}

let scopeT =  scopeFunction();
console.log(scopeT);

function scopeFail() {
    let foo;
    return foo += 5; // returns NaN
}

let scopeF = scopeFail();
console.log(scopeF);

function get_Date() {
    if(new Date().getHours() < 18) {
        document.getElementById('Greeting').innerHTML = 'How are you today?';
    } else {
        document.getElementById('Greeting').innerHTML = 'How was your previous day?';
    }
}

function Time_function() {
    let Time = new Date().getHours();
    let Reply;

    if(Time < 12 == Time > 0) {
        Reply = 'It is morning time!';
    }
    else if(Time >= 12 == Time < 18) {
        Reply = 'It is afternoon.';
    }
    else {
        Reply = 'It is evening time.';
    }
    document.getElementById('Time_of_day').innerHTML = Reply;
}