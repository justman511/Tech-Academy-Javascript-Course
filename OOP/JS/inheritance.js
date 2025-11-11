// Inheritance: Child classes inherit behaviour from a parent class.

/*

1. When creating class, generic fields and methods should be placed in the parent class.
2. The child should how specific fields and methods should be placed there. 

Note:
Eg. Drive can be place in the parent class in a Car class

2: But charging should be only in electric car class.

*/


class CarP {
    constructor(make, model) {
        this.make = make;
        this.model = model;

    }

    drive() {
        console.log('Driving on fuel');
    }
}

class ElectricCar extends CarP {
    constructor(make, model, batteryLevel) {
        super(make, model);
        this.batteryLevel = batteryLevel;
    }

    charge(){
        console.log('Charging my Car');
    }

    drive() {
        console.log('driving an electric battery');
    }
}

const elctr = new ElectricCar('Tesla', 's3', '40%');
elctr.drive();
elctr.charge();