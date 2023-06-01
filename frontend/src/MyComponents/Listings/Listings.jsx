import React, {useState} from 'react'; 
import "./Listings.css"
import { useEffect } from 'react';

const LeftMenu = () => {
  return (
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
  );
};

const MiddleContent = () => {
  let arr=[1,2,3,4,5,6,7,8,9,10];

  const [curr, setCurr]=useState(0);

    const [expanded, setExpanded] = useState(false);

    const handleExpand = () => {
      setExpanded(!expanded);
    };

    let newArr=arr.slice(curr,curr+3);



    //swiper code


const changeCurr=()=>{
  setCurr(Math.min(curr+3, arr.length-2));
}

const prevCurr=()=>{
  setCurr(Math.max(0,curr-4));
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
        <input id="add-listing-btn" type="text" placeholder="Create your Listing..." />
        {/* Add any additional elements or functionality for user input */}<button id="next-listing-button" onClick={changeCurr}>Next</button>
        <button id="prev-listing-button" onClick={prevCurr}>Prev</button>
      </div>



      <div className="middle-scrollable-content">
    
    { 
   

      newArr.map((e)=>{
     
       return( 
       
       <div className="your-component">
{e}
        <div className="list-image-container">
          <img className="round-image" src="your-image-url.jpg" alt="" />
         
          <div  className='listing-info'>
          <h3 className="list-title">Title</h3>
          <h5 className="list-subtitle">By Somyajeet</h5>
        </div>
        </div>
        <div>
          <p className={`description ${expanded ? 'expanded' : ''} listing-desc`}>
            Lorem ipsum dolor sit amet, cOptioptatem, cumque voluptate nobis ratione aliquid hic? voluptatem repellendus vel iure tempora debitis. In, a? Tempore quos quia atque iusto cum.
            <span className="see-more" onClick={handleExpand}>
              {expanded ? 'See less' : 'See more'}
            </span>
          </p>
          <button className="inquire-button">Inquire</button>
      </div>
      </div>)
      
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
  return (
    <div className="complex-component">
      <div className="triple">
        <LeftMenu />
        <MiddleContent />
        <RightList />
      </div>
    </div>
  );
};

export default ComplexComponent;
