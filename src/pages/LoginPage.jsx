import Logo from '../assets/images/logo.png'

const LoginPage = () => {
    return (
        <div className='min-h-screen min-w-screen p-15 flex items-center justify-center'>
            <div className='bg-[#0B1022] border border-[#0F1530] rounded-xl w-105 p-8 shadow-lg'>
                
                <div className='flex justify-center mb-6'>
                    <img src={Logo} className='h-20 w-auto'></img>
                </div>

                <h2 className='text-[#E6E9F0] text-xl font-semibold mb-6 text-center'>
                    Login with your email
                </h2>
                    
                <div className='flex flex-col gap-5'>

                    {/* email */}
                    <div className=' flex flex-col gap-1'>
                        <label className='text-md text-[#9AA4BF]'>Email</label>

                        <input className='bg-[#070B1A] text-[#E6E9F0] placeholder:text-[#6B7391] border border-[#121833]  rounded-md px-3 py-2 focus:outline-none focus:border-[#3B82F6] focus:ring-2 focus:ring-[#3B82F6]/40 transition' 
                        type='email' 
                        placeholder='Enter your email' />
                    </div>

                    {/* Pass */}
                    <div className=' flex flex-col gap-1'>
                        <label className="text-md text-[#9AA4BF]">Password</label>

                        <input className='bg-[#070B1A] text-[#E6E9F0] placeholder:text-[#6B7391] border border-[#121833]  rounded-md px-3 py-2 focus:outline-none focus:border-[#3B82F6] focus:ring-2 focus:ring-[#3B82F6]/40 transition' type='password' 
                        placeholder='Enter your password'></input>
                    </div>

                    
                </div>
            </div>
        </div>
    )
}

export default LoginPage
