const express = require("express");
const bodyParser = require("body-parser");

require("dotenv").config(); //for loading the particular environment

const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI,{useNewUrlParser: true})
        .then(() => console.log("Mongo Connection Successful"))
        .catch(err => console.log("Error"+err));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get("/", (req,res) => {
    res.send("Hello");
});

app.post("/user", (req,res) => {
    console.log(req.body);
    res.send(req.body);
})

app.listen(PORT, () => {
    console.log(`Server up and running on port ${PORT}`);
});