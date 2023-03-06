import React, {Component} from "react";

import './search-panel.css';

export default class SearchPanel extends Component {

  state = {
    term: ''
  };

  onSearchChange = (e) => {
    const term = e.target.value;
    this.setState({term});
    this.props.onSearchChange(term);
  };

  render() {
  return (
    <input type="text"
      className="form-control search-input"
      placeholder="type here to search"
      value={this.state.term} 
      onChange={this.onSearchChange}
      />
  );
};
}

// const SearchPanel = () => {
//   const searchText = 'type here to search';

//   return (
//     <input type="text"
//       className="form-control search-input"
//       placeholder={searchText} 
//     />
//   );
// };

// export default SearchPanel;