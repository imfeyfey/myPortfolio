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

  // const [change, setChange] = useState (false);

  // const onMouseOn = () => {
  //    setChange (true)
  // };
 
  // const onMouseOut = () => {
  //    setChange(false)
  // };

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
    {/* <footer direction="row">
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
    </footer> */}
    </>
  );
}

export default Homepage;