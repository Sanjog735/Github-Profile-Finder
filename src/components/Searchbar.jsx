import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";

const Searchbar = ({ onSearch }) => {
  const [input, setInput] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (input.trim() !== "") {
      onSearch(input);
    }
  };

  return (
    <form
      onSubmit={handleSearch}
      className="flex items-center mx-auto w-[80%] rounded-md  shadow-lg  px-3 py-2 mt-6"
    >
      <div className="relative w-full">
        <CiSearch className="absolute left-3 top-3 h-5 w-5 text-blue-500 font-bold " />
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Search..."
          className="  w-full pl-10 focus:outline-none focus:border-transparent rounded-md py-2"
        />
      </div>
      <button
        onClick={handleSearch}
        type="submit"
        className="ml-2 text-sm font-medium text-white  bg-[#0079ff] hover:bg-[#69a9f4] transition-all duration-200  focus:outline-none  rounded-md px-2 py-2 md:px-5 md:py-3 md:text-[16px]"
      >
        Search
      </button>
    </form>
  );
};

export default Searchbar;
