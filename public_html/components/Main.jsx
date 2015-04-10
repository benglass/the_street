import React from 'react';

var MainComponent = React.createClass({
  propTypes: {
    message: React.PropTypes.string.isRequired
  },
  render: function() {
    return (
      <div>{this.props.message}</div>
    )
  }
});

export default MainComponent;
