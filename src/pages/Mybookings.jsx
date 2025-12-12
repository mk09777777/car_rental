// new code

// import React, { useEffect } from "react";
// import { useBookingStore } from "../store/BookingStore";
// import { assets } from "../assets/Myasset/assets";


// const MyBookings = () => {
  // const { bookings, loading, error, fetchBookings } = useBookingStore();

  // useEffect(() => {
  //   // Replace with logged-in userId from auth/session
  //   fetchBookings("6847f7cab3d8daecdb517095");
  // }, [fetchBookings]);

  // if (loading) return <p>Loading bookings...</p>;
  // if (error) return <p className="text-red-500">{error}</p>;

//   return (
//     <div className="p-6">
//       <h2 className="text-xl font-bold mb-4">My Bookings</h2>
//       {bookings.length === 0 ? (
//         <p>No bookings found.</p>
//       ) : (
//         bookings.map((b) => (
//           <div
//             key={b._id}
//             className="border border-gray-300 rounded-md p-4 mb-4"
//           >
//             <h3 className="font-semibold">
//               {b.car?.name} — <span className="capitalize">{b.status}</span>
//             </h3>
//             <p>
//               {new Date(b.pickupDate).toLocaleDateString()} →{" "}
//               {new Date(b.returnDate).toLocaleDateString()}
//             </p>
//             <p>Total Price: ₹{b.price}</p>
//           </div>
//         ))
//       )}
//     </div>
//   );
// };

// export default MyBookings;


//old 



// import React, { useEffect } from "react";
// import Title from "../pages/Title";
// import { assets } from "../assets/Myasset/assets";
// import { useBookingStore } from "../store/BookingStore";




// const MyBookings = () => {


// //   const { bookings, loading, error, fetchBookings} = use;
// //   const currency = import.meta.env.VITE_CURRENCY || "$";

// //   useEffect(() => {
// //     fetchBookings();
// //     // fetchBookings is stable from Zustand, so no need in deps
// //   }, [fetchBookings]);

// //  // Helper for date formatting
// //   const formatDate = (date) =>
// //     new Date(date).toLocaleDateString("en-IN", {
// //       year: "numeric",
// //       month: "short",
// //       day: "numeric",
// //     });

  
  
// //   // Status styles map
// //   const statusClasses = {
// //     confirmed: "bg-green-400/15 text-green-600",
// //     cancelled: "bg-red-400/15 text-red-600",
// //     pending: "bg-yellow-400/15 text-yellow-600",
// //   };

// //   if (loading) {
// //     return (
// //       <div className="px-6 md:px-16 lg:px-24 xl:px-32 2xl:px-48 mt-16">
// //         <Title
// //           title="My Booking"
// //           subTitle="View and manage all your car bookings"
// //           align="left"
// //         />
// //         <p>Loading bookings...</p>
// //       </div>
// //     );
// //   }


//  const { bookings, loading, error, fetchBookings } = useBookingStore;

//   useEffect(() => {
//     // Replace with logged-in userId from auth/session
//     fetchBookings( );
//   }, [fetchBookings]);

//   if (loading) return <p>Loading bookings...</p>;
//   if (error) return <p className="text-red-500">{error}</p>;


//   return (
//     <div className="px-6 md:px-16 lg:px-24 xl:px-32 2xl:px-48 mt-16 text-sm max-w-7xl">
//       <Title
//         title="My Booking"
//         subTitle="View and manage all your car bookings"
//         align="left"
//       />

//       {error && <p className="text-red-500">{error}</p>}

//       {bookings.length === 0 ? (
//         <p className="mt-6 text-gray-500">You don’t have any bookings yet.</p>
//       ) : (
//         <div>
//           {bookings.map((item, index) => (
//             <div
//               key={item._id || index}
//               className="grid grid-cols-1 md:grid-cols-4 gap-6 p-6 border border-bordercolor rounded-lg mt-5 first:mt-12"
//             >
//               {/* Car Img + Info */}
//               <div className="md:col-span-1">
//                 <div className="rounded-md overflow-hidden mb-3">
//                   <img
//                     src={item.car?.image}
//                     alt={item.car?.name || "Car"}
//                     className="w-full h-auto aspect-video object-cover"
//                   />
//                 </div>
//                 <h2 className="text-lg font-medium mt-2">
//                   {item.car?.name} {item.car?.type}
//                 </h2>
//                 <p className="text-gray-500">
//                   {item.car?.year}. {item.car?.transmission} {item.car?.location}
//                 </p>
//               </div>

//               {/* Booking Info */}
//               <div className="md:col-span-2">
//                 <div className="flex items-center gap-2">
//                   <p className="px-3 py-1.5 bg-light rounded">
//                     Booking #{index + 1}
//                   </p>
//                   <p
//                     className={`px-3 py-1 text-xs rounded-full ${
//                       statusClasses[item.status] || ""
//                     }`}
//                   >
//                     {item.status}
//                   </p>
//                 </div>

