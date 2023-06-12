import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Createusers from './Components/Createusers'
import Edituser from './Components/Edituser'
import Homecrud from './Components/Homecrud'
import User from './Components/User'
function App() {
  return(
    <div>
        <BrowserRouter>
        <Homecrud/>
            <Routes>
                <Route path='/' element={<Createusers/>}/>
                <Route path='/Users' element={<User/>}/>
                <Route path='/edit/:index' element={<Edituser/>}/>
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App