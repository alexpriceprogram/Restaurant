import React, { Component } from 'react';
import Card from 'react-bootstrap/Card'

class JobCard extends Component {
	constructor(props) {
		console.log(props)
		super(props);
	}
	render() {

		return(
			<div style={{width: "50%"}}>
<Card>
<Card.Body>
    <Card.Title>{this.props.job.title}</Card.Title>
    	<Card.Text>
			{this.props.job.description}
    	</Card.Text>
</Card.Body>
</Card>
</div>
		)
	}
}


export default JobCard;