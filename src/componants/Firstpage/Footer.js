import React from "react";

  function Footer(){
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-2">
                       
                        <ul className="list-unstyled">
                        <h5 className="fw-bold">AboutMe</h5>
                            {/* <li className="fw-bold list-unstyled">About Zomato</li> */}
                            <li>Who We Are</li>
                            <li>Blog</li>
                            <li>Work With Us</li>
                            <li>Investor Relations</li>
                            <li>Report Fraud</li>
                            <li>Press Kit</li>
                            <li>Contact Us</li>
                        </ul>

                    </div>
                    <div className="col-2">
                        <ul className="list-unstyled ">
                           <h5 className="fw-bold"> Zomaverse</h5>
                            <li>Zomato</li>
                            <li>Blinkit</li>
                            <li>District</li>
                            <li>Feeding India</li>
                            <li>Hyperpure</li>
                            <li>Zomato Live</li>
                            <li>Zomaland</li>
                            <li>Weather Union</li>
                        </ul>

                    </div>
                    <div className="col-2">
                    <ul className="list-unstyled">
                            <li  className="fw-bold list-unstyled">For Restaurants</li>
                            <li>Partner With Us</li>
                            <li>Apps For You</li>
                        </ul>

                    </div>
                    <div className="col-3">
                    <ul className="list-unstyled ">
                            <li  className="fw-bold list-unstyled ms-1">Learn More</li>
                            <li>Privacy</li>
                            <li>Security</li>
                            <li>Terms</li>
                        </ul>

                    </div>
                    <div className="col-3">
                       <li className="fw-bold list-unstyled ms-1">Social Links</li>
                    </div>


                </div>


            </div>
        </>
    );
};
export default Footer;