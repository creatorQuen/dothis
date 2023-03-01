import React from "react";

import DoThisItem from "../dothis-list-item";
import './dothis-list.css';

const DoThisList = ({ doThises, onDeleted, 
  onToggleImportant, onToggleDone }) => {

const elements = doThises.map((item) => {

  const {id, ...itemProps } = item;

  return (
    <li key={id} className="list-group-item">
      {/* Previos: */}
      {/* <DoThisItem 
        label={item.label}
        important={item.important}
      /> */}

      {/* Spread operator for object: */}
      <DoThisItem 
        { ...itemProps } 
        onDeleted={()=> onDeleted(id)}
        onToggleImportant={()=> onToggleImportant(id)}
        onToggleDone={()=> onToggleDone(id)}
      />
  </li>
  );
});

  return (
    <ul className="list-group dothis-list">
      { elements }
    </ul>
  );
};

export default DoThisList;