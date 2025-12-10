import React, { Fragment, useEffect } from "react";
import axios from "axios";
import { useCarStore } from '../store/Cars';
import { motion } from 'framer-motion';


export default function CarCard({ cars }){
  

    // const carData=[{
    //     id:1,
    //     name:"Mercedes-Benz S-Class",
    //     image:"/car1.png",
    //     type:"Luxury Sedan",
    //     seats:"5 seaters",
    //     pricePerDay:"$150",
    //     rating:4.8,
    //     fuelType:"Petrol",
    //     transmission:"Automatic",
    //     location:"New York"
    // },{
//         id:2,
//         name:"BMW 7 Series",
//         image:"/car1.png",
//         type:"Executive Sedan",
//         seats:"5 seaters",
//         pricePerDay:"$140",
//         rating:4.7,
//         fuelType:"Hybrid",
//         transmission:"Automatic",
//         location:"Los Angeles"
//     },{
//         id:3,
//         name:"Audi A8",
//         image:"/car1.png",
//         type:"Luxury Sedan",
//         seats:"5 seaters",
//         pricePerDay:"$135",
//         rating:4.6,
//         fuelType:"Petrol",
//         transmission:"Automatic",
//         location:"Chicago"
//     },{
//         id:4,
//         name:"Porsche Panamera",
//         image:"/car1.png",
//         type:"Sports Sedan",
//         seats:"4 seaters",
//         pricePerDay:"$180",
//         rating:4.9,
//         fuelType:"Petrol",
//         transmission:"Automatic",
//         location:"Miami"
//     },
// //{
//     //     id:5,
//     //     name:"Lexus LS",
//     //     image:"/cars/lexus_ls.jpg",
//     //     type:"Luxury Sedan",
//     //     seats:"5 seaters",
//     //     pricePerDay:"$130",
//     //     rating:4.5,
//     //     fuelType:"Hybrid",
//     //     transmission:"Automatic",
//     //     location:"San Francisco"
//     // },{
//     //     id:6,
//     //     name:"Bentley Continental GT",
//     //     image:"/cars/bentley_continental.jpg",
//     //     type:"Luxury Coupe",
//     //     seats:"4 seaters",
//     //     pricePerDay:"$250",
//     //     rating:4.9,
//     //     fuelType:"Petrol",
//     //     transmission:"Automatic",
//     //     location:"Las Vegas"
//     // },{
//     //     id:7,
//     //     name:"Rolls-Royce Ghost",
//     //     image:"/cars/rolls_royce_ghost.jpg",
//     //     type:"Ultra Luxury",
//     //     seats:"5 seaters",
//     //     pricePerDay:"$350",
//     //     rating:5.0,
//     //     fuelType:"Petrol",
//     //     transmission:"Automatic",
//     //     location:"Beverly Hills"
//     // },{
//     //     id:8,
//     //     name:"Tesla Model S",
//     //     image:"/cars/tesla_model_s.jpg",
//     //     type:"Electric Sedan",
//     //     seats:"5 seaters",
//     //     pricePerDay:"$120",
//     //     rating:4.7,
//     //     fuelType:"Electric",
//     //     transmission:"Automatic",
//     //     location:"Seattle"
//     // },{
//     //     id:9,
//     //     name:"Jaguar XJ",
//     //     image:"/cars/jaguar_xj.jpg",
//     //     type:"Luxury Sedan",
//     //     seats:"5 seaters",
//     //     pricePerDay:"$145",
//     //     rating:4.6,
//     //     fuelType:"Petrol",
//     //     transmission:"Automatic",
//     //     location:"Boston"
//     // }
//     ]
    return(
        <div className="grid  grid-cols-4 gap-4 mr-10">
            {cars.map((item,index)=>(
                <div className="flex hover:scale-105 transition-transform duration-300 bg-white flex-col shadow-lg rounded-xl p-4" key={index}>
                <motion.img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-48 object-cover rounded"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                />
                <h1 className="mt-5 text-black text-lg font-bold">
                    {item.name}
                </h1>
                <div className="flex flex-row mt-5 justify-between">
                    <span className="text-gray-600">
                        {item.type}
                    </span>
                    <span className="text-gray-600">
                        {item.seats}
                    </span>
                </div>
                 <div className="flex flex-row mt-5 justify-between">
                    <span className="text-gray-600">
                        {item.transmission}
                    </span>
                    <span className="font-bold text-green-600">
                        {item.pricePerDay}/day
                    </span>
                </div>
            </div>
            ))}
        </div>
    )
}