const mongoose = require('mongoose');


const CommentSchema = new mongoose.Schema({
 title : { type : String , required:true },
 content : { type : String , required:true },
 name : { type : String , required:true}

})

module.exports = mongoose.model('Comment', CommentSchema)