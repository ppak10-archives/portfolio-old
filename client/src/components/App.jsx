import React, {Component} from 'react';
import TodoItem from './TodoItem';
import {Route} from 'react-router-dom';

const API_URL = '/api';

export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      todoitems: [],
      done: [],
    };
  }

  async componentDidMount() {
    try {
      const results = await this.getTodoItems();
      let done = [];
      result.forEach(element => done.push({
        id: element.id, 
        checked: false
      }));
      this.setState({todoitems: result, done});
    } catch (err) {
      console.log(err);
    }
  }

  getTodoItems() {
    return new Promise((resolve, reject) => {
      const request = new XMLHttpRequest();
      const url = API_URL + '/api/todos';
      request.open('GET', url, true);
      request.onloadend = () => {
        if(request.readyState === 4 && request.status === 200) {
          console.log(request.response);
          resolve(JSON.parse(request.response));
        }
      };
      request.onerror = () => {
        reject(new Error("Error getting data"));
      };
      request.send(null);
    });
  }

  toggle (id, checked) {
    const {done} = this.state;
    for(let i = 0, len = done.length; i < len; i++) {
      if (done[i].id === id) {
        done[i].checked = checked;
        break;
      }
    }
    this.setState({done});
  }

  allChecked() {
    const {done} = this.state;
    for(let i = 0, len = done.length; i < len; i++) {
      if (!done[i].checked) {
        return false;
      }
    }
    return true;
  }

  render () {
    return (
      <div>
        <h1>React Todo List</h1>
        <ul>
          {this.state.todoitems.map((element, index) => {
            return(
              <TodoItem
                key = {element.id}
                todoId = {element.id}
                text = {element.text}
                toggle = {(id, checked) => this.toggle(id, checked)}
              />
            )
          })}
        </ul>
        {this.allChecked() && <p>Done</p>}
      </div>
    );
  }
}