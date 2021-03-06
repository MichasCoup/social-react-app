import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrentProfile, deleteAccount } from "../../actions/profileAction";
import Spinner from "../common/Spinner";
import ProfileActions from './ProfileActions';
import Experience from '../credentials/Experience';
import Education from '../credentials/Education';

class Dashboard extends Component {
	componentDidMount() {
		this.props.getCurrentProfile();
	}

	onDeleteClick(e){
		this.props.deleteAccount();
	}


	render() {

		const { user } = this.props.auth;
		const { profile, loading } = this.props.profile;

		let dashboardContent;

		if(profile === null || loading === true) {
			dashboardContent = <Spinner/>;
		} else {
			// Check if logged in user has profile data
			if(Object.keys(profile).length >0) {
				dashboardContent = (
					<div>
						<p className="lead text-muted">Welcome <Link to={`/profile/${profile.handle}`}>{ user.name }</Link></p>
						<ProfileActions />
						<Experience experience={profile.experience}/>
						<div className="btn-group mb-4" role="group">
							<Link to="/add-experience" className="btn btn-light">
								<i className="fa fa-black-tie text-info mr-1"></i>
								Add Experience</Link>
						</div>
						<div style={{marginBottom: '30px'}} />

						<Education education={profile.education}/>
						<div className="btn-group mb-4" role="group">
							<Link to="/add-education" className="btn btn-light">
								<i className="fa fa-graduation-cap text-info mr-1"></i>
								Add Education
							</Link>
						</div>

						<div style={{marginBottom: '60px'}} />
							<button onClick={this.onDeleteClick.bind(this)} className="btn btn-danger">Delete My Account</button>
					</div>
				)
			} else {
				// User is logged in but has no Profile
				dashboardContent =(
					<div>
						<p className="lead text-muted">Welcome { user.name }</p>
						<p>You have not yet setup a profile, please add some info</p>
						<Link to="/create-profile" className="btn btn-lg btn-info">Create Profile</Link>
					</div>
			)
			}
		}

		return (
			<div className="dashboard">
				<div className="container">
					<div className="row">
						<div className="col-md-8 m-auto">
							<h1 className="display-4 text-center">Dashboard</h1>
							{dashboardContent}
						</div>
					</div>
				</div>
			</div>
		);
	}
}

Dashboard.propTypes = {
	getCurrentProfile: PropTypes.func.isRequired,
	deleteAccount: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired,
	profil: PropTypes.object
};

const mapStateToProps = state => ({
	profile: state.profile,
	auth: state.auth
});

export default connect(mapStateToProps, { getCurrentProfile, deleteAccount })(Dashboard);
