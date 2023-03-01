import React, { Component } from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import DoThisList from '../dothis-list';
import ItemStatusFilter from '../item-status-filter';
import ItemAddForm from '../item-add-form';

export default class App extends Component{

  maxId = 100;

  state = {
    doThisData: [
      {id: 1, label: 'Know about React', important: false},
      {id: 2, label: 'Build applitcation', important: true},
      {id: 3, label: 'Deploy to the server', important: false}
    ]
  };

  deleteItem = (id) => {
    this.setState(({doThisData})=> {
      const idx = doThisData.findIndex((el) => el.id === id);
      // console.log(idx);
      // doThisData.splice(idx, 1);

      const before = doThisData.slice(0, idx);
      const after = doThisData.slice(idx + 1);
      const newArray = [...before, ...after];

      return {
        doThisData: newArray
      };
    });
  }

  addItem = (text) => {
    const newItem = {
      label: text,
      important: false,
      id: this.maxId++
    };

    //console.log('Added', text);

    this.setState(({doThisData}) => {
      //doThisData.push(newItem);

      const newArr = [
        ...doThisData,
        newItem
      ];

      return {
        doThisData: newArr
      };
    });
  };

  onToggleImportant = (id) => {
    console.log('ToggleImportant', id);
  };

  onToggleDone = (id) => {
    console.log('ToggleDone', id);
  };

  render() {
    return(
      <div className="dothis-app">
        <AppHeader doThis={1} done={3}/>
        <div className="top-panel d-flex">
          <SearchPanel />
          <ItemStatusFilter />
        </div>
  
        <DoThisList 
          doThises={this.state.doThisData} 
          //onDeleted={ (id) => console.log('Del', id)}
          onDeleted={this.deleteItem}
          onToggleImportant={this.onToggleImportant}
          onToggleDone={this.onToggleDone}
          />

          <ItemAddForm onItemAdded={this.addItem}/>
      </div>
    );
  };
};
