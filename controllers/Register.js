 const handelRegiser=(req,res,bcrypt,db)=>{
    const {email,name,password} = req.body
if(!email ||!name ||!password){
    return res.status(400).json('not from submission')
}
    const hash = bcrypt.hashSync(password);
   db.transaction(
    trx=>{
      trx.insert({
      hash:hash,
      email:email
      })
      .into('login')
      .returning('email')
      .then(loginEmail=>{
        trx('users')
      .returning("*")
      .insert({
         email :loginEmail[0].email,
         name : name,
         joined:new Date() 
        
       
       })
       .then(user=> {
        res.json(user[0])
      })
      .then(trx.commit)
      .catch(trx.rollback)
      
    }
   )
 

 })
.catch(err=>{   console.log(err) 
  return res.status(400).json("unable to register")})
   }

   module.exports = {
    handelRegiser: handelRegiser
   }