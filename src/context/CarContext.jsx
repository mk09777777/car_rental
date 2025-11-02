import React, { createContext, useContext, useState } from 'react';

const CarContext = createContext();

export const useCarContext = () => {
    const context = useContext(CarContext);
    if (!context) {
        throw new Error('useCarContext must be used within a CarProvider');
    }
    return context;
};

export const CarProvider = ({ children }) => {
    const [selectedCarColor, setSelectedCarColor] = useState('#353B38');

    return (
        <CarContext.Provider value={{ selectedCarColor, setSelectedCarColor }}>
            {children}
        </CarContext.Provider>
    );
};