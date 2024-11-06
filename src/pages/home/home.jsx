import React from 'react'
import Hero from './sections/hero'
import Achivement from './sections/ahivement'
import Team from '../team/team'

export default function Home() {
  return (
    <main>
       <section>
          <Hero />
       </section>
       <section>
          <Achivement />
       </section> 
         <section>
          <Team />
       </section>
    </main>
  )
}
