import React from "react";
import DoThisItem from "./dothis-list-item";

const DoThisList = () => {
  return (
    <ul>
      <li><DoThisItem label="Learn REACT"/></li>
      <li><DoThisItem 
        label="Build application" 
        important
        /></li>
    </ul>
  );
};

export default DoThisList;