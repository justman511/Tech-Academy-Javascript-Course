
function Ride_Function() {
    let Height, Can_ride;
    Height = document.getElementById('Height').value;
    console.log(Height);
    Can_ride = (Height < 52) ? 'You are too short' : 'You are tall enough';
    let checker = document.getElementById('Ride').innerHTML = Can_ride + ' to ride';
    console.log(checker);
}

let age = window.prompt('Please enter your age ');
console.log(age);
eligible_voter = (age >= 18) ? 'You are eligible to vote' : 'You are not eligible to vote';
console.log(eligible_voter);

/* function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
} */

class Vehicle {
    constructor(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
    }
}

let Jack = new Vehicle('Dodge', 'Viper', 2020, 'Red');
let Emily = new Vehicle('Jeep', 'Trail Hawk', 2019, 'White and Black');
let Erik = new Vehicle('Ford', 'Pinto', 1971, 'Mustard');

function myFunction() {
    document.getElementById('Keywords_and_constructors').innerHTML = 'Erik drives a ' + Erik.Vehicle_Color + '-colored ' + Erik.Vehicle_Model 
    + ' manufactured in ' + Erik.Vehicle_Year;
}

function Nested_Function() {
    document.getElementById('Counting').innerHTML = Count();
    function Count() {
        let Starting_point = 9;
        function Plus_one() {
            Starting_point += 1;
        }
        Plus_one();
        return Starting_point;
    }
}