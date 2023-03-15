import {useState} from 'react';

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const items = [
        {
          heading: "Honda City AT Petrol",
          price: "₹150 per hour",
          image: "https://zoomcar-assets.zoomcar.com/photographs/original/a49559a67ba1d5fd7e2ffea2f78f654691ee018e.png?1663874345"
        },
        {
          heading: "Duster MT Diesel",
          price: "₹ 130 per hour",
          image: "https://zoomcar-assets.zoomcar.com/photographs/original/740dff9817b1e2553c584ce7b22d4deaffdd0b66.png?1663875879"
        },
        {
          heading: "Ford Ecosport MT Diesel",
          price: "₹110 per hour",
          image: "https://zoomcar-assets.zoomcar.com/photographs/original/09676d682ed13c858272d5890a4a27c618d9996a.png?1663872232"
        },
        {
          heading: "Tata Tigor XZ MT Petrol",
          price: "₹200 per hour",
          image: "https://zoomcar-assets.zoomcar.com/photographs/original/1e21626e16a18146a01051d48c8d596c02f2b7e4.png?1663876564"
        },
        {
          heading: "Maruti S-Cross MT Petrol",
          price: "₹160 per hour",
          image: "https://zoomcar-assets.zoomcar.com/photographs/original/a9731539cdff2619dcef109740f09edd8dec65fa.png?1663874549"
        },
        {
          heading: "Triber MT Petrol",
          price: "₹140 per hour",
          image: "https://zoomcar-assets.zoomcar.com/photographs/original/a21d2ba781794d6c3f3e310c6a70b3d7c39cac89.png?1663876143"
        },
        {
          heading: "Hyundai Venue MT Petrol",
          price: "₹210 per hour",
          image: "https://zoomcar-assets.zoomcar.com/photographs/original/7da6a84a3997f5d39a80653d488dbf9412f5dd3b.png?1663873214"
        },
        {
          heading: "Swift Dzire AT Petrol",
          price: "₹180 per hour",
          image: "https://zoomcar-assets.zoomcar.com/photographs/original/ac487c33daa78bb2bc9d078ab6b04df5fd2030c6.png?1663874634"
        }
      ];
    const handlePrev = () => {
      if (currentIndex === 0) {
        return;
      } else {
        setCurrentIndex(currentIndex - 1);
      }
    };
  
    const handleNext = () => {
      if (currentIndex === items.length - 3) {
        return;
      } else {
        setCurrentIndex(currentIndex + 1);
      }
    };
  
    return (
      <div style={{ position: "relative", display: "flex", justifyContent: "center" }} className="carousel-parent">
        <button
          style={{
            position: "absolute",
            top: "50%",
            left: 100,
            borderRadius: "50px",
            padding: "10px",
            border: "none",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
          className="prev"
          onClick={handlePrev}
          disabled={currentIndex === 0}
        >
          <span className="material-symbols-outlined" style={{ fontSize: "3rem" }}>
            arrow_back_ios
          </span>
        </button>
        <div style={{ display: "flex", justifyContent: "center" }} className="cars_scroll">
          {items.slice(currentIndex, currentIndex + 3).map((item, index) => (
            <div
              key={item.id}
              style={{
                margin: 20,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                width: index === 1 ? "400%" : "100%"
              }}
              className="car_hold"
            >
              <div className="single_car">
                <h3 style={{ color: "#AFA8A8" }}>{item.price}</h3>
                <h3>{item.heading}</h3>
                <img src={item.image} alt="" />
              </div>
            </div>
          ))}
        </div>
        <button
          style={{
            position: "absolute",
            top: "50%",
            right: 100,
            borderRadius: "50px",
            padding: "10px",
            border: "none",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
          className="next"
          onClick={handleNext}
          disabled={currentIndex === items.length - 3}
        >
          <span className="material-symbols-outlined" style={{ fontSize: "3rem" }}>
            arrow_forward_ios
          </span>
        </button>
      </div>
    );
  };
  
  export default Carousel;