import React from 'react'
import Hero from '../Components/Hero.jsx'
import Homecards from '../Components/HomeCards.jsx'
import JobListings from '../Components/JobListings.jsx'
import ViewAllJobs from '../Components/ViewAllJobs.jsx'


const HomePage = () => {
  return (
    <>
        <Hero/>
        <Homecards/>
        <JobListings isHome={true}/>
        <ViewAllJobs/>
    </>
  )
}

export default HomePage