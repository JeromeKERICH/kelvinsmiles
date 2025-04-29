import React from 'react'
import Services from '../components/Services'
import GalleryPreview from '../components/Gallery'
import Packages from '../components/Package'
import HeroSection from '../components/HeroSection'
import Testimonials from '../components/Testimonials'
import FAQ from '../components/Faqs'
import CTASection from '../components/CTA'


const Home = () => {
  return (
    <div>
      <HeroSection/>
      <Services/>
      <GalleryPreview/>
      <CTASection/>
      <Packages/>
      <Testimonials/>
      <FAQ/>
      
    </div>
  )
}

export default Home
