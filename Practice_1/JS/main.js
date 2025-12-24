
let name = 'Bob';
console.log('Hello, ' + name + '!');

X = 5;
console.log(X);
var X = 10;
console.log(X);

let a = 5;
console.log(a);
a = 10;
console.log(a);

function Hello_World_Function() {
  let A =  document.querySelectorAll('.Click');
  console.log(``, A);
  A[0].innerHTML = 'The text has changed!';

}

var c = document.getElementById("ID_Name");
var ctx = c.getContext("2d");
ctx.moveTo(0, 0);
ctx.lineTo(200, 100);
ctx.stroke();


    let x = document.forms["myForm"];
    x.addEventListener('click', function(e) {
        e.preventDefault();
        console.log(x['fname'].value);
        if(x['fname'].value == "") {
            alert("Name must be filled out");
            return false;
        }
    });

    function displayType(character) {
        let characterType = character.getAttribute("data-character-type");
        alert("This character is a " + characterType + ' ' + character.innerHTML);
    }

    let container = document.querySelector('#DC');
    console.log(container.dataset.characterType);
    
