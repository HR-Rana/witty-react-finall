import React from 'react'


import logo from '../../images/logo.png'
import { Link } from 'react-router-dom'





export default function Nav() {
  return (
    <div className='navigation'>
        <div className="logo">
            <img src={logo} alt="logo" />
        </div>
        <div className="navbar">
            <nav>
                <ul className='flex justify-between w-full'>
                    <li><Link to={'/'} >home</Link></li>
                    <li><Link to={'/aobut-us'} >About us</Link></li>
                    <li><Link to={'/services'} >services</Link></li>
                    <li><Link to={'/why-choose'} >why choose us</Link></li>
                    <li><Link to={'/team'} >team</Link></li>
                    <li><Link to={'/contact'} >contact</Link></li>
                </ul>
            </nav>
        </div>
    </div>
  )
}
