import React from 'react'
import { Link } from 'react-router-dom'
import FIndcars from './FIndcars'

export default function Hero() {
  return (
    <div className='hero_section' style={{
        padding:"40px",
        boxShadow:"rgb(0 0 0 / 30%) 0px 0px 0px 500px inset"
    }}>
        <div className="hero_section_text" style={{
            color:"white",
            textAlign:"center",
            padding:"10px",
            width:"65%",
            margin:"auto",
            background:"#00000078",
            backdropFilter:"blur(20px)",
            }}>
            <h1 style={{fontSize:"42px"}}>The perfect car for your next trip is just around the corner</h1>
            <h3 style={{fontSize:"28px"}}>Book your drive now!</h3>
        </div>
        <div className="find-cars">
          <FIndcars/>
        </div>
    </div>
  )
}
