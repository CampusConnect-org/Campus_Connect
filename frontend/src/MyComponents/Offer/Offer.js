import React from "react";
import "./Offer.css";
import Footer from "../Footer/Footer";
export const Offer= ()=>{

    return(
    <>
       <div className="offer_heading"> <h1>What We Offer</h1>
      </div>
       <div className="offer_container">
    
      <div className="sub-div">
        <img src={require("./i1.webp")}  />
        <b>Connections</b><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus debitis molestias possimus hic eveniet ad!</p>
      </div>
      <div className="sub-div">
        <img src={require("./i2.webp")} />
        <b>Growth</b><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus debitis molestias possimus hic eveniet ad!</p>
      </div>
     
      <div className="sub-div">
        <img src={require("./i3.webp")}  />
        <b>Guidance</b><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus debitis molestias possimus hic eveniet ad!</p>
      </div>
   
      <div className="sub-div">
        <img src={require("./i4.webp")}/>

        <b>Opportunities</b><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus debitis molestias possimus hic eveniet ad!</p>
      </div>
      </div>




     </>
    );

}
