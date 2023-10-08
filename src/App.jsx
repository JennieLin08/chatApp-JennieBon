import { useState } from 'react'

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import Landingpage from './components/landingpage/Landingpage';
import Register from './components/register/Register';
import Signin from './components/signin/Signin';
import Home from './components/home/Home';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

function App() {


  return (
    <>

      <BrowserRouter>
      <Routes>
        <Route path="/landingpage" element={<Landingpage />}/>
        <Route path="/signin" element={<Signin />}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/home" element={<Home />}/>
        <Route path="*" element={<Navigate to="/landingpage"  />} />
      </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
