import React, { Component } from 'react';
import Card from 'react-bootstrap/Card'

class JobCard extends Component {
	render() {
		return(
			<div style={{width: "50%"}}>
				<Card>
					<Card.Body>
					    <Card.Title>{this.props.job.title}</Card.Title>
					    <hr/>
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