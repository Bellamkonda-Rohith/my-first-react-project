import logo from './logo.svg';
import React from 'react';
import './App.css';
import Navbar from './componants/Navbar/Navbar';
import Gettheapp from '../src/componants/Gettheapp/Gettheapp'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Investor_Relations from './componants/Investor_Relations/Investor_Relations';
import Add_Restaurant from './componants/Add_Restaurant/Add_Restaurant';
import Login from '../src/componants/Login/Login';
import Signup from './componants/Signup/Signup';

function App() {
  return (
   <>
   <BrowserRouter>

  <Routes>
    <Route path="/" element={<Navbar/>}/>
    <Route path="/Gettheapp" element={<Gettheapp/>}/>
    <Route path="/Investor_Relations" element={<Investor_Relations/>}/>
    <Route path="/Add_Restaurant" element={<Add_Restaurant/>}/>
    <Route path="/Login" element={<Login/>}/>
    <Route path="/Signup" element={<Signup/>}/>
  </Routes>
   </BrowserRouter> 
    
  
   </>
  );
}

export default App;
