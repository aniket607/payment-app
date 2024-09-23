import axios from 'axios';
import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'

function Signin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate=useNavigate();
  return (
    <div className='min-h-screen bg-gray-500 '>
      <div className="flex justify-center flex-grow">
        <div className="bg-white rounded-lg mt-10 ">
          <div className="w-9/12 m-auto">
              <div className="flex flex-col items-center p-2 mt-4">
                  <div className="text-3xl font-bold">Sign In</div>
                  <div className="mt-2 text-gray-500 font-medium text-center">Enter your credentials to access your account</div>
              </div>
              <div className="mt-4">
                  <div className="font-semibold">Email</div>
                  <input onChange={e=>{setUsername(e.target.value)}} className="border border-x-slate-200 rounded-md w-full h-10 p-2 placeholder:p-2" type="text" placeholder='johndoe@gmail.com' />
              </div>
              <div className="mt-4">
                  <div className="font-semibold">Password</div>
                  <input onChange={e=>{setPassword(e.target.value)}} className="border border-x-slate-200 rounded-md w-full h-10 p-2 placeholder:p-2" type="text" />
              </div>
              <button onClick={async()=>{
                const response=await axios.post("http://localhost:3000/api/v1/user/signin",{
                  username,
                  password
                })
                localStorage.setItem("token",`Bearer ${response.data.token}`);
                navigate("/dashboard")
              }} className="w-full text-white bg-black rounded-md mt-4 h-10 font-medium">Sign In</button>
              <div className="my-4">
                  <span className="font-normal">Don't have an account? <Link className='underline' to="/signup">Sign Up</Link></span>
              </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Signin