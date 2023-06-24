import React, {useState} from 'react'; 
import "./Listings.css"
import { useEffect } from 'react';
import Listing from './Listing';
import Footer from '../Footer/Footer';
// import {Listing} from "./Listings.js";
import {Openings} from "./Openings.js"
  


const LeftMenu = ({type, setType}) => {
  console.log(type)
  //menu for mobile devices
  
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
  
    const handleItemClick = (n) => {
      console.log(n);
      setType(n);
      setIsOpen(false);
      // Add your custom logic for handling item click here
    };

    //menu for mobile devices



  return (

    <>
    <div className="left_menu_mobile">

    <div className="menu">
      <button className="toggle-btn" onClick={toggleMenu}>
        {isOpen ? <i class="fa-sharp fa-solid fa-xmark"  style={{fontSize:"32px"}}></i> : <i className="fa-solid fa-bars" style={{fontSize:"32px"}}></i>}
      </button>
      {isOpen && (
        <ul className="menu-list">
            
          <li className="menu-item" onClick={handleItemClick} >Home</li>
        <li className="menu-item" onClick={()=>handleItemClick(0)} >Competitions</li>
        <li className="menu-item" onClick={()=>handleItemClick(1)} >Startups</li>
        <li className="menu-item" onClick={()=>handleItemClick(2)} >Explore</li>
        <li className="menu-item" onClick={handleItemClick} >Hackathons</li>
        <li className="menu-item" onClick={handleItemClick} >Case Study</li>

        </ul>
      )}
    </div>

    </div>


{/* menu for mobile devices ends here */}
    <div className="left-menu" >

      <ul className='left-menu-list'>
        <li>Home</li>
        <li>Competitions</li>
        <li>Startups</li>
        <li>Explore</li>
        <li>Hackathons</li>
        <li>Case Study</li>
        {/* Add more options as needed */}
      </ul>
      <ul className='left-menu-other' >
        <b>Other</b>
<li>Code of Conduct</li>
<li>Privacy Policy</li>
      </ul>
    </div>
    </>
  );
};

const MiddleContent = ({type, setType}) => {
  let arr=[ ["comp1", "comp2", "comp3"], ["startup1" ,"startup2", "startup3"], ["explore1","explore2", "explore3"]];

  const [curr, setCurr]=useState(0);

  const [expanded, setExpanded] = useState(false);

  const[open, setOpen]=useState(-1);


  const handleExpand = () => {
      setExpanded(!expanded);
    };
   const handleInquire=(e)=>{
    setOpen(e);
   }
    let newArr=Openings.slice(curr,curr+3);


    //swiper code


const changeCurr=()=>{
  setOpen(-1);
  if(curr+3 < Openings.length)setCurr(curr+3);
}

const prevCurr=()=>{
  setOpen(-1);
  setCurr(Math.max(0,curr-3));
}

const newListing = ()=>{
  window.location.replace('https://wa.me/919113340204');
}
    //swiper code

  return (
    <div className="middle-content" >
      <div className="middle-options">
        <button className='listing-button' id='relevant'>Relevant</button>
        <button
        className='listing-button' id='top'>Top</button>
        <button
        className='listing-button' id='latest'>Latest</button>
      </div>
      <div className="middle-user-input">
        <button id="add-listing-btn" onClick={()=> newListing()}>
        {/* Add any additional elements or functionality for user input */}
        Create your Listing...</button>
        <div className="navigation_btns">
        <i id="prev-listing-button" onClick={prevCurr} className="fa-solid fa-arrow-left nav_btn_arrow"></i>
        <i id="next-listing-button" onClick={changeCurr} className="fa-solid fa-arrow-right nav_btn_arrow"></i>
        </div>
      
        
  
      </div>



      <div className="middle-scrollable-content">
    
    { 
   

    newArr.map((e)=>{
      console.log(e.desc);
       return( 
       
<>
       <div className="your-component">
        <div className="list-image-container">
          <img className="round-image" src="your-image-url.jpg" alt="" />
         
          <div  className='listing-info'>
          <h3 className="list-title">{e.type}</h3>
          <h5 className="list-subtitle">By {e.owner}</h5>
        </div>
        </div>
        <div>
          <p className={`description ${expanded ? 'expanded' : ''} listing-desc`}>
           {e.desc}
          </p>
          <a className="inquire-button" href={e.link} >Inquire</a>
      </div>
      </div>
      </>)
      
      })

     
    
    }



      </div>



    </div>
  );
};

const RightList = () => {
  const links = [
   {
    img:"img",
    title: "Title",
    link: "link"
   },
   {
    img:"img",
    title: "Title",
    link: "link"
   },
   {
    img:"img",
    title: "Title",
    link: "link"
   },
   {
    img:"img",
    title: "Title",
    link: "link"
   },

    // Add more links as needed
  ];

  return (
    <div className="right-list">
        <b>JOIN COMMUNITIES</b>
        <div className='right-box'>
        {links.map((link, index) => (
          
        <div className='comm-link'>
            <div className="comm-img">
    <img src={link.img} alt="" />
    </div>
    <div className='comm-name'>
   <h3>{link.title}</h3>
   <a href={link.link}>Join</a>
    </div>
        </div>

        ))}
      </div>
    </div>
  );
};

const ComplexComponent = () => {
  const [type, setType]=useState(0);
  return ( 
    <>
    <div className="complex-component">
      <div className="triple">
        <LeftMenu  type={type}
        setType={setType}/>
        <MiddleContent type={type}
        setType={setType}
        />
        <RightList />
             
      </div>
    </div>
<Footer/>
    </>
     
  );
};

export default ComplexComponent;
