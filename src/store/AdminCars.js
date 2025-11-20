import { create } from 'zustand';
import axios from 'axios';
import { API_BASE_URL } from '../constants/api';

export const useAdminCarStore = create((set, get) => ({
  cars: [],
  loading: false,
  error: null,

  fetchCars: async () => {
    set({ loading: true, error: null });
    try {
      const token = localStorage.getItem('adminToken');
      const response = await axios.get(`${API_BASE_URL}/admin/cars`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      set({ cars: response.data, loading: false });
    } catch (error) {
      set({ error: error.response?.data?.message || 'Failed to fetch cars', loading: false });
    }
  },

  addCar: async (carData) => {
    set({ loading: true, error: null });
    try {
      const token = localStorage.getItem('adminToken');
      const response = await axios.post(`${API_BASE_URL}/admin/cars`, carData, {
        headers: { Authorization: `Bearer ${token}` }
      });
      set(state => ({ 
        cars: [...state.cars, response.data], 
        loading: false 
      }));
      return { success: true };
    } catch (error) {
      set({ error: error.response?.data?.message || 'Failed to add car', loading: false });
      return { success: false, error: error.response?.data?.message };
    }
  },

  updateCar: async (id, carData) => {
    set({ loading: true, error: null });
    try {
      const token = localStorage.getItem('adminToken');
      const response = await axios.put(`${API_BASE_URL}/admin/cars/${id}`, carData, {
        headers: { Authorization: `Bearer ${token}` }
      });
      set(state => ({
        cars: state.cars.map(car => car._id === id ? response.data : car),
        loading: false
      }));
      return { success: true };
    } catch (error) {
      set({ error: error.response?.data?.message || 'Failed to update car', loading: false });
      return { success: false, error: error.response?.data?.message };
    }
  },

  deleteCar: async (id) => {
    set({ loading: true, error: null });
    try {
      const token = localStorage.getItem('adminToken');
      await axios.delete(`${API_BASE_URL}/admin/cars/${id}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      set(state => ({
        cars: state.cars.filter(car => car._id !== id),
        loading: false
      }));
      return { success: true };
    } catch (error) {
      set({ error: error.response?.data?.message || 'Failed to delete car', loading: false });
      return { success: false, error: error.response?.data?.message };
    }
  }
}));