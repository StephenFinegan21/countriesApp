import React from "react";

const Filter = ({ onChange }) => {
  return (
    <>
      <div className="filter">
        <input onChange={onChange} placeholder={"Search"}></input>
      </div>
      
    </>
  );
};

export default Filter;
