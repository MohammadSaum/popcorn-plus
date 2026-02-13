import React, { Children } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import logo from '../assets/images/logo.png'

const Navbar = ({ isAuthenticated, onLogout }) => {
    const navigate = useNavigate()
    const location = useLocation()
    const isHome = location.pathname === '/home'

    const handleLogout = () => {
        onLogout()
        localStorage.removeItem("token")
        navigate('/')
    }

    const isActive = (path) => location.pathname === path

    return (
        <nav className="fixed top-0 left-0 w-full z-50">
            <div className='absolute inset-0 h-24 bg-linear-to-b from-black/80 via-black/40  to-transparent pointer-events-none'/>
            <div className='relative px-10 h-16 flex justify-between items-center '>

                <Link to='/home' className='flex items-center'>
                    <img src={logo} alt='Disney+' className='h-11 w-auto hover:opacity-90 transition-opacity ' />
                </Link>
            
                <div className='flex gap-8 items-center text-sm font-medium'>
                    <NavItem to='/home' active={isActive("/home")}>
                        Home
                    </NavItem>
                    <NavItem to='/watchlist' active={isActive("/watchlist")} >
                        Watchlist
                    </NavItem>

                    {isAuthenticated && (
                        <button 
                            onClick={handleLogout}
                            className='ml-2 px-5 py-2 rounded-md text-sm font-semibold bg-red-600 hover:bg-red-500 transition-colors duration-200 cursor-pointer'
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
            className="relative group text-gray-300 hover:text-white transition-colors duration-200"> {children}

                <span className={`absolute left-0 -bottom-1 h-0.5 w-full bg-blue-500 rounded-full transform origin-left transition-transform duration-200
                    ${active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`}/>
                
            </Link>
    )
}

export default Navbar
