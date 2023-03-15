import React from "react";
import OTP from "./OTP";
import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "./Signup.css";
function Signup(props) {
  let [showPopupPhone, setShowPopupPhone] = useState(false);
  let [showPopupEmail, setShowPopupEmail] = useState(false);
  let [AleatOTP, setOTP] = useState("");
  let [userName , setUsername] = useState("");
  let [toggle, setToggle] = useState(false);
  let popupRef = useRef(null);
  let continerRef = useRef(null);
  let popupRefE = useRef(null);

  let navigate = useNavigate();

  useEffect(() => {
    let popup1 = popupRef.current;
    let continer = continerRef.current;
    let popup2 = popupRefE.current;

    if (showPopupPhone) {
      continer.style.display = "none";
      popup1.style.display = "block";
    } else {
      popup1.style.display = "none";
    }
    if (showPopupEmail) {
      continer.style.display = "none";
      popup2.style.display = "block";
    } else {
      popup2.style.display = "none";
    }

    if (!showPopupPhone && !showPopupEmail) {
      continer.style.display = "flex";
    }
  }, [showPopupPhone, showPopupEmail]);

  const handleusername =(e)=>{
    setUsername(e.target.value);
    localStorage.setItem("userName",e.target.value);
  }

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div
        ref={continerRef}
        className="container"
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          width: "50%",
          height: "100%",
          marginTop: "10%",
        }}
      >
        <div className="imageContainer">
          <img
            style={{ width: "60%" }}
            src="https://www.zoomcar.com/build/fb65fcc43b8bededb813e093ea2d47d3.svg"
            alt="login-banner"
          />
        </div>
        <div className="Signupboxcointiber">
          <div className="heading-login">Enter details to login/sign-up</div>
          <div className="option-menu">
            <div className="UserName">
              <input type="text" placeholder="Enter User Name"  value={userName} onInput={handleusername}/>
            
            </div>
            <div className="option-mobile">
              <img
                src="https://zoomcar-assets.zoomcar.com/images/original/38ff9c58fe221677b6e8958c1caba43d35710fe2.png?1654779648"
                alt=""
              />
              <span style={{ color: "#787e84" }}>+91</span>
              <div
                className="markToinput"
                onClick={() => {
                  setShowPopupPhone(true);
                }}
              >
                Enter Mobile Number
              </div>
            </div>
            <div
              className="option-email"
              onClick={() => {
                setShowPopupEmail(true);
              }}
            >
              Continue with Email ID
            </div>
          </div>
        </div>
      </div>
      <div
        ref={popupRef}
        className="mobileNumberPopUpcontainer"
        style={{ display: toggle ? "none" : "block" }}
      >
        <div
          className="backArrow"
          onClick={() => {
            setShowPopupPhone(false);
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
        <div className="Enter-phone-num">Enter Mobile Number</div>
        <div className="mobile-number-input">
          <div className="country-selector">
            <img
              style={{ width: "35px" }}
              src="https://zoomcar-assets.zoomcar.com/images/original/38ff9c58fe221677b6e8958c1caba43d35710fe2.png?1654779648"
              alt=""
            />
            <span>+91</span>
          </div>
          <div className="input-box-tel">
            <input className="input-mobile-number"
              style={{
                width: "40%",
                height: "100%",
                padding: "10px",
                border: "none",
                outline: "none",
                fontSize: "15px",
              }}
              onInput={() => {
                let mobileNumber =  document.querySelector(".input-mobile-number").value;

                if(mobileNumber.length===10){
                  document.querySelector(".submit-button-mobile").style.background="green";
                  document.querySelector(".input-box-tel").style.border="2px solid green";
                  
                }
                else{
                  document.querySelector(".submit-button-mobile").style.background="#e0e0e0";
                  document.querySelector(".input-box-tel").style.border="1px solid #e0e0e0";
                }

              }}
              type="text"
              placeholder="Mobile Number"
              maxLength="10"
            />

          </div>
        </div>
        <div className="submit-login-with-mobile">
          <button className="submit-button-mobile"
            style={{
              padding: "15px 200px",
              fontWeight: "bold",
              boxShadow:
                "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
              border: "none",
              background: "#e0e0e0",
              color: "white",
            }}
            onClick={() => {
              toggle ? setToggle(false) : setToggle(true);
              let OTP = Math.floor(Math.random() * 999999).toString().padStart(6,"0");
              setOTP(OTP);
              alert(`Your OTP is ${OTP}`)
              
            }}
          >
            CONTINUE
          </button>
        </div>
      </div>
      <div
        ref={popupRefE}
        className="EmailPopUpcontainer"
        style={{ display: "none" }}
      >
        <div
          className="backArrow"
          onClick={() => {
            setShowPopupEmail(false);
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
        <div className="Enter-email-id">Enter Email ID</div>
        <div className="email-input">
          <div className="input-box-email">
            <input
              style={{
                width: "40%",
                height: "100%",
                padding: "10px",
                border: "none",
                outline: "none",
                fontSize: "15px",
              }}
              type="text"
              placeholder="Email ID"
            />
          </div>
        </div>
        <div className="submit-login-with-email">
          <button
            style={{
              padding: "15px 200px",
              fontWeight: "bold",
              boxShadow:
                "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
              border: "none",
              background: "#e0e0e0",
              color: "white",
            }}
          >
            CONTINUE
          </button>
        </div>
      </div>
      <OTP toggle={toggle} setToggle={setToggle} OTP={AleatOTP} />
    </div>
  );
}

export default Signup;
