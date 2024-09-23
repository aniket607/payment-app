import React from 'react'

function UserList({user}) {
  return (
    <div className='flex justify-between mx-6 mt-4'>
          <div className='flex  items-center justify-center'>
              {/* <img className="rounded-full h-10 w-10 ml-2" src={imgLink} alt="" /> */}
              <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2">
                  <div className="flex flex-col justify-center h-full text-xl">
                      {user.firstName[0]}
                  </div>
              </div>
              <div className='font-semibold ml-3'>{user.firstName} {user.lastName}</div>
          </div>
            <div className="">
              <button className="py-2 px-6 text-white bg-slate-800 rounded-md   font-medium">Send Money</button>
            </div>
    </div>
  )
}

export default UserList