import React from 'react'
import { useEffect } from 'react'
import Founder from '../components/about/company';
import AboutSection from '../components/about/Mission';

const About = () => {
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to top on component mount
    }
    , []);
  return (
    
    <div>
        <AboutSection/>
      <Founder/>
    </div>
  )
}

export default About
