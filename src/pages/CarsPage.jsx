import React, { useState } from 'react';
import CarCard from '../components/homeCarCard';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SearchBar from '../components/SearchBar';
import { useCarStore } from '../store/Cars';

export default function CarsPage() {
    const { fetchAllCars, filterCars } = useCarStore();
    
    const handleSearch = (query) => {
        filterCars(query);
    };
    
    return (
        <div className="min-h-screen bg-gray-50">
            <Navigation headerColor={"#414141"} />
            <div className="container mx-auto px-4 py-8">
          
                <SearchBar onSearch={handleSearch} placeholder="Search by name, brand, model, or type..." />
                <CarCard fetchFunction={fetchAllCars} />
            </div>
            <Footer />
        </div>
    );
}