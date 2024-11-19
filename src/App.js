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
import Explore_options_near_me from './componants/Firstpage/Explore_options_near_me';
import Footer from './componants/Firstpage/Footer';
import Cards from './componants/Firstpage/cards';

function HomePage() {
  return (
    <>
    
    <Navbar/>
    <Cards/>
    <Gettheapp/>
    <Explore_options_near_me/>
    <Footer/>
    </>

  );
}


function App() {
  return (
    <>
<BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route path="/Gettheapp" element={<Gettheapp />} />
         <Route path="/Investor_Relations" element={<Investor_Relations />} />
          <Route path="/Add_Restaurant" element={<Add_Restaurant />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
{/* <Cards/> */}

    </>
  );
}

export default App;
