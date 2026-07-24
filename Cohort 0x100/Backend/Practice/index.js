const express = require("express");
const app = express();
const port = 3000;

function sum(n) {
    let ans = 0;
    for (let i = 1; i <= n; i++) {
        ans += i;
    }
    return ans; 
}

app.get("/sum/:n", (req, res) => {
    const n = parseInt(req.params.n);
    const result = sum(n);
    res.json({ result });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});