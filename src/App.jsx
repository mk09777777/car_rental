import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navigation from "./components/Navigation"
import Dashboard from "./pages/Dashboard"
import HomePage from "./pages/HomePage"
import { GoogleOAuthProvider } from '@react-oauth/google'
import Admin from "./pages/Admin"
import AdminDashboard from "./pages/AdminDashboard"
import CarsList from "./pages/Cars"

function App() {
  return (
    <GoogleOAuthProvider clientId="975875417029-hkhkfv85ono4eqq4lkautl6n1qu25akc.apps.googleusercontent.com">
      <Router>
        {/* <Navigation /> */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/admin" element={<Admin/>} />
          <Route path="/AdminDashboard" element={<AdminDashboard/>} />
          <Route path="/carsList" element={<CarsList/>} />
     
        </Routes>
      </Router>
    </GoogleOAuthProvider>
  )
}

export default App