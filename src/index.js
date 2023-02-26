import React from 'react';
import ReactDOM from 'react-dom';

import AppHeader from './components/app-header';
import SearchPanel from './components/search-panel';
import DoThisList from './components/dothis-list';
import ItemStatusFilter from './components/item-status-filter';

const App = () => {
  const doThisData = [
    {id: 1, label: 'Know about React', important: false},
    {id: 2, label: 'Build applitcation', important: true},
    {id: 3, label: 'Deploy to the server', important: false}
  ];

  return(
    <div className="dothis-app">
      <AppHeader doThis={1} done={3}/>
      <div className="top-panel d-flex">
        <SearchPanel />
        <ItemStatusFilter />
      </div>

      <DoThisList doThises={doThisData} />
    </div>
  );
};

ReactDOM.render(<App />, 
  document.getElementById('root'));
