import React, { Component } from "react";

/*
const DoThisItem = (props) => {
  return <span>{ props.lable }</span>
}
*/

import './dothis-list-item.css';

export default class DoThisItem extends Component {

  constructor() {
    super();
    
    this.onLabelClick = () => {
      console.log(`Done: ${this.props.label}`);
    }
    //onClick={ this.onLabelClick }>
  }

  //------------------Previos
  // onLabelClick() {
  //   console.log(`Done: ${this.props.label}`);
  // }

  render() {
    const {label, important = false} = this.props;

    const listStyle = {
      color: important ? 'steelblue' : 'black',
      fontWeight: important ? 'bold' : 'normal'
    };

    return (
      <span className="dothis-list-item">
          <span 
            className="dothis-list-item-label"
            style={listStyle}
            //onClick={ () => console.log(`Done: ${label}`)}>
            //onClick={ this.onLabelClick }>
            //onClick={this.onLabelClick.bind(this) }>
            onClick={ this.onLabelClick }>
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
  }
}

// Previos:
// const DoThisItem = ({label, important = false}) => {
//   const listStyle = {
//     color: important ? 'steelblue' : 'black',
//     fontWeight: important ? 'bold' : 'normal'
//   };

//   return (
//     <span className="dothis-list-item">
//         <span 
//           className="dothis-list-item-label"
//           style={listStyle}>
//           { label }
//         </span>

//         <button type="button"
//               className="btn btn-outline-success btn-sm float-right">
//           <i className="fa fa-exclamation" />
//         </button>

//         <button type="button"
//                 className="btn btn-outline-danger btn-sm float-right">
//           <i className="fa fa-trash-o" />
//         </button>
//     </span>
//   );
// };

// export default DoThisItem;