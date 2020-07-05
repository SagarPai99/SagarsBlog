const express = require("express");
require("dotenv").config(); //for loading the particular environment variables
const bodyParser = require("body-parser");
const passport = require("passport");
const mongoose = require("mongoose");

const app = express();

//Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));




//Database Connection
const MONGO_URI = process.env.MONGO_URI;
mongoose.connect(MONGO_URI,{useNewUrlParser: true})
        .then(() => console.log("Mongo Connection Successful"))
        .catch(err => console.log("Error"+err));

mongoose.set("useFindAndModify",false);
mongoose.Promise = global.Promise;


app.use(passport.initialize());
require("./middleware/passport")(passport);
app.use("/api/users/",require("./routes/api/users"));
app.use("/api/posts/",require("./routes/api/posts"));


if(process.env.NODE_ENV === "production"){
    app.use(express.static("client/build"));
    app.get("*",(req,res) => {
        res.sendFile(path.resolve(__dirname,"client","build","index.html"));
    });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server up and running on port ${PORT}`);
});

// app.get("/", (req,res) => {
//     res.send("Hello");
// });

// app.post("/user", (req,res) => {
//     console.log(req.body);
//     res.send(req.body);
// })

