const express = require("express")
const { Connection } = require("./config/db")
const { Router } = require("./Routes/routes")
const app = express()
app.use(express.json())
require("dotenv").config()
const port = process.env.port
const cors= require("cors");

app.get("/",(req,res)=>{
   res.send("newsletter is working good")
})

app.use(cors())
app.use("/",Router)
app.listen(port,async(req,res)=>{
         try {
           await Connection 
           console.log("database is connected")
         } catch (error) {
            console.log("error connecting database")
         }
         console.log(`server is awake at port ${port}`)
})

