import React, { Component } from 'react';

class MenuItem extends Component {
	render() {
		let maxWidth = 400
		let maxWidthPx = maxWidth.toString() + "px"
		let diminishedWidthPx = (maxWidth * 0.8).toString() + "px"

		return(
			<div style={{width: "30%", display: "inline-block", margin: "10px", verticalAlign: "top"}}>
					<h2 style={{maxWidth: maxWidthPx, textAlign: "left"}}>{this.props.item.name}</h2>
					<p style={{maxWidth: diminishedWidthPx, textAlign: "left"}}> {this.props.item.description}</p>
					<p style={{maxWidth: diminishedWidthPx, textAlign: "right"}}> ${this.props.item.price}</p>
			</div>
		)
	}
}


export default MenuItem;