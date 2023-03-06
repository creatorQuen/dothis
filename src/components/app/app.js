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
      this.createDoThisItem('Know about React'),
      this.createDoThisItem('Build applitcation'),
      this.createDoThisItem('Deploy to the server')
    ],
    term: ''
  };

  createDoThisItem(label) {
    return {
      label,
      important: false,
      done: false,
      id: this.maxId++
    }
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
  };

  addItem = (text) => {
    const newItem = this.createDoThisItem(text);

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


  toggleProperty(arr, id, propName) {
    // 1 update
    const idx = arr.findIndex((el) => el.id === id);
    const oldItem = arr[idx];
    const newItem = {...oldItem, 
      [propName]: !oldItem[propName]};
    
    // 2 new array
    return [
      ...arr.slice(0, idx),
      newItem,
      ...arr.slice(idx + 1)
    ];
  };

  onToggleImportant = (id) => {
    this.setState(({doThisData}) => {
      return {
        doThisData: this.toggleProperty(doThisData, id, 'important')
      };
    });
    //console.log('ToggleImportant', id);
  };

  onToggleDone = (id) => {
    this.setState(({doThisData}) => {
      return {
        doThisData: this.toggleProperty(doThisData, id, 'done')
      };
    });
    //console.log('ToggleDone', id);
  };

  onSearchChange = (term) => {
    this.setState({ term });
  };

  search(items, term) {
    if (term.length === 0) {
      return items;
    }

    return items.filter((item) => {
      // return item.label
      //   .toLowCase()
      //   .indexOf(term.toLowCase()) > -1;

      return item
        .label
        .toLowerCase().indexOf(term.toLowerCase()) > -1;
    });
  };

  render() {

    const { doThisData, term } = this.state
    const doneCount = doThisData
                      .filter((el) => el.done).length;

    const visibleItems = this.search(doThisData, term);
    const doThisCount = doThisData.length - doneCount;

    return(
      <div className="dothis-app">
        <AppHeader doThis={doThisCount} done={doneCount}/>
        <div className="top-panel d-flex">
          <SearchPanel 
            onSearchChange={this.onSearchChange}
          />
          <ItemStatusFilter />
        </div>
  
        <DoThisList 
          doThises={visibleItems} 
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
