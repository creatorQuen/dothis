import React from "react";

/*
const DoThisItem = (props) => {
  return <span>{ props.lable }</span>
}
*/

// Destructuirng:
const DoThisItem = ({label, important = false}) => {
  const listStyle = {
    color: important ? 'red' : 'black'
  };

  return <span style={listStyle } >{ label }</span>
}

export default DoThisItem;