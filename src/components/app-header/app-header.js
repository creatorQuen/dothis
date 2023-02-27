import React from "react";
import './app-header.css';

const AppHeader = ({doThis, done}) => {
  return (
    <div className="app-header d-flex">
      <h1>DoThis List</h1>
      <h2>{doThis} more to do, {done} done</h2>
    </div>
  );
};

export default AppHeader;