const express = require("express");
const cors = require("cors");

const cookieParser = require('cookie-parser');

const productRouter = require("./Routes/event.js");
const userrouter = require("./Routes/user.js");
const ticketypeRouter = require("./Routes/ticketype.js");
const path = require('path');
const {connectToMongoDB} =require("./config.js");

const app = express();

app.use(cookieParser());

// Mongo DB connection 
connectToMongoDB("mongodb://127.0.0.1:27017/EventBooking");


// Allow requests from your frontend
app.use(cors({
  origin: "http://localhost:3000", // React app URL
  credentials: true

}));

app.use(express.json());
app.use(express.urlencoded({extended: false}));


// Routes
app.use("/api/user/",userrouter);
app.use("/api/event/",productRouter);
app.use("/api/ticketype/",ticketypeRouter);




app.listen(8000,()=>{

    console.log("server is started!!!!!!");
})

// Testing code by rohit kodam for testing purpose
// hello world
// This is new line
// This is new line