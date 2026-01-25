import { Routes, Route, Navigate } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import LoginPage  from "./pages/LoginPage"
import SignupPage from "./pages/SignupPage";
import Home from "./pages/Home"
import { useState } from "react";
import ProtectedRoute from "./components/ProtectedRoute";
import Navbar from "./components/Navbar";
import Watchlist from './pages/Watchlist'

const App = () => {

    const [isAuthenticated, setIsAuthenticated] = useState(
        localStorage.getItem("isAuthenticated") === "true")

    const handleLogout = ()=>{
        localStorage.removeItem("isAuthenticated")
        setIsAuthenticated(false)
    }

    return (
        <>
        <Navbar 
            isAuthenticated = {isAuthenticated}
            onLogout={handleLogout}
        />
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

            <Route 
                path ='/signup' 
                    element={
                        isAuthenticated
                        ? <Navigate to='/home' replace/>
                        :<SignupPage />
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
        </>
    )
}

export default App