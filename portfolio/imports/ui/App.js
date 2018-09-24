// ----------------------------------------------------------------------------
// File Developer: Peter Pak
// Description: Main script for React App
// ----------------------------------------------------------------------------

// Package Imports ------------------------------------------------------------
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Route } from 'react-router-dom';
// ----------------------------------------------------------------------------

// File Imports ---------------------------------------------------------------
import { Tasks } from '../api/tasks.js';
import Task from './Task.js';
import AccountsUIWrapper from './AccountsUIWrapper.js';
import NavigationBar from './components/NavigationBar.js';
// ----------------------------------------------------------------------------

// Layouts Imports ------------------------------------------------------------
import Dashboard from './components/layouts/Dashboard.js';
import Projects from './components/layouts/Projects.js';
import About from './components/layouts/About.js';
// ----------------------------------------------------------------------------

// React App Component --------------------------------------------------------
// App component that represents the whole app
class App extends Component {

  // Class Constructor
  constructor(props) {
    super(props);

    this.state = {
      hideCompleted: false,
    };
  }

  // Form Submition
  handleSubmit(event) {
    event.preventDefault();

    // Find the text field via the React ref
    const text = ReactDOM.findDOMNode(this.refs.textInput).value.trim();

    Meteor.call('tasks.insert', text);

    // Clear form
    ReactDOM.findDOMNode(this.refs.textInput).value = '';
  }

  toggleHideCompleted() {
    this.setState({
      hideCompleted: !this.state.hideCompleted,
    });
  }

  renderTasks() {
    let filteredTasks = this.props.tasks;
    if (this.state.hideCompleted) {
      filteredTasks = filteredTasks.filter(task => !task.checked);
    }
    return filteredTasks.map((task) => {
      const currentUserId = this.props.currentUser && this.props.currentUser._id;
      const showPrivateButton = task.owner === currentUserId;

      return (
        <Task
          key={task._id}
          task={task}
          showPrivateButton={showPrivateButton}
        />
      );
    });
  }

  // Render Component ---------------------------------------------------------
  render() {
    return (
      <div className="col">
        <NavigationBar />
        <div>
          <Route exact path='/' component={ Dashboard }/>
          <Route path='/projects' component={ Projects }/>
          <Route path='/about' component={ About }/>
        </div>
        { /* <header>
          <h1>Todo List ({this.props.incompleteCount})</h1>

          <label className="hide-completed m-2">
            <input
              type="checkbox"
              readOnly
              checked={this.state.hideCompleted}
              onClick={this.toggleHideCompleted.bind(this)}
            />
            Hide Completed Tasks
          </label>

          <AccountsUIWrapper />

          { this.props.currentUser ?
            <form className="new-task" onSubmit={this.handleSubmit.bind(this)} >
              <input
                type="text"
                ref="textInput"
                placeholder="Type to add new tasks"
              />
            </form> : ''
          }

        </header>

        <ul>
          {this.renderTasks()}
        </ul> */ }
      </div>
    );
  }
}
// ----------------------------------------------------------------------------

// Export Component -----------------------------------------------------------
export default withTracker(() => {
  Meteor.subscribe('tasks');

  return {
    tasks: Tasks.find({}, { sort: { createdAt: -1 } }).fetch(),
    incompleteCount: Tasks.find({ checked: { $ne: true } }).count(),
    currentUser: Meteor.user(),
  };
})(App);
// ----------------------------------------------------------------------------
