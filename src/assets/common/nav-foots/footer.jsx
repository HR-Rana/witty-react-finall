import React from 'react'
import logo from '../../images/logo.png'



export default function Footer() {
  return (
    <footer className='py-7'>
        <div className="content flex flex-col ">
            <span>
                <img src={logo} alt="logo" />
            </span>
            <span>
                ©2024 wittyshots. All rights reserved.
            </span>
        </div>
    </footer>
  )
}
