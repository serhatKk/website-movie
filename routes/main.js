const express=require('express')
const { model } = require('mongoose')
const router =express.Router()
const Post = require('../models/Post')



router.get('/',(req,res)=>{
  console.log(req.session)
  Post.find({}).lean().then(posts => {
    res.render('site/index',{posts:posts})
  }) 
  })
  
  router.get('/index',(req,res)=>{
    
    Post.find({}).lean().then(posts => {
      res.render('site/index',{posts:posts})
    })
    
  })
   
 
  router.get('/film',(req,res)=>{
    Post.find({}).lean().then(posts => {
      res.render('site/index',{posts:posts})
    })
    
   
  })


   
  router.get('/admin',(req,res)=>{
 
      res.render('admin/index')
  })
   
 

  module.exports = router