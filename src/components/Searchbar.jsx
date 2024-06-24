import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setSearch, fetchUser } from "../redux/slice/SearchSlice";
import { CiSearch } from "react-icons/ci";

const SearchBar = () => {
  const [searchTerm, setInputTerm] = useState("");
  const dispatch = useDispatch();

  const handleSearch = (event) => {
    setInputTerm(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // store the input
    dispatch(setSearch(searchTerm));
    try {
      await dispatch(fetchUser(searchTerm));
    } catch (error) {
      console.error("Error fetching user:", error.message);
      // Dispatch an action to update error state in the store if needed
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center mx-auto w-[80%] rounded-md  shadow-lg  px-3 py-2 mt-6"
    >
      <div className="relative w-full">
        <CiSearch className="absolute left-3 top-3 h-5 w-5 text-blue-500 font-bold " />
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearch}
          placeholder="Search GitHub Username"
          className={`w-full pl-10 focus:outline-none focus:border-transparent rounded-md py-2 `}
        />
      </div>
      <button
        onClick={handleSubmit}
        type="submit"
        className="ml-2 text-sm font-medium text-white  bg-[#0079ff] hover:bg-[#69a9f4] transition-all duration-200  focus:outline-none  rounded-md px-2 py-2 md:px-5 md:py-3 md:text-[16px]"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
