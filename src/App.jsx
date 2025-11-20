import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navigation from "./components/Navigation"
import Dashboard from "./pages/Dashboard"
import HomePage from "./pages/HomePage"
import CarsPage from "./pages/CarsPage"
import AboutPage from "./pages/AboutPage"
import AdminLogin from "./components/AdminLogin"
import AdminDashboard from "./pages/AdminDashboard"
import { GoogleOAuthProvider } from '@react-oauth/google'

function App() {
  return (
    <GoogleOAuthProvider clientId="975875417029-hkhkfv85ono4eqq4lkautl6n1qu25akc.apps.googleusercontent.com">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cars" element={<CarsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/admin" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
        </Routes>
      </Router>
    </GoogleOAuthProvider>
  )
}

export default App