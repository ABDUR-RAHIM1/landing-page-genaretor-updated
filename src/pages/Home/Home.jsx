import React from 'react'
import { Link } from 'react-router-dom'
import Title from '../../Helpers/Title'
import Hero from '../../Homecomponents/Hero/Hero'
import CallToAction from '../../Homecomponents/CallToAction/CallToAction'
import Features from '../../Homecomponents/Features/Features'
import WhatFeatures from '../../Homecomponents/WhatFeatures/WhatFeatures'
import Pricing from '../../Homecomponents/Pricing/Pricing'
import Testimonial from '../../Homecomponents/Testimonial/Testimonial'
import Footers from '../../Homecomponents/Footers/Footers'
import Footer from '../../Homecomponents/Footers/Footer'

export default function Home() {
  return (
    <>
      <Hero />
      <CallToAction />
      <Features />
      <WhatFeatures />
      <Pricing />
      <Testimonial />
      <Footers />
      <Footer />
    </>
  )
}

