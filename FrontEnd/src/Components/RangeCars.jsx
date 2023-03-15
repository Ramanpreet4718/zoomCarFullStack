import Carousel from './Carousel';
import React from 'react'
import { useState,useEffect } from 'react';

export default function RangeCars() {
  return (
    <div style={{
        textAlign:"center",
        color:"black",
        background:"#F5F5F5",
        padding:"2%"
    }}>
       <h2 style={{
        padding:"5%"
       }}>CHOOSE FROM OUR WIDE RANGE OF CARS</h2>
       <Carousel/>
    </div>
  )
}
