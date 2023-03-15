import Navbar from "./Components/Navbar";
import "./App.css";
import AllRoutes from "./Components/Routes/AllRoutes";
// import PaymentSuccess from "./Components/paymentDonePage";
import { useState, useEffect } from "react";
import Slider from "./Components/Slider";
import { useLocation } from "react-router-dom";
function App() {
  const [menu, setmenu] = useState(false);
  let location = useLocation();
  return (
    <div className="App">
      {location.pathname !== "/login" ? (
        <Navbar setmenu={setmenu} menu={menu} />
      ) : (
        <div></div>
      )}
      <Slider setmenu={setmenu} menu={menu} />
      <AllRoutes />
    </div>
  );
}

export default App;
