import React, { Component } from 'react';
import './App.css';

import SideBar from './SideBar';
import NavBar from './NavBar';
import Main from './Main';

class App extends Component {

  onTabClick(event) {
    let tab = document.getElementsByClassName("active");
    tab[0].classList.remove("active");    
     
    event.target.classList.add("active");
  }

  render() {
    return (
      <div className="App">
        <SideBar />
        <NavBar tabclick={this.onTabClick}/>
        <Main />
      </div>
    );
  }
}

export default App;
