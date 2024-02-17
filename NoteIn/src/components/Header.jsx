import React from "react";

const Header = () => {
  return (
    <div className="header">
      <h1
        className="text-4xl font-bold"
        style={{ color: "whitesmoke", marginBottom: "10px" }}
      >
        NoteIn
      </h1>
      <h5 className="text-xl typewriter" style={{ color: "white" }}>
        The simplest way to share text online
      </h5>
    </div>
  );
};

export default Header;
