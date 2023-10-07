import { useState } from 'react'

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import Landingpage from './components/landingpage/Landingpage';
import Register from './components/register/Register';
import Signin from './components/signin/Signin';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Landingpage />
      <Register />
      <Signin />
    </>
  )
}

export default App
