import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../assets/images/logo.png'

const Navbar = ({ isAuthenticated, onLogout }) => {
    const navigate = useNavigate()

    const handleLogout = () => {
        onLogout()
        navigate('/')
    }

    return (
        <nav className='bg-[#0B1022] border-b border-[#0F1530] p-4 flex justify-between items-center'>
            <Link to='/home' className='flex items-center'>
                <img src={logo} alt='Disney+' className='h-12 w-auto' />
            </Link>
            
            <div className='flex gap-6 items-center'>
                <Link to='/home' className='hover:text-white text-gray-300 transition'>
                    Home
                </Link>
                <Link to='/watchlist' className='hover:text-white text-gray-300 transition'>
                    Watchlist
                </Link>
                {isAuthenticated && (
                    <button 
                        onClick={handleLogout}
                        className='bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition'
                    >
                        Logout
                    </button>
                )}
            </div>
        </nav>
    )
}

export default Navbar
