import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";

const SearchBar = () => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <div className="w-full h-[5rem] flex justify-center items-center bg-transparent fixed bottom-0 px-5 z-10">
        {show ? (
          <div className="h-[3.2rem] w-4/5 rounded-3xl bg-white flex items-center justify-center m-0">
            <input
              type="text"
              autoFocus
              onBlur={(e) => setShow(false)}
              className="h-full w-4/5 m-0 focus:outline-none text-2xl text-center px-1 rounded-full"
            />
            {/* <div className="flex justify-center items-center h-full m-0">
              <span
                onClick={(e) => setShow(false)}
                className=" w-[1.5rem] h-[1.5rem] flex items-center justify-center text-2xl bg-red-600 rounded-full"
              >
                +
              </span>
            </div> */}
          </div>
        ) : (
          <div className="flex justify-end items-center w-full h-full mr-3">
            <div className="w-[3rem] h-[3rem] rounded-full flex items-center justify-center cursor-pointer bg-yellow-500">
              <AiOutlineSearch
                onClick={(e) => setShow(true)}
                style={{ fontSize: "27px" }}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
