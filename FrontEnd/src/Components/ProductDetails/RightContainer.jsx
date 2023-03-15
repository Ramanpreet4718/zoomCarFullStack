import { useContext } from "react";
import { Link } from "react-router-dom";
import { MainContext } from "../Context/MainContextProvider";
import ProductDetailsCSS from "./ProductDetails.module.css";
import RadioButtonGroup from "./RadioButtonGroup";

export default function RightContainer() {
  let { total } = useContext(MainContext);
  return (
    <>
      <div className={ProductDetailsCSS.otherCharges}>
        <h6>Other Charges</h6>
        <div className={ProductDetailsCSS.otherCharges_Div}>
          <img
            style={{ width: "24px" }}
            src="https://zoomcar-assets.zoomcar.com/images/original/8b49713465c5c33330880cfe739ef06348b2c0f0.png?1659443762"
            alt="icon"
          />
          <p style={{ fontSize: "14px" }}>
            Convenience Fee{" "}
            <span style={{ textDecoration: "line-through", fontSize: "14px" }}>
              (₹149)
            </span>{" "}
            ₹99
          </p>
        </div>

        <h6>TRIP PROTECTION PACKAGE</h6>
        <div>
          <RadioButtonGroup />
        </div>
      </div>
      <div className={ProductDetailsCSS.detailsContainer}>
        <div>
          <p>How Trip Protection Works?</p>
          <p
            style={{ fontSize: "12px", lineHeight: "16px", fontWeight: "400" }}
          >
            • Zoomcar will assist in damage repair costs up to the amount as per
            the maximum deductible limit. • Does not cover any third-party
            liability or any intentional damage or damage that occurred due to
            intoxication or high speed, rash, or negligent driving. • Please
            read Zoomcar policy to know more.
          </p>
        </div>
      </div>
      <div className={ProductDetailsCSS.productTotalContainer}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <h5>₹{total}</h5>
          <div style={{ display: "flex", alignItems: "center" }}>
            <img
              style={{ width: "36px" }}
              src="https://images2.imgbox.com/27/78/LRP9uzlW_o.png"
              alt="coupon icon"
            />
            <p>Apply Coupon</p>
          </div>
        </div>
        <Link to="/payment">
          <button className={ProductDetailsCSS.Totalbtn}>
            PROCEED TO PAY ₹{total}
          </button>
        </Link>
      </div>
    </>
  );
}
