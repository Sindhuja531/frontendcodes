// Asynchronous function without async/await
function fetchData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const data = "Async data fetched!";
        resolve(data);
      }, 2000);
    });
  }
  
  // Using the asynchronous function
  fetchData()
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.error(error);
    });
  