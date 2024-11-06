import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/home/home'
import NotFound from '../pages/error-404/not-found'
import About from '../pages/about/about'
import Services from '../pages/services/services'
import WhyChoose from '../pages/whyus/whyChoose'
import Team from '../pages/team/team'
import Contact from '../pages/contact/Contact'

export default function Routing() {
  return (
    <Routes>
        <Route path='*' element={<NotFound />} />
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services />} />
        <Route path='/why-choose' element={<WhyChoose />} />
        <Route path='/team' element={<Team />} />
        <Route path='/contact' element={<Contact />} />
    </Routes>
  )
}
