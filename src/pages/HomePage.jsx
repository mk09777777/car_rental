import React, { Fragment } from "react"
import Navigation from "../components/Navigation"
import Home1 from "../components/Home1"
import Home2 from "../components/Home2"
import CarCard from "../components/homeCarCard"



function HomePage() {
  return (
    <Fragment>
      <div className="mb-10">
        <Navigation />

      <Home1 />
      <div className="mt-10 bg-white w-full flex flex-col">
        <div className="flex flex-col justify-center items-center ">
          <h1 className="text-5xl font-bold text-[#414141]">Featured Vehicles</h1>
          <span className="text-md mt-4 font-medium text-[#414141]">Browse our selection of premium vehicles available for your next adventure</span>
        </div>
        <div className="ml-10 mt-10">
          <CarCard />
        </div>
        <div className="flex flex-col justify-center items-center ">
          <button className="bg-white hover:border-[#BCC5DE80] hover:scale-105 transition-transform border border-[#BCC5DE80] border-1 text-[#414141] px-4  py-2 rounded-md ml-10 mt-10">
            <span className="text-[#414141] ">Explore all cars ➜ </span>
          </button>
        </div>
      </div>
      <Home2 />
      </div>
    </Fragment>
  )
}

export default HomePage