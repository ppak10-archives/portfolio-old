var test = React.createClass({
  render: function() {
    return (<h2>Hello from JSX React script</h2>);
  }
});

ReactDOM.render(
  React.createElement(test, null),
  document.getElementById('content')
)
