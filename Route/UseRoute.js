const route=require ('express').Router()
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken');
const  auth  = require('../Middleware/Auth');
const saltRounds=10;
const secretkey="123"


let arr=[];  //working as database

route.post('/register',(req,res)=>{
    const data=req.body    //parsing data(body parsing)
    // console.log(data)   // email: 'abc@gmail.com', password: '123456'
    const account=arr.find((item)=>item.email === data.email)
    if(account){
        return res.send({msg:"This email is already exist"})
     }


    // encrypt the password bt hashsunc password
    const hasspass=bcrypt.hashSync(data.password,saltRounds)
    data.password=hasspass
    // console.log(hasspass)

    arr.push(data)
    console.log(arr)  // email: 'abc@gmail.com',password: '$2b$10$NGLAPBIpNqtDkuL.yTahPerdGRLXEbaTJLh7KpazZPQnXpaITY8.a'
    const token=jwt.sign({user:data.email},secretkey)
  
    
     res.send({msg:"user registered successfully",token:token})
})
route.post('/login',async(req,res)=>{

    const data=req.body;
    console.log(data)


    const account=arr.find(item=>item.email===data.email)
    console.log(account)

    if(account){
         const login=await bcrypt.compare(data.password,account.password)
         console.log(login,"login")
      
    
    if(login){
        const token=jwt.sign({user:data.email},secretkey,{expiresIn:"365d"})
        return res.send({msg:'user is loggedin successfully',token:token})
    }
    else{
        return res.send("pasword is incorrect")
    }
}
 else{
     return res.send("user is not registered")
    }
})

route.get('/home',(req,res)=>{
    res.send("This is home page")
})
route.get('/dashboard',auth,(req,res)=>{
    res.send({msg:"Welcome to dashboard"})
})
module.exports=route