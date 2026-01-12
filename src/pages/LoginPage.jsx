import Logo from '../assets/images/logo.png'

const LoginPage = () => {
    return (
        <div className='min-h-screen min-w-screen p-15 flex items-center justify-around'>
            <div className='bg-[#0B1022] border border-[#0F1530] rounded-sm h-160 w-140 flex flex-col items-center p-5'>
                <img src={Logo} className='h-25 w-45'></img>

                <div className='text-[#E6E9F0]'>
                    Login w email
                </div>
            </div>
        </div>
    )
}

export default LoginPage
