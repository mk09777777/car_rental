import { create } from 'zustand';
import axios from 'axios';
import { API_BASE_URL } from '../constants/api';

export const useAdminStore = create((set, get) => ({
  admin: null,
  isAuthenticated: false,
  loading: false,
  error: null,

  signup: async (adminData) => {
    set({ loading: true, error: null });
    try {
      const response = await axios.post(`${API_BASE_URL}/admin/signup`, {
        ...adminData,
        role: 'admin'
      });
      set({ 
        admin: response.data.admin, 
        isAuthenticated: true, 
        loading: false 
      });
      localStorage.setItem('adminToken', response.data.token);
      return { success: true };
    } catch (error) {
      set({ error: error.response?.data?.message || 'Signup failed', loading: false });
      return { success: false, error: error.response?.data?.message };
    }
  },

  login: async (credentials) => {
    set({ loading: true, error: null });
    try {
      const response = await axios.post(`${API_BASE_URL}/admin/login`, credentials);
      set({ 
        admin: response.data.admin, 
        isAuthenticated: true, 
        loading: false 
      });
      localStorage.setItem('adminToken', response.data.token);
      return { success: true };
    } catch (error) {
      set({ error: error.response?.data?.message || 'Login failed', loading: false });
      return { success: false, error: error.response?.data?.message };
    }
  },

  logout: () => {
    set({ admin: null, isAuthenticated: false });
    localStorage.removeItem('adminToken');
  },

  checkAuth: () => {
    const token = localStorage.getItem('adminToken');
    if (token) {
      set({ isAuthenticated: true });
    }
  }
}));