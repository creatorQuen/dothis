import React from 'react';
import ReactDOM from 'react-dom';

import AppHeader from './components/app-header';
import SearchPanel from './components/search-panel';
import DoThisList from './components/dothis-list';

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
