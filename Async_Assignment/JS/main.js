//alert(document.getElementById('p1').innerText);

A = "Always ";
B = "remember: ";
document.write(A + B);

C = "You are ";
D = "stronger than you think.";
document.write(C + D);

E = "Stay ";
F = "positive and keep going!";
document.write(E + F);

/*function count_To_Ten() {
    let count = "";
    let i = 1;
    function addNumber() {
        if (i <= 10) {
            count += i + "<br>";
            document.getElementById("Counting_to_Ten").innerHTML = count;
            i++;
            setTimeout(addNumber, 500); // Delay of 500 milliseconds
        }
    }
    addNumber();
}*/
function count_To_Ten() {
    let count = "";
    let i = 1;
    while (i <= 10) {
        count += i + "<br>";
        i++;
    }
    document.getElementById("Counting_to_Ten").innerHTML = count;
}

count_To_Ten();

