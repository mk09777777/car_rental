src/Store/bookingStore.js
import { create } from "zustand";

export const useBookingStore = create((set) => ({
  bookings: [],
  loading: false,
  error: null,

  fetchBookings: async (userId) => {
    set({ loading: true, error: null });
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/bookings/${userId}`);
      if (!res.ok) throw new Error("Failed to fetch bookings");
      const data = await res.json();
      set({ bookings: data, loading: false });
    } catch (err) {
      set({ bookings: [], loading: false, error: err.message });
    }
  },

  addBooking: (booking) =>
    set((state) => ({ bookings: [...state.bookings, booking] })),

  updateBookingStatus: (id, status) =>
    set((state) => ({
      bookings: state.bookings.map((b) =>
        b._id === id ? { ...b, status } : b
      ),
    })),

  removeBooking: (id) =>
    set((state) => ({
      bookings: state.bookings.filter((b) => b._id !== id),
    })),

  clearBookings: () => set({ bookings: [], error: null }),
}));









// import { create } from "zustand";
// import { dummyMyBookingsData } from "../assets/assets";
// // import { dummyMyBookingsData } from "../data/dummyData"; // keep dummy data separate from assets

// export const useBookingStore = create((set) => ({
//   bookings: dummyMyBookingsData, // initialize with static data
//   loading: false,
//   error: null,

//   // Fetch bookings (API or fallback to dummy data)
//   fetchBookings: async (userId) => {
//     set({ loading: true, error: null });
//     try {
//       const res = await fetch(`${import.meta.env.VITE_API_URL}/bookings/${userId}`);
//       if (!res.ok) throw new Error("Failed to fetch bookings");
//       const data = await res.json();

//       set({
//         bookings: data.length ? data : dummyMyBookingsData,
//         loading: false,
//       });
//     } catch (err) {
//       console.error("Error fetching bookings:", err);
//       set({
//         bookings: dummyMyBookingsData, // fallback to static
//         loading: false,
//         error: err.message,
//       });
//     }
//   },

//   // Add a new booking
//   addBooking: (booking) =>
//     set((state) => ({
//       bookings: [...state.bookings, booking],
//     })),

//   // Update booking status
//   updateBookingStatus: (id, status) =>
//     set((state) => ({
//       bookings: state.bookings.map((b) =>
//         b._id === id ? { ...b, status } : b
//       ),
//     })),

//   // Remove a booking
//   removeBooking: (id) =>
//     set((state) => ({
//       bookings: state.bookings.filter((b) => b._id !== id),
//     })),

//   // Clear all bookings (e.g., on logout)
//   clearBookings: () => set({ bookings: [], error: null }),
// }));