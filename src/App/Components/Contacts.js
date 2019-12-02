import React from 'react'

import axios from 'axios'
class Contacts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {name: '', email: '', subject:'', inquiry:'', submitted:false};

    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangeSubject = this.handleChangeSubject.bind(this);
    this.handleChangeInquiry = this.handleChangeInquiry.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeName(event) {
    this.setState({name: event.target.value});
  }
  handleChangeEmail(event) {
    this.setState({email: event.target.value});
  }
  handleChangeSubject(event) {
    this.setState({subject: event.target.value});
  }
  handleChangeInquiry(event) {
    this.setState({inquiry: event.target.value});
  }


  handleSubmit(event) {
  	var instance = axios.create({
  	  baseURL: 'http://localhost:8080'
  	});
    event.preventDefault();
    instance({
      method: 'post',
      url: '/contact',
      data: {
        firstName: 'Fred',
        lastName: 'Flintstone'
      }
    });
   	instance.post(`/contact`, {params: { testing: "1 2 3 testing"} })
   	.then ((response) => {
   		this.setState({submitted:true})
   	})
  }

  render() {
  	if (this.state.submitted){
  		return(
  			<div style={{position: "absolute", height: "100vh", width: "100%", marginLeft: "15%", top: 0}}>
  				<h2 style={{margin: "20vh auto 0 35%", textAlign: "center", width: "300px"}}>Thank you! We have received your inquiry and will get back to you within 24 hours</h2>
  			</div>
  			)
  	}
  	else{
	    return (
	     <div style={{position: "absolute", height: "100vh", width: "100%", marginLeft: "15%", top: 0}}>
	      <form onSubmit={(event) => this.handleSubmit(event)}>
	        <div style={{width: "301px", marginLeft: "35%"}} >
	          Name:
	          <input type="text" value={this.state.name} onChange={this.handleChangeName} />
	          E-mail:
	          <input type="text" value={this.state.email} onChange={this.handleChangeEmail} />
	          Subject:
	          <input type="text" value={this.state.subject} onChange={this.handleChangeSubject} />
	          Inquiry:
	          <textarea style={{display: "block", width: "301px"}} value={this.state.inquiry} onChange={this.handleChangeInquiry} />
	          <input type="submit" value="Submit"/>
	        </div>

	        
	      </form>
	     </div>
	    );
	}
  }
}

export default Contacts;