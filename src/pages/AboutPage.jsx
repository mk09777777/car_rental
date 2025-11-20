import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            <Navigation headerColor={"#414141"} />
            <div className="container mx-auto px-4 py-8">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-5xl font-bold text-center mb-8 text-[#414141]">About GoMiles</h1>
                    
                    <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
                        <h2 className="text-3xl font-bold mb-4 text-[#414141]">Our Story</h2>
                        <p className="text-gray-600 text-lg leading-relaxed mb-6">
                            GoMiles was founded with a simple mission: to make premium car rentals accessible to everyone. 
                            We believe that your journey should be as exceptional as your destination, which is why we offer 
                            a curated selection of luxury and premium vehicles for every occasion.
                        </p>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            From business trips to weekend getaways, our fleet of meticulously maintained vehicles ensures 
                            you travel in comfort, style, and safety.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 mb-8">
                        <div className="bg-white rounded-xl shadow-lg p-6">
                            <h3 className="text-2xl font-bold mb-4 text-[#414141]">Our Mission</h3>
                            <p className="text-gray-600 leading-relaxed">
                                To provide exceptional car rental experiences through premium vehicles, 
                                outstanding customer service, and innovative technology solutions.
                            </p>
                        </div>
                        
                        <div className="bg-white rounded-xl shadow-lg p-6">
                            <h3 className="text-2xl font-bold mb-4 text-[#414141]">Our Vision</h3>
                            <p className="text-gray-600 leading-relaxed">
                                To become the leading premium car rental service, setting new standards 
                                for quality, reliability, and customer satisfaction in the industry.
                            </p>
                        </div>
                    </div>

                    <div className="bg-white rounded-xl shadow-lg p-8">
                        <h2 className="text-3xl font-bold mb-6 text-[#414141]">Why Choose GoMiles?</h2>
                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="text-center">
                                <div className="text-4xl mb-4">🚗</div>
                                <h4 className="text-xl font-bold mb-2 text-[#414141]">Premium Fleet</h4>
                                <p className="text-gray-600">Luxury and premium vehicles from top brands</p>
                            </div>
                            
                            <div className="text-center">
                                <div className="text-4xl mb-4">⭐</div>
                                <h4 className="text-xl font-bold mb-2 text-[#414141]">5-Star Service</h4>
                                <p className="text-gray-600">Exceptional customer service and support</p>
                            </div>
                            
                            <div className="text-center">
                                <div className="text-4xl mb-4">🔒</div>
                                <h4 className="text-xl font-bold mb-2 text-[#414141]">Safe & Secure</h4>
                                <p className="text-gray-600">Fully insured and regularly maintained vehicles</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}