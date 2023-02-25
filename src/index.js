import React from 'react';
import ReactDOM from 'react-dom';

//const hw = <h1>Hello World!</h1>
//const hw = React.createElement('h1', null, 'Hello World!')
const hw = (
<div>
  <h1>My Todo list</h1>
  <input placeholder='search' />
  <ul>
    <li>Learn React</li>
    <li>Build Application</li>
  </ul>
</div>
);

ReactDOM.render(hw, 
  document.getElementById('root'));
