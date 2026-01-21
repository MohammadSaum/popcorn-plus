import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/landingPage";
import LoginPage  from "./pages/LoginPage"
import SignupPage from "./pages/SignupPage";
import Home from "./pages/Home"
const App = () => {

    return (
        <Routes>
            <Route path ='/' element={<LandingPage />} />
            <Route path ='/login' element={<LoginPage />} />
            <Route path ='/signup' element={<SignupPage/>} />
            <Route path ='/home' element={<Home/>} />
        </Routes>
    )
}

export default App