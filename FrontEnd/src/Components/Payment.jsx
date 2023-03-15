import React from "react";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { MainContext } from "./Context/MainContextProvider";
import PaymentSuccess from "./paymentDonePage";
function Payment(props) {
  let [Gpayment, setgPayment] = useState(true);
  let [ppayment, setpPayment] = useState(true);
  let [patpayment, setpatPayment] = useState(true);
  let [carDatalocation, setCarDatalocation] = useState("");
  let [cardataDate, setCarDatadate] = useState({});
  let [carDetail, setcarDetail] = useState({});
  let [displayPayment, setdisplayPayment] = useState(true);
  let [displayPayment1, setdisplayPayment1] = useState(true);
  let [toggle, setToggle] = useState(false);
  let { total } = useContext(MainContext);

  const getDataLS = () => {
    let storedValueCarData = JSON.parse(localStorage.getItem("productData"));
    setcarDetail(storedValueCarData);
  };

  useEffect(() => {
    getDataLS();
    const storedValueLocation = localStorage.getItem("locationLS");
    const storedValueDate = JSON.parse(localStorage.getItem("timeLS"));

    if (storedValueLocation) {
      setCarDatalocation(storedValueLocation);
    }
    if (storedValueDate) {
      setCarDatadate(storedValueDate);
    }
  }, []);

  return (
    <div style={{ display: "flex", gap: "20px", margin: "50px" }}>
      <div style={{ width: "60%" }}>
        <h1 style={{ fontSize: "22px" }}>Select a Payment method</h1>
        <div
          className="Payment-page-Container"
          style={{
            display: "flex",
            boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
            width: "100%",
          }}
        >
          <section
            className="left-Section"
            style={{ borderRight: "1px solid #cccccc", padding: "25px" }}
          >
            <div
              style={{ display: "flex", flexDirection: "column", gap: "25px" }}
              className="payment-option-container"
            >
              <div
                style={{ background: "#f5f5f5", width: "100%", padding: "4px" }}
              >
                <b>OTHER PAYMENT OPTION</b>
              </div>
              <div style={{ borderBottom: "1px solid #cccccc" }}>
                <div
                  className="UPI-DIV"
                  style={{
                    display: "flex",
                    gap: "25px",
                    paddingBottom: "10px",
                    alignItems: "center",
                    cursor: "pointer",
                    marginBottom: "4px",
                  }}
                  onClick={() => {
                    if (displayPayment) {
                      document.querySelector(".Right-Section1").style.display =
                        "block";
                      document.querySelector(".Right-Section2").style.display =
                        "none";
                      document.querySelector(".UPI-DIV").style.background =
                        "whitesmoke";
                      document.querySelector(".CARD-DIV").style.background =
                        "none";
                      setdisplayPayment(false);
                      setdisplayPayment1(true);
                    } else {
                      setdisplayPayment(true);
                    }
                  }}
                >
                  <div style={{ width: "35px" }}>
                    <img
                      src="https://zoomcar-assets.zoomcar.com/images/original/9fcb8335a89265849f23225858489f2a9ce8e121.png?1584453574"
                      alt=""
                    />
                  </div>
                  <div>
                    <div>UPI</div>
                    <div style={{ color: "#666666" }}>
                      Google Pay, PhonePe, BHIM UPI
                    </div>
                  </div>
                </div>
              </div>
              <div style={{ borderBottom: "1px solid #cccccc" }}>
                <div
                  className="CARD-DIV"
                  style={{
                    display: "flex",
                    gap: "25px",
                    paddingBottom: "10px",
                    alignItems: "center",
                    cursor: "pointer",
                    marginBottom: "4px",
                  }}
                  onClick={() => {
                    if (displayPayment1) {
                      document.querySelector(".Right-Section2").style.display =
                        "block";
                      document.querySelector(".Right-Section1").style.display =
                        "none";
                      document.querySelector(".CARD-DIV").style.background =
                        "whitesmoke";
                      document.querySelector(".UPI-DIV").style.background =
                        "none";
                      setdisplayPayment1(false);
                      setdisplayPayment(true);
                    } else {
                      setdisplayPayment1(true);
                    }
                  }}
                >
                  <div style={{ width: "35px" }}>
                    <img
                      src="https://zoomcar-assets.zoomcar.com/images/original/97f051d76793fffe5ab182ffa58b8eb47c5ba0cf.png?1584453494"
                      alt=""
                    />
                  </div>
                  <div>
                    <div>Credit / Debit / ATM Card</div>
                    <div style={{ color: "#666666" }}>
                      All major card providers are supported
                    </div>
                  </div>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  gap: "25px",
                  borderBottom: "1px solid #cccccc",
                  paddingBottom: "10px",
                  alignItems: "center",
                }}
              >
                <div style={{ width: "35px" }}>
                  <img
                    src="https://zoomcar-assets.zoomcar.com/images/original/1317404625e385185d23ea43a0c34569d6432d09.png?1632130014"
                    alt=""
                  />
                </div>
                <div>
                  <div>Mobile Wallet</div>
                  <div style={{ color: "#666666" }}>
                    All major wallets are supported
                  </div>
                </div>
              </div>
              <div
                style={{ display: "flex", gap: "25px", alignItems: "center" }}
              >
                <div style={{ width: "35px" }}>
                  <img
                    src="https://zoomcar-assets.zoomcar.com/images/original/4dd051886e5403aafb9725b7d2ab42c80f9b1df6.png?1584453529"
                    alt=""
                  />
                </div>
                <div>
                  <div>Net Banking</div>
                  <div style={{ color: "#666666" }}>
                    All major banks are supported
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section
            className="Right-Section1"
            style={{ padding: "25px", width: "50%" }}
          >
            <div className="payment-method-And-Scan" style={{ width: "100%" }}>
              <div className="payment-method">
                <div
                  className="header"
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div className="content">
                    <div className="head-payment">
                      <b>Select a UPI App</b>
                    </div>
                    <div style={{ color: "#666666" }} className="Head-Amount">
                      Amount:₹{total}.0
                    </div>
                  </div>
                  <div className="logo" style={{ width: "40px" }}>
                    <img
                      src="https://www.zoomcar.com/build/760ee3019ff287f2caed7e40c92b1ca5.png"
                      alt=""
                    />
                  </div>
                </div>
                <div className="Preffered-payment">
                  <div
                    className="heading"
                    style={{
                      background: "#f5f5f5",
                      width: "100%",
                      padding: "4px",
                      marginTop: "25px",
                      marginBottom: "15px",
                    }}
                  >
                    <b>PREFERRED PAYMENT OPTIONS</b>
                  </div>
                  <div style={{ borderBottom: "1px solid #cccccc" }}>
                    <div
                      className="Goggle-pay-div"
                      style={{
                        display: "flex",
                        gap: "20px",
                        padding: "10px 20px 10px 0px",
                        margin: "10px 0px 10px 0px",
                        cursor: "pointer",
                      }}
                      onClick={() => {
                        {
                          if (Gpayment) {
                            document.querySelector(".Gsub-text").style.display =
                              "flex";
                            document.querySelector(
                              ".Goggle-pay-div"
                            ).style.background = "#f5f5f5";
                            document.querySelector(".Psub-text").style.display =
                              "none";
                            document.querySelector(
                              ".PhoenePe-pay-div"
                            ).style.background = "none";
                            document.querySelector(
                              ".Patsub-text"
                            ).style.display = "none";
                            document.querySelector(
                              ".Paytm-pay-div"
                            ).style.background = "none";
                            setgPayment(false);
                            setpPayment(true);
                            setpatPayment(true);
                          } else {
                            document.querySelector(".Gsub-text").style.display =
                              "none";
                            document.querySelector(
                              ".Goggle-pay-div"
                            ).style.background = "none";

                            setgPayment(true);
                          }
                        }
                      }}
                    >
                      <div style={{ width: "30px", background: "#f5f5f5" }}>
                        <img
                          src="https://zoomcar-assets.zoomcar.com/images/original/4aef7198237a74ac187c75d270f8d516cfaa5e9b.png?1584453889"
                          alt=""
                        />
                      </div>
                      <div style={{ color: "#666666" }} className="text">
                        Google Pay
                      </div>
                    </div>
                    <div
                      className="Gsub-text"
                      style={{
                        display: "none",
                        justifyContent: "space-between",
                        alignItems: "center",
                        gap: "10px",
                        marginBottom: "25px",
                      }}
                    >
                      <input
                        className="InpurUPI1"
                        type="text"
                        placeholder="Enter Upi Id"
                        style={{
                          paddingLeft: "10px",
                          height: "50px",
                          width: "240px",
                          outlineColor: "green",
                          border: "1px solid #e0e0e0",
                          borderRadius: "4px",
                        }}
                        onInput={() => {
                          {
                            let inputUPI =
                              document.querySelector(".InpurUPI1").value;

                            if (inputUPI != "") {
                              document.querySelector(
                                ".submitBtn1"
                              ).style.background = "green";
                            } else {
                              document.querySelector(
                                ".submitBtn1"
                              ).style.background = "#e0e0e0";
                            }
                          }
                        }}
                      />
                      <button
                        className="submitBtn1"
                        style={{
                          width: "150px",
                          border: "none",
                          color: "white",
                          background: "#e0e0e0",
                          borderRadius: "4px",
                          padding: "12px",
                        }}
                        onClick={() => {
                          toggle ? setToggle(false) : setToggle(true);
                        }}
                      >
                        VERIFY & PAY
                      </button>
                    </div>
                  </div>
                  <div style={{ borderBottom: "1px solid #cccccc" }}>
                    <div
                      className="PhoenePe-pay-div"
                      style={{
                        display: "flex",
                        gap: "20px",
                        padding: "10px 20px 10px 0px",
                        margin: "10px 0px 10px 0px",
                        cursor: "pointer",
                      }}
                      onClick={() => {
                        {
                          if (ppayment) {
                            document.querySelector(".Psub-text").style.display =
                              "flex";
                            document.querySelector(".Gsub-text").style.display =
                              "none";
                            document.querySelector(
                              ".PhoenePe-pay-div"
                            ).style.background = "#f5f5f5";
                            document.querySelector(
                              ".Goggle-pay-div"
                            ).style.background = "none";
                            document.querySelector(
                              ".Patsub-text"
                            ).style.display = "none";
                            document.querySelector(
                              ".Paytm-pay-div"
                            ).style.background = "none";

                            setpPayment(false);
                            setgPayment(true);
                            setpatPayment(true);
                          } else {
                            document.querySelector(".Psub-text").style.display =
                              "none";
                            document.querySelector(
                              ".PhoenePe-pay-div"
                            ).style.background = "none";

                            setpPayment(true);
                          }
                        }
                      }}
                    >
                      <div style={{ width: "30px", background: "#f5f5f5" }}>
                        <img
                          src="https://zoomcar-assets.zoomcar.com/images/original/2f05f4e5f91bf2f481569c3a3c4345b2cf447ff7.png?1584453837"
                          alt=""
                        />
                      </div>
                      <div style={{ color: "#666666" }} className="text">
                        PhonePe
                      </div>
                    </div>
                    <div
                      className="Psub-text"
                      style={{
                        display: "none",
                        justifyContent: "space-between",
                        alignItems: "center",
                        gap: "10px",
                        marginBottom: "25px",
                      }}
                    >
                      <input
                        type="text"
                        className="InpurUPI2"
                        placeholder="Enter Upi Id"
                        style={{
                          paddingLeft: "10px",
                          height: "50px",
                          width: "240px",
                          outlineColor: "green",
                          border: "1px solid #e0e0e0",
                          borderRadius: "4px",
                        }}
                        onInput={() => {
                          {
                            let inputUPI =
                              document.querySelector(".InpurUPI2").value;
                            if (inputUPI != "") {
                              document.querySelector(
                                ".submitBtn2"
                              ).style.background = "green";
                            } else {
                              document.querySelector(
                                ".submitBtn2"
                              ).style.background = "#e0e0e0";
                            }
                          }
                        }}
                      />

                      <button
                        className="submitBtn2"
                        style={{
                          width: "150px",
                          border: "none",
                          color: "white",
                          background: "#e0e0e0",
                          borderRadius: "4px",
                          padding: "12px",
                        }}
                        onClick={() => {
                          toggle ? setToggle(false) : setToggle(true);
                        }}
                      >
                        VERIFY & PAY
                      </button>
                    </div>
                  </div>
                  <div>
                    <div
                      className="Paytm-pay-div"
                      style={{
                        display: "flex",
                        gap: "20px",
                        padding: "10px 20px 10px 0px",
                        margin: "10px 0px 10px 0px",
                        cursor: "pointer",
                      }}
                      onClick={() => {
                        {
                          if (patpayment) {
                            document.querySelector(
                              ".Paytm-pay-div"
                            ).style.background = "#f5f5f5";
                            document.querySelector(".Gsub-text").style.display =
                              "none";
                            document.querySelector(".Psub-text").style.display =
                              "none";
                            document.querySelector(
                              ".Patsub-text"
                            ).style.display = "flex";
                            document.querySelector(
                              ".PhoenePe-pay-div"
                            ).style.background = "none";
                            document.querySelector(
                              ".Goggle-pay-div"
                            ).style.background = "none";

                            setpatPayment(false);
                            setgPayment(true);
                            setpPayment(true);
                          } else {
                            document.querySelector(
                              ".Patsub-text"
                            ).style.display = "none";
                            document.querySelector(
                              ".Paytm-pay-div"
                            ).style.background = "none";

                            setpatPayment(true);
                          }
                        }
                      }}
                    >
                      <div style={{ width: "30px", background: "#f5f5f5" }}>
                        <img
                          src="https://zoomcar-assets.zoomcar.com/images/original/91871c2e202fd271724063a4a38033612d37c219.png?1584602070"
                          alt=""
                        />
                      </div>
                      <div style={{ color: "#666666" }} className="text">
                        Paytm UPI
                      </div>
                    </div>
                    <div
                      className="Patsub-text"
                      style={{
                        display: "none",
                        justifyContent: "space-between",
                        alignItems: "center",
                        gap: "10px",
                        marginBottom: "25px",
                      }}
                    >
                      <input
                        type="text"
                        className="InpurUPI3"
                        placeholder="Enter Upi Id"
                        style={{
                          paddingLeft: "10px",
                          height: "50px",
                          width: "240px",
                          outlineColor: "green",
                          border: "1px solid #e0e0e0",
                          borderRadius: "4px",
                        }}
                        onInput={() => {
                          {
                            let inputUPI =
                              document.querySelector(".InpurUPI3").value;
                            if (inputUPI != "") {
                              document.querySelector(
                                ".submitBtn3"
                              ).style.background = "green";
                            } else {
                              document.querySelector(
                                ".submitBtn3"
                              ).style.background = "#e0e0e0";
                            }
                          }
                        }}
                      />
                      <button
                        className="submitBtn3"
                        style={{
                          width: "150px",
                          border: "none",
                          color: "white",
                          background: "#e0e0e0",
                          borderRadius: "4px",
                          padding: "12px",
                        }}
                        onClick={() => {
                          toggle ? setToggle(false) : setToggle(true);
                        }}
                      >
                        VERIFY & PAY
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section
            className="Right-Section2"
            style={{ padding: "25px", width: "50%", display: "none" }}
          >
            <div className="payment-method-And-Scan" style={{ width: "100%" }}>
              <div className="payment-method">
                <div
                  className="header"
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div className="content">
                    <div className="head-payment">
                      <b>Enter Card Details</b>
                    </div>
                    <div style={{ color: "#666666" }} className="Head-Amount">
                      Amount:₹{total}.0
                    </div>
                  </div>
                  <div className="logo" style={{ width: "40px" }}>
                    <img
                      src="https://www.zoomcar.com/build/760ee3019ff287f2caed7e40c92b1ca5.png"
                      alt=""
                    />
                  </div>
                </div>

                <div className="card-payment">
                  <div
                    className="inputbox-card"
                    style={{ margin: "40px 0 40px 0" }}
                  >
                    <input
                      className="CardNumber"
                      type="text"
                      placeholder="Card Number"
                      maxLength={19}
                      inputMode="numeric"
                      style={{
                        width: "100%",
                        height: "60px",
                        outlineColor: "green",
                        border: "1px solid #e0e0e0",
                        borderRadius: "5px",
                        paddingLeft: "10px",
                      }}
                      onInput={() => {
                        {
                          let cardNumber =
                            document.querySelector(".CardNumber").value;
                          let expiredate =
                            document.querySelector(".ExpireDate").value;
                          let CVV = document.querySelector(".CVV").value;
                          if (
                            cardNumber != "" &&
                            expiredate != "" &&
                            CVV != ""
                          ) {
                            document.querySelector(
                              ".SubmitPayment"
                            ).style.background = "green";
                            document.querySelector(
                              ".SubmitPayment"
                            ).style.color = "white";
                          } else {
                            document.querySelector(
                              ".SubmitPayment"
                            ).style.background = "#e0e0e0";
                          }
                        }
                      }}
                      onKeyDown={() => {
                        {
                          let cardNumber =
                            document.querySelector(".CardNumber");
                          cardNumber = cardNumber.value.split(" ").join("");

                          let finalVal = cardNumber.match(/.{1,4}/g).join(" ");
                          document.querySelector(".CardNumber").value =
                            finalVal;
                        }
                      }}
                    />
                  </div>

                  <div
                    className="other-detail-card"
                    style={{
                      display: "flex",
                      gap: "15px",
                      margin: "40px 0 40px 0",
                    }}
                  >
                    <div className="expire-and-cvv" style={{ width: "50%" }}>
                      <input
                        className="ExpireDate"
                        placeholder="Expiry(MM/YY)"
                        maxLength={5}
                        inputMode="numeric"
                        style={{
                          width: "100%",
                          height: "60px",
                          outlineColor: "green",
                          border: "1px solid #e0e0e0",
                          borderRadius: "5px",
                          paddingLeft: "10px",
                        }}
                        onInput={() => {
                          {
                            let cardNumber =
                              document.querySelector(".CardNumber").value;
                            let expiredate =
                              document.querySelector(".ExpireDate").value;
                            let CVV = document.querySelector(".CVV").value;
                            if (
                              cardNumber != "" &&
                              expiredate != "" &&
                              CVV != ""
                            ) {
                              document.querySelector(
                                ".SubmitPayment"
                              ).style.background = "green";
                              document.querySelector(
                                ".SubmitPayment"
                              ).style.color = "white";
                            } else {
                              document.querySelector(
                                ".SubmitPayment"
                              ).style.background = "#e0e0e0";
                            }
                          }
                        }}
                        onKeyDown={() => {
                          {
                            let expiredate =
                              document.querySelector(".ExpireDate");
                            expiredate = expiredate.value.split("/").join("");

                            let finalVal = expiredate
                              .match(/.{1,2}/g)
                              .join("/");
                            document.querySelector(".ExpireDate").value =
                              finalVal;
                          }
                        }}
                      />
                    </div>
                    <div className="expire-and-cvv" style={{ width: "50%" }}>
                      <input
                        className="CVV"
                        type="password"
                        placeholder="CVV"
                        maxLength={3}
                        inputMode="numeric"
                        style={{
                          width: "100%",
                          height: "60px",
                          outlineColor: "green",
                          border: "1px solid #e0e0e0",
                          borderRadius: "5px",
                          paddingLeft: "10px",
                        }}
                        onInput={() => {
                          {
                            let cardNumber =
                              document.querySelector(".CardNumber").value;
                            let expiredate =
                              document.querySelector(".ExpireDate").value;
                            let CVV = document.querySelector(".CVV").value;
                            if (
                              cardNumber != "" &&
                              expiredate != "" &&
                              CVV != ""
                            ) {
                              document.querySelector(
                                ".SubmitPayment"
                              ).style.background = "green";
                              document.querySelector(
                                ".SubmitPayment"
                              ).style.color = "white";
                            } else {
                              document.querySelector(
                                ".SubmitPayment"
                              ).style.background = "#e0e0e0";
                            }
                          }
                        }}
                      />
                    </div>
                  </div>
                  <div className="save-card" style={{ marginBottom: "30px" }}>
                    <input type="checkbox" />
                    <span>Securely save card details</span>
                  </div>
                </div>
              </div>
            </div>
            <footer
              style={{
                boxShadow:
                  "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
                position: "relative",
                width: "118%",
                height: "20%",
                top: "4px",
                right: "23px",
              }}
            >
              <div
                className="payButton"
                style={{
                  display: "flex",
                  justifyContent: "end",
                  alignItems: "center",
                  height: "100%",
                }}
              >
                <button
                  className="SubmitPayment"
                  style={{
                    padding: "10px 40px 10px 40px",
                    marginRight: "10px",
                    borderRadius: "5px",
                    border: "none",
                    boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
                    color: "#b2b2b2",
                    fontWeight: "500",
                    background: "#e0e0e0",
                  }}
                  onClick={() => {
                    toggle ? setToggle(false) : setToggle(true);
                  }}
                >
                  PAY ₹{total}
                </button>
              </div>
            </footer>
          </section>
        </div>
      </div>
      <div>
        <div>
          <h1 style={{ fontSize: "22px" }}> Booking Details </h1>
          <div
            className="Section-Container"
            style={{
              boxShadow:
                "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
            }}
          >
            <div
              className="Car-info-Container"
              style={{
                background: "#f5f5f5",
                padding: "10px",
              }}
            >
              <div className="Car-Name" style={{ marginBottom: "5px" }}>
                <b>
                  {carDetail.brand} {carDetail.name}{" "}
                  {carDetail.type}
                </b>
              </div>
              <div
                className="Info-container"
                style={{ display: "flex", gap: "25px", alignItems: "start" }}
              >
                <div className="Car-info">
                  <img
                    style={{ width: "20px" }}
                    src="https://zoomcar-assets.zoomcar.com/images/original/2aceee9e84a7bf79ae8928ace92944abbac907d4.png?1584455088"
                    alt=""
                  />
                  <span>{carDetail.transmission}</span>
                </div>
                <div className="Car-info">
                  <img
                    style={{ width: "20px" }}
                    src="https://zoomcar-assets.zoomcar.com/images/original/4c611ba1fb54d1e42553020d9022e5ab2dac14ea.png?1584455110"
                    alt=""
                  />
                  <span>{carDetail.type}</span>
                </div>
                <div
                  className="car-img"
                  style={{
                    width: "200px",
                    position: "relative",
                    right: "-42px",
                    top: "-41px",
                    overflow: "hidden",
                    marginBottom: "-40px",
                  }}
                >
                  <img src={carDetail.image_url} alt="" />
                </div>
              </div>
            </div>
            <div className="Car-trip-Detail" style={{ padding: "25px" }}>
              <div className="trip-info-container">
                <div
                  className="car-trip-info"
                  style={{ display: "flex", gap: "15px", marginBottom: "25px" }}
                >
                  <div
                    className="icon-start"
                    style={{
                      background: "#e6ffea",
                      width: "25px",
                      height: "25px",
                      borderRadius: "15px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <div
                      style={{
                        background: "#10a310",
                        width: "8px",
                        height: "8px",
                        borderRadius: "5px",
                      }}
                    ></div>
                  </div>
                  <div className="time-and-date-containt">
                    <div className="time-date">{cardataDate.StartDate}</div>
                    <div
                      className="place-city"
                      style={{
                        color: "#666666",
                        maxHeight: "1.6em",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                        width: "140px",
                      }}
                    >
                      {carDatalocation}
                    </div>
                  </div>
                </div>
                <div
                  className="connecter"
                  style={{
                    position: "relative",
                    width: "2px",
                    height: "62px",
                    backgroundImage:
                      " linear-gradient(to bottom, #e6ffea, #fff3f0)",
                    top: "-55px",
                    right: "-12px",
                    overflow: "hidden",
                    marginBottom: "-56px",
                  }}
                ></div>
                <div
                  className="car-trip-info"
                  style={{ display: "flex", gap: "15px", marginBottom: "25px" }}
                >
                  <div
                    className="icon-end"
                    style={{
                      background: "#fff3f0",
                      width: "25px",
                      height: "25px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <div
                      style={{
                        background: "#e02d2d",
                        width: "8px",
                        height: "8px",
                      }}
                    ></div>
                  </div>
                  <div className="time-and-date-containt">
                    <div className="time-date">{cardataDate.EndDate}</div>
                    <div
                      className="place-city"
                      style={{
                        color: "#666666",
                        maxHeight: "1.6em",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                        width: "140px",
                      }}
                    >
                      {carDatalocation}
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="location-disclamer"
                style={{
                  color: "#5160c2",
                  background: "#f0f4ff",
                  padding: "12px 10px 12px 10px",
                }}
              >
                <div>Free cancellation up to {cardataDate.EndDate}</div>
              </div>
              <div
                className="fare-container"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: "25px",
                  borderTop: "1px solid #e0e0e0",
                  padding: "7px 0 5px 0",
                  fontSize: "20px",
                }}
              >
                <div className="fare-head">
                  <b>Final Fare</b>
                </div>
                <div className="final-fare">
                  <b>₹{total}</b>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <PaymentSuccess toggle={toggle} setToggle={setToggle} />
    </div>
  );
}

export default Payment;
