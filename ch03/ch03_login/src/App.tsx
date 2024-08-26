import React from 'react'
import LoginContainer from './pages/LoginContainer'
import logo from './logo.svg'
import JoinContainer from './pages/JoinContainer'

import {BrowserRouter} from 'react-router-dom'
import RoutesSetup from './routes/RoutesSetup'

function App() {
  return (
    <main className="flex items-center justify-center w-full h-full">
      {/* <LoginContainer /> */}
      {/* <JoinContainer /> */}
      <BrowserRouter>
        <RoutesSetup />
      </BrowserRouter>
    </main>
  )
}

export default App
