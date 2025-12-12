import React, { Fragment, useState, useRef } from "react";
import { useAdminStore } from "../store/Admin";



export default function AdminAddCar() {
    const [Brand,setBrand]=useState('');
    const [Model,setModel]=useState('');
    const [Year,setYear]=useState('');
    const [DailyPrice,setDailyPrice]=useState('');
    const [Category,setCategory]=useState('');
    const [Transmission,setTransmission]=useState('');
    const [FuelType,setFuelType]=useState('');
    const [SeatingCapacity,setSeatingCapacity]=useState('');
    const [Location,setLocation]=useState('');
    const [Description,setDescription]=useState('');
    const [Image,setImage]=useState('');
    const {AddCar}= useAdminStore();


const fileInputRef = useRef(null);

const handleFileUpload = () => {
    fileInputRef.current.click();
};

const OnUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            setImage(reader.result); // This creates a data URL that can be stored in DB
        };
    }
};


const SubmitCar = ()=>{
    // Validate all required fields
    if (!Brand || !Model || !Image || !Category || !SeatingCapacity || !DailyPrice || !FuelType || !Transmission || !Location) {
        alert('Please fill all the required fields');
        return;
    }

    const Data = {
        name: Brand + " " + Model,
        image: Image,
        type: Category,
        seats: SeatingCapacity,
        pricePerDay: DailyPrice,
        fuelType: FuelType,
        transmission: Transmission,
        location: Location,
        description: Description || ''
    }
    try {
        AddCar(Data);
     alert("Car added successfully"); 
        setBrand('');
        setModel('');
        setYear('');
        setDailyPrice('');
        setCategory('');
        setTransmission('');
        setFuelType('');
        setSeatingCapacity('');
        setLocation('');
        setDescription('');
        setImage('');
    } catch(err) {
        console.log(err);
    }
}

    return(
        <Fragment>
              <div className='flex flex-col bg-white p-8'>
                <div className='flex flex-col'>
                    <h1 className='font-bold text-xl text-[#1F2937C9]'>Add New Car</h1>
                    <span className='text-gray-500 mt-2'>Fill in details to list a new car for booking, including pricing, availability,<br /> and car specifications</span>
                </div>
                <div className="mt-10 flex flex-row item-center ">
                    <input 
                        type="file" 
                        ref={fileInputRef} 
                        onChange={OnUpload} 
                        accept="image/*" 
                        className="hidden" 
                    />
                    <div className="w-32 h-24 rounded-md flex flex-col justify-center items-center bg-[#F8F8F8] cursor-pointer" onClick={handleFileUpload} style={{border:1,borderStyle:"dashed",borderColor:"gray"}}>
                        {Image ? (
                            <img src={Image} alt="Uploaded car" className="w-full h-full object-cover rounded-md" />
                        ) : (
                            <>
                                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                                </svg>
                                <h1 className="font-medium text-[0.7rem] text-gray-400">Upload</h1>
                            </>
                        )}
                    </div>
                    <h1 className="mt-5 text-[#8E9AAB] text-sm  font-medium  ml-4">Upload a picture of your car</h1>
                </div>
                <div className="mt-8 flex flex-col">
                    <div className="flex flex-row mr-80 justify-between">
                        <div className="flex flex-col flex-1 mr-4">
                            <label className="text-sm font-bold text-gray-600 mb-2">Car Brand</label>
                            <input type="text" 
                            value={Brand}
                            onChange={(e)=>setBrand(e.target.value)}
                            className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="e.g. BMW, Mercedes, Audi..." color="#64748B8C"/>
                        </div>
                        <div className="flex flex-col flex-1 ml-4">
                            <label className="text-sm font-bold text-gray-600 mb-2">Model</label>
                            <input type="text"
                            value={Model}
                            onChange={(e)=>setModel(e.target.value)}
                            className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="e.g. X5, E-Class, M4..." color="#64748B8C"/>
                        </div>
                    </div>
                     <div className="flex flex-row mt-6 mr-80 justify-between">
                        <div className="flex flex-col flex-1 mr-4">
                            <label className="text-sm font-bold text-gray-600 mb-2">Year</label>
                            <input type="date"
                            value={Year}
                            onChange={(e)=>setYear(e.target.value)}
                            className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="e.g. BMW, Mercedes, Audi..." color="#64748B8C"/>
                        </div>
                        <div className="flex flex-col flex-1 ml-4">
                            <label className="text-sm font-bold text-gray-600 mb-2">Daily Price ($)</label>
                            <input type="number"
                            value={DailyPrice}
                            onChange={(e)=>setDailyPrice(e.target.value)}
                            className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="100" color="#64748B8C"/>
                        </div>
                          <div className="flex flex-col flex-1 ml-4">
                            <label className="text-sm font-bold text-gray-600 mb-2">Category</label>
                            <input type="text"
                            value={Category}
                            onChange={(e)=>setCategory(e.target.value)}
                            className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Sedon" color="#64748B8C"/>
                        </div>
                    </div>
                       <div className="flex flex-row mt-6 mr-80 justify-between">
                        <div className="flex flex-col flex-1 ">
                            <label className="text-sm font-bold text-gray-600 mb-2">Transmisson</label>
                            <input type="text"
                            value={Transmission}
                            onChange={(e)=>setTransmission(e.target.value)}
                            className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Automatic" color="#64748B8C"/>
                        </div>
                        <div className="flex flex-col flex-1 ml-4">
                            <label className="text-sm font-bold text-gray-600 mb-2">Fuel Type</label>
                            <input type="text"
                            value={FuelType}
                            onChange={(e)=>setFuelType(e.target.value)}
                            className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Disel" color="#64748B8C"/>
                        </div>
                          <div className="flex flex-col flex-1 ml-4">
                            <label className="text-sm font-bold text-gray-600 mb-2">Seating Capacity</label>
                            <select 
                            value={SeatingCapacity}
                            onChange={(e)=>setSeatingCapacity(e.target.value)}
                            className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                                <option value="">Select seating capacity</option>
                                <option value="2">2 Seater</option>
                                <option value="4">4 Seater</option>
                                <option value="5">5 Seater</option>
                                <option value="7">7 Seater</option>
                                <option value="8">8 Seater</option>
                                <option value="9">9 Seater</option>
                            </select>
                        </div>
                    </div>
                     <div className="flex flex-row mt-6 mr-80 justify-between">
                           <div className="flex flex-col flex-1 ">
                            <label className="text-sm font-bold text-gray-600 mb-2">Location</label>
                            <input type="text" 
                            value={Location}
                            onChange={(e)=>setLocation(e.target.value)}
                            className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Location eg. San Francisco, CA" color="#64748B8C"/>
                        </div>
                     </div>
                      <div className="flex flex-row mt-6 mr-80 justify-between">
                           <div className="flex flex-col flex-1 ">
                            <label className="text-sm font-bold text-gray-600 mb-2">Description</label>
                            <textarea
                            value={Description}
                            onChange={(e)=>setDescription(e.target.value)}
                            className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 h-24 resize-none" placeholder="Describe the car features, condition, and any special amenities..."></textarea>
                        </div>
                     </div>

                   
                </div>
                  <button onClick={SubmitCar} className="bg-[#2563EB] text-white px-8 py-2 rounded-md mt-6 w-fit">List Your Car</button>
                </div>
        </Fragment>
    )
}