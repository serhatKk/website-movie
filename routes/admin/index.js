const express=require('express')
const router =express.Router()




  router.get('/',(req,res)=>{
    
      res.render('/admin/index')
  })
  
  router.delete('/posts/:_id',(req,res)=> {
    Product.deleteOne({_id : req.params._id}).then(()=>{
        res.redirect('/posts/deletemovies')
    })
})
  module.exports=router