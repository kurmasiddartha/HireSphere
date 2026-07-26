import axios from 'axios';
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { APPLICATION_API_END_POINT } from '../utils/constant';
import { setAllAppliedJobs } from '../redux/jobSlice';

const useGetAppliedJobs = () => {
    const dispatch=useDispatch();
    useEffect(()=>{
        const fetchAppliedJobs=async ()=>{
            try {
                const res=await axios.get(`${APPLICATION_API_END_POINT}/get`,{withCredentials:true})
                // console.log(res.data);
                
                if(res.data.success){
                    dispatch(setAllAppliedJobs(res.data.application)); // here data is stored in the redux store that data is came from the backend
                }
            } catch (error) {
                console.log(error);
                
            }
        }
        fetchAppliedJobs()
    },[])
}

export default useGetAppliedJobs