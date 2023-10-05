import React from "react";
import { GoPeople } from "react-icons/go";
import { BsFuelPumpFill } from "react-icons/bs";
import { GiSpeedometer } from "react-icons/gi";
import { RiSteeringLine } from "react-icons/ri";
import { AiOutlineHeart } from "react-icons/ai";

const CardItem = ({ car }) => {
  return (
    <div
      className="flex flex-col justify-between
    hover:scale-110 transition duration-300 ease-in gap-3 p-4 mt-10 ml-5 rounded-xl outline"
    >
      <figure>
        <img
          src={car.image_link}
          alt={car.id}
          className="w-100% rounded-2xl"
          loading="lazy"
          width="440"
          height="300"
        />
      </figure>
      <div className="pt-20px pr-10px pb-10px">
        <div className="flex justify-between -mt-2 mb-4 font-bold ">
          <p>
              {car.make} {car.model}
          </p>
          <div
            className="text-gray-700 border-2 border-gray-700 rounded-full border-dashed font-semibold 
          text-[12px] p-1 px-3 uppercase"
          >
            {car.year}
          </div>
        </div>
        <div className="flex justify-between m-1">
          <div className="flex space-x-2">
            <GoPeople className="mt-1" />
            <span>{car.seats} People </span>
          </div>
          <div className="flex space-x-2">
            <BsFuelPumpFill className="mt-1" />
            <span>{car.fuel_type}</span>
          </div>
        </div>
        <div className="flex justify-between m-1">
          <div className="flex space-x-2">
            <GiSpeedometer className="mt-1" />

            <span>{car.mileage_per_liter}/ 1-litre</span>
          </div>
          <div className="flex space-x-2">
            <RiSteeringLine className="mt-1" />

            <span>{car.transmission_type}</span>
          </div>
        </div>
        <div className="h-0.5 bg-black mt-2 ml-5 mr-5 rounded-lg"> </div>
        <div className="flex justify-between mt-2">
          <div>
            <p>
              <strong>${car.price_per_day}</strong> / month
            </p>
          </div>
          <div className="flex space-x-2">
            <AiOutlineHeart className="mt-1.5" />
            <button
              className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold 
          text-[12px] p-1 px-3 uppercase 
          hover:bg-gray-700
          hover:text-white transition duration-300 ease-in"
            >
              Rent now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
