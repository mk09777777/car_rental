import React, { useState } from 'react';
import { useAdminStore } from '../store/Admin';
import { useNavigate } from 'react-router-dom';

export default function AdminLogin() {
    const [isSignup, setIsSignup] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });
    const { login, signup, loading, error } = useAdminStore();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const result = isSignup 
            ? await signup(formData)
            : await login({ email: formData.email, password: formData.password });
        
        if (result.success) {
            navigate('/admin/dashboard');
        }
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
            <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-bold text-center mb-6">
                    {isSignup ? 'Admin Signup' : 'Admin Login'}
                </h2>
                
                {error && (
                    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                        {error}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                    {isSignup && (
                        <div>
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                                required={isSignup}
                            />
                        </div>
                    )}
                    
                    <div>
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                            required
                        />
                    </div>
                    
                    <div>
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Password
                        </label>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                            required
                        />
                    </div>
                    
                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 disabled:opacity-50"
                    >
                        {loading ? 'Processing...' : (isSignup ? 'Sign Up' : 'Login')}
                    </button>
                </form>
                
                <div className="text-center mt-4">
                    <button
                        onClick={() => setIsSignup(!isSignup)}
                        className="text-blue-600 hover:underline"
                    >
                        {isSignup ? 'Already have an account? Login' : 'Need an account? Sign Up'}
                    </button>
                </div>
                
                <div className="text-center mt-4">
                    <button
                        onClick={() => navigate('/')}
                        className="text-gray-600 hover:underline"
                    >
                        Back to Home
                    </button>
                </div>
            </div>
        </div>
    );
}