import { create } from "zustand";
import axios from 'axios';
import { API_BASE_URL } from '../constants/api';

export const UseReviewStore = create((set)=>({
    reviewsData: [],
    loading:false,
    error:null,
    
    fetchReviews:async()=>{
        try{
            set({loading:true, error:null});
            const response = await axios.get(`${API_BASE_URL}/Reviews`);
            set({reviewsData:response.data, loading:false});
        }catch(error){
            set({error:error.message, loading:false});
            console.error('Error fetching reviews:', error);
        }
    }
}))