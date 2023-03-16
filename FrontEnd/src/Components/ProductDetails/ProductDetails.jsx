import ProductDetailsCSS from "./ProductDetails.module.css";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MainContext } from "../Context/MainContextProvider";
import RightContainer from "./RightContainer";
import LeftContainer from "./LeftContainer";
import Loading from "../ProductsPage/Loading";

export default function ProductDetails() {
  let { isLoading, setIsLoading, setPrice } = useContext(MainContext);
  let [singleProduct, setSingleProduct] = useState({});
  let { id } = useParams();

  async function getData(url) {
    setIsLoading(true);
    let fetchData = await fetch(url);
    let data = await fetchData.json();
    // console.log(data.car_data);
    setSingleProduct(data);
    let obj = {
      name: data.car_data.name,
      brand: data.car_data.brand,
      image_url: data.car_data.image_url,
      type: data.car_data.accessories[1],
      transmission: data.car_data.accessories[0],
    };
    setPrice(data.car_data.pricing.price_per_hour);
    localStorage.setItem("productData", JSON.stringify(obj));
    setIsLoading(false);
  }

  useEffect(() => {
    // console.log(`http://localhost:3001/cars${id}`);
    getData(`http://localhost:3001/cars/${id}`);
  }, []);

  return (
    <div className={ProductDetailsCSS.mainContainer}>
      {isLoading ? (
        <Loading />
      ) : (
        <div className={ProductDetailsCSS.flexContainer}>
          <div className={ProductDetailsCSS.leftContainer}>
            {singleProduct.hasOwnProperty("car_data") ? (
              <LeftContainer data={singleProduct.car_data} />
            ) : (
              false
            )}
          </div>
          <div className={ProductDetailsCSS.rightContainer}>
            <RightContainer />
          </div>
        </div>
      )}
    </div>
  );
}
