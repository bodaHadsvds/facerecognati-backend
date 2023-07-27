
const express = require("express");
const bodyParser = require("body-parser")
const bcrypt = require("bcrypt-nodejs")
const cors = require('cors')
const app = express();
const knex =require('knex')
const register = require('./controllers/Register')
const signin = require('./controllers/signin')
const profile = require('./controllers/profile')
const image = require('./controllers/image')

process.env.NODE_TLS_REJECT_UNAUTHORIZED = 0; 


 const db = knex({
  client: 'pg',
  connection: {
    host : '127.0.0.1',
    user : 'postgres',
    port: 5432,
    password : 'postgres',
    database : 'smart-brain'
  }
});

db.select('*').from('users').then(data=> {console.log(data)
})

app.use(bodyParser.json())
app.use(cors())
 



   

app.get("/" , (req,res )=>{
 res.send('success')
})

app.post("/signin" ,(req,res  )=>{signin.handelsignin(req,res ,db,bcrypt )} )


   app.post("/register", (req,res) => {register.handelRegiser(req,res,bcrypt,db) })
   app.get('/profile/:id', (req, res) =>{ profile.handelprofileGet(req ,res , db ) });

    app.put("/image", (req,res)=>{ image.handelimage(req,res,db)})


    
let server = app.listen( process.env.PORT, ()=>{
    console.log(`app is running on port 3000 ${process.env.PORT}`)
})

server.on('error', async (error) => {
  console.log(error.code)
})