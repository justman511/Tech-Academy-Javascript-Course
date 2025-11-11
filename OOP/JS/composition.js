//Composition: Use of other classes to build functionality

class Engine {
    start() {
        console.log('Engine started');
    }
}


class CarC {
    constructor() {
        // Car has-A engine
     this.engine = new Engine();
    }

    startCar() {
        this.engine.start();
    }
}

const engCar =  new CarC();
engCar.startCar();