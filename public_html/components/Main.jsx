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
    this.setState({
      foo: 'bar'
    });
  },
  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate', nextProps, nextState);
    return true;
  }
});

export default MainComponent;
