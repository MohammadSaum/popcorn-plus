import React, { Children } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import logo from '../assets/images/logo.png'

const Navbar = ({ isAuthenticated, onLogout }) => {
    const navigate = useNavigate()
    const location = useLocation()
    const isHome = location.pathname === '/home'

    const handleLogout = () => {
        onLogout()
        navigate('/')
    }

    const isActive = (path) => location.pathname === path

    return (
        <nav className={`top-0 w-full z-50 transition-transform duration-400 px-6
            ${isHome
                ?" fixed bg-linear-to-b from-app-bg to-transparent pb-10 pt-4"
                :"bg-app-bg border-b border-app-surface py-4"
            }`}>
            <div className='app-container py-3 flex justify-between items-center '>

                <Link to='/home' className='flex items-center group'>
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
                            className='ml-2 px-4 py-2 rounded-full text-sm font-medium text-app-text bg-red-500/90 hover:bg-app-danger active:scale-95 transition-all duration-200 shadow-md hover:shadow-red-500/30 cursor-pointer'
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
                <span className={active ? "text-app-text" : "text-app-muted hover:text-app-text"}>{children}</span>
                <span className={`absolute left-0 -buttom-1 h-0.5 w-full bg-blue-500 rounded-full transform origin-left transition-transform duration-300 ${active?"scale-x-100" : "scale-x-0 hover:scale-x-100"}`}/>
            </Link>
    )
}

export default Navbar
