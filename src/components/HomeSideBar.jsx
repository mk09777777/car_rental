import React, { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function HomeSideBar() {
    const [activeItem, setActiveItem] = useState('home');
    const navigate = useNavigate();

    const handleItemClick = (id, path) => {
        setActiveItem(id);
        if (path) {
            navigate(path);
        }
    };

    const navItems = [
        { id: 'home', label: 'Home', icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>, path: '/' },
        { id: 'cars', label: 'Cars', icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M5 11l1.5-4.5h11L19 11m-1.5 5a1.5 1.5 0 01-3 0 1.5 1.5 0 013 0zm-11 0a1.5 1.5 0 01-3 0 1.5 1.5 0 013 0zM3 13h18v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5z"/></svg>, path: '/carsList' },
        { id: 'about', label: 'About', icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> },
        { id: 'contact', label: 'Contact', icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg> },
    ];

    return (
        <Fragment>
            <div className="bg-white flex flex-col p-6 border-r border-gray-200 w-64 fixed left-0 top-24 bottom-0 z-10">
                <div className="items-center justify-center flex flex-col mb-8">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-4 flex items-center justify-center">
                        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M5 11l1.5-4.5h11L19 11m-1.5 5a1.5 1.5 0 01-3 0 1.5 1.5 0 013 0zm-11 0a1.5 1.5 0 01-3 0 1.5 1.5 0 013 0zM3 13h18v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5z"/>
                        </svg>
                    </div>
                    <h2 className="font-bold text-xl text-[#1F2937C9]">GoMiles</h2>
                    <span className="text-gray-500 text-sm">Car Rental</span>
                </div>
                <div className="flex flex-col gap-2">
                    {navItems.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => handleItemClick(item.id, item.path)}
                            className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                                activeItem === item.id 
                                    ? 'text-blue-600 bg-blue-50 border-l-4 border-blue-600' 
                                    : 'text-gray-600 hover:bg-gray-100'
                            }`}
                        >
                            {item.icon}
                            <span className="font-medium">{item.label}</span>
                        </button>
                    ))}
                </div>
            </div>
        </Fragment>
    );
}