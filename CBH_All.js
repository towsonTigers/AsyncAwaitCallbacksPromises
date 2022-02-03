import consumeSandwich from './CallBackHellExample1.js';
import promiseSandwich from './CBH_Promises.js';
import asyncAwaitConsumeSandwich from './CBH_AsyncAwait.js';

//callback.test();cls
let elaspedTime1 = consumeSandwich();

let elaspedTime2 = promiseSandwich();

asyncAwaitConsumeSandwich();

console.log("ES1 = " + elaspedTime1);
console.log("ES2 = " + elaspedTime2);

