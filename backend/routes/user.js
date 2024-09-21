const express=require('express')
const zod=require('zod')
const {User}=require('../db')
const jwt=require('jsonwebtoken')
const {JWT_SECRET}=require('../config')
const userRouter=express.Router()

const signupBody = zod.object({
    username: zod.string().email(),
	firstName: zod.string(),
	lastName: zod.string(),
	password: zod.string()
})
const signinBody = zod.object({
    username: zod.string().email(),
	password: zod.string()
})

userRouter.post('/signup',async(req,res)=>{
    const {success}=signupBody.safeParse(req.body)
    if(!success)
    {
        return res.status(411).json({
            msg:"Incorrect Inputs"
        })
    }
    const ExistingUser=await User.findOne({
        username:req.body.username
    })
    
    if(ExistingUser)
    {
        return res.status(411).json({
            msg:"User Already Exists"
        })
    }
    const user=await User.create({
        username:req.body.username,
        passsword:req.body.password,
        firstName:req.body.firstName,
        lastName:req.body.lastName
    })
    const userId=user._id;
    const token=jwt.sign({userId},JWT_SECRET);
    res.status(200).json({
        msg:"User Created Succesfully",
        token:token
    })
})
userRouter.post('/signin',async(req,res)=>{
    const {success}=signinBody.safeParse(req.body)
    if(!success){
        return res.status(411).json({
            message: "Error while logging in"
        })
    }
    const user=await User.findOne({
        username:req.body.username,
        password:req.body.passsword
    })
    if(user)
    {
        const token=jwt.sign({userId:user._id},JWT_SECRET)
        return res.json({
            token:token
        })
    }
    res.status(411).json({
        message: "Error while logging in"
    })
})
module.exports=userRouter;