//                 <div className="flex items-start gap-2 mt-3">
//                   <img
//                     src={assets.calendar_icon_colored}
//                     alt="Calendar icon"
//                     className="w-4 h-4 mt-1"
//                   />
//                   <div>
//                     <p className="text-gray-500">Rental Period</p>
//                     <p>
//                       {formatDate(item.pickupDate)} To {formatDate(item.returnDate)}
//                     </p>
//                   </div>
//                 </div>
//                          {/* // Pick-up location */}
//                 <div className="flex items-start gap-2 mt-3">
//                   <img
//                     src={assets.location_icon_colored}
//                     alt="Location icon"
//                     className="w-4 h-4 mt-1"
//                   />
//                   <div>
//                     <p className="text-gray-500">Pick-up Location</p>
//                     <p>{item.car?.location}</p>
//                   </div>
//                 </div>
//                            {/* // Return location */}
//                 {/* <div className="flex items-start gap-2 mt-3">
//                   <img
//                     src={assets.location_icon_colored}
//                     alt="Location icon"
//                     className="w-4 h-4 mt-1"
//                   />
//                   <div>
//                     <p className="text-gray-500">return Location</p>
//                     <p>{item.car?.location}</p>
//                   </div>
//                 </div> */}


//               </div>

                  
//               {/* Price */}
//               <div className="md:col-span-1 flex flex-col justify-between gap-6">
//                 <div className="text-sm text-gray-500 text-right">
//                   <p>Total Price</p>
//                   <h1 className="text-2xl font-semibold text-primary">
//                     {currency}
//                     {item.price}
//                   </h1>
//                   <p>Booked on {formatDate(item.createdAt)}</p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default MyBookings;
















// dummyMyBookingsData = [
//     {
//         "_id": "68482bcc98eb9722b7751f70",
//         "car": CarData[0],
//         "user": "6847f7cab3d8daecdb517095",
//         "owner": "6847f7cab3d8daecdb517095",
//         "pickupDate": "2025-06-13T00:00:00.000Z",
//         "returnDate": "2025-06-14T00:00:00.000Z",
//         "status": "confirmed",
//         "price": 440,
//         "createdAt": "2025-06-10T12:57:48.244Z",
//     },
//     {
//         "_id": "68482bb598eb9722b7751f602",
//         "car": CarData[1],
//         "user": "6847f7cab3d8daecdb517095",
//         "owner": "67fe3467ed8a8fe17d0ba6e2",
//         "pickupDate": "2025-06-12T00:00:00.000Z",
//         "returnDate": "2025-06-12T00:00:00.000Z",
//         "status": "pending",
//         "price": 130,
//         "createdAt": "2025-07-10T12:57:25.613Z",
//     },
//     {
//         "_id": "684800fa0fb481c5cfd92e568",
//         "car": CarData[2],
//         "user": "6847f7cab3d8daecdb517095",
//         "owner": "67fe3467ed8a8fe17d0ba6e2",
//         "pickupDate": "2025-06-11T00:00:00.000Z",
//         "returnDate": "2025-06-12T00:00:00.000Z",
//         "status": "pending",
//         "price": 600,
//         "createdAt": "2025-06-10T09:55:06.379Z",
//     },
//     {
//         "_id": "6847fe790fb481c5cfd92d106",
//         "car": CarData[3],
//         "user": "6847f7cab3d8daecdb517095",
//         "owner": "6847f7cab3d8daecdb517095",
//         "pickupDate": "2025-06-11T00:00:00.000Z",
//         "returnDate": "2025-06-12T00:00:00.000Z",
//         "status": "confirmed",
//         "price": 440,
//         "createdAt": "2025-06-10T09:44:25.410Z",
//     },

//     {
//         "_id": "6847fe790fb481c5cfd92d94",
//         "car": CarData[4],
//         "user": "6847f7cab3d8daecdb517095",
//         "owner": "6847f7cab3d8daecdb517095",
//         "pickupDate": "2025-06-11T00:00:00.000Z",
//         "returnDate": "2025-06-12T00:00:00.000Z",
//         "status": "confirmed",
//         "price": 440,
//         "createdAt": "2025-06-10T08:44:25.410Z",
//     },

//     {
//         "_id": "6847fe790fb481c5cfd92d99",
//         "car": CarData[5],
//         "user": "6847f7cab3d8daecdb517095",
//         "owner": "6847f7cab3d8daecdb517095",
//         "pickupDate": "2025-06-11T00:00:00.000Z",
//         "returnDate": "2025-06-12T00:00:00.000Z",
//         "status": "confirmed",
//         "price": 440,
//         "createdAt": "2025-06-14T09:48:25.410Z",
//     },
    
