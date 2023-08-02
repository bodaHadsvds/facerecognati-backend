
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
    host : 'dpg-cj3mbtt9aq0e0q0078o0-a.oregon-postgres.render.com',
    user : 'test_database_postgres',
    port: 5432,
    password : 'RVkKuzbuQ7DVVnIUTxtDF2IvfOAM9emK',
    database : 'test_database_jyxi'
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


    
 app.listen( process.env.PORT ||3000, ()=>{
    console.log("app is running on port 3000" )
})

// server.on('error', async (error) => {
//   console.log(error.code)
// })