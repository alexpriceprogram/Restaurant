import React, { Component } from 'react';
import JobInfo from './JobInfo.js'
//import Card from 'react-bootstrap/Card'

class Careers extends Component {
		constructor(props) {
		super(props);
	}
	render() {
		let sideImage = require("../Assets/Images/smiler.jpg")
		return(
		<div >
			<div style={{width: "42%", display: "inline-block", marginLeft: "15%", textAlign:"left", position: "absolute", top: "25%", left: "3%"}}>
				<h1> Positions Needed: </h1>
				<JobInfo />
				<p style={{fontSize: "16pt"}}>Contact us at hiring@elmersgrocer.com if you are a <br/> motivated, team-oriented worker and wish to apply!</p>
			</div>
			<div style={{marginLeft: "55%", position: "absolute", top: "0", display: "inline-block", width: "45%"}}>
				<img style={{width: "100%", height: "auto"}} src={sideImage}/>
			</div>
		</div>
			)
	}
}
export default Careers;