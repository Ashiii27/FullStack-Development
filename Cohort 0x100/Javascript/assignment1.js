//Create a counter in JS that counts from 30 to 0

/*
let count = 30;

const interval = setInterval(() => {
  console.log(count);
  count--;

  if (count < 0) {
    clearInterval(interval);
    console.log("Done!");
  }
}, 1000);

*/

//calculate the time it takes  between a setTimeout call and the inner function actually running

const start = Date.now();

setTimeout(() => {
  const actual = Date.now() - start;
  console.log(`Requested delay: 2000ms`);
  console.log(`Actual delay: ${actual}ms`);
  console.log(`Drift: ${actual - 2000}ms`);
}, 2000);

