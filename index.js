// lib and imports
const express = require("express");
const app = express();
const router = express.Router();
const myFirstCOntroller = require("./controllers/controller")
const mongoose = require('mongoose');
const expressEjsLayout = require('express-ejs-layouts')

//mongoose
mongoose.connect('mongodb://localhost/test',{useNewUrlParser: true, useUnifiedTopology : true})
.then(() => console.log('connected,,'))
.catch((err)=> console.log(err));

// app setup
app.use(express.json())
app.use("/static", express.static("public"));
app.set("view engine", "ejs");
app.use(expressEjsLayout);

//BodyParser
app.use(express.urlencoded({extended : false}));

//Routes
app.use('/',require('./routes/index'));
app.use('/users',require('./routes/users'));

// pages
app.get('/',(req, res) => {
  res.render('home.ejs');
});

// Create here your api setup


app.listen(3000, () => console.log("Server Up and running"));

