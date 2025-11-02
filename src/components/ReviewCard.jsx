import React, { Fragment, useEffect } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { UseReviewStore } from '../store/Reviews';  
import axios from 'axios';

export default function ReviewCard() {
    const { reviewsData, fetchReviews } = UseReviewStore();

    useEffect(() => {
        fetchReviews();
    }, [fetchReviews]);

    const [ref, isVisible] = useIntersectionObserver();

    return(
        <Fragment>
            <div ref={ref} className={`grid grid-cols-4 gap-4 mr-10 mb-10`}>
            {reviewsData.map((item,index)=>(
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