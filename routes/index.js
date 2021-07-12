const express = require('express');
const router  = express.Router();
const {ensureAuthenticated} = require("../config/auth.js")
const Post = require("../models/post.js")

//login page
router.get('/', (req,res)=>{
    res.render('welcome');
})

// dashboard page

router.get('/dashboard', ensureAuthenticated,(req,res)=>{
    Post.find({user_id: req.user._id}, (errors, posts) => {
        console.log(posts)
        res.render('dashboard',{user: req.user, content: posts});
      }).sort({date: -1});  
})

// Hall page

router.get('/hall',(req, res) => {
  Post.find({}, (errors, posts) => {
    console.log(posts)
    res.render('hall.ejs', {content: posts});
  }).sort({date: -1});
});


// register page
router.get('/register', (req,res)=>{
    res.render('register');
})


module.exports = router; 