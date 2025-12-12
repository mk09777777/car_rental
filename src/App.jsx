import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navigation from "./components/Navigation"
import Dashboard from "./pages/Dashboard"
import HomePage from "./pages/HomePage"
import { GoogleOAuthProvider } from '@react-oauth/google'
import Admin from "./pages/Admin"
import AdminDashboard from "./pages/AdminDashboard"
import CarsList from "./pages/Cars"
import AdminCarsList from "./pages/AdminCarsList"
import CarDetails from "./pages/CarDetails"

function App() {
  return (
    <GoogleOAuthProvider clientId="975875417029-hkhkfv85ono4eqq4lkautl6n1qu25akc.apps.googleusercontent.com">
      <Router>
        {/* <Navigation /> */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/admin" element={<Admin/>} />
          <Route path="/AdminDashboard" element={<AdminDashboard/>} />
          <Route path="/cars" element={<CarsList/>} />
          <Route path="/carsList" element={<CarsList/>} />
          <Route path="/car-details/:id" element={<CarDetails/>} />
          <Route path="/AdminCarsList" element={<AdminCarsList/>} />
     
        </Routes>
      </Router>
    </GoogleOAuthProvider>
  )
}

export default App