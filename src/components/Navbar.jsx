import React, { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Menu, X } from 'lucide-react' // Using Lucide for the mobile icons
import logo from '../assets/images/logo.png'

const Navbar = ({ isAuthenticated, onLogout }) => {
    const navigate = useNavigate()
    const location = useLocation()
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    // Add scroll listener
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true)
            } else {
                setIsScrolled(false)
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const handleLogout = () => {
        onLogout()
        localStorage.removeItem("token")
        navigate('/')
        setIsMobileMenuOpen(false)
    }

    const isActive = (path) => location.pathname === path

    return (
        <nav className={`fixed py-1 top-0 left-0 w-full z-50 transition-colors duration-500 ${isScrolled || isMobileMenuOpen ? 'bg-[#040714]' : 'bg-transparent'}`}>
            
            <div className={`absolute inset-0 h-24 bg-linear-to-b from-black/80 via-black/40 to-transparent pointer-events-none transition-opacity duration-500 ${isScrolled ? 'opacity-0' : 'opacity-100'}`}/>
            
            <div className='relative px-4 md:px-10 h-16 flex justify-between items-center'>
                <Link to='/home' className='flex items-center z-50'>
                    <img src={logo} alt='Popcorn+' className='h-10 md:h-13 w-auto hover:opacity-90 transition-opacity' />
                </Link>
            
                {/* Desktop Menu */}
                <div className='hidden md:flex gap-8 items-center text-sm font-medium'>
                    <NavItem to='/home' active={isActive("/home")}>Home</NavItem>
                    <NavItem to='/watchlist' active={isActive("/watchlist")}>Watchlist</NavItem>

                    {isAuthenticated && (
                        <button 
                            onClick={handleLogout}
                            className='ml-2 px-5 py-2 rounded-md text-sm font-semibold bg-red-600 hover:bg-red-500 transition-colors duration-200 cursor-pointer text-white'
                        >
                            Logout
                        </button>
                    )}
                </div>

                {/* Mobile Menu Button */}
                <div className='md:hidden flex items-center z-50'>
                    <button 
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className='text-white p-2 focus:outline-none'
                    >
                        {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Sidebar/Dropdown */}
            <div className={`md:hidden absolute top-0 left-0 w-full bg-[#040714] transition-all duration-300 ease-in-out overflow-hidden ${isMobileMenuOpen ? 'h-screen opacity-100' : 'h-0 opacity-0'}`}>
                <div className='flex flex-col items-center justify-center h-full gap-10 text-xl font-semibold'>
                    <Link to='/home' onClick={() => setIsMobileMenuOpen(false)} className={isActive("/home") ? "text-blue-500" : "text-white"}>Home</Link>
                    <Link to='/watchlist' onClick={() => setIsMobileMenuOpen(false)} className={isActive("/watchlist") ? "text-blue-500" : "text-white"}>Watchlist</Link>
                    
                    {isAuthenticated && (
                        <button 
                            onClick={handleLogout}
                            className='px-10 py-3 rounded-md bg-red-600 text-white font-bold'
                        >
                            Logout
                        </button>
                    )}
                </div>
            </div>
        </nav>
    )
}

const NavItem = ({ to, children, active }) => {
    return (
        <Link
            to={to}
            className="relative group text-gray-300 hover:text-white transition-colors duration-200"
        > 
            {children}
            <span className={`absolute left-0 -bottom-1 h-0.5 w-full bg-blue-500 rounded-full transform origin-left transition-transform duration-200 ${active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`}/>
        </Link>
    )
}

export default Navbar