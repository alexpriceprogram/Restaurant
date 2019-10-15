import React, { Component } from 'react';
import JobCard from './JobCard.js'
import Card from 'react-bootstrap/Card'

const job1 = {title: "Waiter", description: "Serves tables, Take orders from customers, Provide a friendly customer experience"}
const job2 = {title: "Kitchen", description: "Clean dishes, Clean kitchen, Cook food"}
const job3 = {title: "Host/Hostess", description: "Greets customers, Show customers to table, Provide a friendly customer experience"}

class JobInfo extends Component {
		constructor(props) {
		super(props);
	}
	render() {
		return (
		<div>
		<JobCard job={job1} />
		<JobCard job={job2} />
		<JobCard job={job3} />
		</div>
		)

	}
}
export default JobInfo;