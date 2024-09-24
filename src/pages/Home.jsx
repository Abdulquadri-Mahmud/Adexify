import React from 'react'
import Hero from '../components/Hero'
import TopDeals from '../components/Top_Deals/TopDeals'
import TodaysDeal from '../components/TodaysDeal/TodaysDeal'

export default function Home() {
  return (
    <div className='bg-slate-200'>
      <Hero/>
      <TodaysDeal/>
      <TopDeals/>
    </div>
  )
}
