import { create } from 'zustand';
import axios from 'axios';
import { API_BASE_URL } from '../constants/api';

export const useCarStore = create((set) => ({
  carData: [],
  loading: false,
  error: null,
  
  fetchCars: async () => {
    set({ loading: true, error: null });
    try {
      const response = await axios.get(`${API_BASE_URL}/FeaturedCars`);
      set({ carData: response.data, loading: false });
    } catch (error) {
      set({ error: error.message, loading: false });
      console.error('Error fetching cars:', error);
    }
  },
  


fetchAllCars : async ()=>{
   set({loading:true, error:null});
   try{
    const response = await axios.get(`${API_BASE_URL}/cars`);
    set({carData:response.data,loading:false});
    console.log('Fetched all cars:',response.data);

   } catch(error){
    set({error:error.message,loading:false});
    console.error('Error fetching all cars:',error);
   }}
})
);

