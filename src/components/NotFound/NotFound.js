import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
// import { BrowserHistory } from 'react-router';
import './NotFound.css';

class NotFound extends Component {
	
	handleBack = () => {
		this.props.history.goBack()
	}
	
	render() {
		return (
			<div className="rmdb-notfound">
				<p>Whoops! This page route doesnot exist</p>
				<button onClick={this.handleBack} className="rmdb-notfoundbtn">Go Back</button>
			</div>
		);
	}
}

export default withRouter(NotFound);