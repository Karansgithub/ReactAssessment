import React from "react";

const Navbar = ({ val, setVal }) => {
  return (
    <div className="py-3 border-b-2 border-b-gray-300 drop-shadow-md fixed top-0 inset-x-0 bg-white items-center justify-center">
      <div className="flex items-center justify-center">
        <input
          type="text"
          placeholder="Search..."
          className="px-4 pr-20 rounded-full mr-8 focus:outline-none border-black border-2  "
          value={val}
          onChange={(e) => setVal(e.target.value)}
        />
        <button className="bg-white text-blue-500 px-4 rounded-full border-2 border-black hover:bg-blue-200 ">
          Search
        </button>
      </div>
    </div>
  );
};

export default Navbar;
