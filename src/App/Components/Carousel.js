import React, { Component } from 'react';

class Carousel extends Component {
	constructor(props) {
		super(props);
		this.state = {image_index: 0}
	}
	incrementImage(){
		this.setState({image_index: this.state.image_index + 1})
	}
	componentDidMount(){
		window.setInterval(() => {
			if (this.state.image_index < this.props.images.length - 1) {
				this.setState({image_index: this.state.image_index + 1})
			}
			else {
				this.setState({image_index: 0})
			}
		}
		, 4500);
	}
	render() {
		let images = this.props.images.map( (image, index) => {
			let display_value = "none"
			if (index === this.state.image_index) {
				display_value = "block"
			}
			if (index === (this.state.image_index + 1) % this.props.images.length - 1) {
				display_value = "block"
			}
			let img_src = require("../Assets/Images/" + image + ".jpg")
			return (<img key={index} alt={image} className="image-asset" data-index={index} style={{position: "absolute", height: "100vh", width: "100%", border: "1px solid black", marginLeft: "15%", display: display_value, top: 0}} src={img_src} />)
		})
		return (<div style={{top: 0}}>{images}</div>)
	}
}
export default Carousel;