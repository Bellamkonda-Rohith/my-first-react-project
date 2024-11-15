import React from "react";
import Zomatolobo from '../Investor_Relations/zomatologo.png'
import '../Investor_Relations/Investor_Relations.css';
import zomatologo from '../Investor_Relations/zomatologo copy.png';
import hyperpurelogo from '../Investor_Relations/hyperpurelogo.png';
import blinkitlogo from '../Investor_Relations/blinkitlogo.png'
import feedingindialogo from '../Investor_Relations/feedingindailogo.png'
import presentationimg from '../Investor_Relations/presentaionimg.png';
import aroow from '../Investor_Relations/arrowimg.png'
function Investor_Relations() {
   return (
      <>
         <div className="containe-fluid main-container">
            <header className="custom-navbar">

               <div ><img src={Zomatolobo} alt="zomatologo" className="custom-brandlogo" /></div>
               <ul className="custom-navlist">
                  <li className="customlist-items">Investor Relations</li>
                  <li className="customlist-items">Home</li>
                  <li className="customlist-items">Financial</li>
                  <li className="customlist-items">Announcement</li>
                  <li className="customlist-items">Blog</li>
                  <li className="customlist-items">Governence</li>
                  <li className="customlist-items">ESG</li>
                  <li className="customlist-items">Resources</li>

               </ul>

            </header>


            <div className="container">
               <div className="row">
                  <div className="col-7">
                     <h2 className="text-light mt-5">Better food for more people</h2>
                     <div><img src={zomatologo} className="custom-img-logo mt-3" />
                        <img src={hyperpurelogo} className="custom-img-logo mt-3 ms-5" />
                     </div>
                     <hr className="mt-5 custom-hr" />
                     <h2 className="text-light mt-5">Instant commerce indistinguishable from magic</h2>

                     <div><img src={blinkitlogo} className="custom-img-logo mt-5" /></div>
                     <hr className="mt-5 custom-hr" />
                     <h2 className="text-light mt-5">Make India malnutrition free</h2>
                     <div><img src={feedingindialogo} className="custom-img-freedindialogo mt-3 ms-3" /></div>
                  </div>
                  <div className="col-5 bg-light custom-border mt-5">
                     <div class="container text-center ">
                        <div class="row">
                           <div class="col">
                              <h2>Company overview</h2>
                           </div>
                           <div className="row mt-5">
                              <div className="col"><img src={presentationimg} class="img-fluid custom-imgs" alt="..."/></div>
                              <div className="col fs-4">Presentation</div>
                              <div className="col"> <img src={aroow} class="img-fluid  custom-imgs" alt="..."/></div>
                           </div>





                        </div>
                     </div>
                  </div>
                  </div>
               </div>

            </div>
         </>
         )
}
         export default Investor_Relations;