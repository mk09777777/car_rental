import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navigation from "./components/Navigation"
import Dashboard from "./pages/Dashboard"
import HomePage from "./pages/HomePage"
import { GoogleOAuthProvider } from '@react-oauth/google'
import Mybookings from "./pages/Mybookings"
import CarsList from "./pages/Cars"
import MyBookings from "./pages/Mybookings"
import About from "./pages/About"

// import CarsList from "./pages/Cars"



function App() {
  return (
    <GoogleOAuthProvider clientId="975875417029-hkhkfv85ono4eqq4lkautl6n1qu25akc.apps.googleusercontent.com">
      <Router>
        {/* <Navigation /> */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cars" element={<CarsList/>} />
          <Route path="/mybookings" element={<MyBookings/>} />
          <Route path='/about' element={<About/>}/>
          

    
        </Routes>
      </Router>
    </GoogleOAuthProvider>
  )
}

export default App