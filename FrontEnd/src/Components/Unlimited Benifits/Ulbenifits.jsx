import React from 'react'
import './Ulbenifits.css';
import UlCarousel from './UlCarousel';

export default function Ulbenifits() {
  return (
    <div style={{
        padding:"5%",
        background:"#F5F5F5"
    }}>
        <div className='unlimited-text'>
            <h2>UNMATCHED BENEFITS</h2>
            <h4>Drive everywhere with freedom</h4>
        </div>
        <UlCarousel/>
    </div>
  )
}
