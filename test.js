const mongoose = require('mongoose');

const Post = require('./models/Post')

mongoose.connect('mongodb://127.0.0.1/nodeblog_test_db',{
  useNewUrlParser: true,  
  useUnifiedTopology :true
})

Post.findByIdAndDelete('628f6679561a6b3876efbd4d',(error,post)=>{
    console.log(error,post)
})


/* Post.findById('628f6679561a6b3876efbd4d',
title : ''
(error,post)=>{
    console.log(error,post)
}) */



/*  Post.find({} 
 ,(error,post)=>{
     console.log(error,post)
 }) */
/*  Post.create({
    title : 'Saa ve a',
    content : ' Aaaa ve S'
}, (error,post)=> {
    console.log(error,post)
})  */