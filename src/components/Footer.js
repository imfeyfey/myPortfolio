import React, { useState } from 'react';
import logo1 from './image/icons8-facebook-logo-64.png';
import logo2 from './image/icons8-github-64.png';
import logo3 from './image/icons8-linkedin-logo-64.png';
import logo4 from './image/icons8-fb-logo-64.png';
import logo5 from './image/icons8-git-64.png';
import logo6 from './image/icons8-in-logo-64.png';
import './Footer.css';


function Footer() {
 const [change, setChange] = useState (false);

 const onMouseOn = () => {
    setChange (true)
 };

 const onMouseOut = () => {
    setChange(false)
 };

  return (
    <>
    <footer direction="row">
      <div className='f-logo'>
        <a href='https://www.facebook.com/imfeyfey7?_rdc=1&_rdr' rel="noopener noreferrer" onMouseOver={onMouseOn} onMouseLeave={onMouseOut}>
          {change ? <img src={logo4} alt='fbIcon'/> : <img src={logo1} alt='fbIcon'/>} 
        </a>
        <a href='https://github.com/imfeyfey' rel="noopener noreferrer" onMouseOver={onMouseOn} onMouseLeave={onMouseOut}>
          {change ? <img src={logo5} alt='gitHubIcon'/> : <img src={logo2} alt='gitHubIcon'/>}
        </a>
        <a href='https://www.linkedin.com/in/fatima-joy-austria' rel="noopener noreferrer" onMouseOver={onMouseOn} onMouseLeave={onMouseOut}>
          {change ? <img src={logo6} alt='linkedInIcon'/> : <img src={logo3} alt='linkedInIcon'/>}
        </a>
      </div>
      <div className='f-copy'>
        <h5>FATIMA JOY AUSTRIA 	&#169; 2023</h5>
      </div>
    </footer>
    </>
  );
}


export default Footer;