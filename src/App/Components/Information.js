import React, { Component } from 'react';

class Information extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		let sideImage = require("../Assets/Images/table-for-two.jpg")
		return(
		<div >
			<div style={{width: "42%", display: "inline-block", marginLeft: "15%", textAlign:"left", position: "absolute", top: "25%", left: "3%"}}>
				<h1 style={{borderBottom: "2px solid #0060a1" ,paddingBottom:"1rem"}}> Hours & Location </h1>
				<h3 style={{color:"blue"}}> 11132 Oregon Avenue, White Marsh, MD 21162 </h3>
				<h3> Breakfast Hours </h3>
				Sunday-Saturday  //  7:30 am – 11:30 am
				<h3> Lunch Hours </h3>
				Sunday-Saturday  //  11:30 am – 5:30 pm
				<h3> Dinner Hours </h3>
				Sunday-Saturday  //  5:30 pm – 12:00 am
			</div>
			<div style={{marginLeft: "55%", position: "absolute", top: "0", display: "inline-block", width: "45%"}}>
				<img style={{width: "100%", height: "auto"}} src={sideImage}/>
			</div>
		</div>
			)
	}
}
export default Information;