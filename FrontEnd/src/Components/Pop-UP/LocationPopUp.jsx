import React, { useState } from 'react'
import Gmap from './Gmap';
import './LocationPopUp.css';

export default function LocationPopUp({toggle,setToggle,location}) {

  let addr = localStorage.getItem('locationLS');
  let timeLS = JSON.parse(localStorage.getItem('timeLS'));
  let sdate = "null";
  let edate = "null";


  if(timeLS!=null){
    sdate = timeLS.StartDate;
    edate = timeLS.EndDate;
  }

  console.log(edate);
  return (
    <div className='locationPopup' style={{
        position:"fixed",
        zIndex:"2",
        top:"0",
        left:"0",
        width:"100%",
        height:"100vh",
        background:"white",
        padding:"2%",
        display: toggle?"none":"block"
    }}>
        <button style={{
          background:"transparent",
          border:"none",
          fontSize:"2rem",
          boxShadow:'none'
        }}
        onClick={()=>{
          toggle?setToggle(false):setToggle(true);
          console.log(addr);
        }}
        >
          <i className="bi bi-arrow-left"></i>
        </button>

        <div style={{
          margin:"2%"
        }}>
          <div style={{
            display:"flex",
            justifyContent:"center",
            gap:"20px"
          }}>
              <div style={{
                display:"flex",
                justifyContent:"space-between",
                alignItems:"center",
                border:"1px solid gray",
                padding:"0 10px",
                borderRadius:"5px"
              }}>
                <i className="bi bi-dot" style={{fontSize:"2rem",color:"#10a310"}}></i>
                {addr}
              </div>

              <div style={{
                  display:"flex",
                  justifyContent:"space-between",
                  alignItems:"center",
                  border:"1px solid gray",
                  padding:"10px",
                  borderRadius:"5px",
                  gap:"15px"
                }}>
                <p>{sdate}</p>
                <i className="bi bi-arrow-right"></i>
                <p>{edate}</p>
              </div>
          </div>
        </div>

        <div style={{
          width:"67%",
          margin:"auto",
          height:"70%",
          borderRadius:"50px",
        }}>
          <Gmap location={location}/>
        </div>
    </div>
  )
}