const express = require('express');
const router = express.Router();
const Post = require("../models/post.js")

// CONNECT DB WITH POSTS



router.post("/new", async (req, res) => {

  const post = new Post({postcontent: req.body.postcontent, user_id: req.user._id, name: req.user.name})
  await post.save()
  res.redirect("/hall")

});

router.get("/delete/:id", (req, res) => {
  Post.findByIdAndDelete({_id: req.params.id}, (err, del) => {
    console.log("delete: ", del);
})
  res.redirect("back")
})


module.exports  = router;