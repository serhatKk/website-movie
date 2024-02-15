
const path = require('path')
const express = require('express')
const { engine } = require('express-handlebars');
const app = express()
const port = 3000
const hostname = '127.0.0.1' 
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const fileUpload = require('express-fileupload')
const expressSession = require('express-session')
const connectMongo = require('connect-mongo')

mongoose.connect('mongodb://127.0.0.1/nodeblog_db',{
  useNewUrlParser: true,  
  useUnifiedTopology :true,
 
})
const mongoStore = connectMongo(expressSession)

app.use(expressSession({
  secret: 'tests',
  resave: false,
  saveUninitialized: true,
  store: new mongoStore({ mongooseConnection: mongoose.connection })
}))

app.use(fileUpload())

app.use(express.static('public'))

app.engine('handlebars', engine({ extname: '.handlebars', defaultLayout: "main" }));
app.set('view engine', 'handlebars');

app.set("views", "./views");
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use((req,res,next) => {
 const {userId} = req.session
  if(userId)
  {
    res.locals ={
      displayLink : true
    }

  }
  else{
      displayLink :false
  }
  next()
})


const main = require('./routes/main')
const posts = require('./routes/posts')
const users = require('./routes/users');
const { response } = require('express');
const admin = require('./routes/admin/index')

app.use('/',main)
app.use('/posts',posts)
app.use('/users',users)
app.use('/users',admin)




app.listen(port,hostname, () => {
  console.log(`server çalışıyor, http://${hostname}:${port}/`)
})


