import React, { Component } from 'react';

class CurrentDateTime extends Component {
	constructor(props) {
		// console.log('constructor');
		super(props);
		this.state = {
			dateTime: new Date(),
		};
	}

	componentDidMount() {
		// console.log('componentDidMount');
		// This method is called whenever the component is rendered
		// in the DOM.
		// There are many different ways we might want to use this method, such as:
		// - fetching data
		// - adding event listeners
		// - starting timers
		// - etc

		// To share values between methods, we need to add instance properties
		// to the `this` object.
		// Here we are storing the id of the interval that was started within the
		// componentDidMount method
		// So that we can use that id to clear the interval when the component
		// unmounts. i.e. when componentWillUnmount is called
		this.intervalId = setInterval(() => {
			// console.log('updateTime');
			this.setState({
				dateTime: new Date(),
			});
		}, 1000);
	}

	componentDidUpdate() {
		// console.log('componentDidUpdate');
	}

	componentWillUnmount() {
		// console.log('componentWillUnmount');
		// This method is called before the component is removed from the DOM
		// Use it to clean up setIntervals, setTimeouts, event listeners, etc

		// console.log('this.intervalId', this.intervalId);

		// `clearInterval` is a method built in to the browser API
		// that allows to stop the interval with the given intervalId
		clearInterval(this.intervalId);
	}

	render() {
		// console.log('render');
		return (
			<div className="CurrentDateTime">
				{this.state.dateTime.toLocaleString()}
			</div>
		);
	}
}

export default CurrentDateTime;
