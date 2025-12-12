import React, { Fragment, useEffect, useState } from "react";
import { useCarStore } from "../store/Cars";
import CarModal from "./CarModal";

export default function ManageCar() {
    const { carData, fetchAllCars, delCarById } = useCarStore();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedCar, setSelectedCar] = useState(null);

    useEffect(() => {
        fetchAllCars()
    }, [])

    const delCar = (id) => {
        console.log('Car ID to delete:', id);
        if(window.confirm("Are you sure you want to delete this car?")){
            delCarById(id);
        }
    }

    const handleEditCar = (car) => {
        setSelectedCar(car);
        setIsModalOpen(true);
    }

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedCar(null);
        fetchAllCars(); // Refresh the list
    }

    return (
        <Fragment>
            <div className='flex flex-col bg-white p-8'>
                <div className='flex flex-col'>
                    <h1 className='font-bold text-xl text-[#1F2937C9]'>Manage Cars</h1>
                    <span className='text-gray-500 mt-2'>View all listed cars, update their details, or remove them from the <br />
                        booking platform</span>
                </div>
                <div className="mt-10">
                    <div className="rounded-lg overflow-hidden border border-[#DDE1EE]">
                        <table className="w-full border-collapse">
                        <thead>
                            <tr className="text-left text-[#64748B] font-medium text-sm border-b border-[#DDE1EE] bg-gray-50">
                                <th className="p-4 border-[#DDE1EE] rounded-tl-lg">Car</th>
                                <th className="p-4 border-[#DDE1EE]">Category</th>
                                <th className="p-4 border-[#DDE1EE]">Price</th>
                                <th className="p-4 border-[#DDE1EE]">Status</th>
                                <th className="p-4 rounded-tr-lg">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {carData.map((item,index)=>(
                                <tr key={index} className="text-left text-[#1F2937] font-small text-sm border-b border-[#DDE1EE]">
                                    <td className="p-2  border-[#DDE1EE]">
                                        <div className="flex items-center">
                                            <img src={item.image} alt="car image" className="h-16 w-20 rounded-lg mr-4"/>
                                            <div>
                                                <h1 className="font-small text-sm text-[#1F2937]">{item.name}</h1>
                                                <span className="text-xs text-[#64748B]">  {item.seats} {!isNaN(item.seats) ? "seaters" : ""} • {item.transmission}</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="p-2  border-[#DDE1EE] font-small text-sm text-[#1F2937]">{item.type}</td>
                                    <td className="p-2  border-[#DDE1EE] font-small text-sm text-[#1F2937]">{item.pricePerDay}</td>
                                    <td className="p-2 border-[#DDE1EE] font-small text-sm">{item.booking?<div className="p-1 flex justify-center items-center rounded-xl  bg-[#FFBBBC80]  ">
                                        <h1 className=" text-[#DA282B] text-center">Not Available</h1>
                                    </div>:<div className="p-1 flex justify-center items-center rounded-xl bg-[#BBFFD780]">
                                        <h1 className="text-[#06A764] text-center">Available</h1>
                                    </div>}</td>
                                    <td className="p-2">
                                        <div className="flex gap-2 ml-4">
                                            <button 
                                                onClick={() => handleEditCar(item)}
                                                className="p-1 hover:bg-gray-100 rounded"
                                            >
                                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                                                    <path d="m18.5 2.5 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                                                </svg>
                                            </button>
                                            <button onClick={() => delCar(item.id || item._id)} className="p-1 hover:bg-gray-100 rounded">
                                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                    <polyline points="3,6 5,6 21,6"></polyline>
                                                    <path d="m19,6v14a2,2 0 0,1 -2,2H7a2,2 0 0,1 -2,-2V6m3,0V4a2,2 0 0,1 2,-2h4a2,2 0 0,1 2,2v2"></path>
                                                    <line x1="10" y1="11" x2="10" y2="17"></line>
                                                    <line x1="14" y1="11" x2="14" y2="17"></line>
                                                </svg>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                        </table>
                    </div>
                </div>
                
                <CarModal 
                    isOpen={isModalOpen}
                    onClose={closeModal}
                    carData={selectedCar}
                />
            </div>
        </Fragment>
    )
}