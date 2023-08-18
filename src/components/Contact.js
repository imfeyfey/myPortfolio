import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

function Contact() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_az0nm3e', 'template_rij73tp', form.current, 'Ib6hKPcq7YVYraY3P')
      .then((result) => {
          console.log(result.text);
          console.log('Message sent!');
      }, (error) => {
          console.log(error.text);
          console.log('Message failed to send.');
      });
      e.target.reset();
  };
  
  return (
    <>
    <div className='contact'>
      <div className='details'>
        <h2>You can contact me here!</h2>
        <p><i class="fa-solid fa-phone"></i>(+63) 995 964 5303</p>
        <p><i class="fa-solid fa-envelope"></i>feyaustria.8@gmail.com</p>
        <p><i class="fa-brands fa-facebook"></i><a href='https://www.facebook.com/imfeyfey7?_rdc=1&_rdr' rel="noopener noreferrer">Facebook Account - Fey fey</a></p>
        <p><i class="fa-brands fa-discord"></i>Username: feyaustria.8</p>
      </div>
      <div className='form' >
        <h2>or you can send me a message here..</h2>
        <form className='form-details' ref={form} onSubmit={sendEmail}>
          <label className='form-label'>Full Name:</label>
          <input
              className='form-input'
              type='text'
              name='name'
              required/>
          <label className='form-label'>Contact Number:</label>
          <input 
              className='form-input'
              type='tel'
              name='number'
              required/>
          <label className='form-label'>Email Address:</label>
          <input 
              className='form-input'
              type='email'
              name='email'
              required/>
          <label className='form-label'>Message:</label>
          <textarea 
              className='message'
              name='message'
              cols={30}
              rows={10}
              required/>
          <button className='submitBtn' type='submit'>Send</button>
        </form>
      </div>
    </div>
    </>
  );
}

export default Contact;