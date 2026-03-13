import React, { useEffect, useRef } from "react";
import "./style.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const SearchBar = () => {
  const [message, setMessage] = useState();
  const buttonRef = useRef();
  const inputRef = useRef();

  const handleChange = (event) => {
    setMessage(event.target.value);
  };
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div className="flex justify-center items-center">
      <p
        style={{ color: "white" }}
        className="input input-bordered pl-4 pr-4 w-50 max-w-xs p-2.5 shad-white"
      >
        note-in.vercel.app/
      </p>

      <input
        type="text"
        placeholder="your-secret-page"
        className="input input-bordered w-full max-w-xs mr-4 shad-white"
        onChange={handleChange}
        ref={inputRef}
        style={{ color: "white" }}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            buttonRef.current.click();
          }
        }}
        value={message}
      />
      <NavLink to={`/${message}`}>
        <button
          className="btn btn-xs sm:btn-sm md:btn-md btn-grad shad-white"
          style={{ color: "white" }}
          ref={buttonRef}
        >
          Generate
        </button>
      </NavLink>
    </div>
  );
};

export default SearchBar;
