import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

     

const Login = () => {
  
const [username,setUsername] = useState('')
const [password,setPassword] = useState('')
const [error,setError] = useState('')

const navigate = useNavigate();

const handleSubmit = async (e) => {
  e.preventDefault();

  try{
    const response = await fetch('https://login-api-c2t2.onrender.com/api/login',{
      method:'POST',
      headers:{
        'Content-Type': 'application/json',
      },
      body:JSON.stringify({username,password}),
    });

    if(response.ok){
      setError('')
      alert('Login Successful')
      navigate("/home")
    }else{
      setError('Invalid UserName or Password')
    }

  }catch(error) {
     console.log("Server Error");
  }
}

  return (
    <div className='items-center justify-center flex bg-slate-100 min-h-screen'>
      <form onSubmit={handleSubmit} className='bg-white p-6 rounded shadow-md flex flex-col items-center justify-center'>
        <h2 className='text-lg mb-5 text-blue-700 font-bold'>Login Form</h2>
        {/* UserName Div */}
        <div className='mb-4 w-full'>
            <label htmlFor="username" className='block'>UserName</label>
            <input type='text' className='p-2 border 
            border-blue-900 w-full' value={username} name='username' id='username' autoComplete='username'
            onChange={(e) => setUsername(e.target.value)}
            />
        </div>
        {/* PassWord Div */}
        <div className='mb-4 w-full'>
            <label htmlFor="password" className='block'>PassWord</label>
            <input type='password' className='p-2 border
            border-blue-900 w-full' value={password} name='password' id='password' autoComplete='password'
            onChange={(e) => setPassword(e.target.value)}
            />
        </div>
        {error && <p className='text-red-500 mb-4'>{error}</p>}
        <button type='submit' className='bg-blue-600 text-white p-3 rounded'>Login</button>
      </form>
    </div>
  )
}

export default Login
