import React from 'react'


import logo from '../../images/logo.png'
import { Link, NavLink } from 'react-router-dom'

import Headroom from 'react-headroom'



export default function Nav() {
  return (
    <Headroom>
        <div className='navigation'> 
            <div className="logo">
                <img src={logo} alt="logo" />
            </div>
            <div className="navbar">
                <nav>
                    <ul className='flex justify-between w-full'>
                        <li><NavLink to={'/'} >home</NavLink></li>
                        <li><NavLink to={'/aobut-us'} >About us</NavLink></li>
                        <li><NavLink to={'/services'} >services</NavLink></li>
                        <li><NavLink to={'/why-choose'} >why choose us</NavLink></li>
                        <li><NavLink to={'/team'} >team</NavLink></li>
                        <li><NavLink to={'/contact'} >contact</NavLink></li>
                    </ul>
                </nav>
            </div>
        </div>
    </Headroom>
  
  )
}
