const express=require("express")
const app=express()
const path=require('path')
const port=process.env.PORT || 3000
const ejs=require("ejs")
const {v4:uuidv4}=require('uuid')
//package.json a giye thn scripts er under a 
//"start":" node app.js"
//"devs": nodemon app.js
app.set('view engine','ejs')
const templatepath=path.join(__dirname,'./template/views')
app.set("views",templatepath)

//to use public folder 
app.use(express.static('public'))

//render page

app.get('/',(req,res)=>{
    res.redirect(`/${uuidv4()}`)
})

//new url with room id

app.get('/:room',(req,res)=>{
    res.render('room',{roomId:req.params.room})
})

//connect to local host
app.listen(port,()=>{
    console.log(`Connected from ${port}`)
})