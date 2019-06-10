import React, { Component } from 'react';

class Sidebar extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div style={{position: "fixed"}}>
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