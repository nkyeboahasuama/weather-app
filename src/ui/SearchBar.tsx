import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

const SearchBar = () => {
  return (
    <div>
      <div className="w-full h-[5rem] flex justify-end items-center bg-transparent fixed bottom-0 p-0">
        <div className="w-[4rem] h-[4rem] rounded-full flex items-center justify-center cursor-pointer bg-yellow-500">
          <AiOutlineSearch style={{ fontSize: "27px" }} />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
