//Abstraction

class Cars {
    startEngine() {
        //Hide complexities and only exposing the startEngine methods to the end user.
        this.#injectFuel();
        this.#ignite();
        console.log('Engine Started');
    }

    #injectFuel() {
      console.log('Fuel injected');
    }

    #ignite(){
     console.log('Spark generated');
    }
}

const cars = new Cars();
cars.startEngine();