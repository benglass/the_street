import React from 'react';

var MainComponent = React.createClass({
  propTypes: {
    message: React.PropTypes.string.isRequired
  },
  render: function() {
    return (
      <div id="main">{this.props.message}</div>
    )
  },
  componentDidMount: function() {
    var node = React.findDOMNode(this);
    node.innerHTML = this.props.message + ' And more!';
  }
});

export default MainComponent;
