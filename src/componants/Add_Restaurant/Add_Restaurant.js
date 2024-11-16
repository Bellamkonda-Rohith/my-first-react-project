import React from "react";
import zomatologo from '../Add_Restaurant/zomatologoback.png'
import '../Add_Restaurant/Add_Restaurant.css'
import Add_Restaurant_background from '../Add_Restaurant/Add_a_restaurant.avif'
export default function Add_Restaurant() {
    return (
        <>
        <div className="background-img-for-add-restaurent ">


        <img src={Add_Restaurant_background}class="img-fluid custom-addrestarunt-img" alt="restarund"/>
        <header>
                <h1 className="text-center h1-customposition1 kanit-extrabold">Partner with Zomato</h1>
                <h1 className="text-center  h1-customposition2 kanit-extrabold">and grow your business</h1>
                <p className="text-center p-customposition3">0% commission for the 1st month
                    for new restaurant partners in selected cities
                </p>
                <buttom className="btn  custom-buttom-register-restaurant">
                    Register Your Restaurant
                </buttom>
            </header>
        </div>
            
       

        

        </>
    )
}