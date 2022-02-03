let p = new Promise((resolve, reject) => {
    let a = 1 + 1;
    if (a==2) {
        resolve('Success');
    } else {
        reject('Failed');
    }
});

console.log('before');

p.then((message) => {
    console.log('This is in the then ' + message);
}).catch((message) => {
    console.log('This is in the catch ' + message);
});

console.log('after');