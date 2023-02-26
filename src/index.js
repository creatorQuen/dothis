import React from 'react';
import ReactDOM from 'react-dom';
import AppHeader from './components/app-header';
import SearchPanel from './components/search-panel';
import DoThisList from './components/dothis-list';

const App = () => {
  const doThisData = [
    {label: 'Know about React', important: false},
    {label: 'Build applitcation', important: true},
    {label: 'Deploy to the server', important: false}
  ];

  return(
    <div>
      <AppHeader />
      <SearchPanel />
      <DoThisList doThises={doThisData} />
    </div>
  );
};

ReactDOM.render(<App />, 
  document.getElementById('root'));
