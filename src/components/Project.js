import React, { useState } from 'react';
import './Project.css';
import img3 from './image/cap1.jpg';
import img2 from './image/mp2-1.jpg';
import img1 from './image/mp1.jpg';
import logo1 from './image/icons8-facebook-logo-64.png';
import logo2 from './image/icons8-github-64.png';
import logo3 from './image/icons8-linkedin-logo-64.png';
import logo4 from './image/icons8-fb-logo-64.png';
import logo5 from './image/icons8-git-64.png';
import logo6 from './image/icons8-in-logo-64.png';


function Project() {

  const [change, setChange] = useState (false);

  const onMouseOn = () => {
     setChange (true)
  };
 
  const onMouseOut = () => {
     setChange(false)
  };

  return (
    <>
    <div className='card'>

      <div className='proj'>
        <img orientation="top" src={img1} alt='printing shop' className='projImg' />
        <div>
          <h3 className='card-title'>Olivine' Printing Services</h3>
          <h4 className='card-subtitle'>Mini Project 1</h4>
          <p className='card-text'>
          Olivine's Printing Shop offers a versatile range of services, including printing, scanning, laminating, photo printing, mug printing, and t-shirt printing, as well as photocopying. With their comprehensive offerings, Olivine's Printing Shop is your one-stop destination for all your printing and personalization needs.
          </p>
        </div>
      </div>
  
      <div className='proj'>
        <img orientation="top" src={img2} alt='e-konsulta' className='projImg'/>
          <div className='card-body'>
            <h3 className='card-title'>E-Konsulta</h3>
            <h4 className='card-subtitle'>Mini Project 2</h4>
            <p className='card-text'>
            E-Konsulta is a platform committed to redefining pediatric healthcare through a harmonious fusion of technology, empathetic care, and easily accessible resources. Serving as a comprehensive hub, e-Konsulta is the go-to destination where parents and caregivers can discover a wealth of dependable information, connect seamlessly with distinguished pediatric professionals, and partake in personalized consultations that transcend the confines of geography.
            </p>
          </div>
      </div>
      
      <div className='proj'>
        <img orientation="top" src={img3} alt='music shop' className='projImg' />
        <div>
          <h3 className='card-title'>Arellano Music Shop</h3>
          <h4 className='card-subtitle'>Capstone</h4>
          <p className='card-text'>
          Arellano Music Studio is a Band Rehearsal Studio equipped with a basic band set-up in a sound-contained, safe & friendly space for bands to rehearse. Arellano Music Studio also offers one-on-one Music Lessons for Drums, Guitar, Piano, and Voice for both ONLINE and FACE-TO-FACE learning.
          </p>
        </div>
      </div>
    
    </div>
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

export default Project;