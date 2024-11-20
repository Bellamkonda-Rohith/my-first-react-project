import React from "react";
import '../Top_trending_places/Top_trending_places.css'

export default function Top_trending_places(){

    const Top_trending_places_details = [
        {
          id: 1,
          image:
            "https://b.zmtcdn.com/data/pictures/0/21058610/4da5ed4a8ca434802df66428603de510.jpg?fit=around|318.75:231.25&crop=318.75:231.25;*,*",
          card_title: "Habitat Cafe",
          card_body: ["Cafe,Coffee, Beverages"],
          location: ["Banjara Hills, Hyderabad"],
        },
        {
          id: 2,
          image:
            "https://b.zmtcdn.com/data/pictures/2/21185972/b4d9481e30245f9d28ea0f80dc8ae261.jpg?fit=around|318.75:231.25&crop=318.75:231.25;*,*",
          card_title: "Habitat Cafe",
          card_body: ["Cafe,Coffee, Beverages"],
          location: ["Banjara Hills, Hyderabad"],
        },
        {
          id: 3,
          image:
            "https://b.zmtcdn.com/data/pictures/5/21240405/722fa206eb593e81ff25986e2a887d64.jpg?fit=around|318.75:231.25&crop=318.75:231.25;*,*",
          card_title: "Habitat Cafe",
          card_body: ["Cafe,Coffee, Beverages"],
          location: ["Banjara Hills, Hyderabad"],
        },
        {
          id: 4,
          image:
            "https://b.zmtcdn.com/data/pictures/0/21424590/d5bbdc74ad3307206d0fbe8b8a04f4a5.jpg?fit=around|318.75:231.25&crop=318.75:231.25;*,*",
          card_title: "Habitat Cafe",
          card_body: ["Cafe,Coffee, Beverages"],
          location: ["Banjara Hills, Hyderabad"],
        },
        {
          id: 5,
          image:
            "https://b.zmtcdn.com/data/pictures/2/21219332/47a4a2c767a3dd6681fff80d4a93f0b2.jpg?fit=around|318.75:231.25&crop=318.75:231.25;*,*",
          card_title: "Habitat Cafe",
          card_body: ["Cafe,Coffee, Beverages"],
          location: ["Banjara Hills, Hyderabad"],
        },
        {
          id: 6,
          image:
           "https://b.zmtcdn.com/data/pictures/3/20997853/89f4695641630befd918924bbdd2a092.jpg?fit=around|318.75:231.25&crop=318.75:231.25;*,*",
          card_title: "Habitat Cafe",
          card_body: ["Cafe,Coffee, Beverages"],
          location: ["Banjara Hills, Hyderabad"],
        },
        {
          id: 7,
          image:
            "https://b.zmtcdn.com/data/pictures/1/21173691/f2215e106d8c07f41914fb6d30f075cb.jpg?fit=around|318.75:231.25&crop=318.75:231.25;*,*",
          card_title: "Habitat Cafe",
          card_body: ["Cafe,Coffee, Beverages"],
          location: ["Banjara Hills, Hyderabad"],
        },
        {
          id: 8,
          image:
            "https://b.zmtcdn.com/data/pictures/3/20598223/25163a0d09e26ec00c2700931a2f55c1.jpg?fit=around|318.75:231.25&crop=318.75:231.25;*,*",
          card_title: "Habitat Cafe",
          card_body: ["Cafe,Coffee, Beverages"],
          location: ["Banjara Hills, Hyderabad"],
        },
      ];
      
    return (
        <>
      <div className="container mt-5">
      <div className="row">
            {Top_trending_places_details.map((copyoftop_trending_places)=>
            (
                <div className="col-3 mt-5">
                   
                    <div className="card rounded custom-images-top-trending ">
                    <img src={copyoftop_trending_places.image} className="rounded" />
                        <div className="card-title ms-2">{copyoftop_trending_places.card_title}</div>
                        {copyoftop_trending_places.card_body.map((copyofitems)=>
                        (
                            <div className="ms-2">{copyofitems}</div>
                        )
                        
                        )}
                        {copyoftop_trending_places.location.map((copyoflocation)=>
                        (
                            <div ><p className="ms-2">{
                                copyoflocation
                            }</p></div>

                        ))}
                       

                       
                    </div>
                </div>
            ))}
        </div>
      </div>
        </>
    )
}