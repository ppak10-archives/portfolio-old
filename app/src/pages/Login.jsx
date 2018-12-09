/**
 * Login.jsx
 * Page to login user
 */

/**
 * Node Modules
 */

import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

/**
 * Actions
 */

import {userActions} from '../actions';

/**
 * Components
 */

import {AlertHeader} from '../components';

class LoginUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      submitted: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ 
      [name]: value 
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      submitted: true
    });
    const {username, password} = this.state;
    const {login} = this.props;
    if (username && password) {
      login(username, password);
    }
  }

  render() {
    const {loggingIn} = this.props;
    const {username, password, submitted} = this.state;
    return (
      <div className = "page-wrapper">
        <AlertHeader pageTitle = "Login" />
        <form name = "form" onSubmit = {this.handleSubmit}>
          <div>
            <label htmlFor="username">Username</label>
            <input type = "text" 
            className = "form-control" 
            name = "username" 
            value = {username} 
            onChange = {this.handleChange} />
            {submitted && !username && <div>Username is required</div>}
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input type = "password" 
            className = "form-control" 
            name = "password" 
            value = {password} 
            onChange = {this.handleChange} />
            {submitted && !password && <div>Password is required</div>}
          </div>
          <div>
            <button>Login</button>
            {loggingIn && <div>Logging in...</div>}
            <Link to = "/register">Register</Link>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  loggingIn: state.authentication.loggingIn,
});

const mapDispatchToProps = (dispatch) => ({
  login: (username, password) => {
    dispatch(userActions.login(username, password));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginUser);