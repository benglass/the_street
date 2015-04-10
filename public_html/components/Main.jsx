import React from 'react';

var MainComponent = React.createClass({
  propTypes: {
    message: React.PropTypes.string.isRequired
  },
  render() {
    return (
      <div id="main">{this.props.message}</div>
    )
  },
  componentDidMount() {
    var node = React.findDOMNode(this);
    node.innerHTML = this.props.message + ' And more!';
  },
  // Never update the dom because this component renders a graph, we update manually
  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate', nextProps, nextState);
    return false;
  }
});

export default MainComponent;
