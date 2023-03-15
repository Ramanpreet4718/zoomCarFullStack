import React from 'react'
import BestXP from './Best Experiences/BestXP'
import DriveFree from './Best Experiences/DriveFree'
import BtmNav from './Bottom  Nav/BtmNav'
import Footer from './Footer/Footer'
import Hero from './Hero'
import Marketplace from './Marketplace Components/Marketplace'
import RangeCars from './RangeCars'
import Ulbenifits from './Unlimited Benifits/Ulbenifits'


export default function Homepage() {
  return (
    <div>
      <Hero/>
      <RangeCars/>
      <Marketplace/>
      <Ulbenifits/>
      <BestXP/>
      <DriveFree/>
      <BtmNav/>
      <Footer/>
    </div>
  )
}
