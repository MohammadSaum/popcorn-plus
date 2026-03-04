import { useState } from 'react'
import Logo from '../assets/images/logo.png'
import { useNavigate, Link } from 'react-router-dom'
import { apiRequest } from '../utils/api'

const LoginPage = ({setIsAuthenticated}) => {
    const [loading, setLoading] = useState(false)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

    const navigate = useNavigate()

    const isFormValid = email.trim() !== "" && password.length >= 6

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (loading) return

        try {
            setLoading(true)
            setError("")
            const data = await apiRequest("/api/auth/login", {
                method: "POST",
                body: JSON.stringify({email, password})
            })

            localStorage.setItem("token", data.token)
            setIsAuthenticated(true)
            navigate("/home")
        } catch (err) {
            setError(err.message || "Login failed")
        } finally {
            setLoading(false)
        }
    }

    return (
        // Changed p-15 to a responsive p-4 to prevent side-clipping on mobile
        <div className='min-h-screen min-w-full bg-app-bg p-4 flex items-center justify-center'>
            
            {/* Wrapper: Use w-full and max-w-md to keep it responsive */}
            <div className='relative w-full max-w-md'>
                
                {/* Floating Back Button: Adjusted -top for mobile spacing */}
                <Link 
                    to="/" 
                    className="absolute -top-8 left-0 text-[#6B7391] text-sm hover:text-app-text transition flex items-center gap-1"
                >
                    ← Back
                </Link>

                {/* Form: Swapped w-105 for w-full, reduced padding for mobile */}
                <form className='bg-app-surface border border-[#0F1530] rounded-xl w-full p-6 md:p-8 shadow-lg'
                    onSubmit={handleSubmit}>
                    
                    <div className='flex justify-center mb-6'>
                        <Link to="/" className="hover:opacity-80 transition transform active:scale-95">
                            {/* Responsive logo height */}
                            <img src={Logo} alt="Logo" className='h-16 md:h-20 w-auto' />
                        </Link>
                    </div>

                    <h2 className='text-app-text text-lg md:text-xl font-semibold mb-6 text-center'>
                        Login with your email
                    </h2>
                        
                    <div className='flex flex-col gap-5'>
                        <div className='flex flex-col gap-1'>
                            <label className='text-sm md:text-md text-[#9AA4BF]'>Email</label>
                            <input 
                                className='bg-[#070B1A] text-[#E6E9F0] placeholder:text-[#6B7391] border border-[#121833] rounded-md px-3 py-2 focus:outline-none focus:border-[#3B82F6] focus:ring-2 focus:ring-[#3B82F6]/40 transition text-sm md:text-base' 
                                type='email' 
                                placeholder='Enter your email'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>

                        <div className='flex flex-col gap-1'>
                            <label className="text-sm md:text-md text-[#9AA4BF]">Password</label>
                            <input 
                                className='bg-[#070B1A] text-[#E6E9F0] placeholder:text-[#6B7391] border border-[#121833] rounded-md px-3 py-2 focus:outline-none focus:border-[#3B82F6] focus:ring-2 focus:ring-[#3B82F6]/40 transition text-sm md:text-base' 
                                type='password' 
                                placeholder='Enter your password'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>

                        {error && ( 
                            <p className="text-app-danger text-xs md:text-sm text-center">
                                {error}
                            </p>
                        )}

                        <button 
                            disabled={!isFormValid || loading}
                            className={`rounded-xl font-medium py-2.5 mt-2 md:mt-4 transition flex justify-center items-center gap-2 
                                ${(isFormValid && !loading) ?
                                    "cursor-pointer bg-[#3B82F6] hover:bg-[#2563EB] active:bg-[#1D4ED8] active:scale-95 text-app-text"
                                    : "cursor-not-allowed bg-[#3B82F6]/50 text-white/60"}
                            `}
                            type='submit'
                        >
                            {loading ? (
                                <div className='flex items-center gap-2'>
                                    <div className='w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin'></div>
                                    <span className="text-sm">Logging in...</span>
                                </div>
                            ) : <span className="text-sm md:text-base">Login</span>}
                        </button>

                        <div className="mt-4 text-center">
                            <p className="text-[#9AA4BF] text-xs md:text-sm">
                                Don't have an account?{' '}
                                <Link to="/signup" className="text-[#3B82F6] hover:underline">Sign up</Link>
                            </p>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default LoginPage