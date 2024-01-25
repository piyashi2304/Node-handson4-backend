// const express=require('express')
// const app = express()
// const bcrypt=require('bcrypt')

// async function hashPassword(password){
//     const saltRounds=10;
//     const salt=await bcrypt.genSalt(saltRounds)
//     const hashed = await bcrypt.hash(password,salt)
//     return hashed
//     // console.log('hashed')
// }
//     hashPassword('prepbytes')
//     .then((hashed)=>{
//         console.log('hashed password:',hashed)
//     })
//     .catch((error)=>{
//         console.log('Error',error)
//     })

// password generate

// const express=require('express')
// const app= express()
// const bcrypt=require('bcrypt')


// async function hashPassword(password){
//     const saltRounds=10;
//     const salt=await bcrypt.genSalt(saltRounds)
//     const hashed=await bcrypt.hash(password,salt)
//     return hashed
// }
// hashPassword('Prepbytes')
// .then((hashed)=>{
//     console.log('password is correct',hashed)
// })
// .catch((error)=>{
//     console.log("password is incorrect")
// })


// cmpare password

// const express=require('express')
// const app= express()
// const bcrypt=require('bcrypt')

// async function compare(inputpasswod,hashPassword){
//     const match=await bcrypt.compare(inputpasswod,hashPassword)
//     return match

// }
// const hashPassword='$2b$10$XexCVpobsVV3pA9QdRaOQuSmU7P3l0G78qixsZONhso7HC8TYIfiy'
// compare('Prepbytes',hashPassword)
// .then((match)=>{
//     if(match){
//         console.log("pasword is correct")
//     }
//     else{
//         console.log('password is incorrect')
//     }
// })
// .catch((error)=>{
//     console.log("error")
// })

// app.listen(4000,()=>{
//     console.log("server started")
// })

// $2b$10$sGzwkyOmfxTz2EDqVI3qfO0xSzKf1WDepkOIIs6v4a28K57an.ym2

// login and register

const express=require('express');
const route = require('./Route/UseRoute');
const app = express();
const cors =require('cors')

app.use(cors({
    origin:"*"
}))

app.use(express.json())
app.use(express.urlencoded({extended :true}))


app.use('/pages',route)


app.listen(5040,()=>{
    console.log('server started')
})


