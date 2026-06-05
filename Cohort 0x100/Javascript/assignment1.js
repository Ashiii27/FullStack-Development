//Create a counter in JS that counts from 30 to 0

let count = 30;

const interval = setInterval(() => {
  console.log(count);
  count--;

  if (count < 0) {
    clearInterval(interval);
    console.log("Done!");
  }
}, 1000);