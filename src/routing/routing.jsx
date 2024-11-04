import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/home/home'
import About from '../pages/about/about'
import Services from '../pages/services/services'
import WhyChoose from '../pages/whyus/whyChoose'
import Team from '../pages/team/team'
import Contact from '../pages/contact/Contact'
import NotFound from '../pages/error-404/not-found'

export default function Routing() {
  return (
    <Routes >
        {/* Default route to page navigation */}
        <Route  to={'/'} element={<Home />} />
        <Route  to={'/about'} element={<About />} />
        <Route  to={'/services'} element={<Services />} />
        <Route  to={'/why-choose-us'} element={<WhyChoose />} />
        <Route  to={'/team'} element={<Team />} />
        <Route  to={'/contact'} element={<Contact />} />
        <Route to={"*"} element={<NotFound />} />
        
    </Routes>
  )
}
