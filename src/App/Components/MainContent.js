import React, { Component } from 'react';
import Information from './Information.js'
import Menu from './Menu.js'
import Carousel from './Carousel.js'
import Careers from './Careers.js'
import Contacts from './Contacts.js'

class MainContent extends Component {
	constructor(props) {
		super(props)
		this.state = {page: "Menu"}
	}


  render() {
  	if (this.props.page === "Menu") {
  		return (
  		  <div>
	  		  <Carousel images={["burger", "cake", "justshells", "meatlemon", "pancakes", "quiche", "salad"]}/>
	  		  <Menu />
  		  </div>
  		)
  	}
  	else if (this.props.page === "Careers") {
  		return (
  			<div>
  				<Careers />
  			</div>
  		)
  	}
  	else if (this.props.page === "Information") {
  		return (
  			<Information />
		)
  	}
  	else if (this.props.page === "Contacts") {
  		return (
  			<Contacts />
		)
  	}

  }
}

export default MainContent;
