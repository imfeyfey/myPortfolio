import React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import './Navbar.css';
import { NavLink } from 'react-router-dom';

const PNG_FILE_URL = 'http://localhost:3000/FATIMA_JOY_AUSTRIA.pdf'

function Navbar() {
  
  const downloadFileAtURL = (url) => {
    const fileName = url.split('/').pop();
    const aTag = document.createElement('a');
    aTag.href=url;
    aTag.setAttribute('download',fileName);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  }
  return (
    <>
    <div className='navbar'>
      <Stack spacing={2} direction="row" className='nav-menu'>
        <NavLink to='/'><Button variant='text'>Home</Button></NavLink>
        <NavLink to='/about'><Button variant='text'>About Me</Button></NavLink>
        <NavLink to='/project'><Button variant='text'>Projects</Button></NavLink>
        <NavLink to='/contact'><Button variant='text'>Contact Me</Button></NavLink>
        <NavLink to='/resume'><Button variant='outlined' onClick={()=>{downloadFileAtURL(PNG_FILE_URL)}}>Resume</Button></NavLink>
      </Stack>
    </div>
    </>
  );
}

export default Navbar;