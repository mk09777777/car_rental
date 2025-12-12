import React, { Fragment, useEffect } from "react";
import { useCarStore } from "../store/Cars";



export default function ManageCar(){
    const {carData,fetchAllCars} = useCarStore();

    useEffect(()=>{
        fetchAllCars()
    },[])

    return(
        <Fragment>
              <div className='flex flex-col bg-white p-8'>
                <div className='flex flex-col'>
                    <h1 className='font-bold text-xl text-[#1F2937C9]'>Manage Cars</h1>
                    <span className='text-gray-500 mt-2'>View all listed cars, update their details, or remove them from the <br /> 
                    booking platform</span>
                </div>
            </div>
        </Fragment>
    )
}