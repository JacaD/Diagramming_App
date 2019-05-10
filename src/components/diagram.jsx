import React, { Component } from "react";
import { connect } from "react-redux";
import { diagramModified, diagram } from "../store/actions";
import getDiagram from "../goJs/elements/diagram";

class Diagram extends Component {
  componentDidMount() {
    this.diagram = getDiagram(this.props.id);
    this.props.diagram(this.diagram);
    this.addModifiedListener();
  }

  state = {};

  render() {
    return <div id={this.props.id} />;
  }

  addModifiedListener() {
    this.diagram.addDiagramListener("Modified", e => {
      this.props.diagramModified(true);
    });
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
