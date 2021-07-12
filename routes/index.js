const express = require('express');
const router  = express.Router();
const {ensureAuthenticated} = require("../config/auth.js")
const Post = require("../models/post.js")

//login page
router.get('/', (req,res)=>{
    res.render('welcome');
})

router.get('/dashboard', ensureAuthenticated,(req,res)=>{
    Post.find({}, (errors, posts) => {
        console.log(posts)
        res.render('dashboard',{user: req.user, content: posts});
      });
})


// register page
router.get('/register', (req,res)=>{
    res.render('register');
})


module.exports = router; 