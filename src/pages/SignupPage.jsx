import { useState } from 'react';
import Logo from '../assets/images/logo.png'
import { Link, useNavigate } from "react-router-dom";
import { use } from 'react';

const SignupPage = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const [error, setError] = useState("")

    const navigate = useNavigate()

    const isFormValid =
        name.trim() !== "" &&
        email.trim() !== "" &&
        password.length >= 6;

    const handleSubmit = (e)=>{
        e.preventDefault();

        if(!name.trim()){
            setError('Name is required.')
            return
        }

        if(!email.trim()){
            setError('Email is required.')
            return
        }

        if(password.length<6){
            setError("Password must be at least 6 characters");
            return
        }

        setError('')

        console.log("Signup Data: ", {name,email,password})

        navigate("/login")
    }
    return (
            <div className='min-h-screen min-w-full p-15 flex items-center justify-center'>
                <form className="bg-[#0B1022] border border-[#0F1530] rounded-xl w-105 p-8 shadow-lg"
                    onSubmit={handleSubmit}>

                    {/* logo */}
                    <div className='flex justify-center mb-6'>
                        <img src={Logo} alt='logo' className='h-20 w-auto'></img>
                    </div>

                <h2 className='text-[#E6E9F0] text-xl font-semibold mb-6 text-center'>
                    Sign up
                </h2>
                    
                    <div className='flex flex-col gap-5'>

                        {/* name */}
                        <div className=' flex flex-col gap-1'>
                            <label className='text-md text-[#9AA4BF]'>Name</label>

                            <input className='bg-[#070B1A] text-[#E6E9F0] placeholder:text-[#6B7391] border border-[#121833]  rounded-md px-3 py-2 focus:outline-none focus:border-[#3B82F6] focus:ring-2 focus:ring-[#3B82F6]/40 transition' 
                            type='text'
                            placeholder='Enter your username'
                            onChange={(e)=>{setName(e.target.value)}}/>
                        </div>

                        {/* email */}
                        <div className=' flex flex-col gap-1'>
                            <label className='text-md text-[#9AA4BF]'>Email</label>

                            <input className='bg-[#070B1A] text-[#E6E9F0] placeholder:text-[#6B7391] border border-[#121833]  rounded-md px-3 py-2 focus:outline-none focus:border-[#3B82F6] focus:ring-2 focus:ring-[#3B82F6]/40 transition' 
                            type='email' 
                            placeholder='Enter your email' 
                            onChange={(e)=>{setEmail(e.target.value)}}/>
                        </div>

                        {/* Pass */}
                        <div className=' flex flex-col gap-1'>
                            <label className="text-md text-[#9AA4BF]">Password</label>

                            <input className='bg-[#070B1A] text-[#E6E9F0] placeholder:text-[#6B7391] border border-[#121833]  rounded-md px-3 py-2 focus:outline-none focus:border-[#3B82F6] focus:ring-2 focus:ring-[#3B82F6]/40 transition' type='password' 
                            placeholder='Enter your password'
                            onChange={(e)=>{setPassword(e.target.value)}}></input>
                        </div>

                        {/* error */}
                        {error && (
                            <p className="text-red-500 text-sm text-center">
                            {error}
                            </p>
                        )}

                        {/* button */}
                            <button  type="submit"
                                disabled={!isFormValid}
                                className={`rounded-xl font-medium py-2.5 mt-4 transition
                                    ${
                                    isFormValid
                                        ? "cursor-pointer bg-[#3B82F6] hover:bg-[#2563EB] active:bg-[#1D4ED8] active:scale-95 text-white"
                                        : "cursor-not-allowed bg-[#3B82F6]/50 text-white/60"
                                    }
                                `}
                            >Sign Up</button>

                        {/* login route */}
                            <p className="mt-6 text-sm text-gray-400 text-center">
                                Already have an account?{" "}
                                <Link
                                    to="/login"
                                    className="text-blue-500 font-medium hover:text-blue-400 hover:underline transition"
                                >
                                    Log in
                                </Link>
                            </p>

                    </div>
                </form>
            </div>
    )
}

export default SignupPage
