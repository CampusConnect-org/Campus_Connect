import React from "react";
import "./Offer.css";
import Footer from "../Footer/Footer";
export const Offer= ()=>{

    return(
    <>
    <div className="offer_total">
       <div className="offer_heading"> <h1>What We Offer</h1>
      </div>
       <div className="offer_container">
    
      <div className="sub-div">
        <img src={require("./i1.webp")}  />
        <b>Connections</b><p>Expand your horizons and connect with potential co-founders, collaborators, or team members who share your passion and vision</p>
      </div>
      <div className="sub-div">
        <img src={require("./i2.webp")} />
        <b>Matchmaking</b><p>We utilize advanced algorithms to connect you with individuals who complement your skills, interests, and goals</p>
      </div>
     
      <div className="sub-div">
        <img src={require("./i3.webp")}  />
        <b>Collaboration</b><p> we make it easy for you to connect, brainstorm, and work together efficiently</p>
      </div>
   
      <div className="sub-div">
        <img src={require("./i4.webp")}/>

        <b>Holistic Support</b><p> We offer resources, mentorship opportunities, and educational content to support your personal and professional growth.</p>
      </div>
      </div>


      </div>

     </>
    );

}
