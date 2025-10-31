import { useState } from 'react'

export default function Navigation() {
  const [activeTab, setActiveTab] = useState('home')

  const navItems = [
    { id: 'home', label: 'Home', },
    { id: 'cars', label: 'Cars',  },
    // { id: 'rental', label: 'Rental', icon: '📋' },
    { id: 'about', label: 'About',  },
    // { id: 'contact', label: 'Contact', icon: '📞' }
  ]

  return (
    <nav className="bg-white  border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2 cursor-pointer hover:scale-110">
            <span className="text-2xl">
              <img src="/logo.jpg" alt="Car Icon" className="w-8 h-8 "/>
            </span>
         <h1 className="text-3xl font-bold text-[#414141] transition-transform duration-300 bg-[#414141] bg-clip-text text-transparent ">
              GoMiles
            </h1>
          </div>
          
          <div className="flex space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 flex items-center space-x-2 text-[#414141CC] hover:bg-gray-100 hover:text-gray-8001`}
                
              >
                <span>{item.icon}</span>
                <span>{item.label}</span>
              </button>
            ))}
        
          <div className='ml-10 flex flex-row border border-[#E1E1E1] rounded-3xl justify-between p-2 items-center gap-2'>
            <input type="text" placeholder='Search cars...' className='outline-none'/>
            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <span className="px-4 py-2 rounded-lg font-medium transition-all duration-200 flex items-center space-x-2 text-[#414141CC] hover:bg-gray-100 hover:text-gray-8001">List cars</span>
            </div>
        </div>
      </div>
    </nav>
  )
}