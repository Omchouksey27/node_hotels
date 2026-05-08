// import express from 'express'
require('dotenv').config();
const express = require('express')
const app = express(); // blueprint  or main control center Everything (routes, requests, responses) will go through this app
const db = require('./db');


const bodyParser = require('body-parser');
app.use(bodyParser.json()); //req.body
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Welcome Om What you want...?')
})

// POSTRoute to add a person

//   const data = req.body // Assuming that request body contains prson data

//   //Create a new person document 
//   const newPerson = new Person(data);
//   newPerson.save((error,savedPerson)=>{
//   if(error)
//   {
//     console.log("Error on saving data",error);
//     res.status(500).json({error:"Internal server error"})
//   }
//   else
//   {
//     console.log('Data saved successfully')
//     res.status(200).json(savedPerson)
//   }
// });

/*Import the router File*/ 
const personRoutes = require('./routes/personRoutes')
const menuItemRoutes = require('./routes/menuItemRoutes')

//Use the ROutes
app.use('/person', personRoutes);
app.use('/MenuItem', menuItemRoutes);


app.listen(PORT, () => {
  console.log('Server is running on http://localhost:3000')
})



































// Four way of writing a function 

// var add = function(a,b){
//   return a+b
// }

// function add (a,b){
//   return a+b ;
// }

// var add = (a,b)=> {
//   return a+b;
// }

// var add =(a,b)=> a+b;
// var result = add(2,4);
// console.log(result);
 



// this function run without call neeche wala 
// (function(){
//   console.log("prince is added ");
// })();

// function callback(){
//   console.log("Now add successfully completed...");
// }

// const add = function(a,b, om){
//   var result = a+b;
//   console.log("result:"+result); // main fn work complt
//   om();
// }

// add(3,4,()=> console.log("Add function is called"));



 
// var fs =  require('fs');
// var os= require('os');

// var user = os.userInfo(); // give detail of that system in which you run 
// console.log(user);
// console.log(user.username);

// fs.appendFile('greeting.txt', "hi "+ user.username+"!\n", ()=>{
//   console.log('file is created');
  
// });

// console.log(os);    // it show os ky ky functionalty perform kr skta hai  

 


// import Files 

// const notes = require('./notes.js');
// var _ = require('lodash'); // we can give other name instead of "_" but we this is in general used by developers of js
// console.log('SErver file is available');

// var age = notes.age;

// var result = notes.addNum(age,18)

// console.log(age);
// console.log('result is now:'+ result);

// var data = ['person', 'person',1,2,1,2,'name','age','2'];
// var filter = _.uniq(data); // it give unique data from data
// console.log(filter);

// console.log(_.isString(3));


































// const express = require("express"); // it means i want to use express in my app 
// const app = express();

// app.get("/", (req, res)=>{
//   res.status(200).send("Welcome to world best series by Thapa  technical");

// });

// app.get("/register", (req, res)=>{
//   res.status(200).send("Welcome to register page");

// });

// const PORT = 5000;
// app.listen(PORT, ()=>{
//   console.log(`server is running at port : ${PORT}`);
  

// })
