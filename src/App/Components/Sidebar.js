import React, { Component } from 'react';

class Sidebar extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div style={{position: "fixed", height: "100%", width: "15%", border: "1px solid black", textAlign: "center"}}>
				<h1>Elmer's Eatery</h1>
				<h2>11132 Oregon Avenue, <br/>White Marsh, MD 21162</h2>
				<ul>
					<li><a>Menus</a></li>
					<li><a>Information</a></li>
					<li><a>Contact</a></li>
				</ul>
			</div>
		)	
	}
}
export default Sidebar;