import React from "react";
import '../Collections/Collection.css'

export default function Collections() {

    const colections_imges = [
        {
            card_title: "Top trending spotes",
            card_text: "26 places",
            image_collection:"https://b.zmtcdn.com/data/collections/684397cd092de6a98862220e8cc40aca_1721907131.png"

        },
        {
            card_title: "Newly opened places",
            card_text: "18 places",
            image_collection:"https://b.zmtcdn.com/data/collections/6922d49fb675d0490edb652abf5ca45f_1727171286.png"

        }, {
            card_title: "Beat Buffets in Town",
            card_text: " 8 places",
             image_collection:"https://b.zmtcdn.com/data/collections/4e41758598775d808a8e70d6654df929_1725604011.png"
        },
        {
            card_title: "Best RoofTop Places",
            card_text: "26 places",
             image_collection:"https://b.zmtcdn.com/data/collections/2b9361aa328a43b08986f77bbec280bd_1715844025.png"
        }
    ]
    return (
        <>
         <div className="container  custom-collections-container">
            <h1>Collections</h1>
            <p>Explore curated lists of top restaurants, cafes, pubs, and bars in Hyderabad, based on trends</p>
         <div className="row">
                {colections_imges.map((copyofimages, index) =>
               {
                const {card_title,card_text,image_collection}=copyofimages
                return(<div className="  col-12 col-sm-8 col-md-6 col-lg-3"key={index}>
                    <div class="card bg-dark text-white custom-card-forhover custom-collections-card">
                        <img src={image_collection} class="card-img" alt="..." />
                        <div class="card-img-overlay  text-arrangement">
                            <h5 class="card-title">{card_title}</h5>
                            <p class="card-text">{card_text}</p>

                        </div>
                    </div>

                    </div>
                )
               })}
                </div>
         </div>
               </>
            );

};