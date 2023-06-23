import React from "react";
import "./Option.css";
import {OPTIONS} from "./Option.js"
import Footer from "../Footer/Footer";
import { Link,  useNavigate } from 'react-router-dom';



export const Option = () => {

  
 const navigate = useNavigate();

 const takeTo = (option)=>{
  if(option.heading.toLowerCase()=== "community"){
    window.location.replace('https://wa.me/919108604847');
  }
  if(option.commingSoon) return;

  navigate("../"+ `${option.heading.toLowerCase()}`)
 }
  return (
    <>


     <div className="options_container">
    {  
       
        OPTIONS.map((option)=>{
            return(
               <>
               
        <div className="inner_option " onClick={()=>{
// navigate("../"+ `${option.heading.toLowerCase()}`)
 takeTo(option)
        }
        }>
           <div className="image_body">
         {option.commingSoon && <marquee className="text"> COMING SOON</marquee>
         }
            <img  src={require("./"+option.img)} className="option_img"/>
            
            </div>
           
     
          <span className="option_heading">{option.heading}</span>
            <p className="option_description">{option.desc}</p>
        </div>  

               </>
            )
        })
    }

  
</div>  <Footer/></>
  )
}
