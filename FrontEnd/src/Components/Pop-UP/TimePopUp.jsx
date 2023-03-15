import React, { useState } from 'react'
import PickupDateTime from './PickupDateTime';

export default function TimePopUp({timetoggle,setTimetoggle}) {

  let data = {
    "cargroup_id": 147,
    "car_id": 29657,
    "name": "Wagon R",
    "brand": "Maruti",
    "url": "https://zoomcar-assets.zoomcar.com/photographs/original/2733bd472b2c1cf2964cb9612854abbea8a9aeaa.png?1663874676",
    "url_large": "https://zoomcar-assets.zoomcar.com/photographs/original/2733bd472b2c1cf2964cb9612854abbea8a9aeaa.png?1663874676",
    "location": {
        "id": 553,
        "location_id": 41639,
        "lat": 18.45568,
        "lng": 73.8712,
        "distance": 1.5741169237998878,
        "text": "2.7 km away",
        "hd_ids": [],
        "terminal_ids": [],
        "zoom_air_unvailable_reason": "LEAD_TIME"
    },
    "pricing": {
        "id": "20000",
        "flexi_name": "FLEX_1000",
        "actual_amount": "₹136/hr",
        "payable_amount": "₹83/hr",
        "revenue": 10624,
        "offer_id": null,
        "discounted_info_text": null,
        "fare_header": "₹10,624 total",
        "fare_breakup": [
            {
                "fare_item": [
                    {
                        "header": "₹83 x 128 hours",
                        "value": "₹10,624",
                        "is_highlighted": "false",
                        "striked_through": "false"
                    }
                ]
            }
        ],
        "price_per_hour": 83
    },
    "accessories": [
        "Manual",
        "Petrol",
        "5 Seats"
    ],
    "rating": {
        "icon": "https://zoomcar-assets.zoomcar.com/images/original/b04593cd90f850d14ed46ed739b0371457ef6834.png?1633947533",
        "text": "4.83 (14) ",
        "icon_url": "https://zoomcar-assets.zoomcar.com/images/original/b04593cd90f850d14ed46ed739b0371457ef6834.png?1633947533"
    },
    "messages": [],
    "image_urls": [
        "https://zoomcar-assets.zoomcar.com/photographs/original/2733bd472b2c1cf2964cb9612854abbea8a9aeaa.png?1663874676"
    ],
    "rating_v2": {
        "icon": "https://zoomcar-assets.zoomcar.com/images/original/b04593cd90f850d14ed46ed739b0371457ef6834.png?1633947533",
        "text": "4.83 (14) ",
        "review_count": 1
    },
    "tag_run_id": -1,
    "is_original_car_images": false
  }

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
        display: timetoggle?"none":"block"
    }}>
        <button style={{
          background:"transparent",
          border:"none",
          fontSize:"2rem"
        }}
        onClick={()=>{
            timetoggle?setTimetoggle(false):setTimetoggle(true);
          console.log(addr);
        }}
        >
          <i className="bi bi-arrow-left"></i>
        </button>

        <div>
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

        <div>
         <PickupDateTime/>
        </div>
    </div>
  )
}