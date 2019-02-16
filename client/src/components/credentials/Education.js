import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import { deleteEducation } from '../../actions/profileAction'

class Education extends Component {

	onDeleteClick(id) {
		this.props.deleteEducation(id);
	}

	render() {
		const education = this.props.education.map(edu => (
			<tr key={edu._id}>
				<td>{edu.school}</td>
				<td>{edu.degree}</td>
				<td>
					<Moment format="MM/YYYY">{edu.from}</Moment> -
					{edu.to === '' ? (' Now') : (<Moment format="MM/YYYY">{edu.to}</Moment>)}
				</td>
				<td><button onClick={this.onDeleteClick.bind(this, edu._id)} className="btn btn-danger"><i className="fa fa-trash"></i></button></td>
			</tr>
		));
		return (
			<div>
				<h4 className="mb-4">Education</h4>
				<table className="table">
					<thead>
					<tr>
						<th>Company</th>
						<th>Title</th>
						<th>Years</th>
						<th />
					</tr>
					{education}
					</thead>
				</table>
			</div>
		);
	}
}

Education.propTypes = {
	deleteEducation: PropTypes.func.isRequired
};

export default connect(null, { deleteEducation })(Education);