import React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import './Navbar.css';
import { NavLink } from 'react-router-dom';

function Navbar() {
  
  return (
    <>
    <div className='navbar'>
      <Stack spacing={2} direction="row" className='nav-menu'>
        <NavLink to='/'><Button variant='text'>Home</Button></NavLink>
        <NavLink to='/about'><Button variant='text'>About Me</Button></NavLink>
        <NavLink to='/project'><Button variant='text'>Projects</Button></NavLink>
        <NavLink to='/contact'><Button variant='text'>Contact Me</Button></NavLink>
        <NavLink><Button variant='outlined'>Resume</Button></NavLink>
      </Stack>
    </div>
    </>
  );
}

export default Navbar;