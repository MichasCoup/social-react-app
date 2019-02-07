import React, {Component} from 'react';
// import PropTypes from 'prop-types';

class Footer extends Component {
	render() {
		return (
			<footer className="bg-dark text-white mt-5 p4 text-center">
				Copyright &copy; {new Date().getFullYear()} DevConnector
			</footer>
		);
	}
}

// MyComponent.propTypes = {};

export default Footer;
