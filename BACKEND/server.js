//import all the packages that have install at begining
const express = require("express");
const mongoose = require("mongoose"); 
const bodyParser = require("body-parser");
const cors = require("cors");
const ditenv = require("dotenv");
const app = express();
//as this is important to read the url of db we have given in .env file
require("dotenv").config();
 
//we run this program in local PC. in local PC we have only one port. here we have mentioned that port as 8070.
//but when we host it on web we cannot garantee that the port will remain as the same 8070.As they allocate the port whatwever free at the time
//In this line we haev saiid that if the 8070 port is not available run the code in whatever the port available.
//used OR operator (||)
const PORT = process.env.PORT || 8070;

app.use(cors());
//in here json means always a key-value pair. So a swe use key0value pairs always we take this json from bosyParse here.
app.use(bodyParser.json());

//connect the database using this url
const URL = process.env.MONGODB_URL;

// options
mongoose.connect(URL,{
    useCreateIndex:true,
    userNewUrlParser:true,
    userUnifiedTopology:true,
    useFindAndModify:false
});

const connection = mongoose.connection;
//open the connection
//using arrow function to get a simple callback to check the success opening of connection
connection.once("open", () =>{
    console.log("MongoDB connection succes!");
})

//command to listen to the port with the following port number
//check the port that runs the project
app.listen(PORT, () =>{
    console.log("Server is up and running on port number: $(PORT)");
})