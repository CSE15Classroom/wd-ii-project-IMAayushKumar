import React from 'react'
import Home from './pages/Home/Home'
import {Routes,Route} from 'react-router-dom'
import Login from '../src/pages/Login/Login'
import Player from './pages/Player/Player'
import Navbar from './component/Navbar/Navbar'

const App = () => {
  return (
    <div>
      <Navbar />
       <Routes>
        <Route path='/' element={ <Home/>}/>
        <Route path='/login' element={ <Login/>}/>
        <Route path='/player/:id' element={ <Player/>}/>
       </Routes>
      
      
    </div>
  )
}

export default App
