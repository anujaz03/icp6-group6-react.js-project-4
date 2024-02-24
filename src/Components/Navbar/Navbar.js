import React from 'react'
import './Navbar.css'
import { Link } from "react-router-dom";

function Navbar() {
  return (
    
    <nav className='Nav-Bar'>
      <div className='Nav-item'>
      <p className='nav-title'>FOODDIEES</p>
      </div>
      <div  className='Nav-item'>
        <span className='nav-elem'><Link to='/' className='item'>Home</Link></span>&nbsp;
        <span className='nav-elem'><Link to='/about' className='item'>About</Link></span>&nbsp;
        <span className='nav-elem'><Link to='/food' className='item'>Food</Link></span>&nbsp;
        <span className='nav-elem'><Link to='/contact' className='item'>Contact</Link></span>&nbsp;
        <span className='nav-elem'><Link to='/feeback' className='item'>Feedback</Link></span>&nbsp; 
         <span className='nav-elem'><Link to='/categories' className='item'>Categories</Link></span>&nbsp;
         <span className='nav-elem'><Link to='/login' className='item'>Login</Link></span>&nbsp;
         <span className='nav-elem'><Link to='/login' className='item'>Meal</Link></span>&nbsp;

         
         
      </div>
      
      
    
  </nav>

);}

export default Navbar