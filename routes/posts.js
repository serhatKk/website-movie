const express=require('express')
const { model } = require('mongoose')
const router =express.Router()
const Post = require('../models/Post')
const path =require('path')
const Comment = require('../models/Comment')



  router.get('/addmovie',(req,res)=>{
    if(req.session.userId){
      return  res.render('site/addmovie')
    }
     else{ res.redirect('/users/giris')}
  })

  router.get('/deletemovies',(req,res)=>{
    Post.find({}).lean().then(posts => {
      res.render('site/deletemovies',{posts:posts})
    })
    
   
  })


  
  router.get('/:id',(req,res)=>{
    Post.findById(req.params.id).lean().then(post => {
      res.render('site/film',{post:post})
    })
  })


  router.post('/addcomment',(req,res)=>{
    const Comments = new Comment(req.body)

    Comments.save().then((result) =>{
      res.redirect('/')
    })
})

  router.post('/test',(req, res)=>{

    let post_image = req.files.post_image
    post_image.mv(path.resolve(__dirname,'../public/movieimg',post_image.name))
      Post.create({
        ...req.body,
        post_image:`/movieimg/${post_image.name}`
      })
      console.log(req.files.post_image.name)
    res.redirect('/index')
  })
  module.exports = router