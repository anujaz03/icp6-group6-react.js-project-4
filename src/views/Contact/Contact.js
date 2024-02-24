import React from 'react'
import './Contact.css'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer'

function Contact() {
  return (

    <div>
      <Navbar/>
      <h1 className='A-hadingg'>-Contact <span className='A-hadingg-2'>Us</span>-</h1>
    <div className="App">
      <div className="container">

  
        <form>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="text" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows="4" required></textarea>
          </div>
          <input type="submit" value="Submit" />     
            </form>
      </div>
      </div>
      <Footer/>
      </div>
  );
}

export default Contact;
