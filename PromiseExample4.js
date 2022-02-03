import fetch from 'node-fetch';

const url = 'https://jsonplaceholder.typicode.com/todos/1';

  //async/await
  const loadData = async() => {
      try {
        const url = 'https://jsonplaceholder.typicode.com/todos/1';
        const url2 = 'https://jsonplaceholder.typicode.com/todos/2';
        const url3 = 'https://jsonplaceholder.typicode.com/todos/3';

        const res = await fetch(url);
        const data = await res.json();
        const res2 = await fetch(url2);
        const data2 = await res2.json();
        const res3 = await fetch(url3);
        const data3 = await res3.json();
 
        return [data, data2, data3];
      } catch(err) {
          console.log(err);
      }
  };

  const loadData2 = async() => {
    try {
      const url = 'https://jsonplaceholder.typicode.com/todos/1';
      const url2 = 'https://jsonplaceholder.typicode.com/todos/2';
      const url3 = 'https://jsonplaceholder.typicode.com/todos/3';

      const results = await Promise.all([fetch(url), fetch(url2), fetch(url3)]);
       
      const finalData = await Promise.all(results.map(result => result.json()));

      return finalData;
    } catch(err) {
        console.log(err);
    }
};

  //const data = loadData().then((data) => console.log(data));

  ( async() => {
    let startTime = performance.now();    
    const data1 = await loadData();
    let endTime = performance.now();
    console.log(`Call to loadData took ${endTime - startTime} milliseconds`);

    startTime = performance.now();    
    const data2 = await loadData2();
    endTime = performance.now();
    console.log(`Call to loadData took ${endTime - startTime} milliseconds`);

    //console.log(data1);
    //console.log(data2);
 })();