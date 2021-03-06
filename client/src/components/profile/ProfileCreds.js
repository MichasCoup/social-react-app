import React, {Component} from 'react';
import Moment from 'react-moment';
import isEmpty from "../../validation/is-empty";

class ProfileCreds extends Component {
	render() {
		const { experience, education} = this.props;

		const expItems = experience.map( exp => (
			<li key={exp._id} className="list-group-item">
				<h4>{exp.company}</h4>
				<p>
					<Moment format="MM/YYYY">{exp.from}</Moment> -
					{exp.to === '' ? (' Now') : (<Moment format="MM/YYYY">{exp.to}</Moment>)}
				</p>
				<p>
					<strong>Position:</strong> {exp.title}
				</p>
				{exp.location === '' ? null : (<span><strong>Location:</strong> {exp.location}</span>)}
				{exp.description === '' ? null : (<span><strong>Description:</strong> {exp.description}</span>)}
			</li>
		));
		const eduItems = education.map( edu => (
			<li key={edu._id} className="list-group-item">
				<h4>{edu.school}</h4>
				<p>
					<Moment format="MM/YYYY">{edu.from}</Moment> -
					{edu.to === '' ? (' Now') : (<Moment format="MM/YYYY">{edu.to}</Moment>)}
				</p>
				<p>
					<strong>Degree:</strong> {edu.degree}
				</p>				<p>
					<strong>Field of study:</strong> {edu.fieldofstudy}
				</p>
				{edu.location === '' ? null : (<span><strong>Location:</strong> {edu.location}</span>)}
				{edu.description === '' ? null : (<span><strong>Description:</strong> {edu.description}</span>)}
			</li>
		));
		return (
			<div className="row">
				<div className="col-md-6">
					<h3 className="text-center text-info">Experience</h3>
					{isEmpty(experience) ? (<p className="text-center">User does not added any experiences</p>) : (<ul className="list-group">{expItems}</ul>)}
				</div>
				<div className="col-md-6">
					<h3 className="text-center text-info">Education</h3>
					{isEmpty(education) ? (<p className="text-center">User does not added any education programs</p>) : (<ul className="list-group">{eduItems}</ul>)}

				</div>
			</div>
	);
	}
}


export default ProfileCreds;
