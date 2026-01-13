import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/landingPage";
import LoginPage  from "./pages/LoginPage"
const App = () => {

    return (
        <Routes>
            <Route path ='/' element={<LandingPage />} />
            <Route path ='/LoginPage' element={<LoginPage />} />
        </Routes>
    )
}

export default App