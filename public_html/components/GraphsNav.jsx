import React from 'react';
import classnames from 'classnames';

var GraphsNavComponent = React.createClass({
  propTypes: {
    graphs: React.PropTypes.arrayOf(React.PropTypes.object),
    currentGraph: React.PropTypes.object.isRequired,
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
          var classes = classnames({
            current: this.props.currentGraph === graph
          });
          return <li key={i} className={classes}><a href={graph.url} onClick={this.handleClick.bind(this, graph)}>{graph.label}</a></li>
        }, this)}
        </ul>
      </nav>
    )
  }
});

export default GraphsNavComponent;
