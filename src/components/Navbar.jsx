import React, { Children } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import logo from '../assets/images/logo.png'

const Navbar = ({ isAuthenticated, onLogout }) => {
    const navigate = useNavigate()
    const location = useLocation()

    const handleLogout = () => {
        onLogout()
        navigate('/')
    }

    const isActive = (path) => location.pathname === path

    return (
        <nav className='bg-[#0B1022]/85 border-b border-white/5 sticky top-0 z-50 backdrop-blur-md shadow-lg shadow-black/30'>
            <div className='app-container py-4 flex justify-between items-center'>

                <Link to='/home' className='flex items-center gap-2 group'>
                    <img src={logo} alt='Disney+' className='h-11 w-auto transition-transform duration-300 group-hover:scale-105' />
                </Link>
            
                <div className='flex gap-8 items-center'>
                    <NavItem to='/home' active={isActive("/home")}>
                        Home
                    </NavItem>
                    <NavItem to='/watchlist' active={isActive("/watchlist")} >
                        Watchlist
                    </NavItem>

                    {isAuthenticated && (
                        <button 
                            onClick={handleLogout}
                            className='ml-2 px-4 py-2 rounded-full text-sm font-medium text-white bg-red-500/90 hover:bg-red-500 active:scale-95 transition-all duration-200 shadow-md hover:shadow-red-500/30 cursor-pointer'
                        >
                            Logout
                        </button>
                    )}
                </div>
            </div>
        </nav>
    )
}

const NavItem = ({to,children,active}) => {
    return (
        <Link
            to={to}
            className='relative text-sm font-medium transition-colors duration-300 cursor-pointer'>
                <span className={active ? "text-white" : "text-gray-400 hover:text-white"}>{children}</span>
                <span className={`absolute left-0 -buttom-1 h-0.5 w-full bg-blue-500 rounded-full transform origin-left transition-transform duration-300 ${active?"scale-x-100" : "scale-x-0 hover:scale-x-100"}`}/>
            </Link>
    )
}

export default Navbar
