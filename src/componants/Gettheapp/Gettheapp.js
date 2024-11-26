import React from "react";
import '../Gettheapp/Gettheapp.css'
import zomatophones from "../Gettheapp/zomatophones.png"

import zomatologoblack from '../Gettheapp/zomatologoback.png'
export default function Gettheapp() {
    return (
        <>
            <div class="d-flex justify-content-center">
                <img src={zomatologoblack} className="custom-img-zomatobrandlogo mt-5" />
            </div>

            <div className="container">
                <div className="row">

                    <div className=" col-12 col-sm-6 col-md-6 col-lg-6">
                        <div className="container">
                            <img src={zomatophones} className="custom-img-phones" />
                        </div>

                    </div>

                    <div className="col-12 col-sm- 10 col-md-8 col-lg-6">
                        <div className="container custom-container-getheapp">
                            <h1>Get the Zomato App</h1>
                            <p className="mt-5">We will send you a link, open it on your phone to download the app</p>

                            <div class="container mt-5">
                                <form>
                                    <label>
                                        <input type="radio" name="option" value="option1" />
                                        Email
                                    </label>
                                    
                                    <label className="custom-label">
                                        <input type="radio" name="option" value="option2" />
                                        Phone
                                    </label>
                                    <div className="container custom-contaienr-emailinput">
                                        
                                    <input placeholder="Enter Email or Phone" className="custom-eamiliinput"/>
                                    <button className="custom-linkbutton"> Share App link</button>
                                    </div>

                                </form>




                            </div>
                        </div>
                    </div>

                </div>
            </div>




        </>

    )
}