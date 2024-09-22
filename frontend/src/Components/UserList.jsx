import React from 'react'

function UserList({imgLink}) {
  return (
    <div className='flex justify-between mx-6 mt-4'>
            <div className='flex  items-center'>
              <img className="rounded-full h-10 w-10 ml-2" src={imgLink} alt="" />
              <div className='font-semibold ml-3'>Harkirat Singh</div>
            </div>
            <div className="">
              <button className="py-2 px-6 text-white bg-slate-800 rounded-md   font-medium">Send Money</button>
            </div>
      </div>
  )
}

export default UserList