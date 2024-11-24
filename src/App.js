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



import Collections from './componants/Firstpage/Collections/Collections';
import Popular_localities from './componants/Firstpage/Popular_lolalities/Popular_localites';
import Top_trending_places from './componants/Top_trending_places/Top_trending_places';
import Hero_top_trending from './componants/Top_trending_places/Hero_top_trending/Hero_top_trending';
import Cards from '../src/componants/Firstpage/Cards/Cards'
import Footer from './componants/Firstpage/Footer/Footer';
import Explore_options_near_me from '../src/componants/Firstpage/Explore_options_near_me/Explore_options_near_me'

function HomePage() {
  return (
    <>

{/*     
    <Navbar/>
    <Cards/>
   <Collections/>
   <Hero_top_trending/>
   <Top_trending_places/>
    <Popular_localities/>
    <Gettheapp/>
    <Explore_options_near_me/>
    <Footer/> */}


    <Navbar/>
    <Cards/>
    <Collections/>
    <Hero_top_trending/>
    <Top_trending_places/>
    <Popular_localities/>
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

    </>
  );
}

export default App;
