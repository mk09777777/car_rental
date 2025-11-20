import { create } from 'zustand';
import axios from 'axios';
import { API_BASE_URL } from '../constants/api';

export const useCarStore = create((set, get) => ({
  carData: [],
  allCars: [],
  loading: false,
  error: null,
  
  fetchCars: async () => {
    set({ loading: true, error: null });
    try {
      const response = await axios.get(`${API_BASE_URL}/FeaturedCars`);
      set({ carData: response.data, allCars: response.data, loading: false });
    } catch (error) {
      set({ error: error.message, loading: false });
      console.error('Error fetching cars:', error);
    }
  },
  
  fetchAllCars: async () => {
    set({ loading: true, error: null });
    try {
      const response = await axios.get(`${API_BASE_URL}/cars`);
      set({ carData: response.data, allCars: response.data, loading: false });
    } catch (error) {
      set({ error: error.message, loading: false });
      console.error('Error fetching all cars:', error);
    }
  },
  
  filterCars: (query) => {
    const { allCars } = get();
    if (!query.trim()) {
      set({ carData: allCars });
      return;
    }
    
    const filtered = allCars.filter(car => 
      car.name?.toLowerCase().includes(query.toLowerCase()) ||
      car.brand?.toLowerCase().includes(query.toLowerCase()) ||
      car.model?.toLowerCase().includes(query.toLowerCase()) ||
      car.type?.toLowerCase().includes(query.toLowerCase())
    );
    set({ carData: filtered });
  }
  
}));

