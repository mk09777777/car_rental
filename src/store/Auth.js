import { create } from 'zustand';
import axios from "axios";
import { API_BASE_URL } from "../constants/api";

export const useAuthStore = create((set) => ({
    name: localStorage.getItem('name') || "",
    email: localStorage.getItem('email') || "",
    token: localStorage.getItem('token') || "",
    isAuthenticated: localStorage.getItem('isAuthenticated') === 'true',
    password: "",
    loading: false,
    error: null,
    sign: localStorage.getItem('isAuthenticated') === 'true',
    setAuthDetails: (name, email, token, password) => {
        set((state) => ({
            ...state,
            name,
            email,
            token,
            password,
            isAuthenticated: true
        }))
    },
    SignUp: async (name, email, password) => {
        set((state) => ({ ...state, loading: true, error: null }));
        try {
            const signup = await axios.post(`${API_BASE_URL}/auth/register`, {
                name,
                email,
                password
            });
            console.log("Signup successful:", signup.data);

            set((state) => ({ ...state, loading: false, sign: true, isAuthenticated: true }));
            localStorage.setItem('isAuthenticated', 'true');
            localStorage.setItem('email', email);
            localStorage.setItem('name', name);
        } catch (err) {
            console.error("Error during sign up:", err);
            console.error("Error response:", err.response?.data);
            const errorMessage = err.response?.data?.message || err.message;
            set((state) => ({ ...state, loading: false, error: errorMessage }));
        }
    },
    login: async (email, password) => {
        set((state) => ({ ...state, loading: true, error: null }));
        try {
            const login = await axios.post(`${API_BASE_URL}/auth/login`, {
                email,
                password
            });
            console.log("Login successful:", login.data);
            set((state) => ({
                ...state,
                loading: false,
                sign: true,
                token: login.data.token,
                email: email,
                isAuthenticated: true
            }));
            localStorage.setItem('isAuthenticated', 'true');
            localStorage.setItem('email', email);
            localStorage.setItem('token', login.data.token);
        } catch (err) {
            console.error("Error during login:", err);
            console.error("Error response:", err.response?.data);
            const errorMessage = err.response?.data?.message || err.message;
            set((state) => ({ ...state, loading: false, error: errorMessage }));
        }
    },

    googleLogin: async (tokenId) => {
        set((state) => ({ ...state, loading: true, error: null }));
        try {
            const googlLogin = await axios.post(`${API_BASE_URL}/auth/google-login`, {
                tokenId
            });
            console.log("Google Login successful:", googlLogin.data);
            set((state) => ({
                ...state,
                loading: false,
                sign: true,
                token: googlLogin.data.token,
                email: googlLogin.data.email,
                isAuthenticated: true
            }));
            localStorage.setItem('isAuthenticated', 'true');
            localStorage.setItem('token', googlLogin.data.token);
            if (googlLogin.data.email) localStorage.setItem('email', googlLogin.data.email);


        } catch (err) {
            console.error("Error during Google login:", err);
            console.error("Error response:", err.response?.data);
            const errorMessage = err.response?.data?.message || err.message;
            set((state) => ({ ...state, loading: false, error: errorMessage }));
        }

    },
    googleSignUp: async (name, email, tokenId) => {
        set((state) => ({ ...state, loading: true, error: null }));
        try {
            const googleSignup = await axios.post(`${API_BASE_URL}/auth/google-signup`, {
                tokenId
            });
            console.log("Google Signup successful:", googleSignup.data);
            set((state) => ({
                ...state,
                loading: false,
                sign: true,
                token: googleSignup.data.token,
                email: email,
                name: name,
                isAuthenticated: true
            }));
            localStorage.setItem('isAuthenticated', 'true');
            localStorage.setItem('token', googleSignup.data.token);
            if (email) localStorage.setItem('email', email);
            if (name) localStorage.setItem('name', name);
        } catch (err) {
            console.error("Error during Google signup:", err);
            console.error("Error response:", err.response?.data);
            const errorMessage = err.response?.data?.message || err.message;
            set((state) => ({ ...state, loading: false, error: errorMessage }));
        }
    },
    logout:async () => {
        localStorage.removeItem('isAuthenticated');
        localStorage.removeItem('token');
        localStorage.removeItem('email');
        localStorage.removeItem('name');
        set({
            name: "",
            email: "",
            token: "",
            isAuthenticated: false,
            sign: false,
            loading: false,
            error: null,
            password: ""
        });
         try
    {
        const handleLogout = await axios.post(`${API_BASE_URL}/auth/logout`);
        console.log("Logout successful:", handleLogout.data);
    }
    catch(err)
    {       
        console.log("Logout error:", err);
    
    }
    }
}));