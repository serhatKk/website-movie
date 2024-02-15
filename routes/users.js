const express=require('express')
const router =express.Router()
const User = require('../models/User')

router.get('/kayit',(req,res)=>{    
    res.render('site/kayit')   
  })

router.post('/kayit',(req,res)=> {
      User.create(req.body, (error,user) => {
          res.redirect('/index')
      })
    
  })

  router.get('/giris',(req,res)=>{
    res.render('site/giris')
  })

  router.post('/giris',(req,res)=>{
    const {email,password} = req.body
    User.findOne({email},(error,user)=> {
        if(user){
            if(user.password == password){
                req.session.userId= user._id
                res.redirect('/')
            }
            else {
                res.redirect('/users/giris')
            }
           
        }
        else{
            res.redirect('/users/kayit')
        }
    })
  })

  router.get('/logout',(req, res)=> {  
        req.session.destroy(()=>{ 
        res.redirect('/')
    })
    
  })
  module.exports = router