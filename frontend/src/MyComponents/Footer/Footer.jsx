import React from 'react';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: 'black', color: 'white', padding: '8px', textAlign:"center", position:"fixed", bottom:"0", width:"100vw", marginTop:"0px"}}>
      <div style={{padding: "10px"}}>
        {/* Social media icons */}
        <a href="https://example.com/facebook" style={{margin:"10px"}}><i style={{fontSize:"20px", color:"#1095F4"}} className="fab fa-facebook"></i></a>
        <a href="https://example.com/twitter" ><i  style={{fontSize:"20px", color:"#1D9BF0"}} className="fab fa-twitter"></i></a>
        <a href="https://example.com/instagram" style={{margin:"10px"}}><i className="fab fa-instagram" style={{fontSize:"20px", color:"#FF0B6E"}}></i></a>
      </div>
      <div>
        {/* Generic text */}
        <p>&copy; 2023 Campus Connect. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
