import React, { useState } from 'react';
import './About.css';
import logo1 from './image/icons8-facebook-logo-64.png';
import logo2 from './image/icons8-github-64.png';
import logo3 from './image/icons8-linkedin-logo-64.png';
import logo4 from './image/icons8-fb-logo-64.png';
import logo5 from './image/icons8-git-64.png';
import logo6 from './image/icons8-in-logo-64.png';

function Edu (props) {
  return <li><span className='bold'>{props.name}</span><br/><span className='italic'>{props.course}</span><br/>{props.date}</li>
};

function Cert(props){
  return <li><span className='bold'>{props.course}</span><br/><span className='italic'>{props.company}</span><br/>{props.date}</li>
};

function About() {

  const edu = [
    {name:'KodeGo Bootcamp', course:'Web Development', date:'April 2023-August 2023'},
    {name:'Laguna College', course:'BS Civil Engineering', date:'June 2005-April 2010'}
  ];

  const cert = [
    {course:'Introduction to JavaScript', company:'Sololearn', date:'16 July, 2023'},
    {course:'Introduction to CSS', company:'Sololearn', date:'24 June, 2023', },
    {course:'Introduction to HTML', company:'Sololearn', date:'01 May, 2023'},
    {course:'Tech for Everyone', company:'Sololearn', date:'16 March, 2023'},
    {course:'COSH', company:'PEME Consultancy Inc.', date:'Feb 13-16, 2018'},
    {course:'Career Service Professional Examination', company:'Civil Service Commission', date:'May 3, 2015'}
  ] ;

  const [change, setChange] = useState (false);

 const onMouseOn = () => {
    setChange (true)
 };

 const onMouseOut = () => {
    setChange(false)
 };

  return (
    <>
    <div className='Fey'>
      <section className='about'>
        <h1>About Me</h1>
        <p className='f-name'>Fatima Joy Austria</p>
        <p>I am a dedicated and enthusiastic web developer with a passion for creating dynamic web applications. I have a basic understanding of HTML, CSS, JavaScript, ReactJS, PHP, MySQL, and Laravel. My skills in these languages enable me to create dynamic web applications and excel in both team collaborations and independent work settings. My technical skills and collaborative mindset allow me to contribute effectively to diverse projects, and I am always eager to expand my knowledge and learn more.</p>
      </section>
      <section className='edu'>
        <h2>Education</h2>
        <div className='eduLi'>
          <ul>
            {edu.map((edu) => <Edu name={edu.name} course={edu.course} date={edu.date}/>)}
          </ul>
        </div>
      </section>
      <section className='cert'>
        <h2>Certificates</h2>
        <div className='certLi'>
          <ul>
            {cert.map((cert) => <Cert course={cert.course} company={cert.company} date={cert.date}/>)}
          </ul>
        </div>
      </section>
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

export default About;

