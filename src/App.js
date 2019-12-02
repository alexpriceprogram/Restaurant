import React, { Component } from 'react';
import './App.css';
import Sidebar from './App/Components/Sidebar.js'
import MainContent from './App/Components/MainContent.js'


class App extends Component {
  constructor(props) {
  	super(props)
  	this.state = {page: "Menu"}
  	this.changeContent = this.changeContent.bind(this)
  }

  changeContent(event) {
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
