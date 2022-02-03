//Async/Await ES6
const makeSandwich = (user) => {
    return new Promise((resolve, reject) => {
        console.log(`${user} gets 2 slices of bread`);
 //       resolve('Add Ham');
        reject('Outta Ham!');
    });
}

const getHam = (addHam) => {
    return new Promise((resolve, reject) => {
        console.log(`${addHam}`);
        resolve('Add Cheese');
    });
}

const getCheese = (addCheese) => {
    return new Promise((resolve, reject) => {
        console.log(`${addCheese}`);
        resolve('Add Lettuce');
    });
}

const getLettuce = (addLettuce) => {
    return new Promise((resolve, reject) => {
        console.log(`${addLettuce}`);
        resolve('Add Tomato');
    });
}

const getTomato = (addTomato) => {
    return new Promise((resolve,reject) => {
    console.log(`${addTomato}`);
    resolve('Add Onion');
    });
}

const getOnion = (addOnion) => {
    return new Promise((resolve,reject) => {
    console.log(`${addOnion}`);
    resolve('Add Mayo');
    });
}

const getMayo = (addMayo) => {
    return new Promise((resolve,reject) => {
    console.log(`${addMayo}`);
    resolve('Eat Sandwich!');
    });
}

function promiseSandwich() {
        let startTime = performance.now();    

        makeSandwich('Dave')
            .then(data => getHam(data))
            .then(data => getCheese(data))
            .then(data => getLettuce(data))
            .then(data => getTomato(data))
            .then(data => getOnion(data))
            .then(data => getMayo(data))
            .then(data => {
                console.log(data); 
                let endTime = performance.now();
                console.log(`Promises took ${endTime - startTime} milliseconds`);
            }).catch((message)=> {
                console.log(message);
            });
};

promiseSandwich();

export default promiseSandwich;