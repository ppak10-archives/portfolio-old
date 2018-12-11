import React, {Component} from 'react';

const API_URL = '/api';

/**
 * Components
 */
import {AlertHeader, Footer} from '../components';

/**
 * Projects Page
 */
export default class Projects extends Component {

  constructor(props) {
    super(props);

    this.state = {
      projects: []
    };
  }

  async componentDidMount() {
    try {
      const results = await this.getProjects();
      let done = [];
      this.setState({
        projects: results
      });
    } catch (err) {
      console.log(err);
    }
  }

  getProjects() {
    return new Promise((resolve, reject) => {
      const request = new XMLHttpRequest();
      const url = API_URL + '/api/projects';
      request.open('GET', url, true);
      request.onloadend = () => {
        if(request.readyState ===4 && request.status === 200) {
          console.log(request.response);
          resolve(JSON.parse(request.response));
        }
      };
      request.onerror = () => {
        reject(new Error("Error retrieving data"));
      };
      request.send(null);
    })
  }

  /**
   * Projects Component Render
   * @return { Component }
   */
  render() {
    return (
      <div className = "page-wrapper">
        <AlertHeader pageTitle = "Projects" />
        {this.state.projects.map((element) => {
          return(
            <p key = {element.id}>{element.text}</p>
          );
        })}
        <Footer />
      </div>
    );
  }
}
