import React, { Component } from "react";
import { connect } from "react-redux";
import { diagramModified, diagram } from "../store/actions";
import getDiagram from "../goJs/elements/diagram";
import getNodeTemplate from "../goJs/templates/nodeTemplate";
import getGroupTemplate from "../goJs/templates/groupTemplate";
import getLinkTemplate from "../goJs/templates/linkTemplate";
import addLinkValidationToDiagram from "../goJs/validators/linkValidation";
import addShortcutsToDiagram from "../goJs/shortcuts/shortcuts";

class Diagram extends Component {
  componentDidMount() {
    this.diagram = getDiagram(this.props.id);
    this.diagram.nodeTemplate = getNodeTemplate();
    this.diagram.groupTemplate = getGroupTemplate();
    this.diagram.linkTemplate = getLinkTemplate();
    addLinkValidationToDiagram(this.diagram);
    addShortcutsToDiagram(this.diagram);
    this.addModifiedListener();
    this.props.diagram(this.diagram);
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

// export default Diagram;
