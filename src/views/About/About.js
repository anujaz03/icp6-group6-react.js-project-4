import React from 'react'
import './About.css'
import Card from '../Card/Card'
import ImgAbout1 from './about-1.jpg'
import ImgAbout2 from './about-2.jpg'
import ImgAbout3 from './about-3.jpg'
import ImgAbout4 from './about-4.jpg'
import ImgAbout5 from './team-1.jpg'
import ImgAbout6 from './team-2.jpg'
import ImgAbout7 from './team-3.jpg'
import ImgAbout8 from './instagram.png'
import ImgAbout9 from './facebook (1).png'
import ImgAbout10 from './whatsapp (1).png'
import Navbar from '../../Components/Navbar/Navbar'



const DATA= [
  {
      title: "Home Delivery 🚚",
      description:" Home delivery method includes any type of delivery at the consumer's residential or commercial address. As a general rule, customers need to answer the door and receive the goods personally. It implies maximum convenience for buyers in theory — and customer expectations are only growing — but not always in practice"

  },
  { 
      title: "Quality Food 🍔" ,
      description:"What is a good quality food?The Best Diet: Quality Counts | The Nutrition Source ...High-quality foods include unrefined, minimally processed foods such as vegetables and fruits, whole grains, healthy fats and healthy sources of protein – the foods recommended in the Healthy Eating Plate."

  },
 
  { 
      title: "Online Order 🎁",
      description:"What is the most ordered food online? India's love for biryani continues Biryani continued its reign as India's favourite dish. It was the most-ordered dish on Swiggy for the eighth year in a row. India ordered 2.5 biryanis per second in 2023. And leading the charge was one Hyderabad man who ordered 1,633 biryanis this year."

  }
  
]
function About() {
  
  return (
    
    <div>
      <Navbar/>
        <h1 className='A-hading'>-About <span className='A-hading-2'>Us</span>-</h1>
        
        <div className='A-card-container'>

          <div className='A-card'>
          <img className='A-img-2' src={ImgAbout1}  />
          <img className='A-img-1' src={ImgAbout2}  />
          <img className='A-img-1' src={ImgAbout3}  />
          <img className='A-img-2' src={ImgAbout4}  />

          </div>


          <div className='A-card'>
            
            <h1 className='A-hading' >About <span className='A-hading-2'>Us</span></h1>

            <h4 className='A-hading'>Welcome to 🍴 <span className='A-hading-2'>Canteen</span></h4>

            <p className='A-titile'>
A cafeteria, sometimes called a canteen outside the U.S. and Canada, is a type of food service location in which there is little or no waiting staff table service, whether in a restaurant or within an institution such as a large office building or school; a school dining location is also referred to as a dining hall or ...
</p>

<button className='btn'>Explore more</button>
            </div>

        </div>

        <h1 className='A-hading'>-Our <span className='A-hading-2'>service</span>-</h1>

      <div className='A-card-1'>
        
      {
            DATA.map((coursObe, index)=>{
             const {title,price,description}= coursObe;
             return <Card title={title}  description={description} key={index}/>
            })
        }
      </div>

      <h1 className='A-hading'> Our <span className='A-hading-2'>Master Chefs</span>-</h1>


      <div className='A-card-container'>

       <div className='A-chefe-card'>
       <img className='A-img-3' src={ImgAbout5}  />
       <h1 className='A-hading-3' >Nikhil Gadakh</h1>
      <div className='A-itam'>
      <img className='A-img-4' src={ImgAbout8}  />
       <img className='A-img-4' src={ImgAbout9}  />
       <img className='A-img-4' src={ImgAbout10}  />
      </div>

       </div>
       
 
       <div className='A-chefe-card'>
       <img className='A-img-3' src={ImgAbout6}  />
       <h1 className='A-hading-3' >Om Dale</h1>
      <div className='A-itam'>
      <img className='A-img-4' src={ImgAbout8}  />
       <img className='A-img-4' src={ImgAbout9}  />
       <img className='A-img-4' src={ImgAbout10}  />
      </div>
      </div>

     <div className='A-chefe-card'>
     <img className='A-img-3' src={ImgAbout7}  />
       <h1 className='A-hading-3' >Rutik Patil</h1>
      <div className='A-itam'>
      <img className='A-img-4' src={ImgAbout8}  />
       <img className='A-img-4' src={ImgAbout9}  />
       <img className='A-img-4' src={ImgAbout10}  />
      </div>
      </div>

        
      </div>

    </div>
    
  )
}

export default About