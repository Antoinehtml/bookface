
//APP.JS in ~/app.js
const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const app = express();
// const expressEjsLayout = require('express-ejs-layouts')
const flash = require('connect-flash');
const session = require('express-session');
const passport = require('passport');
require("./config/passport")(passport)
const Post = require("./models/post.js")


//mongoose - mongoose.connect() link to atlas mandatory.
mongoose.connect('mongodb+srv://antoinecln:Becode@bookface.dve24.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{useNewUrlParser: true, useUnifiedTopology : true})
.then(() => console.log('connected,,'))
.catch((err)=> console.log(err));

//EJS
app.use("/static", express.static("public"));
app.set('view engine','ejs');
// app.use(expressEjsLayout);


//BodyParser
app.use(express.urlencoded({extended : false}));
//express session
app.use(session({
  secret : 'secret',
  resave : true,
  saveUninitialized : true
 }));

 app.use(passport.initialize());
 app.use(passport.session());

 app.use(flash());
 app.use((req,res,next)=> {
   res.locals.currentUser = req.user;
   res.locals.success_msg = req.flash('success_msg');
   res.locals.error_msg = req.flash('error_msg');
   res.locals.error  = req.flash('error');
 next();
 })

//Routes
app.use('/',require('./routes/index'));
app.use('/users',require('./routes/users'));
app.use('/posts',require('./routes/posts'))




app.listen(process.env.PORT ||3000); 