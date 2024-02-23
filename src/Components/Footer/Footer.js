 import React from 'react';
import './Footer.css';
import ImgFooter1 from './location.png'
import ImgFooter2 from'./call.png'
import ImgFooter3 from './mail-inbox-app.png'
import ImgFooter4 from'./instagram (1).png'
import ImgFooter5 from './facebook (1).png'
import ImgFooter6 from './youtube.png'
function Future() {
  return (
    <div>
      <div className="footer">
        <div className="main-content">
          <div className="footer1">
            <h2 className="footer-text">Company</h2>
            <a className="footer-detail" href="https://www.com/">About</a><br/>
            <br/>
            <div className="footer-detail">Privacy Policy</div><br/>
            <div className="footer-detail">Terms & Conditions</div><br/>
            <div className="footer-detail">FAQs</div>
            <div className="social">
              <i className="fab fa-facebook"></i>
              <i className="fab fa-instagram"></i>
              <i className="fab fa-linkedin"></i>
              <i className="fab fa-youtube"></i>
            </div>
          </div>

          <div className="center-box">
            <h2 className="footer-text">Opening</h2>
            <div className="content">
              <span className="fas fa-location-dot"></span>
              <span className="text">Monday-Saturday<br/>
                09AM-09PM<br/><br/>
                Sunday <br/>
                10AM-08PM
              </span>
            </div>  
          </div>

          <div className="right-box">
            <h2 className="footer-text">Contact us</h2>
            <div className="location-img">
            <img src={ImgFooter1} height="18px"/>
              <span className="subtitle">307, Kothari Heights, Above Bus<br/>Stand Shrigonda,<br/>A.Nagar - 413701</span>
            </div>
            <br/>
            <div className="phone-img">
              <img src={ImgFooter2} height="18px" alt="Phone"/>
              <span className="subtitle">+91-9922115899</span>
            </div>
            <br/>
            <div className="mail-img">
              <img src={ImgFooter3} height="18px" alt="Mail"/>
              <a href="www.Emai.com">info@email.com</a>
            </div>
            <br/><br/>
            <div className="logos">
              <p><a href="https://www.instagram.com" target="_blank"><img src={ImgFooter4} height="25px" alt="Instagram"/></a></p>
            </div>
            <div className="logos">
              <p><a href="https://www.facebook.com" target="_blank"><img src={ImgFooter5} height="25px" alt="Facebook"/></a></p>
            </div>
            <div className="logos">
              <p><a href="https://www.youtube.com/" target="_blank"><img src={ImgFooter6} height="25px"alt="Youtube"/></a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Future;