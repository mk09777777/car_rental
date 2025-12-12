import React, { Fragment, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navigation from "../components/Navigation";
import { useCarStore } from "../store/Cars";

const Title = ({ title, subTitle, align }) => (
  <div className={`text-${align}`}>
    <h1 className="text-3xl font-bold">{title}</h1>
    <p className="text-gray-600 mt-2">{subTitle}</p>
  </div>
);

const CarDetails = () => {
  const { id } = useParams();
  const { selectedCar, loading, error, fetchCarById } = useCarStore();
  const currency = import.meta.env.VITE_CURRENCY || "₹";
  const navigate = useNavigate();

  useEffect(() => {
    if (id) fetchCarById(id);
  }, [id]);

  if (loading) {
    return (
      <div className="px-6 md:px-16 lg:px-24 xl:px-32 mt-16">
        <Title
          title="Car Details"
          subTitle="View full information about this car"
          align="left"
        />
        <p>Loading car details...</p>
      </div>
    );
  }

  if (!selectedCar) {
    return (
      <div className="px-6 md:px-16 lg:px-24 xl:px-32 mt-16">
        <Title
          title="Car Details"
          subTitle="View full information about this car"
          align="left"
        />
        <p className="text-red-500">Car not found.</p>
      </div>
    );
  }

  return (
      <Fragment>
        <div className="bg-white flex flex-col ">
           <Navigation/>
    <div className="px-6 md:px-16 lg:px-24 xl:px-32 mt-16 max-w-7xl">
   

      <div className="mt-1 mb-6">
        <button 
          className="flex items-center gap-2 px-4 py-2 font-medium text-shadow-black mb-2"
          onClick={() => { navigate('/cars'); scrollTo(0,0); }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-5"
            fill="none"
            viewBox="0 0 16 13"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path d="M15 6.5H1M6.5 1L1 6.5L6.5 12" />
          </svg>
          Back
        </button>       
      </div>

      <Title
        title={selectedCar.name}
        subTitle="Detailed specifications and pricing"
        align="left"
      />

      {error && <p className="text-red-500">{error}</p>}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        <div className="rounded-lg overflow-hidden shadow">
          <img
            src={selectedCar.image}
            alt={selectedCar.name}
            className="w-full h-auto object-cover"
          />
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-semibold">
            {selectedCar.name}
          </h2>
          <p className="text-gray-600">
            {selectedCar.type} • {selectedCar.transmission} • {selectedCar.location}
          </p>
          <p className="text-primary text-xl font-bold">
            {currency}{selectedCar.pricePerDay}/day
          </p>

          <div className="mt-4">
            <h3 className="font-semibold text-lg">Specifications</h3>
            <ul className="list-disc list-inside text-gray-600">
              <li>Seats: {selectedCar.seats}</li>
              <li>Fuel-Type: {selectedCar.fuelType}</li>
              <li>Type: {selectedCar.type}</li>
              <li>Transmission: {selectedCar.transmission}</li>
              <li>Location: {selectedCar.location}</li>
            </ul>
          </div>

          <button onClick={() => { navigate('/owner/add-car'); scrollTo(0,0); }} className="mt-6 px-6 py-3 bg-primary text-white bg-blue-700 rounded-full hover:bg-green-600 w-fit">
            Book Now 
          </button>
        </div>
      </div>
    </div>
        </div>
      </Fragment>
  );
};

export default CarDetails;