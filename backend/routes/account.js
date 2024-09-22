const express=require('express');
const { authMiddleware } = require('../middleware');
const { Account } = require('../db');
const { default: mongoose } = require('mongoose');
const accountRouter=express.Router()

accountRouter.get('/balance',authMiddleware,async(req,res)=>{
    const account=await Account.findOne({userId:req.userId})
    res.status(200).json({
        balance:account.balance
    })
})

accountRouter.post('/transfer',authMiddleware,async(req,res)=>{

    const session = await mongoose.startSession();
    session.startTransaction();
    const { amount, to }=req.body;

    // Fetch the accounts involved in the transaction
    const selfAccount=await Account.findOne({userId:req.userId})
    
    if (!selfAccount || selfAccount.balance < amount) {
        await session.abortTransaction();
        return res.status(400).json({
            message: "Insufficient balance"
        });
    }

    const targetAccount = await Account.findOne({ userId: to }).session(session);
    if (!targetAccount) {
        await session.abortTransaction();
        return res.status(400).json({
            message: "Invalid account"
        });
    }
    
      // Perform the transfer
    await Account.updateOne({ userId: req.userId }, { $inc: { balance: -amount } }).session(session);
    await Account.updateOne({ userId: to }, { $inc: { balance: amount } }).session(session);

      // Commit the transaction
      await session.commitTransaction();
      res.json({
          message: "Transfer successful"
      });
})

module.exports=accountRouter;