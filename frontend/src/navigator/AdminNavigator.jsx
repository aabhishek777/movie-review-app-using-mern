import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from '../components/admin/Dashboard'
import Actors from '../components/admin/Actors'
import Movies from '../components/admin/Movies'
import Navbar from '../components/admin/Navbar'

const AdminNavigator = () => {
  return (
    <div className='flex text-white '>
      <Navbar />
      <div className="flex p-5 w-full">
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/actors' element={<Actors />} />
          <Route path='/movies' element={<Movies />} />
        </Routes>
      </div>
    </div>
  )
}

export default AdminNavigator
