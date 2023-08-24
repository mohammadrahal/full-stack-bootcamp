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
  