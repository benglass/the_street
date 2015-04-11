import React from 'react';
import Graph from 'Graph';

var GraphComponent = React.createClass({
  propTypes: {
    graph: React.PropTypes.object.isRequired
  },
  render() {
    return (
      <div id="graph-container">
        <h2>{this.props.graph.label}</h2>
        <div id="graph"></div>
      </div>
    )
  },
  componentDidMount() {
    this.updateGraph();
  },
  componentDidUpdate() {
    this.updateGraph();
  },
  updateGraph() {
    var node = React.findDOMNode(this);
    var container = node.lastChild;
    if (container.firstChild) {
      container.removeChild(container.firstChild);
    }
    Graph(container, this.props.graph.url);
  }
});

export default GraphComponent;
