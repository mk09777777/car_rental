import React, { Fragment } from "react";
import Dashboard from "./AdminDashboard";


export default function AdminSideBar() {
    const [activeItem, setActiveItem] = React.useState('dashboard');


    const handleItemClick = (id) => {
        setActiveItem(id);
    }

    const renderContent = () => {
        switch(activeItem) {
            case 'dashboard':
                return <Dashboard />;
            case 'addcars':
                return <div className='p-8'><h1 className='text-2xl font-bold'>Add Cars</h1></div>;
            case 'ManageCars':
                return <div className='p-8'><h1 className='text-2xl font-bold'>Manage Cars</h1></div>;
            case 'ManageBookings':
                return <div className='p-8'><h1 className='text-2xl font-bold'>Manage Bookings</h1></div>;
            default:
                return <Dashboard />;
        }
    }

    const navItems = [
        { id: 'dashboard', label: 'Dashboard', icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg> },
        { id: 'addcars', label: 'Add Cars', icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg> },
        { id: 'ManageCars', label: 'Manage Cars', icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg> },
        { id: 'ManageBookings', label: 'Manage Bookings', icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg> },
    ]



    return(
        <Fragment>
            <div className="flex flex-row bg-white">
                <div className="bg-white flex flex-col p-6 border-r border-t border-gray-200 w-64  left-0 top-24 bottom-0">
                <div className="items-center justify-center flex flex-col">
                    <div className="w-14 h-14 bg-gray-300 rounded-full mb-4 overflow-hidden flex items-center justify-center">
                        <img src="https://static.vecteezy.com/system/resources/thumbnails/074/348/028/small/business-user-account-profile-managing-personal-settings-vector.jpg" alt="Admin Icon" className="w-full h-full object-cover"/>
                    </div>
                    <h2 className="font-medium text-xl text-[#1F2937C9]">Mayur Kumawat</h2>
                </div>
                <div className="mt-8 flex flex-col gap-2">
                    {navItems.map((item) => (
                        <button
                            onClick={() => handleItemClick(item.id)}
                            key={item.id}
                            className={`flex items-center gap-3 px-4 py-3 ${activeItem === item.id ? 'text-[#2563EB] bg-[#DFEAFF80] border-l-4 border-[#4C88FF]' : 'text-gray-500'} hover:bg-gray-100 rounded-lg transition-colors`}
                        >
                            {item.icon}
                            <span>{item.label}</span>
                        </button>
                    ))}
                </div>
            </div>
            <div className=' flex-1'>
                {renderContent()}
            </div>
            </div>
        </Fragment>
    )
}