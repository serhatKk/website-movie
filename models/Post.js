const mongoose = require('mongoose');


const PostSchema = new mongoose.Schema({
 title : {type : String , required:true},
 content : {type : String , required:true},
 oyuncular : {type : String , required:true},
 post_image : {type : String , required:true},

 
 date :{type:Date,default : Date.now}

})

module.exports = mongoose.model('Post', PostSchema)