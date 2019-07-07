import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Sidebar from './App/Components/Sidebar.js'
import Carousel from './App/Components/Carousel.js'
import Menu from './App/Components/Menu.js'
import Button from 'react-bootstrap/Button';
import Information from './App/Components/Information.js'


class App extends Component {
  render() {
    return (
      <div>
        <Sidebar/>
        <Information style={{top:0}}/>

      </div>
    )

  }
}

export default App;
