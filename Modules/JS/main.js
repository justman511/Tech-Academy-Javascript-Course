//Static importing of practical_1 module
//Static importing of practical_2 module

//import { Sum, Subtract, Multiply } from "../module/practical_1.js";
//import {Sum, Subtract, Multiply } from "../modules1/practical_1.js"
//OR as alias
//import { Sum as Addition, Subtract as Deduction, Multiply as Product } from "../modules1/practical_1.js"
//OR import all (namespace import)
/*import * as Calc from "../modules1/practical_1.js";
const Addition = Calc.Sum;
const Deduction = Calc.Subtract;
const Product = Calc.Multiply;


//import  {default as  Divide}  from "../modules1/Practical_2.js";
//OR
import Divide from "../modules1/Practical_2.js"; */

//Using combined module
import { Calc, Divide } from "./combine.js";
import { getGreeting, sayHi, sayHola } from "./greetings.js";
const Addition = Calc.Sum;
const Deduction = Calc.Subtract;
const Product = Calc.Multiply;

//Dynamic importing of greetings module
//Returns a promise
/*import("./greetings.js").then((module) => {
    console.log(module.getGreeting());
    console.log(module.sayHi());
    console.log(module.sayHola());
}).catch((error) => {
    console.error("Error loading greetings module: ", error);
}); */

//Using async/await for dynamic import
async function loadGreetings() {
    try {
        const module = await import("./greetings.js");  
        console.log(module.getGreeting());
        console.log(module.sayHi());
        console.log(module.sayHola());
    } catch (error) {
        console.error("Error loading greetings module: ", error);
    }
}

loadGreetings();

/*const {getGreeting, sayHi, sayHola} = await import("./greetings.js");
console.log(getGreeting());
console.log(sayHi());
console.log(sayHola()); */

//Promise.all example for dynamic imports
async function loadAllModules() {
    try { 
        //Awaiting multiple imports in parallel
        //Placing await on the Promise.all  
        const [greetingsModule, practical1Module, practical2Module] = await Promise.all([
            import("./greetings.js"),
            import("../modules1/practical_1.js"),
            import("../modules1/Practical_2.js")
        ]); 
        console.log(greetingsModule.getGreeting());
        console.log(practical1Module.Sum(10, 5));
        console.log(practical2Module.default(10, 5)); 
    } catch (error) {
        console.error("Error loading modules: ", error);
    }   
}

loadAllModules(); 

//Placing await imports directly in Promise.all
const Promises =  Promise.all([
     await import("./greetings.js"),
     await import("../modules1/practical_1.js"),
     await import("../modules1/Practical_2.js")
]);

console.log(Promises); 
//Returns a array of modules in promise
Promises.then((modules) => {
    const greetingsModule = modules[0];
    const practical1Module = modules[1];
    const practical2Module = modules[2];
    console.log(greetingsModule.getGreeting());
}).catch((error) => {
    console.error("Error loading modules: ", error);
});


const Promises2 = await Promise.all([
    import("./greetings.js"),
    import("../modules1/practical_1.js"),
    import("../modules1/Practical_2.js")
]);
console.log(Promises2);
const greetingsModule = Promises2[0];
const practical1Module = Promises2[1];
const practical2Module = Promises2[2];
console.log(greetingsModule.getGreeting());
console.log(practical1Module.Sum(10, 5));
console.log(practical2Module.default(10, 5));


console.log("Sum: ", Addition(10, 5));
console.log("Subtract: ", Deduction(10, 5));
console.log("Multiply: ", Product(10, 5));
console.log("Divide: ", Divide(10, 5));
console.log("Value of pi: ", 3.142); 