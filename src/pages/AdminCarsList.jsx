import React, { Fragment, useEffect } from 'react';
import { useCarStore } from '../store/Cars';
import CarCard from '../components/homeCarCard';
import AdminNavigation from '../components/AdminNaviagtion';

export default function AdminCarsList(){
    const {carData,fetchAllCars,loading}=useCarStore();

    useEffect(()=>{
        fetchAllCars();
    },[])

    return(
        <Fragment>
            <div className="bg-white min-h-screen">
                <AdminNavigation />
                <div className="p-8">
                    {loading ? (
                        <div className="text-center text-black">Loading cars...</div>
                    ) : carData && carData.length > 0 ? (
                        <CarCard cars={carData}/>
                    ) : (
                        <div className="text-center text-black">No cars available. Check console for errors.</div>
                    )}
                </div>
            </div>
        </Fragment>
    )
}
