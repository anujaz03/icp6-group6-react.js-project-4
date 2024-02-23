import React from 'react'
import './Food.css';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from'../../Components/Footer/Footer';
import Card from '../Card/Card';
import ImgFood1 from './food (1).jpeg'
import ImgFood2 from './food (2).jpeg'
import ImgFood3 from './food (3).jpeg'
import ImgFood4 from './food(4).jpg'
import ImgFood5 from './food (5).jpeg'
import ImgFood6 from './food (6).jpeg'
import ImgFood7 from './food (7).jpeg'
import ImgFood8 from './food(8).jpeg'
import ImgFood9 from './food (9).jpeg'
import ImgFood10 from './food(10).jpeg'
function Food() {
  return (
    <div>
 <Navbar/>
 <h1 className='A-hading'>Food <span className='A-hading-2'>Menu</span></h1>


        
        <div className='A-card-container'>
        </div>
        
        <h1 className='A-hading-4'>Popular <span className='A-hading-5'>Breakfast</span></h1>
   


      <div className='A-card-container'>


      
 
       <div className='A-break-card'>
       <h1 className='A-hading-3' >Kolahapuri Misal</h1>
       <img className='A-img-3' src={ImgFood2}  />
      <p className='description'>Misal is prepared in part with sprouted lentils and has less water content and a watery, spicy cut or bite.</p>
      
      
      </div>

     <div className='A-break-card'>
     <h1 className='A-hading-3' >Jalebi Fafda</h1>
     <img className='A-img-3' src={ImgFood3}  />
     <p className='description'>Traditionally, fafda and jalebi are the most sought-after sweet and salty combination in Gujarati cuisine.</p>
      
      
      </div>

      <div className='A-break-card'>
      <h1 className='A-hading-3' >Kanda Poha</h1>
     <img className='A-img-3' src={ImgFood1}  />
      <p className='description'>This light breakfast dish became popular in Madhya Pradesh when Indore was captured by the Holkars and Scindias.</p>
      
      </div>
      </div>

<hr/>




     


  
<div className='A-card-container'>
        </div>
        
        <h1 className='A-hading-4'>Special <span className='A-hading-5'>Lunch</span></h1>
   


      <div className='A-card-container'>


      
 
       <div className='A-break-card'>
       <h1 className='A-hading-3' >Dal Makhani </h1>
       <img className='A-img-3' src={ImgFood4}  />
      <p className='description'>Dal makhani is a popular North Indian dish where whole black & red kidney beans are slow cooked with spices, butter & cream.</p>
      
      
      </div>

     <div className='A-break-card'>
     <h1 className='A-hading-3' > Chana Kulcha</h1>
     <img className='A-img-3' src={ImgFood5}  />
     <p className='description'>Chole Kulche is a popular North Indian snack that is made up of boiled chickpeas and spices, served with bread, called Kulche.</p>
      
      
      </div>

      <div className='A-break-card'>
      <h1 className='A-hading-3' > Bengali Aloo Dum</h1>
     <img className='A-img-3' src={ImgFood6}  />
      <p className='description'>This dish features small, whole potatoes cooked in a rich and aromatic gravy, showcasing the essence of Kashmiri cuisine.</p>
      
      </div>
      </div>


<hr/>




<div className='A-card-container'>
        </div>
        
        <h1 className='A-hading-4'>Lovely <span className='A-hading-5'>Dinner</span></h1>
   


      <div className='A-card-container'>


      
 
       <div className='A-break-card'>
       <h1 className='A-hading-3' >Special Veg Thali </h1>
       <img className='A-img-3' src={ImgFood7}  />
      <p className='description'>Full of spices and herbs, an Indian thali can help boost immunity and improve gut and heart health.</p>
      
      
      </div>

     <div className='A-break-card'>
     <h1 className='A-hading-3' > Non-Veg Thali</h1>
     <img className='A-img-3' src={ImgFood8}  />
     <p className='description'>Non-vegetarian foods are beneficial for individuals looking to enhance their muscle health and athletic performance.</p>
      
      
      </div>

      <div className='A-break-card'>
      <h1 className='A-hading-3' >Fried Chicken.</h1>
     <img className='A-img-3' src={ImgFood9}  />
      <p className='description'>The perfect fried chicken is crispy on the outside, with a that contrasts and complements the tender chicken it contains.</p>
      
      </div>
      </div>



<hr/>



<div className='A-card-container'>
        </div>
        
        <h1 className='A-hading-4'>Sweet <span className='A-hading-5'></span></h1>
   


      <div className='A-card-container'>


      
 
       <div className='A-break-card'>
       <h1 className='A-hading-3' >Ice-Cream </h1>
       <img className='A-img-3' src={ImgFood10}  />
      <p className='description'>Ice cream is one of the most commonly loved desserts on this planet. It has a creamy, sweet taste that many people love..</p>
      
      
      </div>

      </div>
     <Footer/>
      </div>

 

     




  )
}

export default Food