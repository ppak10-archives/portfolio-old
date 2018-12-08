import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import {userActions} from '../actions';

class RegisterUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        firstName: '',
        lastName: '',
        username: '',
        password: '',
      },
      submitted: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const {name, value} = event.target;
    const {user} = this.state;
    this.setState({
      user: {
        ...user,
        [name]: value,
      }
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      submitted: true,
    });
    const {user} = this.state;
    const {register} = this.props;
    if(user.username && user.password) {
      register(user);
    }
  }

  render() {
    const {registering} = this.props;
    const {user, submitted} = this.state;
    return (
      <div className = "page-wrapper">
        <h1 className = "page-header">Register</h1>
        <form name = "form" onSubmit = {this.handleSubmit}>
          <div>
            <label>First Name</label>
            <input type = "text" 
              className = "form-control" 
              name = "firstName" 
              value = {user.firstName} 
              onChange = {this.handleChange} />
          </div>
          <div>
            <label>Last Name</label>
            <input type = "text"
              className = "form-control"
              name = "lastName" 
              value = {user.lastName}
              onChange = {this.handleChange} />
          </div>
          <div>
            <label>Username</label>
            <input type = "text"
              className = "form-control"
              name = "username"
              value = {user.username}
              onChange = {this.handleChange} />
            {submitted && !user.username && <div>Username is Required</div>}
          </div>
          <div>
            <label>Password</label>
            <input type = "password"
              className = "form-control"
              name = "password"
              value = {user.password}
              onChange = {this.handleChange} />
            {submitted && !user.password && <div>Password is Required</div>}
          </div>
          <div className = "form-group">
            <button>Register</button>
            {registering && <div>Registering...</div>}
            <Link to = "/login">Cancel</Link>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  registering: state.registration.registering
});

const mapDispatchToProps = (dispatch) => ({
  register: (user) => dispatch(userActions.register(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(RegisterUser);
