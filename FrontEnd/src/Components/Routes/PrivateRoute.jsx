import { useContext } from "react";
import { MainContext } from "../Context/MainContextProvider";
import { Navigate } from "react-router-dom";

function PrivateRoute({ children }) {
  let { isAuth } = useContext(MainContext);

  if (isAuth) {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
}

export default PrivateRoute;
