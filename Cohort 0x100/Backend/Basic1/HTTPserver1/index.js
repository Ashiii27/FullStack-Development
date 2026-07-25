//creating a http server
//using express
//is it a node default library = no

const express = require("express");
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello, World!<br><h1>This is a simple HTTP server.</h1>');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});