const mongoose = require("mongoose");
require('dotenv').config();

// Define MongoDB connection URL
//const mongoURL = "mongodb://localhost:27017/hotels"; // hotels is name of Database
//const mongoURL = process.env.MONGODB_URL_LOCAL;
const mongoURL = process.env.MONGODB_URL;

// set up MongoDB Connection
mongoose.connect(mongoURL); 

// Get the default connection
// Mongoose maintains a default connection object representing the MongoDB connections
const db = mongoose.connection;

db.on("connected", () => {
  console.log("connected to MongoDB server");
});
db.on("error", (err) => {
  console.log("Mongo Connection error ", err);
});
db.on("disconnected", () => {
  console.log("MongoDB Disconnected");
});

//Export a database connection
module.exports = db;
