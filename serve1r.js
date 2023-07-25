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

