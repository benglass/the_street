import React from 'react';

var GraphsNavComponent = React.createClass({
  propTypes: {
    graphs: React.PropTypes.arrayOf(React.PropTypes.object),
    onClick: React.PropTypes.func.isRequired
  },
  handleClick: function(graph, event) {
    event.preventDefault();
    this.props.onClick(graph);
  },
  render() {
    return (
      <nav className="graphsnav">
        <ul>
        {this.props.graphs.map(function(graph, i) {
          return <li key={i}><a href={graph.url} onClick={this.handleClick.bind(this, graph)}>{graph.label}</a></li>
        }, this)}
        </ul>
      </nav>
    )
  }
});

export default GraphsNavComponent;
