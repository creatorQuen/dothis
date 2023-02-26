import React from "react";
import DoThisItem from "./dothis-list-item";

const DoThisList = ({ doThises }) => {

const elements = doThises.map((item) => {

  const {id, ...itemProps } = item;

  return (
    <li key={id}>
      {/* Previos: */}
      {/* <DoThisItem 
        label={item.label}
        important={item.important}
      /> */}

      {/* Spread operator for object: */}
      <DoThisItem { ...itemProps } />
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