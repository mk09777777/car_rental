import React, { useState, useEffect } from 'react';
import { useAdminStore } from '../store/Admin';
import { useAdminCarStore } from '../store/AdminCars';
import { useNavigate } from 'react-router-dom';

export default function AdminDashboard() {
    const [showForm, setShowForm] = useState(false);
    const [editingCar, setEditingCar] = useState(null);
    const [formData, setFormData] = useState({
        name: '',
        image: '',
        type: '',
        seats: '',
        pricePerDay: '',
        rating: '',
        fuelType: '',
        transmission: '',
        location: ''
    });

    const { logout, isAuthenticated } = useAdminStore();
    const { cars, fetchCars, addCar, updateCar, deleteCar, loading, error } = useAdminCarStore();
    const navigate = useNavigate();

    useEffect(() => {
        if (!isAuthenticated) {
            navigate('/admin');
            return;
        }
        fetchCars();
    }, [isAuthenticated, navigate, fetchCars]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const result = editingCar 
            ? await updateCar(editingCar._id, formData)
            : await addCar(formData);
        
        if (result && result.success !== false) {
            setShowForm(false);
            setEditingCar(null);
            setFormData({
                name: '',
                image: '',
                type: '',
                seats: '',
                pricePerDay: '',
                rating: '',
                fuelType: '',
                transmission: '',
                location: ''
            });
        }
    };

    const handleEdit = (car) => {
        setEditingCar(car);
        setFormData(car);
        setShowForm(true);
    };

    const handleAddNew = () => {
        setEditingCar(null);
        setFormData({
            name: '',
            image: '',
            type: '',
            seats: '',
            pricePerDay: '',
            rating: '',
            fuelType: '',
            transmission: '',
            location: ''
        });
        setShowForm(true);
    };

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setFormData({
                    ...formData,
                    image: reader.result
                });
            };
            reader.readAsDataURL(file);
        }
    };

    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this car?')) {
            await deleteCar(id);
        }
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="bg-white shadow-sm border-b">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center py-4">
                        <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
                        <button
                            onClick={handleLogout}
                            className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"
                        >
                            Logout
                        </button>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-semibold">Car Management</h2>
                    <button
                        onClick={handleAddNew}
                        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                    >
                        Add New Car
                    </button>
                </div>

                {error && (
                    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                        {error}
                    </div>
                )}

                {showForm && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                        <div className="bg-white p-6 rounded-lg w-full max-w-md max-h-screen overflow-y-auto">
                            <h3 className="text-lg font-bold mb-4">
                                {editingCar ? 'Edit Car' : 'Add New Car'}
                            </h3>
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Car Name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border rounded-lg"
                                    required
                                />
                                <div className="space-y-2">
                                    <label className="block text-sm font-medium text-gray-700">Car Image</label>
                                    <input
                                        type="file"
                                        accept="image/*"
                                        onChange={handleImageUpload}
                                        className="w-full px-3 py-2 border rounded-lg"
                                    />
                                    {formData.image && (
                                        <img src={formData.image} alt="Preview" className="w-20 h-20 object-cover rounded" />
                                    )}
                                </div>
                                <input
                                    type="text"
                                    name="type"
                                    placeholder="Car Type"
                                    value={formData.type}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border rounded-lg"
                                    required
                                />
                                <input
                                    type="text"
                                    name="seats"
                                    placeholder="Seats (e.g., 5 seaters)"
                                    value={formData.seats}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border rounded-lg"
                                    required
                                />
                                <input
                                    type="text"
                                    name="pricePerDay"
                                    placeholder="Price per Day (e.g., $150)"
                                    value={formData.pricePerDay}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border rounded-lg"
                                    required
                                />
                                <input
                                    type="number"
                                    name="rating"
                                    placeholder="Rating (1-5)"
                                    value={formData.rating}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border rounded-lg"
                                    min="1"
                                    max="5"
                                    step="0.1"
                                    required
                                />
                                <input
                                    type="text"
                                    name="fuelType"
                                    placeholder="Fuel Type"
                                    value={formData.fuelType}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border rounded-lg"
                                    required
                                />
                                <input
                                    type="text"
                                    name="transmission"
                                    placeholder="Transmission"
                                    value={formData.transmission}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border rounded-lg"
                                    required
                                />
                                <input
                                    type="text"
                                    name="location"
                                    placeholder="Location"
                                    value={formData.location}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border rounded-lg"
                                    required
                                />
                                <div className="flex space-x-2">
                                    <button
                                        type="submit"
                                        disabled={loading}
                                        className="flex-1 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 disabled:opacity-50"
                                    >
                                        {loading ? 'Saving...' : (editingCar ? 'Update' : 'Add')}
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => {
                                            setShowForm(false);
                                            setEditingCar(null);
                                        }}
                                        className="flex-1 bg-gray-600 text-white py-2 rounded-lg hover:bg-gray-700"
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {cars.map((car) => (
                        <div key={car._id} className="bg-white rounded-lg shadow-lg p-4">
                            <img src={car.image} alt={car.name} className="w-full h-48 object-cover rounded"/>
                            <h3 className="text-lg font-bold mt-2">{car.name}</h3>
                            <p className="text-gray-600">{car.type} • {car.seats}</p>
                            <p className="text-green-600 font-bold">{car.pricePerDay}/day</p>
                            <div className="flex space-x-2 mt-4">
                                <button
                                    onClick={() => handleEdit(car)}
                                    className="flex-1 bg-yellow-600 text-white py-2 rounded hover:bg-yellow-700"
                                >
                                    Edit
                                </button>
                                <button
                                    onClick={() => handleDelete(car._id)}
                                    className="flex-1 bg-red-600 text-white py-2 rounded hover:bg-red-700"
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}