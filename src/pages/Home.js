import React from "react";
import Navbar from "../components/Navbar";
import Cards from "../components/Cards";
import Pagination from "../components/Pagination";
import CardItem from "../components/CardItem";

const Home = ({
  page,
  setPage,
  totalPages,
  carsDetails,
  val,
  setVal,
  allCars,
}) => {
  const [make, model] = val.split(" ");
  const car = allCars.find((car) => car.make === make && car.model === model);
  return (
    <div>
      <Navbar val={val} setVal={setVal} />
      {make && model ? (
        car ? (
          <div className="grid  grid-cols-3 grid-rows-2 max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh] gap-y-10 mt-6 mb-20">
            <CardItem car={car} />
          </div>
        ) : (
          <div className="flex justify-center items-center min-h-[80vh]">
            <p>No Data Found</p>
          </div>
        )
      ) : (
        <div>
          <Cards carsDetails={carsDetails} page={page} />
        </div>
      )}
      <Pagination page={page} setPage={setPage} totalPages={totalPages} />
    </div>
  );
};

export default Home;
