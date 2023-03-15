import { useEffect, useState } from "react";
import ProductDetailsCSS from "./ProductDetails.module.css";

export default function LeftContainer({ data }) {
  let [time, setTime] = useState({});
  let [address, setAddress] = useState("");
  {
    console.log(data);
  }

  async function getData(url) {
    let fetchData = await fetch(url);
    let data = await fetchData.json();
    setAddress(data.features[0].properties.formatted);
  }

  let { url, name, accessories, brand, rating, pricing, location } = data;

  useEffect(() => {
    setTime(JSON.parse(localStorage.getItem("timeLS")));
    getData(
      `https://api.geoapify.com/v1/geocode/reverse?lat=${location.lat}&lon=${location.lng}&apiKey=4f679752d9444f65a08e0b0dd8dd31d3`
    );
  }, []);

  return (
    <>
      <div className={ProductDetailsCSS.imageDiv}>
        <img src={url} alt="Car image" />
      </div>

      <div className={ProductDetailsCSS.carInfoDiv}>
        <div className={ProductDetailsCSS.carInfoDetails}>
          <div>
            <h5 style={{ margin: "0" }}>{brand + " " + name + " "}</h5>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                fontSize: "12px",
                color: "#a8a8a8",
              }}
            >
              <span>{name}</span>
              <i className={`${ProductDetailsCSS.DOT} bi bi-circle-fill`}></i>
              <span>{accessories[0]}</span>
              <i className={`${ProductDetailsCSS.DOT} bi bi-circle-fill`}></i>
              <span>{accessories[1]}</span>
              <i className={`${ProductDetailsCSS.DOT} bi bi-circle-fill`}></i>
              <span>{accessories[2]}</span>
            </div>
          </div>
          <div
            style={{
              width: "50%",
              display: "flex",
              alignItems: "center",
              gap: ".7rem",
            }}
          >
            <img
              style={{ width: "48px" }}
              src="https://zoomcar-assets.zoomcar.com/images/original/5c73dbb6a3aa6874259e202ddea5988939b33912.png?1639054161"
              alt="profile"
            />
            <div>
              <p
                style={{
                  fontSize: "14px",
                  lineHeight: "20px",
                  fontWeight: "400",
                  color: "#1f1f1f",
                }}
              >
                Ramanpreet Singh
              </p>
              <p
                style={{
                  fontSize: "12px",
                  lineHeight: "16px",
                  fontWeight: "400",
                  color: "#666",
                }}
              >
                Zoomhost since July'22
              </p>
            </div>
          </div>
        </div>

        <div className={ProductDetailsCSS.carInfoRating}>
          <img style={{ width: "16px" }} src={rating.icon} alt="" />
          <span
            style={{
              fontSize: "12px",
              lineHeight: "16px",
              fontWeight: "400",
              letterSpacing: "0.4px",
              color: "#1f1f1f",
              paddingTop: "5px",
            }}
          >
            {rating.text} · 69,692 kms driven
          </span>
        </div>

        <div className={ProductDetailsCSS.tripInfoContainer}>
          <div className={ProductDetailsCSS.tripstartdiv}>
            <div className={ProductDetailsCSS.tripstartDOT}></div>
            <div className={ProductDetailsCSS.tripstartinfo}>
              {time.StartDate}
            </div>
          </div>
          <div className={ProductDetailsCSS.tripenddiv}>
            <div className={ProductDetailsCSS.tripendDOT}></div>
            <div className={ProductDetailsCSS.tripendinfo}>{time.EndDate}</div>
          </div>
        </div>
      </div>

      <div className={ProductDetailsCSS.mapDiv}>
        <div className={ProductDetailsCSS.locationDiv}>
          <h6>Location Details</h6>
          <div
            style={{
              overflow: "hidden",
              resize: "none",
              maxWidth: "100%",
              width: "100%",
              height: "300px",
              marginBottom: "1rem",
            }}
          >
            <div
              id="my-map-display"
              style={{ height: "100%", width: "100%", maxWidth: "100%" }}
            >
              <iframe
                style={{ height: "100%", width: "100%", border: "0" }}
                src={`https://www.google.com/maps/embed/v1/place?q=${location.lat}+${location.lng}&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8`}
              ></iframe>
            </div>
          </div>
          <p className={ProductDetailsCSS.contentText}>{address}</p>
          <p className={ProductDetailsCSS.exactLocation}>
            Exact car location will be shared post booking
          </p>
        </div>
        <div className={ProductDetailsCSS.hiddenContainer}>
          <h6>Keep In Mind</h6>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              marginTop: "2rem",
            }}
          >
            <img
              style={{ width: "24px" }}
              src="https://zoomcar-assets.zoomcar.com/images/original/0ebf53a526da3baa9621436223d17ee0a712495e.png?1584454768"
              alt="icon"
            />
            <p className={ProductDetailsCSS.contentText}>
              Driving License Mandatory
            </p>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              marginTop: "1rem",
            }}
          >
            <img
              style={{ width: "24px" }}
              src="https://zoomcar-assets.zoomcar.com/images/original/ccedfb3dddda918d76ad27240ffa582f4a59a157.png?1584454852"
              alt=""
            />
            <div>
              <p className={ProductDetailsCSS.contentText}>
                Fare & Fuel Policy
              </p>
              <p className={ProductDetailsCSS.contentSubText}>
                Fare is inclusive of all taxes. Kindly return the car at the
                same fuel level as the trip start time
              </p>
              <p className={ProductDetailsCSS.cardHyperlink}>See Details</p>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              marginTop: "1rem",
            }}
          >
            <img
              style={{ width: "24px" }}
              src="https://zoomcar-assets.zoomcar.com/images/original/afb10552c79c652619a45d814ab9f936f8592037.png?1584454817"
              alt="icon"
            />
            <div>
              <p className={ProductDetailsCSS.contentText}>
                Cancellation Policy
              </p>
              <p className={ProductDetailsCSS.contentSubText}>
                Hassle free cancellations and refunds at nominal charges
              </p>
              <p className={ProductDetailsCSS.cardHyperlink}>See Details</p>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              marginTop: "1rem",
            }}
          >
            <img
              style={{ width: "24px" }}
              src="https://zoomcar-assets.zoomcar.com/images/original/9f2143a815aa6de62a72bcc66fa2739162e52fdc.png?1638375860"
              alt="icon"
            />
            <div>
              <p className={ProductDetailsCSS.contentText}>Agreement Policy</p>
              <p className={ProductDetailsCSS.contentSubText}>
                I hereby agree to the terms and conditions of the Lease
                Agreement with Host
              </p>
              <p className={ProductDetailsCSS.cardHyperlink}>See Details</p>
            </div>
            <input type="checkbox" />
          </div>
        </div>
      </div>
    </>
  );
}
