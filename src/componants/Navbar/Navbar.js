import React from "react"
import "../Navbar/Navbar.css"
import zomatobrand from "../Navbar/zomatologo.png"
import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <>
      <div className="background-img">
        {/* <header class="navbar">
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

                </div> */}
        <nav class="navbar navbar-expand-lg ">
          <div class="container-fluid">
            <Link to="/Gettheapp " className="custom-link navbar-brand">
              Get the App
            </Link>
            <button
              class="navbar-toggler bg-light"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon "></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <Link
                    to="/Investor_Relations"
                    className="custom-link nav-link ms-5 "
                    aria-current="page"
                  >
                    Investor Relations
                  </Link>
                </li>
                <li class="nav-item">
                  <Link
                    to="/Add_Restaurant"
                    className="custom-link nav-link ms-5"
                  >
                    Add Restaurant
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to="/Login" className="custom-link  nav-link ms-5">
                    Login
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to="/Signup" className="custom-link nav-link ms-5">
                    Signup
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div class="d-flex justify-content-center">
          <img src={zomatobrand} className="custom-brand-img" alt="..." />
        </div>
        <div class="d-flex justify-content-center">
          <h1 className="custom-h1-navbar text-center dm-serif-text-regular">
            Discover the best food & drinks in Chhindwara
          </h1>
        </div>
        <hr />


        <div class="d-flex justify-content-center">
        <div class="btn-group">
  <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Menu item</a></li>
    <li><a class="dropdown-item" href="#">Menu item</a></li>
    <li><a class="dropdown-item" href="#">Menu item</a></li>
  </ul>
</div>
        <form class="d-flex" role="search">
        <input
          class="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button class="btn btn-outline-success" type="submit">
          Search
        </button>
      </form>
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
