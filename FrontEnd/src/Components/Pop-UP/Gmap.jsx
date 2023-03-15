import React from 'react'

export default function Gmap({location}) {
    console.log(location);
  return (
    <div style={{
        height:"100%"
    }}>
      <iframe 
        style={{
            width:"100%",
            height:"100%",
            borderRadius:"20px",
            border:"5px solid black",
        }}
        src={`https://maps.google.com/maps?q=${location.lat},${location.lng}&z=14&output=embed&key=YOUR_API_KEY`} 
        allowfullscreen
      />
    </div>
  )
}
