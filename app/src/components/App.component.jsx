/**
 * App.component.jsx
 * Component for React App
 */

// Node Modules
import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';

// Container Components
import {Navbar} from '../containers';

// Components
import {PrivateRoute} from './';

// Page Components
import Education from '../pages/Education';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Projects from '../pages/Projects';
import Register from '../pages/Register';
import Research from '../pages/Research';
import Work from '../pages/Work';
import DbTest from '../pages/DbTest';
import {Profile} from '../pages/Profile';

/**
 * App component class
 * Change to functional component once React hooks are released
 */
export default class App extends Component {
  /**
   * Constructor
   * @param {*} props
   */
  constructor(props) {
    super(props);
  }
  /**
   * ComponentDidMount
   */
  async componentDidMount() {
    const {userAuthentication} = this.props;
    await userAuthentication('userToken');
  }
  /**
   * Render Method
   * @return {Component} App
   */
  render() {
    return (
      <div>
        <Navbar />
        <Switch>
          <Route exact path = "/" component = {Home} />
          <Route path = "/login" component = {Login} />
          <Route path = "/projects" component = {Projects}/>
          <Route path = "/work" component = {Work}/>
          <Route path = "/research" component = {Research}/>
          <Route path = "/education" component = {Education}/>
          <Route path = "/register" component = {Register} />
          <PrivateRoute path = "/private"
            tokenName = "userToken"
            component = {DbTest} />
          <PrivateRoute path = "/profile"
            tokenName = "userToken"
            component = {Profile} />
        </Switch>
      </div>
    );
  }
}
