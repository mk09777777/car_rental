import React, { Fragment, useState } from "react";
import { useAuthStore } from "../store/Auth";
import { GoogleLogin } from '@react-oauth/google';

export default function UserSign({ onClose , handlesignin }) {
    const [signUp, setSignUp] = React.useState(false);
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [confirmPassword,setConfirmPassword]=useState("");
    const { SignUp,setAuthDetails,login ,googleSignUp} = useAuthStore();
    const [sign,setSign]=useState(false);


const handleSignUp=()=>{
    if(password!==confirmPassword){
        alert("Passwords do not match");
        return;
    }

    const token = Math.random().toString(36).substring(2) + Date.now().toString(36);
    setAuthDetails(name,email,password,token);
    SignUp(name,email,password);
    setSign(true);
    onClose();
}
const handleLogin=()=>{
    login(email,password);
    setSign(true);
    onClose();
    
}

handlesignin(sign);

const handleGoogleSignUp = async (tokenId) => {
    try {
        await googleSignUp("", "", tokenId);
        setSign(true);
        onClose();
    } catch (error) {
        console.error("Google signup failed:", error);
    }
}

const handleGoogleSignIn = async (tokenId) => {
    try {
        await googleLogin(tokenId);
        setSign(true);
        onClose();
    } catch (error) {
        console.error("Google signin failed:", error);
    }
}

    return (
        <Fragment>
            {signUp ? <div className=" bg-[rgba(122, 21, 21, 0)] border border-[#BCC5DE80] border-1 mb-10 backdrop-blur-md absolute z-10 w-96  p-4 rounded-xl flex flex-col ">
                <button onClick={onClose} className="absolute top-4 right-4 text-white hover:text-gray-300">
                    <svg className="w-6 h-6" fill="black" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                </button>
                <div className="flex flex-row width-full items-center justify-center">
                    <h1 className="text-3xl font-bold text-center text-[white]">Welcome</h1>
                    <h2 className="ml-2 text-3xl font-bold text-center text-[white]">User</h2>
                </div>
                <div className="flex flex-col mt-5 " >
                    <label className="text-sm font-medium text-white mb-1 ">Name</label>
                    <input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        type="text"
                        placeholder="name"
                        className="border border-[#BCC5DE80] border-1 rounded-lg p-2 focus:outline-none mt-1 focus:ring-2 focus:ring-blue-500"
                    />
                    <label className="text-sm font-medium text-white mb-1 mt-5">Email</label>
                    <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        placeholder="email"
                        className="border border-[#BCC5DE80] border-1 rounded-lg p-2 focus:outline-none mt-1 focus:ring-2 focus:ring-blue-500"
                    />
                    <label className="text-sm font-medium text-white mb-1 mt-5">Password</label>
                    <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        placeholder="password"
                        className="border border-[#BCC5DE80] border-1 rounded-lg p-2 focus:outline-none mt-1 focus:ring-2 focus:ring-blue-500"
                    /><label className="text-sm font-medium text-white mb-1 mt-5">Confirm Password</label>
                    <input
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        type="password"
                        placeholder="password"
                        className="border border-[#BCC5DE80] border-1 rounded-lg p-2 focus:outline-none mt-1 focus:ring-2 focus:ring-blue-500"
                    />
                    <div className="mt-1">
                     
                    </div>
                    <div className="mt-4 ">
                        <button onClick={handleSignUp} className="bg-[#2563EB] w-full text-white py-2 px-4 rounded-[1rem] hover:bg-blue-600">Sign Up</button>
                    </div>

                    <div className="items-center flex flex-row justify-center mt-4">
                        <span className="text-white">have an account? <a onClick={() => setSignUp(false)} className="text-blue-600 cursor-pointer hover:underline">Sign in</a></span>
                    </div>

                    <div className="mt-4 mx-10">
                        <GoogleLogin
                            onSuccess={(response) => handleGoogleSignUp(response.credential)}
                            onError={() => console.log('Google signup failed')}
                        />
                    </div>
                </div>
            </div> : <div className=" bg-[rgba(122, 21, 21, 0)] mb-10 border border-[#BCC5DE80] border-1 backdrop-blur-lg absolute z-10 w-96  p-4 rounded-xl flex flex-col ">
                <button onClick={onClose} className="absolute top-4 right-4 text-white hover:text-gray-300">
                    <svg className="w-6 h-6" fill="black" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                </button>
                <div className="flex flex-row width-full items-center justify-center">
                    <h1 className="text-3xl font-bold text-center text-[white]">Welcome</h1>
                    <h2 className="ml-2 text-3xl font-bold text-center text-[white]">Back</h2>
                </div>
                <div className="flex flex-col mt-5 " >
                    <label className="text-sm font-medium text-white mb-1">Email</label>
                    <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        placeholder="email"
                        className="border border-[#BCC5DE80] border-1 rounded-lg p-2 focus:outline-none mt-1 focus:ring-2 focus:ring-blue-500"
                    />
                    <label className="text-sm font-medium text-white mb-1 mt-5">Password</label>
                    <input
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}   
                        type="password"
                        placeholder="password"
                        className="border border-[#BCC5DE80] border-1 rounded-lg p-2 focus:outline-none mt-1 focus:ring-2 focus:ring-blue-500"
                    />
                    <div className="mt-1">
                        <a className="text-sm text-blue-600 cursor-pointer hover:underline">Forgot Password?</a>
                    </div>
                    <div className="mt-4 ">
                        <button onClick={handleLogin} className="bg-[#2563EB] w-full text-white py-2 px-4 rounded-[1rem] hover:bg-blue-600">Sign In</button>
                    </div>

                    <div className="items-center flex flex-row justify-center mt-4">
                        <span className="text-white">Don't have an account? <a onClick={() => setSignUp(true)} className="text-blue-600 cursor-pointer hover:underline">Sign Up</a></span>
                    </div>

                    <div className="mt-4 mx-10">
                        <GoogleLogin
                            onSuccess={(response) => handleGoogleSignIn(response.credential)}
                            onError={() => console.log('Google signin failed')}
                        />
                    </div>
                </div>
            </div>}


        </Fragment>
    )
}