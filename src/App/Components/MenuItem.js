import React, { Component } from 'react';


class MenuItem extends Component {
	constructor(props) {
		console.log(props)
		super(props);
	}
	render() {
		let nameId = this.props.item.id + "-name"
		let maxWidth = 400
		let maxWidthPx = maxWidth.toString() + "px"
		let diminishedWidthPx = (maxWidth * 0.8).toString() + "px"

		return(
			<div style={{width: "30%", display: "inline-block", margin: "10px"}}>
					<h2 style={{maxWidth: maxWidthPx}}>{this.props.item.name}</h2>
					<p style={{maxWidth: diminishedWidthPx}}> {this.props.item.description}</p>
					<p> ${this.props.item.price}</p>
			</div>
		)
	}
}


export default MenuItem;