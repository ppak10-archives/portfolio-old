var test = React.createClass({
  displayName: "test",
  render: function () {
    return React.createElement("h2", null, "Hello from JSX React script");
  }
});
ReactDOM.render(React.createElement(test, null), document.getElementById('content'));