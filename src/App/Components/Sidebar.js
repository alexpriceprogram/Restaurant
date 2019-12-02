import React, { Component } from 'react';

class Sidebar extends Component {
	render() {
		return (
			<div style={{top: 0, position: "fixed", height: "100%", width: "15%", border: "1px solid black", textAlign: "center"}}>
				<h1>Elmer's Eatery</h1>
				<h2>11132 Oregon Avenue, <br/>White Marsh, MD 21162</h2>
				<ul style={{marginTop: 0, listStyleType: "none"}}>
					<li data-content="Menu" onClick={(e) => this.props.contentSwitch(e)} >Menus</li>
					<li data-content="Information" onClick={(e) => this.props.contentSwitch(e)}>Information</li>
					<li data-content="Careers" onClick={(e) => this.props.contentSwitch(e)}>Careers</li>
					<li data-content="Contacts" onClick={(e) => this.props.contentSwitch(e)}>Contacts</li>
				</ul>
			</div>
		)	
	}
}
export default Sidebar;