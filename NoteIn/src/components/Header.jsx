import React from "react";

const Header = () => {
  return (
    <div className="header">
      <h1
        className="text-6xl font-bold"
        style={{ color: "black", marginBottom: "10px" }}
      >
        NoteIn
      </h1>
      <h5 className="text-4xl" style={{ color: "black" }}>
        The simplest way to share text online
      </h5>
    </div>
  );
};

export default Header;
