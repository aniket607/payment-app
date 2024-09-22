import React from 'react'

function SendMoney() {
  return (
    <div className='min-h-screen bg-slate-100 flex items-center justify-center'>
      
        <div className='bg-white flex  items-center flex-col shadow-md p-8 w-full max-w-md rounded-lg m-auto'>
            <div className='font-bold text-4xl mt-8'>Send Money</div>
            <div className='flex justify-center items-center mt-20'>
                <img className="rounded-full h-14 w-14 ml-2" src="https://cdn.pixabay.com/photo/2013/07/13/09/58/united-states-156388_1280.png" alt="" />
                <div className='font-bold text-3xl ml-4'>Friend's Name</div>
            </div>
            <div className='mt-4 font-semibold'>Amount (in Rs.)</div>
            <input className='h-10 mt-5 w-full border border-gray-200 rounded-md placeholder:text-gray-500 px-3 shadow-sm' type="text" placeholder='Enter Amount' />
            <button className='h-10 mt-5 w-full border border-gray-200 rounded-md bg-green-500 text-white font-medium shadow-md hover:bg-green-600 transition-colors'>Initiate Transfer</button>
        </div>
    </div>
  )
}

export default SendMoney