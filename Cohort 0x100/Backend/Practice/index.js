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
    }]
}];

app.use(express.json());

app.get("/",function(req,res){
    const johnKidneys = user[0].kidneys;
    const numberOfKidneys = johnKidneys.length;
    const numberOfHealthyKidneys = johnKidneys.filter(kidney => kidney.healthy).length;
    console.log(johnKidneys);
    res.json({ kidneys: johnKidneys, numberOfKidneys, numberOfHealthyKidneys });
})

app.post("/", function (req, res) {
    const isHealthy = req.body.isHealthy;
    user[0].kidneys.push({ healthy: isHealthy });
    res.json({ message: "Kidney added successfully" });
});

app.put("/", function (req, res) {
    const isHealthy = req.body.isHealthy;
    user[0].kidneys[0].healthy = isHealthy;
    res.json({ message: "Kidney updated successfully" });
});

app.delete("/", function (req, res) {
    user[0].kidneys.shift();
    res.json({ message: "Kidney deleted successfully" });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

