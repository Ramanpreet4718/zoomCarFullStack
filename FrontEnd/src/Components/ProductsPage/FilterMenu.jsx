import FilterCSS from "./FilterMenu.module.css";
import { IoCarOutline } from "@react-icons/all-files/io5/IoCarOutline";
import { IoCarSportOutline } from "@react-icons/all-files/io5/IoCarSportOutline";
import { useContext } from "react";
import { MainContext } from "../Context/MainContextProvider";

export default function FilterMenu() {
  let { request, setRequest } = useContext(MainContext);

  return (
    <div className={`p-3 border rounded shadow-sm bg-white`}>
      <div className="d-flex justify-content-between">
        <p className="fs-5 fw-bold">Sort & Filter</p>
        <p
          onClick={() => {
            setRequest({ sort: "", page: 1, totalPage: 0 });
          }}
          className="fw-bold"
          style={{ color: "#10a310", cursor: "pointer" }}
        >
          RESET
        </p>
      </div>

      <p style={{ fontWeight: "300" }} className="mt-3 mb-2">
        Sort By
      </p>
      <div className="sortMenu mb-1">
        <div className={`mb-2 ${FilterCSS.sortMenuGrid} ${FilterCSS.gapGrid}`}>
          <div
            className={`border p-2 border-secondary rounded text-center ${FilterCSS.Pevent}`}
            onClick={(e) => {
              setRequest({ ...request, sort: "", order: "" });
            }}
          >
            <i class="bi bi-check-circle"></i>
            <div className={FilterCSS["fs_11px"]}>Relevance</div>
          </div>
          <div
            className={`border p-2 border-secondary rounded text-center ${FilterCSS.Pevent}`}
            onClick={(e) => {
              setRequest({ ...request, sort: "price_per_hour", order: "asc" });
            }}
          >
            <i class="bi bi-arrow-down-circle"></i>
            <div className={FilterCSS["fs_11px"]}>Low to High</div>
          </div>
          <div
            className={`border p-2 border-secondary rounded text-center ${FilterCSS.Pevent}`}
            onClick={(e) => {
              setRequest({ ...request, sort: "price_per_hour", order: "desc" });
            }}
          >
            <i class="bi bi-arrow-up-circle"></i>
            <div className={FilterCSS["fs_11px"]}>High to Low</div>
          </div>
          <div
            className={`border p-2 border-secondary rounded text-center ${FilterCSS.Pevent}`}
          >
            <i class="bi bi-star"></i>
            <div className={FilterCSS["fs_11px"]}>Best Rated</div>
          </div>
        </div>

        <div className={`mb-2 ${FilterCSS.sortMenuGrid} ${FilterCSS.gapGrid}`}>
          <div
            className={`border p-2 border-secondary rounded text-center ${FilterCSS.Pevent}`}
          >
            <i class="bi bi-geo-alt"></i>
            <div className={FilterCSS["fs_11px"]}>Distance</div>
          </div>
          <div
            className={`border p-2 border-secondary rounded text-center ${FilterCSS.Pevent}`}
          >
            <i class="bi bi-car-front"></i>
            <div className={FilterCSS["fs_11px"]}>Car Age</div>
          </div>
          <div
            className={`border p-2 border-secondary rounded text-center ${FilterCSS.Pevent}`}
          >
            <i class="bi bi-check-circle"></i>
            <div className={FilterCSS["fs_11px"]}>Kms Driven</div>
          </div>
          <div
            className={`border p-2 border-secondary rounded text-center ${FilterCSS.Pevent}`}
          >
            <i class="bi bi-check-circle"></i>
            <div className={FilterCSS["fs_11px"]}>Popularity</div>
          </div>
        </div>
      </div>

      <p style={{ fontWeight: "300" }} className="mt-4 mb-2">
        Transmission
      </p>
      <div className="sortMenu mb-1 mx-2">
        <div className={`row ${FilterCSS.gapGrid}`}>
          <div
            className={`border border-secondary rounded text-center col ${FilterCSS.Pevent}`}
            onClick={() => {
              setRequest({ ...request, "accessories.0": "Manual" });
            }}
          >
            <img
              style={{ width: "24px", height: "24px" }}
              src="https://zoomcar-assets.zoomcar.com/images/original/2aceee9e84a7bf79ae8928ace92944abbac907d4.png?1584455088"
              alt=""
            />
            <div className={FilterCSS["fs_11px"]}>Manual</div>
          </div>
          <div
            className={`border border-secondary rounded text-center col ${FilterCSS.Pevent}`}
            onClick={() => {
              setRequest({ ...request, "accessories.0": "Automatic" });
            }}
          >
            <img
              style={{ width: "24px", height: "24px" }}
              src="https://zoomcar-assets.zoomcar.com/images/original/d21cb94565e451326a2c6a43a8d2f1066e228e7b.png?1584455072"
              alt=""
            />
            <div className={FilterCSS["fs_11px"]}>Automatic</div>
          </div>
        </div>
      </div>

      <p style={{ fontWeight: "300" }} className="mt-4 mb-2">
        Setats
      </p>
      <div className="sortMenu mb-1 mx-2">
        <div className={`row ${FilterCSS.gapGrid}`}>
          <div
            className={`border border-secondary rounded text-center col ${FilterCSS.Pevent}`}
            onClick={() => {
              setRequest({ ...request, "accessories.2": "4%20Seats" });
            }}
          >
            <i style={{ fontSize: "18px", marginTop: "5px" }}>
              <IoCarOutline />
            </i>
            <div className={FilterCSS["fs_11px"]}>4 Seater</div>
          </div>
          <div
            className={`border border-secondary rounded text-center col ${FilterCSS.Pevent}`}
            onClick={() => {
              setRequest({ ...request, "accessories.2": "5%20Seats" });
            }}
          >
            <i style={{ fontSize: "18px", marginTop: "5px" }}>
              <IoCarSportOutline />
            </i>
            <div className={FilterCSS["fs_11px"]}>5 Seater</div>
          </div>
          <div
            className={`border border-secondary rounded text-center col ${FilterCSS.Pevent}`}
            onClick={() => {
              setRequest({ ...request, "accessories.2": "7%20Seats" });
            }}
          >
            <img
              style={{ width: "24px" }}
              src="https://cdn-icons-png.flaticon.com/512/2207/2207521.png"
              alt=""
            />
            <div className={FilterCSS["fs_11px"]}>7 Seater</div>
          </div>
        </div>
      </div>

      <p style={{ fontWeight: "300" }} className="mt-4 mb-2">
        Fuel type
      </p>
      <div className="sortMenu mb-1 mx-2">
        <div className={`row ${FilterCSS.gapGrid}`}>
          <div
            className={`border border-secondary rounded text-center col ${FilterCSS.Pevent}`}
            onClick={() => {
              setRequest({ ...request, "accessories.1": "Petrol" });
            }}
          >
            <img
              style={{ width: "24px" }}
              src="https://cdn-icons-png.flaticon.com/512/3012/3012041.png"
              alt=""
            />
            <div className={FilterCSS["fs_11px"]}>Petrol</div>
          </div>
          <div
            className={`border border-secondary rounded text-center col ${FilterCSS.Pevent}`}
            onClick={() => {
              setRequest({ ...request, "accessories.1": "Diesel" });
            }}
          >
            <img
              style={{ width: "24px" }}
              src="https://cdn-icons-png.flaticon.com/512/3012/3012041.png"
              alt=""
            />
            <div className={FilterCSS["fs_11px"]}>Diesel</div>
          </div>
          <div
            className={`border border-secondary rounded text-center col ${FilterCSS.Pevent}`}
            aria-disabled="true"
          >
            <img
              style={{ width: "24px" }}
              src="https://cdn-icons-png.flaticon.com/512/9618/9618735.png"
              alt=""
            />
            <div className={FilterCSS["fs_11px"]}>CNG</div>
          </div>
        </div>
      </div>

      <p style={{ fontWeight: "300" }} className="mt-4 mb-2">
        Ratings
      </p>
      <div className="sortMenu mb-1 mx-2">
        <div className={`row ${FilterCSS.gapGrid}`}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "13px",
            }}
            className={`border border-secondary rounded text-center col ${FilterCSS.Pevent}`}
          >
            <div style={{ margin: ".5rem 0" }}>3+ rated</div>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "13px",
            }}
            className={`border border-secondary rounded text-center col ${FilterCSS.Pevent}`}
          >
            <div style={{ margin: ".5rem 0" }}>4+ rated</div>
          </div>
        </div>
      </div>
    </div>
  );
}
