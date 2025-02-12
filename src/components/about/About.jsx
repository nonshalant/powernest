import React from 'react'
import HeroSection from './partials/HeroSection'
import OurStrengths from './partials/OurStrengths'
import Vision from './partials/Vision'
import Process from './partials/Process'
import "./about.css"
import CaptialFirms from '../home/partials/CaptialFirms'
import Partnership from './partials/Partnerships'
import DiscussWithTeam from '../home/partials/DiscussWithTeam'
import Talent from '../home/partials/Talent'

const About = () => {
  return (
    <div className='about'>
        <HeroSection />
        <OurStrengths />
        <Vision />
        <Process />
        <CaptialFirms />
        <Partnership />
        <DiscussWithTeam />
        <Talent />
    </div>
  )
}

export default About