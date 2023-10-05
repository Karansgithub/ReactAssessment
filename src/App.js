import "./App.css";
import { carsDetails } from "./data";
import { useState, useEffect } from "react";
import Home from "./pages/Home";
import { useLocation } from "react-router-dom";

function App() {
  const [page, setPage] = useState(0);
  const totalPages = carsDetails[0].total_pages - 1;
  const location = useLocation();
  const [val, setVal] = useState("");
  const allCars = carsDetails.flatMap((c) => c.cars);

  useEffect(() => {
    const page = location.pathname.split("=").at(-1);
    setPage(page);
  }, [location.pathname, val]);
  return (
    <div>
      <Home
        carsDetails={carsDetails}
        page={page}
        setPage={setPage}
        totalPages={totalPages}
        val={val}
        setVal={setVal}
        allCars={allCars}
      />
    </div>
  );
}

export default App;
