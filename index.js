const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());


const categories = require('./data/data.json');


const port = process.env.port || 5000;

app.listen(port, () => {
    console.log("Server is running on port:", port)
});


app.get("/", (req, res) => {
    res.send("Tech Learning Server is Running...")
});

// api to get all items
app.get('/categories', (req, res) => {
    res.send(categories)
});

// api to get a specific item
app.get('/category/:id', (req, res) => {
    const id = req.params.id;
    console.log(id);
    const category = categories.find(item => item.id === id);
    res.send(category);
})