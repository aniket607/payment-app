const express=require('express')
const zod=require('zod')
const {User, Account}=require('../db')
const jwt=require('jsonwebtoken')
const {JWT_SECRET}=require('../config')
const userRouter=express.Router()
const {authMiddleware}=require('../middleware')

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
        password:req.body.password,
        firstName:req.body.firstName,
        lastName:req.body.lastName
    })
    const userId=user._id;
    const token=jwt.sign({userId},JWT_SECRET);
    const initBalance=Math.floor(Math.random()*10000)
    const account=await Account.create({
        userId:user._id,
        balance:initBalance
    })
    res.status(200).json({
        msg:"User Created Succesfully",
        token:token,
        balance:initBalance
    })
})
userRouter.post('/signin',async(req,res)=>{
    const {success}=signinBody.safeParse(req.body)
    if(!success){
        return res.status(411).json({
            message: "Incorrect Inputs"
        })
    }
    const user=await User.findOne({
        username:req.body.username,
        password:req.body.password
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

const updateBody = zod.object({
	password: zod.string().optional(),
    firstName: zod.string().optional(),
    lastName: zod.string().optional(),
})

userRouter.put("/", authMiddleware, async (req, res) => {
    const { success } = updateBody.safeParse(req.body)
    if (!success) {
        return res.status(411).json({
            message: "Error while updating information"
        })
    }

	await User.updateOne({ _id: req.userId }, req.body);
	
    return res.json({
        message: "Updated successfully"
    })
})

userRouter.get("/bulk",async(req,res)=>{
    const filter=req.query.filter||"";
    User.find().or([{ firstName: {"$regex":filter} }, { lastName:{"$regex":filter}}])
    .then(users => {
        console.log(users)
        res.json({
        user: users.map(user => ({
            username: user.username,
            firstName: user.firstName,
            lastName: user.lastName,
            _id: user._id
        }))
        })
    }).catch(error => {console.log(error);})
})
module.exports=userRouter;