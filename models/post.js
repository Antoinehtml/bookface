const mongoose = require('mongoose');
const PostSchema  = new mongoose.Schema({
  	user_id :{
      	type  : String,
      	required : true
  	} ,
  	postcontent :{
  		type : String,
  		required : true
  	},
	date :{
	    type : Date,
	    default : Date.now
	},
	name :{
		type : String,
  		required : true
	}
});

const Post= mongoose.model('Post',PostSchema);

module.exports = Post;