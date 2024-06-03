const express = require("express")
const { newsModel } = require("../Model/mode")

const Router = express.Router()

Router.post("/email",async(req,res)=>{
    const {email} = req.body
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

    if(!email){
        return res.status(401).json({
            message: "email required for this action",
          });
    }
    if (!emailRegex.test(email)) {
        return res.status(400).json({
          message: "Invalid email format!",
        });
      }

    try {
        const ispresent = await newsModel.findOne({email})
        if(ispresent){
            return res.status(401).json({
                message: "you are already subscribed to our newsletter"
            })
        }
      
        const newEnmail = new newsModel({email})
        await newEnmail.save()
        return res.status(200).json({
            message:"Thanks for subscribing "
        })
    } catch (error) {
        console.log(error.message)
        return res.status(500).json({ message: "Server error" });
    }
})

Router.get("/email",async(req,res)=>{
    try {
        const allemail= await newsModel.find({})
        return res.status(200).json({
            message : allemail
        })
    } catch (error) {
        console.log(error)
        return res.status(400).json({message :"error getting email"})
    }
})


module.exports ={Router}