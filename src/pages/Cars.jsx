import React, { Fragment, useEffect } from 'react';
// import { useCarStore } from '../store/Cars';
import CarCard from '../components/homeCarCard';
import Navigation from '../components/Navigation';
import { useCarStore } from '../store/Cars';



export default function CarsList(){
    const {carData,fetchAllCars,loading}=useCarStore();

    useEffect(()=>{
        fetchAllCars();
    },[])

    return(
        <Fragment>
            <div className="bg-white min-h-screen">
                <Navigation />
                <div className="p-8">
                    {loading ? (
                        <div className="text-center text-black">Loading cars...</div>
                    ) : carData.length > 0 ? (
                        <CarCard cars={carData}/>
                    ) : (
                        <div className="text-center text-black">No cars available</div>
                    )}
                </div>
            </div>
        </Fragment>
    )
} 