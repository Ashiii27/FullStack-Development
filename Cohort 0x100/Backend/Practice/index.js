const express = require("express");
const app = express();
const port = 3000;

// function sum(n) {
//     let ans = 0;
//     for (let i = 1; i <= n; i++) {
//         ans += i;
//     }
//     return ans; 
// }

// app.get("/sum/:n", (req, res) => {              //req and res stands for request and response
//     const n = parseInt(req.params.n);
//     const result = sum(n);
//     res.json({ result });
// });

// app.listen(port, () => {
//     console.log(`Server is running on http://localhost:${port}`);
// });



var user = [{
    name: "John Doe",
    kidneys: [{
        healthy: false
    }, {
        healthy: true
    }]
}];


app.get("/",function(req,res){
    const johnKidneys = user[0].kidneys;
    const numberOfKidneys = johnKidneys.length;
    const numberOfHealthyKidneys = 
    console.log(johnKidneys);
    res.json({ kidneys: johnKidneys, numberOfKidneys });
})


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
// app.post("/user", function(req, res){
//     // Logic for adding a new user
// });