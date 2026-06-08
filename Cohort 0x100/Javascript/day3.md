"Async fn VS Sync fn"

sync -- together ,  one after another , only one thing is happening at a time</br>
async -- opposite of sync, happens in parts , multiple things are context switching with each other

```Javascript
function findSum(n) {
    let ans = 0;
    for(let i = 0;i<n;i++){
        ans += i;
    }
    return ans;
}

function findSumTill1000(){
    return findSum(100);
}

setTimeout(findSumTill1000,1000)    //calling as async function
console.log("hello world")
```

Another async function 

```Javascript
const fs = require('fs');
fs.readFile("a.txt","utf-8",function(err,data){
    console.log(data);
});
console.log("this is a message");