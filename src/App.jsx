import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/landingPage";
import LoginPage  from "./pages/LoginPage"
import SignupPage from "./pages/SignupPage";
const App = () => {

    return (
        <Routes>
            <Route path ='/' element={<LandingPage />} />
            <Route path ='/LoginPage' element={<LoginPage />} />
            <Route path ='/SignupPage' element={<SignupPage/>} />
        </Routes>
    )
}

export default App