import React from "react";
import '../Explore_options_near_me/Explore_options_near_me.css'

export default function Explore_options_near_me() {
    const Explore_options_near_me_cards = [
        { card_details: "Popular Cuisines Near Me" },
        { card_details: "Popular Restaurant Types Near me" },
        { card_details: "Top Restaurant Chains" },
        { card_details: "Cities We Deliver To" }
    ]
   return( 
   <>
   <div className="container">
   <div className="row mt-5">
   <h2>Explore options near me</h2>
        {Explore_options_near_me_cards.map((copyof_explore_near_me)=>{
            const{card_details}=copyof_explore_near_me
               return(
            <div className="col-12 col-lg-12 col-md-12 col-sm-12">
                
                <div className="card mt-4 px-4 py-4 shadow">
                    <div className="card-title"><h4>{card_details}</h4></div>
                </div>
            </div>
        )
        }
        
     
        )}
    </div>
   </div>
   </>
   )
}