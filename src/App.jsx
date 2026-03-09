import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import LoginPage  from "./pages/LoginPage"
import SignupPage from "./pages/SignupPage";
import Home from "./pages/Home"
import { useState } from "react";
import ProtectedRoute from "./components/ProtectedRoute";
import Navbar from "./components/Navbar";
import Watchlist from './pages/Watchlist';
import { Toaster } from "react-hot-toast";

const App = () => {

    const token = localStorage.getItem("token")
    const [isAuthenticated, setIsAuthenticated] = useState(!!token)

    const handleLogout = ()=>{
        localStorage.removeItem("token")
        setIsAuthenticated(false)
    }

    const location = useLocation()

    const hideNavbar = 
    location.pathname === "/" ||
    location.pathname === "/login" ||
    location.pathname === "/signup"

    return (
        <div className="min-h-screen bg-app-bg text-app-text">
        <Toaster
            position="top-right"
            toastOptions={{
                style: {
                background: "#0b0f1a",
                color: "#fff",
                border: "1px solid #1f2937"
                }
            }}
        />
        {!hideNavbar && (
        <Navbar 
            key={isAuthenticated ? "auth" : "guest"}
            isAuthenticated = {isAuthenticated}
            onLogout={handleLogout}
        />
        )}
        <Routes>
            <Route 
                path ='/' 
                    element={<LandingPage />} 
            />

            <Route 
                path ='/login' 
                    element={
                        isAuthenticated
                        ? <Navigate to='/home' replace/>
                        : <LoginPage setIsAuthenticated={setIsAuthenticated} />
                    } 
            />
{/* redirect authenticated users away form signup */}
            <Route 
                path ='/signup' 
                    element={
                        isAuthenticated
                        ? <Navigate to='/home' replace/>
                        :<SignupPage/>
                    } 
            />

            <Route 
                path ='/home' 
                    element={
                        <ProtectedRoute isAuthenticated={isAuthenticated}>
                            <Home onLogout={handleLogout} />
                        </ProtectedRoute>
                    }
            />

            <Route
                path="/watchlist"
                element={
                <ProtectedRoute isAuthenticated={isAuthenticated}>
                    <Watchlist/>
                </ProtectedRoute>
                }
            />

        </Routes>
        </div>
    )
}

export default App

