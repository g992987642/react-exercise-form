import React, {Component} from 'react';
import './myProfile.less';

class MyProfile extends Component {

  state = {
	name: '',
	gender: 'male',
	description: '',
	haveReadConduct: false
  }
  handleChange = (field, event) => {
	this.setState(
		{
		  [field]: event.target.value
		}
	)
  }
  handleChecked = (event) => {
	this.setState(
		{
		  haveReadConduct: event.target.checked,
		}
	)
  }
  handleSubmit = (event) => {
	event.preventDefault();
	console.log(this.state)
  }

  render() {
	return (
		<div className="myProfile">
		  <p>MyProfile</p>
		  <form>
			<div className="form-group">
			  <label htmlFor="name">Name</label>
			  <input type="text" className="name" value={this.state.name} onChange={(event) => {
				this.handleChange('name', event)
			  }} placeholder="Your name"/>
			</div>
			<div className="form-group">
			  <label htmlFor="gender">Gender</label>
			  <select className="gender" value={this.state.gender} onChange={(event) => {
				this.handleChange('gender', event)
			  }}>
				<option value="male">Male</option>
				<option value="female">Female</option>
			  </select>
			</div>

			<div className="form-group">
			  <label htmlFor="description">Description</label>
			  <textarea className="description" placeholder="Description about yourself" value={this.state.description}
						onChange={(event) => {
						  this.handleChange('description', event)
						}}/>
			</div>

			<div className="form-group form-check">
			  <input type="checkbox" className="form-check-input" id="exampleCheck1" value={this.state.haveReadConduct}
					 onChange={(event) => {
					   this.handleChecked(event)
					 }}/>
			  <label className="form-check-label" htmlFor="exampleCheck1">I have read the terms of conduct</label>
			</div>
			<button type="submit" className="submit"
					onClick={(event) => this.handleSubmit(event)}
					disabled={!this.state.name || !this.state.description || !this.state.haveReadConduct}>Submit
			</button>
		  </form>
		</div>

	);
  }
}

export default MyProfile;


