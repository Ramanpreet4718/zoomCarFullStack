import { useContext, useEffect, useState } from "react";
import { MainContext } from "../Context/MainContextProvider";
import ProductDetailsCSS from "./ProductDetails.module.css";
export default function RadioButtonGroup() {
  let [insurance, setInsurance] = useState(199);
  let { total, setTotal, price } = useContext(MainContext);

  useEffect(() => {
    {
      let radioInput = document.querySelectorAll(".tripProtectionRadio");
      for (let i = 0; i < radioInput.length; i++) {
        radioInput[i].addEventListener("click", (e) => {
          for (let j = 0; j < radioInput.length; j++) {
            e.target.value === radioInput[j].value
              ? (radioInput[j].checked = true)
              : (radioInput[j].checked = false);
          }
          setInsurance(e.target.value);
        });
      }
    }
  });

  function diff_hours(dt2, dt1) {
    var diff = (dt2.getTime() - dt1.getTime()) / 1000;
    diff /= 60 * 60;
    return Math.abs(Math.round(diff));
  }

  function calculation() {
    let data = JSON.parse(localStorage.getItem("timeLS"));
    let ConvenienceFee = 99;

    let stDate = new Date(data.StartDate.slice(4));
    let endDate = new Date(data.EndDate.slice(4));

    let totalHours = diff_hours(endDate, stDate);
    let totalPrice = price * totalHours + ConvenienceFee + Number(insurance);
    setTotal(totalPrice);
  }

  useEffect(() => {
    calculation();
  }, [insurance]);

  return (
    <>
      <div className={ProductDetailsCSS.TPP_Div}>
        <img
          style={{ width: "24px" }}
          src="https://zoomcar-assets.zoomcar.com/images/original/f6b01d4ca15bc999a8a0bbe2bb64710cf71f9b75.png?1633967237"
          alt="icon"
        />
        <div>
          <p style={{ fontSize: "14px" }}>Basic (₹199)</p>
          <p style={{ fontSize: "12px", color: "#a8a8a8" }}>
            You pay up to INR 3499 in case of any damage
          </p>
        </div>
        <input
          value={199}
          defaultChecked={"true"}
          className="tripProtectionRadio"
          type="radio"
        />
      </div>
      <div className={ProductDetailsCSS.TPP_Div}>
        <img
          style={{ width: "24px" }}
          src="https://zoomcar-assets.zoomcar.com/images/original/97e7b92d185271d80fa2e7638a3eead238f9a0ed.png?1633967297"
          alt="icon"
        />
        <div>
          <p style={{ fontSize: "14px" }}>Standard (₹279)</p>
          <p style={{ fontSize: "12px", color: "#a8a8a8" }}>
            You pay up to INR 999 in case of any damage
          </p>
          <p
            style={{
              color: "#10a310",
              fontSize: "12px",
              fontWeight: "bold",
            }}
          >
            Most Opted
          </p>
        </div>
        <input value={279} className="tripProtectionRadio" type="radio" />
      </div>
      <div className={ProductDetailsCSS.TPP_Div}>
        <img
          style={{ width: "24px" }}
          src="https://zoomcar-assets.zoomcar.com/images/original/ec5e27493f742df5f714ee0830d2b623a4ba91fe.png?1667486639"
          alt="icon"
        />
        <div>
          <p style={{ fontSize: "14px" }}>Peace of Mind (₹339)</p>
          <p style={{ fontSize: "12px", color: "#a8a8a8" }}>
            You pay up to INR 99 in case of any damage
          </p>
          <p
            style={{
              color: "#10a310",
              fontSize: "12px",
              fontWeight: "bold",
            }}
          >
            Value for Money
          </p>
        </div>
        <input value={339} className="tripProtectionRadio" type="radio" />
      </div>
    </>
  );
}
