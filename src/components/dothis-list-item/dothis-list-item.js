import React, { Component } from "react";

/*
const DoThisItem = (props) => {
  return <span>{ props.lable }</span>
}
*/

import './dothis-list-item.css';

export default class DoThisItem extends Component {

  // constructor() {
  //   super();

  //   this.state = {
  //     done: false
  //   };
  //   this.onLabelClick = () => {
  //     this.setState({
  //       done: true
  //     });
  //   };
  //    //onClick={ this.onLabelClick }>
  // }

  state = {
    done: false,
    important: false
  };

  // onLabelClick = () => {
  //   this.setState({
  //       done: true
  //   });
  // }

  // onMarkImportant = () => {
  //   this.setState({
  //     important: true
  //   });
  // };

  onLabelClick = () => {
    this.setState(({done}) => {
      return {
        done: !done
      }
    });
  }

  onMarkImportant = () => {
    this.setState((state) => {
      return {
        important: !state.important
      };
    });
  };

  
  render() {
    const {label} = this.props;
    const { done, important } = this.state;

    let classNames = 'dothis-list-item';
    if(done) {
      classNames += ' done';
    }

    // const listStyle = {
    //   color: important ? 'steelblue' : 'black',
    //   fontWeight: important ? 'bold' : 'normal'
    // };

    if (important) {
      classNames += ' important';
    }


    return (
      <span className={classNames}>
          <span 
            className="dothis-list-item-label"
            //onClick={ () => console.log(`Done: ${label}`)}>
            //onClick={ this.onLabelClick }>
            //onClick={this.onLabelClick.bind(this) }>
            onClick={ this.onLabelClick }>
            { label }
          </span>

          <button type="button"
                className="btn btn-outline-success btn-sm float-right"
                onClick={this.onMarkImportant}>
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