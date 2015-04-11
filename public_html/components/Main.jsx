import React from 'react';
import Graph from './Graph.jsx!';
import GraphsNav from './GraphsNav.jsx!';

var MainComponent = React.createClass({
  graphs: [
    {
        label: 'Some Graph',
        url: 'data.csv'
    },
    {
        label: 'Another Graph',
        url: 'data2.csv'
    }
  ],
  propTypes: {
    message: React.PropTypes.string.isRequired
  },
  getInitialState() {
    return {
      graph: this.graphs[0]
    }
  },
  render() {
    return (
      <div id="main">
        <h1>{this.props.message}</h1>
        <GraphsNav graphs={this.graphs} onClick={this.loadGraph} currentGraph={this.state.graph} />
        <Graph graph={this.state.graph} />
      </div>
    )
  },
  loadGraph(graph) {
    this.setState({
      graph: graph
    });
    // var node = React.findDOMNode(this);
    // var existing = node.getElementsByTagName('svg');
    // if (existing.length) {
    //   node.removeChild(existing[0]);
    // }
    // Graph(node, graph.url);
  },
  // Never update the dom because this component renders a graph, we update manually
  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('shouldComponentUpdate', nextProps, nextState);
  //   return true;
  //   // return false;
  // }
});

export default MainComponent;
