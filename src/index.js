import React from 'react';
import ReactDOM from 'react-dom';

//const hw = <h1>Hello World!</h1>
//const hw = React.createElement('h1', null, 'Hello World!')

const DoThisList = () => {
  return (
    <ul>
      <li>Learn React</li>
      <li>Build Application</li>
    </ul>
  );
};

const AppHeader = () => {
  return (
    <h1>My Do This list</h1>
  );
};

const SearchPanel = () => {
  return (
    <input placeholder='search' />
  );
};

const App = () => {
  return(
    <div>
      <AppHeader />
      <SearchPanel />
      <DoThisList />
    </div>
  );
};

ReactDOM.render(<App />, 
  document.getElementById('root'));
