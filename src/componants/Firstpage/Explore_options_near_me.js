import React from "react";
import '../Firstpage/Explore_options_near_me.css'

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
   <div className="row">
        {Explore_options_near_me_cards.map((copyof_explore_near_me)=>
        (
            <div className="col-12">
                <div className="card mt-4 px-4 py-4 shadow-lg">
                    <div className="card-title"><h4>{copyof_explore_near_me.card_details}</h4></div>
                </div>
            </div>
        )
        )}
    </div>
   </div>
   </>
   )
}