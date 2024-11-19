import React from "react";
import '../Navbar/Navbar.css'
import zomatobrand from '../Navbar/zomatologo.png'
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <>
            <div className="background-img">
                <header class="navbar">
                    <div class="navbar-brand"><Link to="/Gettheapp " className="custom-link" >Get the App</Link></div>
                    <ul class="navbar-menu">
                        <li>< Link to="/Investor_Relations" className="custom-link">Investor Relations</Link></li>
                        <li><Link to="/Add_Restaurant" className="custom-link">Add Restaurant</Link></li>
                        <li><Link to="/Login" className="custom-link">Login</Link>

                        </li>

                        <li><Link to="/Signup" className="custom-link">Signup</Link></li>
                    </ul>
                </header>
                <div class="d-flex justify-content-center">
                    <img src={zomatobrand} className="custom-brand-img" alt="..." />

                </div>
                <div class="d-flex justify-content-center"><h1 className="custom-h1-navbar dm-serif-text-regular">Discover the best food & drinks in Chhindwara</h1></div>
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

            {/* <div class="card custom-card-stayhome rounded-sm">
                <img src="https://b.zmtcdn.com/webFrontend/e5b8785c257af2a7f354f1addaf37e4e1647364814.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*" class="img-fluid custom-img-online rounded-sm" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">Order Online</h5>
                    <p class="card-text">Stay Home order to your doorstep.</p>

                </div>
            </div> */}



        </>




    )
}