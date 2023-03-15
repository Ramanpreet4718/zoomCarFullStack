import { useContext, useEffect, useState } from "react";
import FilterMenu from "./FilterMenu";
import ProductCSS from "./Products.module.css";
import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";
import { MainContext } from "../Context/MainContextProvider";
import Loading from "./Loading";
import Pagination from "./Pagination";

export default function Products() {
  let {
    request,
    isLoading,
    setIsLoading,
    setRequest,
    handleTotalPages,
    locationNtime,
    getData,
  } = useContext(MainContext);
  let [productData, setProductData] = useState([]);
  let [locationAndTime, setLocationAndTime] = useState({
    location: "",
    time: "",
  });

  const getDataLS = () => {
    let locationData = localStorage.getItem("locationLS");
    let timeData = JSON.parse(localStorage.getItem("timeLS"));

    setLocationAndTime({
      locationAndTime,
      location: locationData,
      time: timeData,
    });
  };

  useEffect(() => {
    getDataLS();
    getData(request).then((data) => {
      setProductData(data);
    });
  }, [request]);

  return (
    <section id="productSection" className="bg-light w-100 pt-4">
      {/* <div className="filterMenu">
        <FilterMenu />
      </div> */}
      {isLoading ? (
        <Loading />
      ) : (
        <div className={`bg-light d-flex ${ProductCSS.mainContainer}`}>
          <div className="filterMenu">
            <FilterMenu />
          </div>

          <div style={{ width: "70%" }}>
            <div className={ProductCSS.productCardsContainer}>
              <div className={`${ProductCSS.nameCity} border rounded`}>
                <div className={ProductCSS.nameCityDOT}></div>
                <p>{locationAndTime.location}</p>
              </div>
              <div className={`${ProductCSS.timeBar} border rounded`}>
                <div>
                  <label> START DATE/TIME</label>
                  <p>{locationAndTime.time.StartDate}</p>
                </div>

                <span>
                  <i className="bi bi-arrow-right"></i>
                </span>

                <div>
                  <label> END DATE/TIME</label>
                  <p>{locationAndTime.time.EndDate}</p>
                </div>
              </div>
              {productData &&
                productData.map((element) => {
                  return <ProductCard key={element.id} productData={element} />;
                })}
            </div>
            <Pagination page={request.page} />
          </div>
        </div>
      )}
    </section>
  );
}
