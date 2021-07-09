const express = require('express');
const router = express.Router();
const Post = require("../models/post.js")

// CONNECT DB WITH POSTS



router.post("/new", async (req, res) => {

  const post = new Post({postcontent: req.body.postcontent, user_id: req.user._id, name: req.user.name})
  await post.save()
  res.redirect("/hall")

});


module.exports  = router;