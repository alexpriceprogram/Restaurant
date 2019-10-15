import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Sidebar from './App/Components/Sidebar.js'
import Carousel from './App/Components/Carousel.js'
import Menu from './App/Components/Menu.js'
import MainContent from './App/Components/MainContent.js'


class App extends Component {
  constructor(props) {
  	console.log(">??")
  	super(props)
  	this.state = {page: "Menu"}
  	this.changeContent = this.changeContent.bind(this)
  }

  changeContent(event) {
  	console.log(event.target.dataset.content)
  	this.setState({page: event.target.dataset.content})
  }	
  render() {
    return (
      <div>
        <Sidebar contentSwitch={this.changeContent} />
        <MainContent page={this.state.page} />

      </div>
    )

  }
}

export default App;
