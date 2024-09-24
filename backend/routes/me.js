const express=require('express')
const { authMiddleware } =require ("../middleware");
const meRouter=express.Router();

meRouter.get("/",authMiddleware,(req,res)=>{
    res.json({
        isLoggedIn:true
    })
})


module.exports=meRouter;