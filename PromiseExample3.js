import fetch from 'node-fetch';

const url = 'https://jsonplaceholder.typicode.com/todos/1';

//promise
// fetch(url)
//   .then(res=> {
//       return res.json();
//   })
//   .then(data => {
//       console.log(data);
//   })
//   .catch(err=> {
//       console.error(error);
//   })

  //async/await
  const loadData = async() => {
      try {
        const url = 'https://jsonplaceholder.typicode.com/todos/1';
        const res = await fetch(url);
        console.log(res.ok);
        const data = await res.json();
  
        return data;
      } catch(err) {
          console.log(err);
      }

  }

  //const data = loadData().then((data) => console.log(data));

  ( async() => {
      const data = await loadData();
      console.log(data);
  })();