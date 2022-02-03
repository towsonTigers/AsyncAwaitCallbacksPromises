//make a ham sandwich
let makeSandwich = function(user, nextStep) {
    console.log(`${user} gets 2 slices of bread`);
//..    nextStep('Add Ham');
    throw 'Outta Ham!';
}

let getHam = function(addHam, nextStep) {
    console.log(`${addHam}`);
    nextStep('Add American Cheese');
}

let getCheese = function(addCheese, nextStep) {
    console.log(`${addCheese}`);
    nextStep('Add Lettuce');
}

let getLettuce = function(addLettuce, nextStep) {
    console.log(`${addLettuce}`);
    nextStep('Add Tomato');
}

let getTomato = function(addTomato, nextStep) {
    console.log(`${addTomato}`);
    nextStep('Add Onion');
}

let getOnion = function(addOnion, nextStep) {
    console.log(`${addOnion}`);
    nextStep('Add Mayo');
}

let getMayo = function(addMayo, nextStep) {
    console.log(`${addMayo}`);
    nextStep('Eat Sandwich!');
}

function consumeSandwich() {
        let startTime = performance.now(); 

        //callback hell - 7 layers of nesting!
        makeSandwich("Dave", (addHam) => {
            getHam(addHam, (addCheese) => {
                getCheese(addCheese, (addLettuce) => {
                    getLettuce(addLettuce, (addTomato) => {
                        getTomato(addTomato, (addOnion) => {
                            getOnion(addOnion, (addMayo) => {
                                getMayo(addMayo, (done) => {
                                    console.log(done);
                             });
                        });
                    });
                });
            });
        });    
    });
    let endTime = performance.now();
    console.log(`Callbacks took ${endTime - startTime} milliseconds`); 
    return endTime - startTime;      

}

consumeSandwich();

export default consumeSandwich;