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

                    
                </div>
            </div>
        </div>
    )
}

export default LoginPage
