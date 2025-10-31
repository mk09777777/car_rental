import React, { Fragment } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export default function ReviewCard() {
    const [ref, isVisible] = useIntersectionObserver();
    const ReviewData=[
        {id: 1, name: "John Doe", review: "I've used many booking platforms before, but none compare to the personalized experience and attention to detail that CarRental provides.", rating: 5, area: "New York", profile:"/user1.png"},
        {id: 2, name: "Jane Smith", review: "I've used many booking platforms before, but none compare to the personalized experience and attention to detail that CarRental provides.", rating: 4, area: "Los Angeles",profile:"/user1.png"},
        {id: 3, name: "Alice Johnson", review: "I've used many booking platforms before, but none compare to the personalized experience and attention to detail that CarRental provides.", rating: 5, area: "Chicago", profile:"/user1.png"},
        {id: 4, name: "Bob Brown", review: "I've used many booking platforms before, but none compare to the personalized experience and attention to detail that CarRental provides.", rating: 4, area: "Houston", profile:"/user1.png"}
    ]
    return(
        <Fragment>
            <div ref={ref} className={`grid grid-cols-4 gap-4 mr-10 mb-10`}>
            {ReviewData.map((item,index)=>(
                <div key={index} className={` ${isVisible ? 'animate-fade-in' : ''} bg-white flex flex-col p-5 hover:scale-105 transition-transform rounded-lg shadow-md`}>
                        <div className='flex flex-row justify-between'>
                            <div className='flex flex-row'>
                                <img src={item.profile} alt={item.name} className='h-12 w-12 rounded-full'/>
                                <div className='flex flex-col ml-5'>
                                    <h1 className='font-bold text-[#374151] text-lg'>{item.name}</h1>
                                    <span className='text-[#374151A1] font-medium text-sm'>{item.area}</span>
                                </div>
                            </div>
                           
                        </div>
                         <div className='flex'>
                                {[...Array(5)].map((_, i) => (
                                    <span key={i} className={`text-lg ${i < item.rating ? 'text-blue-500' : 'text-gray-300'}`}>★</span>
                                ))}
                            </div>
                        <div className='mt-2'>
                            <span className='text-[#374151A1] font-medium text-sm'>"{item.review}"</span>
                        </div>
                </div>
            ))}
            </div>
        </Fragment>
    )
}