// const http = require("http") ;
// const server = http.createServer(( request , response)=>{


//     // console.log( "headers",request.headers)
//     console.log( 'method ',request.method)
//     console.log(   'url ', request.url)
//     const user ={
//         name : "john",
//         hobby : "skating"
//     }

//     response.setHeader('content-Type','application/json')
//     response.end(JSON.stringify(user))
//  console.log("I hear you , thanks to request")
// })

// // server.listen(3000);
// const express = require("express");
// const fs = require("fs")
// const bodyParser = require("body-parser");
// const app = express();

// // fs.readFile("./Hello.txt" , (err,data)=>{
// //  if(err){
// //     console.log("err")
// //  }
 
// //     console.log( "Async",data.toString())
 
// // })

// // const file = fs.readFileSync("./Hello.txt")
// // console.log("sync",file.toString())

// //Append
// // / fs.appendFile("./bye.txt","This is so cool",err=>{
//     // if (err) {
//     //     console.log(err)
//     // }
    
//     // })
    

// write
// fs.writeFile("./bye.txt","This is so cool",err=>{
// if (err) {
//     console.log(err)
// }

// })


// //delete
// fs.unlink("./bye.txt",err=>{
//     console.log(err)

//     if (err) {
//              console.log(err)
//     }
//     console.log("expction")
// })


// app.use(express.static(__dirname + "/public"))

// app.use(bodyParser.urlencoded({extended:false}));
// app.use(bodyParser.json());


// app.get("/profile",(req,res)=>{
 
//     res.send("hi")
    

// })
// app.post("/profile",(req,res)=>{
//     console.log(req.body)
  
//     res.send("success")
    

// })
// requests ..
// req.headers
// req.params
// app.get("/:id",(req,res,)=>{
//     console.log(req.params);
//   res.status(404).send("not found")

// })
// req.body 

// req.query

//ex..
// app.post("/profile",(req,res)=>{
//     const user ={
//         name: "sally",
//         hobby:"skitfy"
//     }
//     res.send("Hellooooo")
    

// })

// app.listen(3000);

// const corsOptions = {
//     origin: 'http://example.com',
//     optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
//   }
   
//   app.get('/products/:id', cors(corsOptions), function (req, res, next) {
//     res.json({msg: 'This is CORS-enabled for only example.com.'})
//   })
    // if(req.body.email ===database.users[0].email && req.body.password=== database.users[0].password ){
    //     // res.json(database.users)
    //   return  res.json(database.users[0])
    // } else {
    //    return res.status(404).send("not workng")
    // }
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
    
    }//     database.users.push({
//         id :  "127",
//         name : name,
//         email: email,
//         password: password,
//         entires :"0" 
        
        
        

//     })
   

//     res.json(database.users[database.users.length-1])


        //    if(!found){
        //     res.status(404).json("no such user ")
        // }
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
    /*
/--> res = this is working 
/    sign in --> post = sucess/fail
     register --> post = user
/    profile/:userId -->GET = User
/    هimage /: put ---> user

*/
