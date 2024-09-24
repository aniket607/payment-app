import React, { useEffect, useState } from 'react'
import UserList from './UserList'
import axios from 'axios'

function Dashboard() {
  const [balance, setBalance] = useState(0)
  const [users,setUsers]=useState([])
  const [filter,setFilter]=useState("")

  useEffect(() => {
     async function fetchbalance (){
      const response=await axios.get("http://localhost:3000/api/v1/account/balance",{
        'headers':{
          'Authorization':localStorage.getItem('token')
        }
      })
      setBalance(response.data.balance);
    }
    fetchbalance();
  }, [])

  useEffect(() => {
    async function fetchUsers (){
     const response=await axios.get("http://localhost:3000/api/v1/user/bulk",{
       'headers':{
         'Authorization':localStorage.getItem('token')
       }
     })
     console.log('API response:', response.data);
     setUsers(response.data.user)
   }
   fetchUsers();
 }, [])
  
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
        <div className="ml-2 font-semibold">${balance}</div>
      </div>
      <div className='ml-6 mt-6 text-2xl font-bold'>Users</div>
      <div className='mx-6 mt-4'>
          <input onChange={async(e)=>{
            setFilter(e.target.value)
            const resp=await axios.get(`http://localhost:3000/api/v1/user/bulk?filter=${filter}`)
            setUsers(resp.data.user);
            
          }} className='border border-x-slate-200 rounded-md w-full h-10 px-4 ' type="text" placeholder='Search Users...'/>
      </div>
      <div>
         {users.map((user)=>{
        return <UserList user={user}/>
        })}
      </div>
    </div>
  )
}

export default Dashboard