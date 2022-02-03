//Promises, Promises
const makeSandwich = (user) => {
    return new Promise((resolve, reject) => {
        console.log(`${user} gets 2 slices of bread`);
        resolve('Add Ham');
 //       reject('Outta Ham!');

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

//Async/Await ES7
const asyncAwaitConsumeSandwich = async () => {
    let startTime = performance.now();

    try {
        let response = await makeSandwich('Dave');
        response = await getHam(response);
        response = await getCheese(response);
        response = await getLettuce(response);
        response = await getTomato(response);
        response = await getOnion(response);
        response = await getMayo(response);
        console.log(response);
   } catch (error) {
        console.log(error);
    }

     let endTime = performance.now();
    console.log(`Async/Await took ${endTime - startTime} milliseconds`);
};

asyncAwaitConsumeSandwich();

export default asyncAwaitConsumeSandwich;