import React, { Component } from 'react';

import { CardList } from './component/card-list/card-list.component';
import { SearchBox } from './component/search-box/search-box.component';

import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state = {
      monsters: [],
      searchField: '' 
    };
  }

  componentDidMount() {
    fetch('http://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(name => this.setState({ monsters: name }))
  }

  handleChange = e => { 
    this.setState({searchField: e.target.value })
  }


  render() {
    // misma cosa que decir
    // const monsters = this.state.monsters;
    // const searchField = this.state.searchField;
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
      )
    return (
      <div className="App">
        <h1> User Rolodex </h1>
        <SearchBox
          placeholder="search monsters" 
          handleChange= {this.handleChange} 
          ></SearchBox>
        <CardList monsters= {filteredMonsters}/>
      </div>
    );
  }
}


export default App;
