import React, { Component } from "react";
import { connect } from "react-redux";
import { setIsDiagramModified, getDiagram } from "../store/actions";
import createDiagram from "../goJs/elements/diagram";

class Diagram extends Component {
  componentDidMount() {
    this.diagram = createDiagram(this.props.id, this.props.setIsDiagramModified);
    this.props.getDiagram(this.diagram);
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

const mapDispatchToProps = { setIsDiagramModified, getDiagram };

export default (Diagram = connect(
  mapStateToProps,
  mapDispatchToProps
)(Diagram));
