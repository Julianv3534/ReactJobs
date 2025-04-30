import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Spinner from '../Components/Spinner';

const JobPage = () => {
  const [job ,setJob] = useState(null);
  const [loading,setLoading] = useState(true);
  const {id} = useParams();
  
    useEffect(() => {
        const fetchJobs = async () => {
            try{
                const response = await fetch(`/api/jobs/${id}`);
                const data = await response.json();
                setJob(data);
                }
                catch (error){
                  console.error("Error fetching jobs:", error);
                } 
                finally {
                  setLoading(false);
                }
        }

        fetchJobs();
    }, [])

    return loading ?
    <Spinner/>
    : <h1>{job.title}</h1>
};


export default JobPage