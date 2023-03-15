import React from 'react';
import './Marketplace.css';

export default function Marketplace() {
  return (
    <div style={{
        textAlign:"center",
        height:"100vh",
        color:"white"
    }}
    className="marketplace"
    >
        <div className='marketplace_block'>
            <h2 style={{
              fontWeight:"bold"
            }}>Largest car sharing marketplace</h2>
            <h4>Sedans for short distances, SUVs for tough terrains, luxury cars for surprises - we’ve got it all!</h4>
        </div>
    </div>
  )
}
