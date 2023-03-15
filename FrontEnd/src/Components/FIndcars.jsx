import React, { useContext } from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { MainContext } from "./Context/MainContextProvider";
import CurrentDateTime from "./CurrentDateTime";
import LocationPopUp from "./Pop-UP/LocationPopUp";
import TimePopUp from "./Pop-UP/TimePopUp";

export default function FIndcars() {
  let [trip, settrip] = useState(false);
  let [showloc, setshowloc] = useState(false);
  let [locationLS, setLocationLS] = useState("");
  let [toggle, setToggle] = useState(true);
  let [timetoggle, setTimetoggle] = useState(true);
  let { page } = useContext(MainContext);

  const styles = {
    gray: {
      background: "#e3e3e3",
    },
    white: {
      background: "white",
      border: "1px solid #10a310",
      color: "#10a310",
    },
  };

  useEffect(() => {
    localStorage.setItem("locationLS", locationLS);
  }, [locationLS]);

  const [location, setLocation] = useState({});

  let [city, setcity] = useState("Mumbai");
  let [addr, setaddress] = useState(
    "226Q+3PM, Diwale Village, Sector 14, CBD Belapur, Navi Mumbai, Maharashtra 400614, India"
  );

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        (error) => console.error(error)
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
      alert("Geolocation is not supported by this browser.");
    }

    showloc ? setshowloc(false) : setshowloc(true);
  };

  useEffect(() => {
    getLocation();
  }, []);

  useEffect(() => {
    if (!location.lat || !location.lng) {
      return;
    }

    const API_ENDPOINT = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${location.lat}&lon=${location.lng}`;

    fetch(API_ENDPOINT)
      .then((response) => response.json())
      .then((data) => {
        setcity(data.address.city);
        setaddress(data.display_name);
        setLocationLS(city + " . " + addr);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [location, locationLS]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "20px 0",
        fontSize: "14px",
        gap: "10px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
        }}
        className="trip"
      >
        <div
          style={trip ? styles.gray : styles.white}
          onClick={() => {
            settrip(false);
          }}
          className="round_trip"
        >
          <i className="bi bi-arrow-left-right"></i>
          <p>Round Trip</p>
        </div>
        <div
          style={trip ? styles.white : styles.gray}
          onClick={() => {
            settrip(true);
          }}
          className="plane_trip"
        >
          <i className="bi bi-airplane"></i>
          <p>Aeroplane Round Trip</p>
        </div>
      </div>

      {/* Trip Location */}
      <div
        className="trip_location"
        onClick={() => {
          getLocation();
          setToggle(false);
        }}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "white",
          width: "100%",
          borderRadius: "5px",
        }}
      >
        <i
          className="bi bi-dot"
          style={{ fontSize: "2rem", color: "#10a310" }}
        ></i>
        <p
          style={{
            display: "block",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            maxHeight: "1.6em",
          }}
        >
          {city}
          <i
            className="bi bi-dot"
            style={{ fontSize: "1rem", color: "#10a310" }}
          ></i>
          {addr}
        </p>
      </div>
      <LocationPopUp
        toggle={toggle}
        setToggle={setToggle}
        location={location}
      />
      <TimePopUp timetoggle={timetoggle} setTimetoggle={setTimetoggle} />
      {/* trip dates */}
      <div
        className="trip_date"
        style={{
          width: "100%",
          background: "white",
          borderRadius: "5px",
          padding: "12px",
          display: "flex",
          alignItems: "center",
          gap: "10px",
          justifyContent: "center",
        }}
        onClick={() => {
          setTimetoggle(false);
        }}
      >
        <i className="bi bi-calendar"></i>
        <CurrentDateTime />
      </div>

      <Link to={`/products/page=${page}`} className="find_cars_btn">
        <button
          style={{
            width: "100%",
            padding: "14px",
            border: "none",
            borderRadius: "5px",
            outline: "none",
            background: "#10a310",
            color: "white",
            margin: "auto",
          }}
        >
          Find Cars
        </button>
      </Link>
    </div>
  );
}
