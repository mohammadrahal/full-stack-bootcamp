console.log("hello");

setTimeout(() => {
    console.log("Hello after 5 seconds!");
  }, 5000); // Delay of 5000 milliseconds (5 seconds)

//   function updateClock() {
//     const currentTime = new Date();
//     const hours = currentTime.getHours();
//     const minutes = currentTime.getMinutes();
//     const seconds = currentTime.getSeconds();
//     console.log(`${hours}:${minutes}:${seconds}`);
//   }
  
//   setInterval(updateClock, 1000);
  

// Delayed Promise
const delayedPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Promise resolved!");
    }, 2000); 
  });
  
  // Chaining Promises
  delayedPromise
    .then(result => {
    //   alert(result); 
      console.log("Chained message!"); 
    })
    .catch(error => {
      console.error(error);
    });
  
    // Step 2

    // Simulated network request promise
const networkRequest = new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() >= 0.5; // Simulate success or failure
      if (shouldResolve) {
        resolve("Data fetched successfully!");
      } else {
        reject("Network Error!");
      }
    }, 3000); // Simulate a 3-second network delay
  });
  
  // Using async/await with Fetch API
  async function fetchData() {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
      if (!response.ok) {
        throw new Error(`Fetch failed with status ${response.status}`);
      }
      const data = await response.json();
      console.log("Fetched data:", data);
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  }
  
  networkRequest
    .then(result => {
      console.log(result); 
    })
    .catch(error => {
      console.error(error); 
    });
  fetchData();
  