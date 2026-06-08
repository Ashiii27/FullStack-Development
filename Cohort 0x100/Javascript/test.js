const fs = require("fs");

// fs.readFile("a.txt", "utf-8", function (err, data) {
//   console.log(data);
// });
// console.log("this is a message");

//my own async function
function ReadFile() {
  return new Promise(function (resolve) {
    fs.readFile("a.txt", "utf-8", function (err, data) {
      resolve(data);
    });
  });
}

function onDone(data) {
  console.log(data);
}

ReadFile().then(onDone);
