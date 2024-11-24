import React from "react";

import '../Popular_lolalities/Popular_localities.css'
export default function Popular_localities() {

    const popular_localities = [
        {
            location: "jubliee Hills",
            places_count: "424 places"
        },
        {
            location: "Gachibowil",
            places_count: "823 places"
        },
        {
            location: "Hitech City",
            places_count: "398 places"
        },
        {
            location: "Madhapur",
            places_count: " 890 places"
        },
        {
            location: "Kukatpalliy",
            places_count: "1506 places"
        },
        {
            location: "Begampet",
            places_count: "162 places"
        },{
            location: "Kondapur",
            places_count: " 890 places"
        },
        {
            location: "Banjarahills",
            places_count: "1506 places"
        },
        {
            location: "Seermore",
            places_count: ""
        }
    ]
    return (
        <>
            <div className="container mt-5">
                <div><h1> Popular localities in and around Hyderead</h1></div>
                <div className="row">
                {popular_localities.map((copyofpopular_localities, index) =>
                (
                    <div className="   col-12 col-sm-10 col-md-6 col-lg-4 mt-2 custom-width" key={index}>
                        <div className="card custom-card-width shadow">
                            
                            <div className="card-body">
                            <h5>{copyofpopular_localities.location}</h5> 

                                <p>{copyofpopular_localities.places_count}</p></div>
                        </div>
                    </div>
                    
                ))}
                </div>
              
                <div></div>
            </div>



        </>
    );
};