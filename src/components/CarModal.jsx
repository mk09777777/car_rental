import React, { useState, useRef, useEffect } from 'react';
import { useCarStore } from '../store/Cars';

const CarModal = ({ isOpen, onClose, carData = null }) => {
    const { updateCarById } = useCarStore();
    const fileInputRef = useRef(null);
    
    const [formData, setFormData] = useState({
        name: '',
        image: '',
        type: '',
        seats: '',
        pricePerDay: '',
        fuelType: '',
        transmission: '',
        location: '',
        description: ''
    });

    useEffect(() => {
        if (carData) {
            setFormData({
                name: carData.name || '',
                image: carData.image || '',
                type: carData.type || '',
                seats: carData.seats || '',
                pricePerDay: carData.pricePerDay || '',
                fuelType: carData.fuelType || '',
                transmission: carData.transmission || '',
                location: carData.location || '',
                description: carData.description || ''
            });
        }
    }, [carData, isOpen]);

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleFileUpload = () => {
        fileInputRef.current?.click();
    };

    const onUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setFormData({
                    ...formData,
                    image: e.target.result
                });
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (window.confirm('Are you sure you want to update this car?')) {
            try {
                await updateCarById(carData._id || carData.id, formData);
                onClose();
            } catch (error) {
                console.error('Error updating car:', error);
            }
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-8 max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
                <div className="flex justify-between items-center mb-6">
                    <div>
                        <h1 className="font-bold text-xl text-[#1F2937C9]">
                            Edit Car
                        </h1>
                        <span className="text-gray-500 mt-2">
                            Update car details and specifications
                        </span>
                    </div>
                    <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                <form onSubmit={handleSubmit}>
                    <div className="mb-6">
                        <input 
                            type="file" 
                            ref={fileInputRef} 
                            onChange={onUpload} 
                            accept="image/*" 
                            className="hidden" 
                        />
                        <div className="flex items-center gap-4">
                            <div 
                                className="w-32 h-24 rounded-md flex flex-col justify-center items-center bg-[#F8F8F8] cursor-pointer border-2 border-dashed border-gray-300 hover:bg-gray-100" 
                                onClick={handleFileUpload}
                            >
                                {formData.image ? (
                                    <img src={formData.image} alt="Car" className="w-full h-full object-cover rounded-md" />
                                ) : (
                                    <>
                                        <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                                        </svg>
                                        <h1 className="font-medium text-xs text-gray-400">Upload</h1>
                                    </>
                                )}
                            </div>
                            <span className="text-[#8E9AAB] text-sm font-medium">Upload a picture of your car</span>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-4">
                        <div>
                            <label className="text-sm font-bold text-gray-600 mb-2 block">Car Name</label>
                            <input 
                                type="text" 
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" 
                                placeholder="e.g. BMW X5, Mercedes E-Class..."
                                required
                            />
                        </div>
                        <div>
                            <label className="text-sm font-bold text-gray-600 mb-2 block">Type</label>
                            <input 
                                type="text"
                                name="type"
                                value={formData.type}
                                onChange={handleInputChange}
                                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" 
                                placeholder="e.g. Luxury Sedan, Sports Car..."
                                required
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-4">
                        <div>
                            <label className="text-sm font-bold text-gray-600 mb-2 block">Seats</label>
                            <select 
                                name="seats"
                                value={formData.seats}
                                onChange={handleInputChange}
                                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            >
                                <option value="">Select seating capacity</option>
                                <option value="2">2 Seater</option>
                                <option value="4">4 Seater</option>
                                <option value="5">5 Seater</option>
                                <option value="7">7 Seater</option>
                                <option value="8">8 Seater</option>
                                <option value="9">9 Seater</option>
                            </select>
                        </div>
                        <div>
                            <label className="text-sm font-bold text-gray-600 mb-2 block">Price Per Day</label>
                            <input 
                                type="text"
                                name="pricePerDay"
                                value={formData.pricePerDay}
                                onChange={handleInputChange}
                                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" 
                                placeholder="e.g. $150"
                                required
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-4">
                        <div>
                            <label className="text-sm font-bold text-gray-600 mb-2 block">Fuel Type</label>
                            <select 
                                name="fuelType"
                                value={formData.fuelType}
                                onChange={handleInputChange}
                                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            >
                                <option value="">Select Fuel Type</option>
                                <option value="Petrol">Petrol</option>
                                <option value="Diesel">Diesel</option>
                                <option value="Electric">Electric</option>
                                <option value="Hybrid">Hybrid</option>
                            </select>
                        </div>
                        <div>
                            <label className="text-sm font-bold text-gray-600 mb-2 block">Transmission</label>
                            <select 
                                name="transmission"
                                value={formData.transmission}
                                onChange={handleInputChange}
                                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            >
                                <option value="">Select Transmission</option>
                                <option value="Automatic">Automatic</option>
                                <option value="Manual">Manual</option>
                            </select>
                        </div>
                    </div>

                    <div className="mb-4">
                        <label className="text-sm font-bold text-gray-600 mb-2 block">Location</label>
                        <input 
                            type="text"
                            name="location"
                            value={formData.location}
                            onChange={handleInputChange}
                            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" 
                            placeholder="e.g. New York, Los Angeles..."
                            required
                        />
                    </div>

                    <div className="mb-6">
                        <label className="text-sm font-bold text-gray-600 mb-2 block">Description</label>
                        <textarea 
                            name="description"
                            value={formData.description}
                            onChange={handleInputChange}
                            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" 
                            placeholder="Describe the car features and condition..."
                            rows="3"
                           
                        />
                    </div>

                    <div className="flex gap-4 justify-end">
                        <button 
                            type="button" 
                            onClick={onClose}
                            className="px-6 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                        >
                            Cancel
                        </button>
                        <button 
                            type="submit"
                            className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                        >
                            Update Car
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CarModal;