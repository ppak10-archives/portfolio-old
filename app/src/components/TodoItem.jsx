import React, {Component} from 'react';

export default class TodoItem extends Component {

  constructor() {
    super();
    this.state = {
      checked: false,
    };
  }

  toggle() {
    this.setState({checked: !this.state.checked});
    this.props.toggle(this.props.todoId, !this.state.checked);
  }

  render() {
    return (
      <div>
        <p>{this.props.text}</p>
      </div>
    )
  }
}