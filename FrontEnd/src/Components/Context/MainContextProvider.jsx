import { createContext, useState } from "react";

export let MainContext = createContext();

export default function MainContextProvider({ children }) {
  let [isAuth, setIsAuth] = useState(true);
  let [isLoading, setIsLoading] = useState(true);
  let [request, setRequest] = useState({ sort: "", page: 1 });
  let [totalPages, setTotalPages] = useState(0);
  let [total, setTotal] = useState(0);
  let [price, setPrice] = useState(0);

  function handleTotalPages(dataCount) {
    let totalPage = dataCount / 10;
    totalPage = Math.ceil(totalPage);
    console.log(totalPage);
    setTotalPages(totalPage);
  }

  async function getData(request) {
    try {
      setIsLoading(true);
      console.log(request);
      let finalRequest;

      let urlRequest = { ...request };

      let deleteReq = ["totalPage"];

      deleteReq.forEach((element) => {
        delete urlRequest[element];
      });

      console.log(urlRequest);

      let url = "http://localhost:3001/cars?";

      Object.keys(urlRequest).forEach((element) => {
        if (urlRequest[element] != "") {
          url = url + element + "=" + urlRequest[element] + "&";
        }
      });

      url = url.slice(0, url.length - 1);

      console.log(url);

      let fetchData = await fetch(url);
      let data = await fetchData.json();

      handleTotalPages(data.data.count);

      setIsLoading(false);

      return data.data.carsData;
    } catch (error) {
      return (
        <div>
          <h1>404 Not Found</h1>
        </div>
      );
    }
  }

  return (
    <MainContext.Provider
      value={{
        isAuth,
        setIsAuth,
        isLoading,
        setIsLoading,
        request,
        setRequest,
        totalPages,
        setTotalPages,
        handleTotalPages,
        total,
        setTotal,
        price,
        setPrice,
        getData,
      }}
    >
      {children}
    </MainContext.Provider>
  );
}
