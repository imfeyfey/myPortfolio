import React from 'react';
import Typewriter from 'typewriter-effect';
import logo7 from './image/icons8-html-logo-48.png';
import logo8 from './image/icons8-css-logo-48.png';
import logo9 from './image/icons8-javascript-48.png';
import logo10 from './image/icons8-react-48.png';
import logo11 from './image/icons8-php-logo-48.png';
import logo12 from './image/icons8-mysql-logo-48.png';
import logo13 from './image/icons8-laravel-48.png';
import './Homepage.css';
import Footer from './Footer';

function Homepage() {

  return (
    <>
    <div>
      <h1 className='welcome'>Hi! I'm Fatima.</h1>
      <div className='opening'>
        <Typewriter
          options={{
            autoStart: true,
            loop: true,
            delay: 50,
            strings: [
              "I am a web developer.",
              "I've learned HTML.",
              "I've learned CSS.",
              "I've learned JavaScript.",
              "I've learned ReactJs.",
              "I've learned PHP.",
              "I've learned MySQL.",
              "I've learned Laravel.",
            ]
          }}
        />
      </div>
      <div className='logo'>
          <img src={logo7} alt='htmlIcon'/>
          <img src={logo8} alt='cssIcon'/>
          <img src={logo9} alt='jsIcon'/>
          <img src={logo10} alt='reactIcon'/>
          <img src={logo11} alt='phpIcon'/>
          <img src={logo12} alt='mySqlIcon'/>
          <img src={logo13} alt='laravelIcon'/>
        </div>
    </div>
    <Footer />
    </>
  );
}

export default Homepage;