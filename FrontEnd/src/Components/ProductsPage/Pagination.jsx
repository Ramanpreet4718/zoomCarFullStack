import { Link } from "react-router-dom";
import PaginationCSS from "./Pagination.module.css";
import { useContext } from "react";
import { MainContext } from "../Context/MainContextProvider";

export default function Pagination() {
  let { totalPages, request, setRequest } = useContext(MainContext);
  return (
    <div style={{ margin: "3rem 0 1rem 0" }}>
      <div className={PaginationCSS.pageContainer}>
        <div>
          {request.page <= 1 ? (
            <Link
              style={{ pointerEvents: "none" }}
              to={`/products/page=${request.page - 1}`}
            >
              <button
                disabled={request.page <= 1}
                onClick={() => {
                  setRequest({ ...request, page: request.page - 1 });
                }}
                className={PaginationCSS.btn}
              >
                <i class="bi bi-arrow-left"></i>
              </button>
            </Link>
          ) : (
            <Link to={`/products/page=${request.page - 1}`}>
              <button
                disabled={request.page <= 1}
                onClick={() => {
                  setRequest({ ...request, page: request.page - 1 });
                }}
                className={PaginationCSS.btn}
              >
                <i class="bi bi-arrow-left"></i>
              </button>
            </Link>
          )}
        </div>
        <div className={PaginationCSS.currentNumber}>{request.page}</div>
        <div>
          {request.page >= totalPages ? (
            <Link
              style={{ pointerEvents: "none" }}
              to={`/products/page=${request.page + 1}`}
            >
              <button
                disabled={request.page >= totalPages}
                onClick={() => {
                  setRequest({ ...request, page: request.page + 1 });
                }}
                className={PaginationCSS.btn}
              >
                <i class="bi bi-arrow-right"></i>
              </button>
            </Link>
          ) : (
            <Link to={`/products/page=${request.page + 1}`}>
              <button
                disabled={request.page >= totalPages}
                onClick={() => {
                  setRequest({ ...request, page: request.page + 1 });
                }}
                className={PaginationCSS.btn}
              >
                <i class="bi bi-arrow-right"></i>
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
