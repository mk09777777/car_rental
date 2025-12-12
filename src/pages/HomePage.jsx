import React, { Fragment, useEffect, useState } from "react"

import Home1 from "../components/Home1"
import Home2 from "../components/Home2"
import CarCard from "../components/homeCarCard"
import ReviewCard from "../components/ReviewCard"
import { useIntersectionObserver } from "../hooks/useIntersectionObserver"
import Footer from "../components/Footer"
import { CarProvider, useCarContext } from "../context/CarContext.jsx"
import axios from "axios"
import { useCarStore } from "../store/Cars.js"
import { useNavigate } from "react-router-dom"




function HomePageContent() {
  const [featuredRef, featuredVisible] = useIntersectionObserver();
  const [reviewRef, reviewVisible] = useIntersectionObserver();
 const {carData,fetchCars}=useCarStore();
 const navigate = useNavigate()

 useEffect(()=>{
  fetchCars();
 },[fetchCars])


  return (
    <Fragment>

        <Home1 />
      <div ref={featuredRef} className={`mt-20 bg-white overflow-hidden w-full flex flex-col transition-all duration-800 ease-out ${featuredVisible ? 'animate-slide-up' : ''}`}>
        <div className="flex flex-col justify-center items-center ">
          <h1 className="text-5xl font-bold text-[#414141]">Featured Vehicles</h1>
          <span className="text-md mt-4 font-medium text-[#414141]">Browse our selection of premium vehicles available for your next adventure</span>
        </div>
        <div className="ml-10 mt-10">
          <CarCard cars={carData} />
        </div>
        <div className="flex flex-col justify-center items-center ">
          <button onClick={()=>navigate("/carsList")} className=" hover:border-[#BCC5DE80]  bg-white hover:scale-105 transition-transform border border-[#BCC5DE80] border-1 text-[#414141] px-4  py-2 rounded-md ml-10 mt-10">
            <span className="text-[#414141] ">Explore all cars ➜ </span>
          </button>
        </div>
      </div>
     <div className="mt-40">
       <Home2 />
      </div>
        <div ref={reviewRef} className={`mt-40 bg-white overflow-hidden w-full flex flex-col transition-all duration-800 ease-out ${reviewVisible ? 'animate-slide-up' : ''}`}>
        <div className="flex flex-col justify-center items-center ">
          <h1 className="text-5xl font-bold text-[#414141]">What Our Customers Say</h1>
      <div className="flex justify-center items-center" >
            <span className="text-md mt-4 text-center text-[#414141]">Discover why discerning travelers choose StayVenture for their luxury accommodations<br/> around the world.</span>
      </div>
        </div>
        <div className="ml-10 mt-10">
          <ReviewCard />
        </div>
    
      </div>
       <div ref={reviewRef} className={`mt-10 bg-white  overflow-hidden w-full flex flex-col transition-all duration-800 ease-out ${reviewVisible ? 'animate-slide-up' : ''}`}>
        <Footer/>
      </div>
    
    </Fragment>
  )
}

function HomePage() {
  return (
    <CarProvider>
      <HomePageContent />
    </CarProvider>
  );
}

export default HomePage