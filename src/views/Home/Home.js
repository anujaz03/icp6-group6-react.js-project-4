import React from 'react';
import './Home.css';
import "../../Components/Navbar/Navbar";
import Navbar from '../../Components/Navbar/Navbar';
import { Link } from 'react-router-dom';
function Home() {
  return (
    
    <div>
       <Navbar />

    <div className='Container'> 
    <p className='sub-container'>Good food choices are <br/>good investment.</p>
    
    <p className='para'>Food is the fuel that keeps us running throughout the day, and it also supports the body’s metabolic process and ensures we remain healthy. Children need to understand the importance of food to build healthy eating habits in the long term.</p>

    <Link to=''className='btn'>Explore more</Link>


    </div>
      

    
   

      
     
      
    </div>
    
  )}

export default Home
