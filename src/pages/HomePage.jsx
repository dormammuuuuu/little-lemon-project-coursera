import React from 'react'
import { Contact, Footer, Hero, Nav, Specials, Testimonials } from '../components';

const HomePage = () => {
  return (
    <>
        <Nav/>
        <Hero />
        <Specials />
        <Testimonials />
        <Contact />
        <Footer />
    </>
  )
}

export default HomePage