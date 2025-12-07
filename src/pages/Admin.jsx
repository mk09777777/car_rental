import React, { Fragment, useState } from 'react';
import { useAdminStore } from '../store/Admin';
import { useNavigate } from 'react-router-dom';


export default function Admin(){
    const [Login,setLogin]=useState(false)
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const {AdminSignUp,AdminLogin,setAdminDetails}= useAdminStore()
    const navigate = useNavigate();

    const handleAdminSignUp=()=>{
        const token = Math.random().toString(36).substring(2) + Date.now().toString(36);
      if(!name || !email || !password || password.length<6){
        alert("Please fill all the fields");
        return;
      }
      try{
          setAdminDetails(name,email,token,password);
        AdminSignUp(name,email,password);
        navigate('/AdminDashboard');
      }catch(error){
        console.log(error);
      }
    }

    const handleAdminLogin=()=>{
        if(!email || !password){
            alert("Please fill all the fields");
            return;
          }
        try{
            AdminLogin(email,password);
            navigate('/AdminDashboard');
        }catch(error){
            console.log(error);
        }
    }

    return(
        <Fragment>
            <div className='bg-[#eaeaea] h-screen flex justify-center items-center'>
                {Login?<div className='bg-white flex flex-col p-4 rounded-lg shadow-lg  '>
                    <h1 className='font-bold text-2xl text-black text-center'>Admin Login</h1>
                    <div className='flex flex-col p-4'>
                        <label className='font-semibold text-md text-black mt-2'>Email</label>
                        <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Enter your email' className='border-2 border-gray-300 p-2 rounded-lg'/>
                        <label className='font-semibold text-md text-black mt-2'>Password</label>
                        <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Enter your password' className='border-2 border-gray-300 p-2 rounded-lg'/>
                        <button onClick={handleAdminLogin} className='bg-blue-500 text-white p-2 mt-2 rounded-lg'>Login</button>
                        <a onClick={()=>setLogin(false)} className='text-blue-600 mt-2 hover:underline'>Don't have a account? SignUp</a>
                    </div>
                </div>:<div className='bg-white flex flex-col p-4 rounded-lg shadow-lg  '>
                    <h1 className='font-bold text-2xl text-black text-center'>Admin SignUp</h1>
                    <div className='flex flex-col p-4'>
                        <label className='font-semibold text-md text-black '>Name</label>
                        <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder='Enter your name' className='border-2 border-gray-300 p-2 rounded-lg'/>
                        <label className='font-semibold text-md text-black mt-2'>Email</label>
                        <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Enter your email' className='border-2 border-gray-300 p-2 rounded-lg'/>
                        <label className='font-semibold text-md text-black mt-2'>Password</label>
                        <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Enter your password' className='border-2 border-gray-300 p-2 rounded-lg'/>
                        <button onClick={handleAdminSignUp} className='bg-blue-500 text-white p-2 mt-2 rounded-lg'>Sign Up</button>
                        <a onClick={()=>setLogin(true)} className='text-blue-600 mt-2 hover:underline'>Already have an account? Login</a>
                    </div>
                </div>}
            </div>
        </Fragment>
    )
}