import React from 'react';
import ReactDOM from 'react-dom';

//const hw = <h1>Hello World!</h1>
//const hw = React.createElement('h1', null, 'Hello World!')

const DoThisList = () => {

  const items = ['Learn React 1', 'Build Application 2']
  return (
    <ul>
      <li>{items[0]}</li>
      <li>{items[1]}</li>
    </ul>
  );
};

const AppHeader = () => {
  return (
    <h1>My Do This list</h1>
  );
};

const SearchPanel = () => {
  // Atributes = properties:
  const searchText = 'Type here to search';
  // className=""     and    htmlFor=""

  const searchStyle = {
    fontSize: '22px'
  };


  return (
    <input 
    style={searchStyle}
    placeholder={searchText} 
    // disabled={true} same thing:
    disabled
    />
  );
};

const App = () => {

  const isLoggedIn = false;
  const loginBox =(<span>Log in please</span>);
  //const value = '<script>alter("")</script>';

  return(
    <div>
      {/* { value } */}
      { isLoggedIn ? null : loginBox}
      {/* <span>{(new Date().toString())}</span> */}
      <br></br>
      <AppHeader />
      <SearchPanel />
      <DoThisList />
    </div>
  );
};

ReactDOM.render(<App />, 
  document.getElementById('root'));
