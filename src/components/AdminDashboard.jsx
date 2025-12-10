import React, { Fragment } from 'react';


export default function Dashboard() {


    const stats = [
        { id: 'totalCars', label: 'Total Cars', value: 120, icon: <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21H5a2 2 0 01-2-2V5a2 2 0 012-2h11l5 5v11a2 2 0 01-2 2z" /></svg> },
        { id: 'totalBookings', label: 'Total Bookings', value: 350, icon: <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" /></svg> },
        { id: 'pendingBookings', label: 'Pending Bookings', value: 45, icon: <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> },
        { id: 'completedBookings', label: 'Completed Bookings', value: 85, icon: <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> },
    ]

    const bookings = [
        { id: 1, car: 'Toyota Camry', revenue: '$500', date: '2024-06-01', status: 'Completed', icon: <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" /></svg> },
        { id: 2, car: 'Honda Accord', revenue: '$300', date: '2024-06-05', status: 'Pending', icon: <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" /></svg> },
        { id: 3, car: 'Ford Mustang', revenue: '$700', date: '2024-06-10', status: 'Completed', icon: <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" /></svg> },
    ]

    return (
        <Fragment>
            <div className='flex flex-col bg-white p-8'>
                <div className='flex flex-col'>
                    <h1 className='font-bold text-xl text-[#1F2937C9]'>Admin Dashboard</h1>
                    <span className='text-gray-500 mt-2'>Monitor overall platform performance including total cars, bookings,<br /> revenue, and recent activities</span>
                </div>
                <div className='flex flex-row gap-8 mt-6'>
                    {stats.map((stat) => (
                        <div className='border-2 flex flex-row shadow-md border-gray-100 rounded-lg p-4 bg-white'>
                            <div className='flex flex-col '>
                                <h2 className='text-[#6B7280] font-medium'>{stat.label}</h2>
                                <h1 className='text-2xl font-bold text-[#1F2937C9]'>{stat.value}</h1>
                            </div>
                            <div className='ml-8 flex items-center rounded-full w-14 h-14 bg-[#EEF4FF] justify-center'>
                                {stat.icon}
                            </div>
                        </div>
                    ))}
                </div>
                <div className='flex flex-row gap-6 mt-8'>
                    <div className='p-6 flex flex-col flex-1 shadow-md border border-gray-200 rounded-lg bg-white'>
                        <h2 className='font-bold text-xl text-[#020817]'>Recent Bookings</h2>
                        <h3 className='text-gray-500 mt-2 mb-4'>Latest customer bookings</h3>
                        {bookings.map((booking) => (
                            <div key={booking.id} className='flex flex-row mt-3 justify-between items-center border-b border-gray-100 pb-3'>
                                <div className='flex flex-row items-center'>
                                    <div className='flex items-center rounded-full w-10 h-10 bg-[#EEF4FF] justify-center'>
                                        <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 24 24"><path d="M5 11l1.5-4.5h11L19 11m-1.5 5a1.5 1.5 0 01-3 0 1.5 1.5 0 013 0zm-11 0a1.5 1.5 0 01-3 0 1.5 1.5 0 013 0zM3 13h18v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5z"/></svg>
                                    </div>
                                    <div className='flex flex-col ml-3'>
                                        <h1 className='font-semibold text-[#020817] text-sm'>{booking.car}</h1>
                                        <h2 className='text-gray-500 text-xs'>{booking.date}</h2>
                                    </div>
                                </div>
                                <div className='flex flex-col items-end'>
                                    <h1 className='font-bold text-[#020817] text-sm'>{booking.revenue}</h1>
                                    <span className={`text-xs mt-1 font-medium ${booking.status === 'Completed' ? 'text-green-500' : 'text-yellow-500'}`}>{booking.status}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className='p-6 flex flex-col w-64 h-48 shadow-md border border-gray-200 rounded-lg bg-white justify-center items-center'>
                        <h2 className='font-bold text-lg text-[#020817]'>Monthly Revenue</h2>
                        <h1 className='font-bold text-4xl mt-4 text-[#2563EB]'>$12,500</h1>
                        <span className='text-green-500 text-sm mt-2'>↑ 12% from last month</span>
                    </div>
                </div>
                <div className='mt-8'>
                    <div className='p-6 shadow-md border border-gray-200 rounded-lg bg-white'>
                        <h2 className='font-bold text-xl text-[#020817]'>Bookings Overview</h2>
                        <h3 className='text-gray-500 mt-2 mb-6'>Monthly bookings trend</h3>
                        <div className='h-64 flex items-end justify-around gap-4 border-b border-l border-gray-200 pb-2 pl-2'>
                            <div className='flex flex-col items-center'>
                                <span className='text-sm font-semibold text-blue-600 mb-1'>45</span>
                                <div className='w-16 bg-blue-500 rounded-t' style={{height: '150px'}}></div>
                                <span className='text-sm text-gray-600 mt-2'>Jan</span>
                            </div>
                            <div className='flex flex-col items-center'>
                                <span className='text-sm font-semibold text-blue-600 mb-1'>58</span>
                                <div className='w-16 bg-blue-500 rounded-t' style={{height: '180px'}}></div>
                                <span className='text-sm text-gray-600 mt-2'>Feb</span>
                            </div>
                            <div className='flex flex-col items-center'>
                                <span className='text-sm font-semibold text-blue-600 mb-1'>72</span>
                                <div className='w-16 bg-blue-500 rounded-t' style={{height: '210px'}}></div>
                                <span className='text-sm text-gray-600 mt-2'>Mar</span>
                            </div>
                            <div className='flex flex-col items-center'>
                                <span className='text-sm font-semibold text-blue-600 mb-1'>52</span>
                                <div className='w-16 bg-blue-500 rounded-t' style={{height: '170px'}}></div>
                                <span className='text-sm text-gray-600 mt-2'>Apr</span>
                            </div>
                            <div className='flex flex-col items-center'>
                                <span className='text-sm font-semibold text-blue-600 mb-1'>85</span>
                                <div className='w-16 bg-blue-500 rounded-t' style={{height: '220px'}}></div>
                                <span className='text-sm text-gray-600 mt-2'>May</span>
                            </div>
                            <div className='flex flex-col items-center'>
                                <span className='text-sm font-semibold text-blue-600 mb-1'>95</span>
                                <div className='w-16 bg-blue-500 rounded-t' style={{height: '240px'}}></div>
                                <span className='text-sm text-gray-600 mt-2'>Jun</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}