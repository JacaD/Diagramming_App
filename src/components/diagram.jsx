import React, { Component } from "react";
import { connect } from "react-redux";
import { diagramModified, diagram } from "../store/actions";
import getDiagram from "../goJs/elements/diagram";

class Diagram extends Component {
  componentDidMount() {
    this.diagram = getDiagram(this.props.id, this.props.diagramModified);
    this.props.diagram(this.diagram);
  }

  state = {};

  render() {
    return <div id={this.props.id} />;
  }
}

const mapStateToProps = state => {
  return {
    modified: state.modified,
    diagram: state.diagram
  };
};

const mapDispatchToProps = { diagramModified, diagram };

export default (Diagram = connect(
  mapStateToProps,
  mapDispatchToProps
)(Diagram));
