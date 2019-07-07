import React, { Component } from 'react';

class Information extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return(
			<div style={{marginLeft: "15%",position:"relative", textAlign:"left", top:"30vh", left:"5vw"}}>
			<h1> Hours & Location </h1>
			<h2 style={{color:"blue"}}> 11132 Oregon Avenue, White Marsh, MD 21162 </h2>
			<h3> Breakfast Hours </h3>
			Sunday-Saturday  //  7:30 am – 11:30 am
			<h3> Lunch Hours </h3>
			Sunday-Saturday  //  11:30 am – 5:30 pm
			<h3> Dinner Hours </h3>
			Sunday-Saturday  //  5:30 pm – 12:00 am
			</div>
			)
	}
}
export default Information;