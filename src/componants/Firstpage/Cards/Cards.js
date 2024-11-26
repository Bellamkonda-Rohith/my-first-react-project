import React from "react";

import "../Cards/Cards.css"
export default function Cards() {

    const card_details = [{
        card_title: "Order Online",
        card_paragraph: "Stay home and order to your doorstep",
        image: "https://b.zmtcdn.com/webFrontend/e5b8785c257af2a7f354f1addaf37e4e1647364814.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*"
    },
    {
        card_title: "Dining",
        card_paragraph: "View the city's favourite dining venues",
        image: "https://b.zmtcdn.com/webFrontend/d026b357feb0d63c997549f6398da8cc1647364915.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*"
    },
    {
        card_title: "Live Events",
        card_paragraph: "Discover India’s best events & concerts",
        image: "https://b.zmtcdn.com/data/o2_assets/371de657644f1b5818fcb5d83387c8c91722851940.png?output-format=webp&fit=around|402:360&crop=402:360;*,*"
    }
    ]


    // const map_card_detaiils = card_details.map(copyofcard_details => {

    //    console.log("copyofcard_details", copyofcard_details);
    // })

    return (
        <>
            <div className="container mt-3">
                <div className="row">
                    {card_details.map((copyofcard_details,index)=>{
                        const {card_title,card_paragraph,image}=copyofcard_details;
                        return(
                            <div className="col-12 col-sm-8  col-md-6 col-lg-4  "key={index}>
                                <div className="card img-cutom-card-fitrst3 ">
                                    <img src={image} className="custom-img-size-firstthree" />

                                    <div className="card-body">
                                        <div className="card-title"><h4>{card_title}</h4></div>
                                        <p>{card_paragraph}</p>

                                    </div>
                                </div>
                            </div>

                        )
                    })}




                    {/* {card_details.map((copyofcard_details => 
                       
                        const{card_title,card_paragraph,image}=copyofcard_details
                        return (
                            <div className="col-12 col-sm- col-md-6 col-lg-4 ">
                                <div className="card img-cutom-card-fitrst3 ">
                                    <img src={image} className="custom-img-size-firstthree" />

                                    <div className="card-body">
                                        <div className="card-title"><h4>{card_title}</h4></div>
                                        <p>{card_paragraph}</p>

                                    </div>
                                </div>
                            </div>
                        )
                    }

                    ))
                    } */}


                </div>
            </div>
        </>
    );
};




