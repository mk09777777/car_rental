import { create } from 'zustand';
import axios from 'axios';
import { API_BASE_URL } from '../constants/api';

export const useCarStore = create((set) => ({
  carData: [],
  loading: false,
  error: null,
  selectedCar: null,
  
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
   }},

fetchCarById: async(id)=>{
  set({loading:true,error:null})
  try{
    const response = await axios.get(`${API_BASE_URL}/cars/${id}`);
    set({selectedCar:response.data,loading:false});
    console.log("fetchedCarDetails",response.data)
  } catch(error){
    set({loading:false,error:error.message});
    console.error('error in getting car details:',error);
  }
},


delCarById: async(id)=>{
set({loading:true, error:null})
try{
  console.log('Deleting car with ID:', id);
  const response = await axios.delete(`${API_BASE_URL}/deleteCar/${id}`);
  console.log("car deleted successfully", response.data);
  // Refresh the car list after deletion
  const { fetchAllCars } = useCarStore.getState();
  await fetchAllCars();
  set({loading:false});
}catch(error){
  set({loading:false, error:error.message});
  console.error('error in deleting car:',error);
}
},


updateCarById: async(id,updatedCarData)=>{
  set({loading:true, error:null})
  try{
    const response = await axios.put(`${API_BASE_URL}/updateCar/${id}`, updatedCarData);  
    set({loading:false});
    console.log("car updated successfully", response.data);
  }catch(error){
    set({loading:false, error:error.message});
    console.error('error in updating car:', error); 
  }
}
})
);

