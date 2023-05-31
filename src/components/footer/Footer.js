import React from 'react'
import "./footstyle.css"
import {AiFillInstagram, AiOutlineTwitter} from 'react-icons/ai';
import {BsFacebook} from 'react-icons/bs';
const Footer = () => {
  return (
    <div className='footer'>
      <div>
        <div className='logodiv'>
          <div className='logo'><strong>Job</strong>search</div>
        </div>
        <p className='para'>We always make our seekers and companies find the best jobs and employers find the best candidates.</p>
      </div>

      <div className='grid'>
        <span className='companykk'>Company</span>
        <div className='grid1'>
          <li className='listfooter'>About Us</li>
          <li className='listfooter'>Features</li>
          <li className='listfooter'>News</li>
          <li className='listfooter'>FAQ</li>
        </div>

      </div>
      
      <div className='grid'>
        <span className='companykk'>Resources</span>
        <div className='grid1'>
          <li className='listfooter'>Account</li>
          <li className='listfooter'>Support Center</li>
          <li className='listfooter'>Feedback</li>
          <li className='listfooter'>Contact US</li>
        </div>

      </div>

      <div className='grid'>
        <span className='companykk'>Support</span>
        <div className='grid1'>
          <li className='listfooter'>Events</li>
          <li className='listfooter'>Promo</li>
          <li className='listfooter'>Req Demo</li>
          <li className='listfooter'>Careers</li>
        </div>

      </div>

      <div className='grid'>
        <span className='contact'>Contact Info</span>
        <div>
          <small className='email'>parbat.chhetri79@gmail.com</small>
          <div className='icons'>
          <AiFillInstagram className="insta"/>
                <BsFacebook className="insta"/>
                <AiOutlineTwitter className="insta" />

         

          </div>
        </div>

      </div>

      

    </div>

    
    
    
  )
}

export default Footer