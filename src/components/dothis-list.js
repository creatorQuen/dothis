import React from "react";
import DoThisItem from "./dothis-list-item";

const DoThisList = ({ doThises }) => {
const elements = doThises.map((item) => {
  return (
    <li>
      {/* Previos: */}
      {/* <DoThisItem 
        label={item.label}
        important={item.important}
      /> */}

      {/* Spread operator for object: */}
      <DoThisItem { ...item } />
  </li>
  );
});

  return (
    <ul>
      { elements }
    </ul>
  );
};

export default DoThisList;