import React from "react";

import './dothis-list-item.css';

/*
const DoThisItem = (props) => {
  return <span>{ props.lable }</span>
}
*/

// Destructuirng:
const DoThisItem = ({label, important = false}) => {
  const listStyle = {
    color: important ? 'steelblue' : 'black',
    fontWeight: important ? 'bold' : 'normal'
  };

  return (
    <span className="dothis-list-item">
        <span 
          className="dothis-list-item-label"
          style={listStyle}>
          { label }
        </span>

        <button type="button"
              className="btn btn-outline-success btn-sm float-right">
          <i className="fa fa-exclamation" />
        </button>

        <button type="button"
                className="btn btn-outline-danger btn-sm float-right">
          <i className="fa fa-trash-o" />
        </button>
    </span>
  );
};

export default DoThisItem;