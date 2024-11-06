import React from 'react'


import logo from '../../images/logo.png'
import { Link, NavLink } from 'react-router-dom'

import Headroom from 'react-headroom'



export default function Nav() {
  return (
    <Headroom>
        <div className='navigation flex justify-between items-center w-full'> 
            <div className="logo w-[20%]">
                <img src={logo} alt="logo" />
            </div>
            <div className="navbar w-[80%] flex justify-end items-center">
                <nav className='w-[80%]'>
                    <ul className='flex justify-between w-full'>
                        <li><NavLink to={'/'} >home</NavLink></li>
                        <li><NavLink to={'/about'} >About us</NavLink></li>
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
