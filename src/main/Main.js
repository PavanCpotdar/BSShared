import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LoginPage from '../components/login/LoginPage'
import ClientPage from '../components/client/ClientPage'
import DashboardPage from '../components/dashboard/DashboardPage'

function Main() {
  return (
    <div>
        <Routes>
          <Route exact path='/' element={<LoginPage />} />
          <Route exact path='/client' element={<ClientPage />} />
          <Route exact path='/dashbord' element={<DashboardPage />} />
        </Routes>
    </div>
  )
}

export default Main