import React from "react";
import '../Navbar/Navbar.css'
import zomatobrand from '../Navbar/zomatologo.png'
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <div className="background-img">
            <header class="navbar">
                <div class="navbar-brand"><Link to="/Gettheapp "className="custom-link" >Get the App</Link></div>
                <ul class="navbar-menu">
                    <li>< Link to="/Investor_Relations" className="custom-link">Investor Relations</Link></li>
                    <li><Link to="/Add_Restaurant" className="custom-link">Add Restaurant</Link></li>
                    <li>Login</li>
                    <li>Signup</li>
                </ul>
            </header>
            <div class="d-flex justify-content-center">
                <img src={zomatobrand} className="custom-brand-img" alt="..." />

            </div>
            <div class="d-flex justify-content-center"><h1 className="custom-h1-navbar">Discover the best food & drinks in Chhindwara</h1></div>
           <div className="container custom-contiainer">
           <div class="d-flex justify-content-center custom-serch-section"><div class="dropdown custom-dropdown">
                <button class="btn custom-button dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Chinnavada
                </button>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Action</a></li>
                    <li><a class="dropdown-item" href="#">Another action</a></li>
                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
            </div>
                <form class="d-flex" role="search">
                    <input class="form-control me-2 custom-input" type="search" placeholder="Search for the Restaurant,cuisine or dish" aria-label="Search" />
                    <button class="btn  btn-outline-success custom-button" type="submit">Search</button>
                </form>


            </div>

           </div>
        </div>
    )
}