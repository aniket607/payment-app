import axios from 'axios';
import React, { useState } from 'react'
import {useSearchParams } from "react-router-dom"
function SendMoney() {
  const [searchParams]=useSearchParams();
  const id=searchParams.get("id");
  const name=searchParams.get("name")
  const [amount,setAmount]=useState(0)
  return (
    <div className='min-h-screen bg-slate-100 flex items-center justify-center'>
      
        <div className='bg-white flex  items-center flex-col shadow-md p-8 w-full max-w-md rounded-lg m-auto'>
            <div className='font-bold text-4xl mt-8'>Send Money</div>
            <div className='flex justify-center items-center mt-20'>
            <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2">
                  <div className="flex flex-col justify-center h-full text-xl">
                      {name[0].toUpperCase()}
                  </div>
              </div>
                <div className='font-bold text-3xl ml-4'>{name}</div>
            </div>
            <div className='mt-4 font-semibold'>Amount (in Rs.)</div>
            <input onChange={e=>{
              setAmount(e.target.value)
            }} className='h-10 mt-5 w-full border border-gray-200 rounded-md placeholder:text-gray-500 px-3 shadow-sm' type="text" placeholder='Enter Amount' />
            <button onClick={async(e)=>{
              let token = localStorage.getItem("token")
              const resp=await axios.post("http://localhost:3000/api/v1/account/transfer",{
                to:id,
                amount:amount
              },{
                headers:{
                  Authorization:token
                }
              })
              console.log(resp.data);

            }} className='h-10 mt-5 w-full border border-gray-200 rounded-md bg-green-500 text-white font-medium shadow-md hover:bg-green-600 transition-colors'>Initiate Transfer</button>
        </div>
    </div>
  )
}

export default SendMoney