//    {
//         "_id": "6847fe790fb481c5cfd92d999",
//         "car": CarData[7],
//         "user": "6847f7cab3d8daecdb517095",
//         "owner": "6847f7cab3d8daecdb517095",
//         "pickupDate": "2025-06-11T00:00:00.000Z",
//         "returnDate": "2025-06-12T00:00:00.000Z",
//         "status": "confirmed",
//         "price": 160,
//         "createdAt": "2025-06-15T09:44:25.410Z",
//     }
 
    
// ]














// import React, { useEffect } from "react";
// import Title from "../pages/Title";
// import { assets } from "../assets/Myasset/assets";
// import { useBookingStore } from "../store/BookingStore";




// const MyBookings = () => {

//  const { bookings, loading, error, fetchBookings } = useBookingStore();

//   useEffect(() => {
//     // Replace with logged-in userId from auth/session
//     fetchBookings( );
//   }, [fetchBookings]);

//   if (loading) return <p>Loading bookings...</p>;
//   if (error) return <p className="text-red-500">{error}</p>;


//   return (
//     <div className="px-6 md:px-16 lg:px-24 xl:px-32 2xl:px-48 mt-16 text-sm max-w-7xl">
//       <Title
//         title="My Booking"
//         subTitle="View and manage all your car bookings"
//         align="left"
//       />

//       {error && <p className="text-red-500">{error}</p>}

//       {bookings.length === 0 ? (
//         <p className="mt-6 text-gray-500">You don’t have any bookings yet.</p>
//       ) : (
//         <div>
//           {bookings.map((item, index) => (
//             <div
//               key={item._id || index}
//               className="grid grid-cols-1 md:grid-cols-4 gap-6 p-6 border border-bordercolor rounded-lg mt-5 first:mt-12"
//             >
//               {/* Car Img + Info */}
//               <div className="md:col-span-1">
//                 <div className="rounded-md overflow-hidden mb-3">
//                   <img
//                     src={item.car?.image}
//                     alt={item.car?.name || "Car"}
//                     className="w-full h-auto aspect-video object-cover"
//                   />
//                 </div>
//                 <h2 className="text-lg font-medium mt-2">
//                   {item.car?.name} {item.car?.type}
//                 </h2>
//                 <p className="text-gray-500">
//                   {item.car?.year}. {item.car?.transmission} {item.car?.location}
//                 </p>
//               </div>

//               {/* Booking Info */}
//               <div className="md:col-span-2">
//                 <div className="flex items-center gap-2">
//                   <p className="px-3 py-1.5 bg-light rounded">
//                     Booking #{index + 1}
//                   </p>
//                   <p
//                     className={`px-3 py-1 text-xs rounded-full ${
//                       statusClasses[item.status] || ""
//                     }`}
//                   >
//                     {item.status}
//                   </p>
//                 </div>

//                 <div className="flex items-start gap-2 mt-3">
//                   <img
//                     src={assets.calendar_icon_colored}
//                     alt="Calendar icon"
//                     className="w-4 h-4 mt-1"
//                   />
//                   <div>
//                     <p className="text-gray-500">Rental Period</p>
//                     <p>
//                       {formatDate(item.pickupDate)} To {formatDate(item.returnDate)}
//                     </p>
//                   </div>
//                 </div>
//                          {/* // Pick-up location */}
//                 <div className="flex items-start gap-2 mt-3">
//                   <img
//                     src={assets.location_icon_colored}
//                     alt="Location icon"
//                     className="w-4 h-4 mt-1"
//                   />
//                   <div>
//                     <p className="text-gray-500">Pick-up Location</p>
//                     <p>{item.car?.location}</p>
//                   </div>
//                 </div>
//                            {/* // Return location */}
//                 {/* <div className="flex items-start gap-2 mt-3">
//                   <img
//                     src={assets.location_icon_colored}
//                     alt="Location icon"
//                     className="w-4 h-4 mt-1"
//                   />
//                   <div>
//                     <p className="text-gray-500">return Location</p>
//                     <p>{item.car?.location}</p>
//                   </div>
//                 </div> */}


//               </div>

                  
//               {/* Price */}
//               <div className="md:col-span-1 flex flex-col justify-between gap-6">
//                 <div className="text-sm text-gray-500 text-right">
//                   <p>Total Price</p>
//                   <h1 className="text-2xl font-semibold text-primary">
//                     {currency}
//                     {item.price}
//                   </h1>
//                   <p>Booked on {formatDate(item.createdAt)}</p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default MyBookings;








import React from 'react'

const Mybookings = () => {
  return (
    <div>Mybookings</div>
  )
}

export default Mybookings