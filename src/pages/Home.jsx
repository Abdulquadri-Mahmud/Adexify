import React from 'react'
import Hero from '../components/Hero'
import TopDeals from '../components/Top_Deals/TopDeals'
import TodaysDeal from '../components/TodaysDeal/TodaysDeal'
import Section1 from '../components/sections/Section1'
import Recommended from '../components/recommend/Recommended'
import LastSection from '../components/LastSection'

export default function Home() {
  return (
    <div className=''t>
      <Hero/>
      <Section1/>
      <TodaysDeal/>
      <TopDeals/>
      <Recommended/>
      <LastSection/>
    </div>
  )
}
