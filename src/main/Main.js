import React from 'react'
import { Route } from 'react-router-dom'
import LoginPage from '../components/login'

function Main() {
  return (
    <div>
      <div>
        <Route exact path="/"  >
            <LoginPage/>
        </Route>
        </div>
        
    </div>
  )
}

export default Main