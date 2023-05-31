import React from 'react'
import "./navstyle.css"
const Navbar = () => {
  return (
    <div className='nav1'>
      <div className='logodiv'>
        <span className='jobsearch'><strong>Job</strong>search
        </span>
      </div>
      <div className='nav2'>
        <li className='menu'>Jobs</li>
        <li className='menu'>Companies</li>
        <li className='menu'>About</li>
        <li className='menu'>Contact</li>
        <li className='menu'>Blog</li>
        <li className='menu'>Login</li>
        <li className='menu'>Register</li>
      </div>

    </div>
  )
}

export default Navbar