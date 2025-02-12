import React from 'react'
import HeroSection from './partials/HeroSection'
import Rectangles from './partials/Rectangles'
import CaptialFirms from './partials/CaptialFirms'
import Insight from './partials/Insight'
import JoinPowerNest from './partials/JoinPowerNest'
import WhyChooseUs from './partials/WhyChooseUs'
import WorldwidePresence from './partials/WorldWidePresence'
import "./home.css"
import DiscussWithTeam from './partials/DiscussWithTeam'
import Talent from './partials/Talent'

const Home = () => {
  return (
    <div className='home'>
        <HeroSection />
        <Rectangles />
        <CaptialFirms />
        <Insight />
        <JoinPowerNest />
        <WhyChooseUs />
        <WorldwidePresence />
        <DiscussWithTeam />
        <Talent />
    </div>
  )
}

export default Home