const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());


const port = process.env.port || 5000;

app.listen(port, () => {
    console.log("Server is running on port:", port)
});


app.get("/", (req, res) => {
    res.send("Now Server is Running...")
})