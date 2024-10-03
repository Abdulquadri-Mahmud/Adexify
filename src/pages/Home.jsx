import React from 'react'
import Hero from '../components/Hero'
import TopDeals from '../components/Top_Deals/TopDeals'
import TodaysDeal from '../components/TodaysDeal/TodaysDeal'
import Section1 from '../components/sections/Section1'
import Womens_wear from '../components/womens_wear/womens_wear'
import Mens_wear from '../components/mens_wear/Mens_wear'
import Recommended from '../components/recommend/Recommended'

export default function Home() {
  return (
    <div className=''t>
      <Hero/>
      <Section1/>
      <TodaysDeal/>
      <TopDeals/>
      <Recommended/>
      {/* <Womens_wear/>
      <Mens_wear/> */}
    </div>
  )
}
