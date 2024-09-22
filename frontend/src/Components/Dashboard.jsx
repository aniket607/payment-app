import React from 'react'
import UserList from './UserList'

function Dashboard() {
  return (
    <div className='min-h-screen'>
      <nav>
        <div className="flex justify-between mx-6 mt-6">
          <span className="font-bold text-3xl">Payments App</span>
          <div className='flex items-center'>
            <span className="text-lg font-semibold">Hello, User</span>
            <img className="rounded-full h-10 w-10 ml-2" src="https://c8.alamy.com/comp/2XF2BBR/dp-letter-logo-with-abstract-shield-shape-with-square-black-outline-on-white-background-template-design-2XF2BBR.jpg" alt="" />
          </div>
        </div>
        <div className="bg-gray-200 h-0.5 mt-3" ></div>
      </nav>
      <div className="flex flex-grow text-2xl font-bold ml-6 mt-6">
        <div className=''>Your Balance</div>
        <div className="ml-2 font-semibold">$5000</div>
      </div>
      <div className='ml-6 mt-6 text-2xl font-bold'>Users</div>
      <div className='mx-6 mt-4'>
          <input className='border border-x-slate-200 rounded-md w-full h-10 placeholder:p-2 ' type="text" placeholder='Search Users...'/>
      </div>
      <UserList imgLink={"https://cdn.pixabay.com/photo/2013/07/13/09/58/united-states-156388_1280.png"}/>
      <UserList imgLink={"https://cdn.pixabay.com/photo/2013/07/13/09/58/united-states-156388_1280.png"}/>
      <UserList imgLink={"https://cdn.pixabay.com/photo/2013/07/13/09/58/united-states-156388_1280.png"}/>

    </div>
  )
}

export default Dashboard