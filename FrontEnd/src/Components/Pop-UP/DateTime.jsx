import React from 'react'

export default function DateTime({dateToggle,setDataToggle}) {
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
            display: dateToggle?"none":"block"
        }}>
            <button style={{
              background:"transparent",
              border:"none",
              fontSize:"2rem"
            }}
            onClick={()=>{
                dateToggle?setDataToggle(false):setDataToggle(true);
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
        </div>
      )
}
