
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
 

const database ={
    users : [
    {
        id :  "123",
        name : 'john',
        email: 'john@gmail.com',
        password: "cookies",
        entires : "0",
        joined : new Date()
        

    }
    ,
    {
        id :  "124",
        name : 'sallu',
        email: 'sally@gmail.com',
        password: "bananaa",
        entires: "0",
        joined : new Date()
  

    }],
    login : [ {
        id :"123",
        email:"john@gmail.com",
        hash:""

    }

    ]

}
// const corsOptions = {
//     origin: 'http://example.com',
//     optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
//   }
   
//   app.get('/products/:id', cors(corsOptions), function (req, res, next) {
//     res.json({msg: 'This is CORS-enabled for only example.com.'})
//   })
   

app.get("/" , (req,res )=>{
 res.send('success')
})

app.post("/signin" ,(req,res  )=>{signin.handelsignin(req,res ,db,bcrypt )} )
    // if(req.body.email ===database.users[0].email && req.body.password=== database.users[0].password ){
    //     // res.json(database.users)
    //   return  res.json(database.users[0])
    // } else {
    //    return res.status(404).send("not workng")
    // }
    


   app.post("/register", (req,res) => {register.handelRegiser(req,res,bcrypt,db) })
//     database.users.push({
//         id :  "127",
//         name : name,
//         email: email,
//         password: password,
//         entires :"0" 
        
        
        

//     })
   

//     res.json(database.users[database.users.length-1])
//    })
   app.get('/profile/:id', (req, res) =>{ profile.handelprofileGet(req ,res , db ) });



        //    if(!found){
        //     res.status(404).json("no such user ")
        // }
        


    app.put("/image", (req,res)=>{ image.handelimage(req,res,db)})


    //     let found = false ;
    //     database.users.forEach(users=>{
    //         if (users.id=== id){
    //            found=true
    //             users.entires++
    //            return res.json(users.entires)
    //     } 
    // })
    //         if(!found){
    //             res.status(404).json("no such user ")
    //         }
     

    // bcrypt.hash(password, null, null, function(err, hash) {
    //     // Store hash in your password DB.
    // });
    
    // // Load hash from your password DB.
    // bcrypt.compare("bacon", hash, function(err, res) {
    //     // res == true
    // });
    // bcrypt.compare("veggies", hash, function(err, res) {
    //     // res = false
    // });

app.listen(process.env.PORT|| 3000, ()=>{
    console.log(`app is running on port 3000 ${process.env.PORT}`)
})

/*
/--> res = this is working 
/    sign in --> post = sucess/fail
     register --> post = user
/    profile/:userId -->GET = User
/    هimage /: put ---> user

*/