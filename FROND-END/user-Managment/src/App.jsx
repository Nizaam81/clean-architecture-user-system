import Login from "./components/auth/login"
import Singup from "./components/auth/singup"
import ForgotPage from "./components/auth/ForgotPasswordPage"
import OtpVerificationPage from "./components/auth/OtpVerificationPage"
import FpasswordChange from "./components/auth/Forgot-Change-Password"
import { Routes, Route } from "react-router-dom";


function App() {
  

  return (
   
      <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Singup />} />
      <Route path="forgot-password" element={<ForgotPage />} />
      <Route path="/auth/verify-otp" element={<OtpVerificationPage />} />
      <Route path="/change-password" element={<FpasswordChange />} />
      </Routes>     

      
   
  )
}

export default App
