// Encapsulation : Group related properties and methods, and restricting direct access to internal data.

class Carz {
    #Speed = 0;

    accelerate() {
        this.#Speed += 10;
    }

    getSpeed() {
        return this.#Speed;
    }
}

const carz = new Carz();
carz.accelerate();
console.log(carz.getSpeed());
carz.accelerate();
carz.accelerate();
console.log(carz.getSpeed());
