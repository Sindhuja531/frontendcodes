// Asynchronous function with async/await
async function fetchData() {
    return new Promise((resolve) => {
      setTimeout(() => {
        const data = "Async data fetched!";
        resolve(data);
      }, 2000);
    });
  }
  
  // Using the asynchronous function with async/await
  async function fetchDataAndLog() {
    try {
      const result = await fetchData();
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  }
  
  // Call the function
  fetchDataAndLog();
  