import React from 'react'
import Boxes from './Boxes/Boxes'
import Dashboard from './Dashboard/Dashboard'
import Calendar from '../Components/Calendar/Calendar'

const Home = () => {
  return (
    <div>
        <Boxes/>
        <Dashboard/>
        <Calendar/>
    </div>
  )
}

export default Home