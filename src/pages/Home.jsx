import React from 'react'
import Hero from '../components/Hero'
import TopDeals from '../components/Top_Deals/TopDeals'
import TodaysDeal from '../components/TodaysDeal/TodaysDeal'
import Section1 from '../components/sections/Section1'

export default function Home() {
  return (
    <div className='bg-slate-200'>
      <Hero/>
      <Section1/>
      <TodaysDeal/>
      <TopDeals/>
    </div>
  )
}
