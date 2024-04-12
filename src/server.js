require("dotenv").config()

const express =require("express")
const route=require("./routes/route")
const con =require('./config/db')


const app=express()
app.use(express.json())

app.use("/api",route)

app.get("/",(request,response)=>{
    return response.json({msg:"API"})
})

app.use((request,response,next)=>{
    response.status(404).json({msg:"NOT FOUND!"})
})

con.sync().then(()=>{
    app.listen(process.env.PORT)
}).catch((error)=>{
    console.log(error)
})

