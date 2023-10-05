import React from "react";
import CarItem from "./CardItem";

const Cards = ({ carsDetails, page }) => {
  return (
    <div className="flex flex-col gap-y-10 mt-6 mb-20">
      {carsDetails.length > 0 ? (
        <div className="grid  grid-cols-3 max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh]">
          {carsDetails[page].cars.map((car) => (
            <CarItem key={car.id} car={car} />
          ))}
        </div>
      ) : (
        <div className="flex justify-center items-center">
          <p>No Data Found</p>
        </div>
      )}
    </div>
  );
};

export default Cards;
