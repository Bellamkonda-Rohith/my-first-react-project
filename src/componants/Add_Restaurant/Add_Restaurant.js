import React from "react";
 import zomatologo from '../Add_Restaurant/zomatologoback.png'
import '../Add_Restaurant/Add_Restaurant.css'
import Add_Restaurant_logo from '../Add_Restaurant/addrestaurant.png'
 export default function Add_Restaurant(){
    return(
        <>
        <header>
            <img src={zomatologo} alt="zommatologo" className="custom-logo"/>
        </header>
       {/* <div className="container"> */}
       <div class="d-flex justify-content-center">
            <img src={Add_Restaurant_logo} className="custom-addrestarentlogo"/>
        </div>
        <div class="d-flex justify-content-center">
          <button className="bg-primary custom-buttom mt-4"> Login</button>
        </div>
        <div class="d-flex justify-content-center">
           <button className="custom-buttom mt-3">Register</button>
        </div>
       {/* </div> */}

        </>
    )
}