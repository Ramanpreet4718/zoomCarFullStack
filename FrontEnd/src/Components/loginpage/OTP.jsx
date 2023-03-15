import { useState, useRef, useEffect, useContext } from "react";
import { MainContext } from "../Context/MainContextProvider";
import { useNavigate } from "react-router-dom";
import Target from "ol/events/Target";
function OTP({ toggle, setToggle, OTP }) {

  const [otp, setOtp] = useState("");
  

  let { isAuth, setIsAuth } = useContext(MainContext);
  const navigate = useNavigate();
  // navigate("/");
  
  const handleOTP =(e)=>{
      if(otp===OTP){
        setIsAuth(true);
        navigate(-1);
      }
      else{
        alert("Please Enter correct OTP");
      }

  }


  return (
    <div>
    
      <div
        className="EmailPopUpcontainer"

        style={{
          display: toggle ? "block" : "none",
        }} //
      >
         
        <div
          className="backArrow"
          onClick={() => {
            setToggle(false);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="currentColor"
            class="bi bi-arrow-left"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
            />
          </svg>
        </div>
        <div className="Enter-email-id">Enter 6-digit OTP</div>
        <div className="otp-input">
          <div className="input-box-email">
            <input className="enter-otp"
              style={{
                width: "40%",
                height: "100%",
                padding: "10px",
                border: "none",
                outline: "none",
                fontSize: "15px",
              }}
              value={otp}
              onInput={(e)=>{
                  setOtp(e.target.value)
                    let otplength =  document.querySelector(".enter-otp").value;
    
                    if(otplength.length===6){
                      document.querySelector(".submit-button-otp").style.background="green";
                      document.querySelector(".otp-input").style.border="2px solid green";
                      
                    }
                    else{
                      document.querySelector(".submit-button-otp").style.background="#e0e0e0";
                      document.querySelector(".otp-input").style.border="1px solid #e0e0e0";
                    }
    
              }}
              type="password"
              placeholder="OTP"
              maxLength={6}
            />
          </div>
        </div>
        <div className="submit-login-with-email">
          <button 
          className="submit-button-otp"
            style={{
            
              padding: "15px 200px",
              fontWeight: "bold",
              boxShadow:
                "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
              border: "none",
              background: "#e0e0e0",
              color: "white",
            }}
            onClick={handleOTP}
          >
            SUBMIT
          </button>
        </div>
      </div>
    </div>
  );
}

export default OTP;
