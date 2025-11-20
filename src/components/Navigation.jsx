import { useState } from 'react'
import { useAuthStore } from '../store/Auth'
import { Link } from 'react-router-dom'

export default function Navigation({handleLoginOpen, headerColor = "white"}) {
  const [activeTab, setActiveTab] = useState('home')
  const { isAuthenticated ,logout} = useAuthStore()

  const handleLogout=()=>{
    logout();
  }
  


  const navItems = [
    { id: 'home', label: 'Home', },
    { id: 'cars', label: 'Cars', },
    // { id: 'rental', label: 'Rental', icon: '📋' },
    { id: 'about', label: 'About', },
    // { id: 'contact', label: 'Contact', icon: '📞' }
  ]
  const handleLoginOpen2=(login)=>{
    handleLoginOpen(login);
    
  }

  return (
    <nav className="p-4">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2 cursor-pointer hover:scale-110">
            {/* <span className="text-2xl">
              <img src="/logo.jpg" alt="Car Icon" className="w-8 h-8 "/>
            </span> */}
            <h1 className="text-[3rem] font-bold transition-transform duration-300" style={{ fontFamily: 'Fugaz One, cursive', color: headerColor }}>
              GoMiles
            </h1>
          </div>

          <div className="flex space-x-1 px-4 py-2 rounded-[2rem] bg-white border border-[#E1E1E1] ">
            <div className='flex flex-row border border-[#E1E1E1] rounded-3xl justify-between p-2 items-center gap-2'>
              <input type="text" placeholder='Search cars...' className='outline-none' />
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            {navItems.map((item) => (
              <Link
                key={item.id}
                to={item.id === 'home' ? '/' : `/${item.id}`}
                onClick={() => setActiveTab(item.id)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 flex items-center space-x-2 text-[#414141CC] hover:bg-gray-100 hover:text-gray-8001`}
              >
                <span>{item.icon}</span>
                <span>{item.label}</span>
              </Link>
            ))}


            <Link to="/cars" className="px-4 py-2 rounded-lg font-medium transition-all duration-200 flex items-center space-x-2 text-[#414141CC] hover:bg-gray-100 hover:text-gray-8001">List cars</Link>
            <Link to="/admin" className="px-4 py-2 rounded-lg font-medium transition-all duration-200 flex items-center space-x-2 text-[#414141CC] hover:bg-gray-100 hover:text-gray-8001">Admin</Link>
            {!isAuthenticated ? (
              <div className='ml-3 justify-center flex items-center'>
                <button onClick={() => handleLoginOpen2(true)} className=' px-4 py-1 rounded-[2rem] hover:scale-105 transition-transform  font-medium items-center justify-center  flex items-center space-x-2 bg-[#333333] '>
                  <span className='text-white'>Sign In</span>
                </button>
              </div>
            ) : (
              <button onClick={handleLogout} className="bg-[#2563EB] text-white px-4 py-2 rounded-[2rem] hover:bg-blue-600 transition-colors duration-200">Sign Out</button>
            )} 
          </div>
        </div>
      </div>
    </nav>
  )
}