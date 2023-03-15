import { Link } from "react-router-dom";
import ProductCardCSS from "./ProductCard.module.css";

export default function ProductCard({ productData }) {
  // let {
  //   car_data: {
  //     name,
  //     url_large,
  //     location: { text },
  //     pricing: { payable_amount },
  //     accessories,
  //     rating,
  //   },
  //   id,
  // } = productData;

  let {
    _id,
    name,
    image_url,
    location: { text },
    pricing: { payable_amount },
    accessories,
    rating,
  } = productData;

  return (
    <Link to={`/cars/${_id}`}>
      <div className={ProductCardCSS.productCard}>
        <div
          className="imageCar"
          style={{
            backgroundImage:
              "url(https://www.zoomcar.com/img/marketplace-background.png)",
            width: "100%",
          }}
        >
          <img style={{ height: "250px" }} src={image_url} alt="car" />
        </div>
        <div className={ProductCardCSS.productDetailContainer}>
          <div className={ProductCardCSS.ratingsAndOhter}>
            <div className={ProductCardCSS.ratingContainer}>
              <img
                style={{ width: "16px", height: "16px", marginRight: "7px" }}
                src={rating.icon}
                alt="star"
              />
              <p className={ProductCardCSS.ratingNumbers}>{rating.text}</p>
            </div>
            <div className={ProductCardCSS.arrowSign}>
              <img
                style={{ width: "36px" }}
                src="https://www.zoomcar.com/img/icons-cart-2.svg"
                alt=""
              />
            </div>
          </div>
          <h3
            style={{
              position: "absolute",
              top: "71%",
              fontSize: "18px",
              marginLeft: "8px",
            }}
          >
            {name}
          </h3>
          <div className={ProductCardCSS.engineDetais}>
            <span>{accessories[0]}</span>
            <i className={`bi bi-dot ${ProductCardCSS.productCardDot}`}></i>
            <span>{accessories[1]}</span>
            <i className={`bi bi-dot ${ProductCardCSS.productCardDot}`}></i>
            <span>{accessories[2]}</span>
          </div>
          <div className={ProductCardCSS.priceAndDistance}>
            <h5>{payable_amount}</h5>
            <div>
              <p>{text}</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
