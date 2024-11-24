import React from "react";



function Footer() {
  const footerlist = [
    {
      heading: "About Zomato",
      list: [
        "Who We Are",
        "Blog",
        "Work With Us",
        "Investor Relations",
        "Report Fraud",
        "Press Kit",
        "Contact Us",
      ],
    },
    {
      heading: "Zomaverse",
      list: [
        "Zomato",
        "Blinkit",
        "District",
        "Feeding India",
        "Hyperpure",
        "Zomato Live",
        "Zomaland",
        "Weather Union",
      ],
    },
    {
      heading: "For Restaurants",
      list: ["Partner With Us", "Apps For You"],
    },
    {
      heading: "Learn More",
      list: ["Privacy", "Security", "Terms"],
    },
    {
      heading: "Socialmedia",
      list: ["Linkedin", "Facebook", "Instagram"],
    },
  ];


  return (
    <div className="container-fluid mt-5">
      <div className="row">
        <div className="container">
          <h1 className="ms-5">Zomato</h1>
        </div>
        {footerlist.map((copyoffooterlist, index) =>{ 
          const {heading,list}=copyoffooterlist
          return(
          <div className="    col-12 col-sm-6 col-md-4 col-lg-2 mb-4 ms-4 mt-5 shadow-none" key={index}>
            <div className="card border-0 shadow-sm ms-4">
              <div className="card-title  text-dark border-0">
                <h5>{heading}</h5>
              </div>
             
             
              <ul className="list-unstyled list-group card-body">
                {copyoffooterlist.list.map((copyoflistinsidethelist, i) =>
                (
                  <li className="mt-2">{(copyoflistinsidethelist)}</li>
                )
                )}
              </ul>
            </div>
          </div>
        )})}
      </div>
    </div>
  );
}



export default Footer;