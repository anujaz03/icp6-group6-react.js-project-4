import React from 'react'
import './Contact.css'
function Contact() {
  return (
    <div className="App">
      <div className="container">
        <h2>Contact Us</h2>
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

          <input type="submit" value="Submit" />      
            </form>
      </div>
      </div>
   

  );
}

export default Contact;
