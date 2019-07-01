import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Sidebar from './App/Components/Sidebar.js'
import Carousel from './App/Components/Carousel.js'


class App extends Component {
  render() {
    return (
      <div>
        <Sidebar/>
        <Carousel images = {["burger", "cake", "justshells", "meatlemon", "pancakes", "quiche", "salad"]}/>
      </div>
    )

  }
}

export default App;
