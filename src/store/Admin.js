import axios from "axios";
import { create } from "zustand";
import { API_BASE_URL } from "../constants/api";


export const useAdminStore = create((set) => ({
    name: localStorage.getItem('name') || "",
    email: localStorage.getItem('email') || "",
    token: localStorage.getItem('token') || "",

    isAuthenticated: localStorage.getItem('isAuthenticated') === 'true',
    password: "",
    loading: false,
    error: null,
    sign: localStorage.getItem('isAuthenticated') === 'true',

    setAdminDetails: (name, email, token, password) => {
        set((state) => ({
            ...state,
            name,
            email,
            token,
            password,
            isAuthenticated: true
        }))
    },  

    AdminSignUp:async(name,email,password)=>{
        set((state) => ({ ...state, loading: true, error: null }));
        try{
            const AdminSignUp = await axios.post(`${API_BASE_URL}/admin/register-admin`,{
                name,
                email,
                password,
                role: 'admin'
            });
            console.log("Admin Signup successful:",AdminSignUp.data);
            set((state) => ({
                ...state,
                loading: false,
                sign: true,
                isAuthenticated: true
            }));
            localStorage.setItem('isAuthenticated', 'true');
            localStorage.setItem('email', email);
            localStorage.setItem('name', name);
        } catch (err) {
            console.error("Error during Admin sign up:", err);
            console.error("Error response:", err.response?.data);
            const errorMessage = err.response?.data?.message || err.message;
            set((state) => ({ ...state, loading: false, error: errorMessage }));
        }
    },
    AdminLogin:async(email,password)=>{
        set((state) => ({ ...state, loading: true, error: null }));
        try{
            const AdminLogin = await axios.post(`${API_BASE_URL}/admin/login-admin`,{
                email,
                password
            });
            console.log("Admin Login successful:",AdminLogin.data);
            set((state) => ({
                ...state,
                loading: false,
                sign: true,
                token: AdminLogin.data.token,
                name: AdminLogin.data.name,
                email: AdminLogin.data.email,
                isAuthenticated: true
            }));
            localStorage.setItem('isAuthenticated', 'true');
            localStorage.setItem('email', AdminLogin.data.email);
            localStorage.setItem('name', AdminLogin.data.name);
            localStorage.setItem('token', AdminLogin.data.token);
        }catch (err) {
            console.error("Error during Admin login:", err);
            console.error("Error response:", err.response?.data);
            const errorMessage = err.response?.data?.message || err.message;
            set((state) => ({ ...state, loading: false, error: errorMessage }));
        }   
    },

    AdminLogout: () => {
        set({
            name: "",
            email: "",
            token: "",
            password: "",
            isAuthenticated: false,
            sign: false,
            loading: false,
            error: null
        });
        localStorage.removeItem('isAuthenticated');
        localStorage.removeItem('email');
        localStorage.removeItem('name');
        localStorage.removeItem('token');
    },

    AddCar: async (carData)=>{
        set((state) => ({ ...state, loading: true, error: null }));
        try{
             {
                const response = await axios.post(`${API_BASE_URL}/addCar`, carData);
                console.log("Car added successfully:", response.data);
                    alert("Car added successfully");
                    set((state) => ({ ...state, loading: false }));
                    console.log("Car added successfully:", response.data);
                return response.data;
            };
        }catch (err) {
            console.error("Error during adding car:", err);
            console.error("Error response:", err.response?.data);
            const errorMessage = err.response?.data?.message || err.message;
            set((state) => ({ ...state, loading: false, error: errorMessage }));
        }
    }
}))