const express = require('express');
const router  = express.Router();
//login page
router.get('/', (req,res)=>{
    res.render('welcome');
})

router.get('/dashboard',(req,res)=>{
    res.render('dashboard',{
        user: req.user
        });
    })
//register page
router.get('/register', (req,res)=>{
    res.render('register');
})



module.exports = router; 