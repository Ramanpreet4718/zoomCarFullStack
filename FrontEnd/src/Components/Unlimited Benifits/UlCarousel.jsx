import React, { useState } from "react";
import './UlCarousel.css';

const UlCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleItems, setVisibleItems] = useState([0, 1, 2]);

  const styles = {
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
    },
    carouselItem: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "33%",
      position:"relative",
    },
    button: {
      padding: 10,
      fontSize: 20,
    }
  };
  
  

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % 5);
    setVisibleItems([
      (currentIndex + 1) % 5,
      (currentIndex + 2) % 5,
      (currentIndex + 3) % 5,
    ]);
  };

  const handlePrev = () => {
    setCurrentIndex((currentIndex + 5 - 1) % 5);
    setVisibleItems([
      (currentIndex + 5 - 1) % 5,
      (currentIndex + 5 - 2) % 5,
      (currentIndex + 5 - 3) % 5,
    ]);
  };

  return (
    <div className="UlCarousel" style={styles.container}>
      <button onClick={handlePrev} className="ul-prev">
        <span className="material-symbols-outlined">
            arrow_back_ios
        </span>
      </button>
      {visibleItems.map((index) => (
        <div className="UlCarousel_item" style={styles.carouselItem} key={index}>
          <img
            src={
              index === 0
                ? "https://zoomcar-assets.zoomcar.com/images/original/d09afb8f29763525cd9823221791be7188b31460.png?1672044204"
                : index === 1
                ? "https://zoomcar-assets.zoomcar.com/images/original/92ede006e6e6bf849d2fe715761e3e6833aad5ec.png?1671712552"
                : index === 2
                ? "https://zoomcar-assets.zoomcar.com/images/original/ac74c0e87023949496768b9557c52936bc35090b.png?1672044356"
                : index === 3
                ? "https://zoomcar-assets.zoomcar.com/images/original/5d9694e98e7716aab66ea6e0a0f6b7bd7a4958c8.png?1672044544"
                : "https://zoomcar-assets.zoomcar.com/images/original/bb32fcf3eb9047ee20809f2dbf6e88ae739fb4d9.png?1672044584"
            }
            alt=""
          />
        </div>
      ))}
      <button onClick={handleNext} className="ul-next">
        <span className="material-symbols-outlined">
            arrow_forward_ios
        </span>
      </button>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  },
  button: {
    padding: 10,
    fontSize: 20,
  },
};

export default UlCarousel;