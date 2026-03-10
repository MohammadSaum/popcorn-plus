import { useState } from 'react';
import Logo from '../assets/images/logo.png'
import { Link, useNavigate } from "react-router-dom";
import { apiRequest } from '../utils/api';
import toast from 'react-hot-toast';

const SignupPage = () => {
    const [loading, setLoading] = useState(false)
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

    const navigate = useNavigate()

    const isFormValid =
        name.trim() !== "" &&
        email.trim() !== "" &&
        password.length >= 6;

    const handleSubmit = async (e)=>{
        e.preventDefault();
        if (loading) return

        try{
            setLoading(true)
            setError('')

            await apiRequest("/api/auth/signup", {
                method: "POST",
                body: JSON.stringify({ name, email, password})
            })
            toast.success("Account created");
            navigate("/login")
        } catch (err) {
            setError(err.message || "Signup failed")
        } finally {
            setLoading(false)
        }
    }

    return (
        // Changed p-15 to responsive p-4
        <div className='min-h-screen bg-app-bg min-w-full p-4 flex items-center justify-center'>
            
            {/* Responsive wrapper: w-full with max-w-md */}
            <div className='relative w-full max-w-md'>
                
                {/* Floating Back Button: Adjusted for mobile spacing */}
                <Link 
                    to="/" 
                    className="absolute -top-8 left-0 text-[#6B7391] text-sm hover:text-app-text transition flex items-center gap-1"
                >
                    ← Back
                </Link>

                {/* Form: Swapped fixed width for w-full and added responsive padding */}
                <form className="bg-app-surface border border-[#0F1530] rounded-xl w-full p-6 md:p-8 shadow-lg"
                    onSubmit={handleSubmit}>

                    {/* Logo - clickable to landing */}
                    <div className='flex justify-center mb-6'>
                        <Link to="/" className="hover:opacity-80 transition transform active:scale-95">
                            <img src={Logo} alt='logo' className='h-16 md:h-20 w-auto' />
                        </Link>
                    </div>

                    <h2 className='text-app-text text-lg md:text-xl font-semibold mb-6 text-center'>
                        Sign up
                    </h2>
                        
                    <div className='flex flex-col gap-5'>
                        {/* name */}
                        <div className='flex flex-col gap-1'>
                            <label className='text-sm md:text-md text-[#9AA4BF]'>Name</label>
                            <input className='bg-[#070B1A] text-[#E6E9F0] placeholder:text-[#6B7391] border border-[#121833] rounded-md px-3 py-2 focus:outline-none focus:border-[#3B82F6] focus:ring-2 focus:ring-[#3B82F6]/40 transition text-sm md:text-base' 
                                type='text'
                                placeholder='Enter your username'
                                value={name}
                                onChange={(e)=>{setName(e.target.value)}}/>
                        </div>

                        {/* email */}
                        <div className='flex flex-col gap-1'>
                            <label className='text-sm md:text-md text-[#9AA4BF]'>Email</label>
                            <input className='bg-[#070B1A] text-[#E6E9F0] placeholder:text-[#6B7391] border border-[#121833] rounded-md px-3 py-2 focus:outline-none focus:border-[#3B82F6] focus:ring-2 focus:ring-[#3B82F6]/40 transition text-sm md:text-base' 
                                type='email' 
                                placeholder='Enter your email' 
                                value={email}
                                onChange={(e)=>{setEmail(e.target.value)}}/>
                        </div>

                        {/* Pass */}
                        <div className='flex flex-col gap-1'>
                            <label className="text-sm md:text-md text-[#9AA4BF]">Password</label>
                            <input className='bg-[#070B1A] text-[#E6E9F0] placeholder:text-[#6B7391] border border-[#121833] rounded-md px-3 py-2 focus:outline-none focus:border-[#3B82F6] focus:ring-2 focus:ring-[#3B82F6]/40 transition text-sm md:text-base' 
                                type='password' 
                                placeholder='Enter your password'
                                value={password}
                                onChange={(e)=>{setPassword(e.target.value)}} />
                        </div>

                        {error && (
                            <p className="text-app-danger text-xs md:text-sm text-center">
                                {error}
                            </p>
                        )}

                        <button type="submit"
                            disabled={!isFormValid || loading}
                            className={`rounded-xl font-medium py-2.5 mt-2 md:mt-4 transition flex justify-center items-center gap-2 min-h-11
                                ${ (isFormValid && !loading)
                                    ? "cursor-pointer bg-[#3B82F6] hover:bg-[#2563EB] active:bg-[#1D4ED8] active:scale-95 text-white"
                                    : "cursor-not-allowed bg-[#3B82F6]/50 text-white/60"
                                }
                            `}
                        >
                            {loading ? (
                                <div className='flex items-center gap-2'>
                                    <div className='w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin'></div>
                                    <span className="text-sm">Creating account...</span>
                                </div>
                            ) : (
                                <span className="text-sm md:text-base">Sign Up</span>
                            )}
                        </button>

                        <p className="mt-4 md:mt-6 text-xs md:text-sm text-gray-400 text-center">
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
        </div>
    )
}

export default SignupPage