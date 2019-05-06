import React, { Component } from "react";
import { connect } from "react-redux";
import go from "gojs";
import { diagramModified } from "../store/actions";

class Tools extends Component {
  state = {};
  render() {
    return (
      Object.keys(this.props.diagram).length !== 0 && (
        <div id="tools">
          {this.tools.map(tool => (
            <button
              className="toolsButton"
              key={tool.name}
              onClick={tool.onClick}
            >
              {tool.name}
            </button>
          ))}
        </div>
      )
    );
  }

  tools = [
    {
      name: "Zoom In",
      onClick: () => this.props.diagram.diagram.commandHandler.increaseZoom()
    },
    {
      name: "Zoom Out",
      onClick: () => this.props.diagram.diagram.commandHandler.decreaseZoom()
    },
    {
      name: "Undo",
      onClick: () => this.props.diagram.diagram.commandHandler.undo()
    },
    {
      name: "Redo",
      onClick: () => this.props.diagram.diagram.commandHandler.redo()
    },
    {
      name: "Save",
      onClick: () => {
        sessionStorage.savedDiagram = this.props.diagram.diagram.model.toJson();
        this.props.diagramModified(false);
      }
    },
    {
      name: "Load",
      onClick: () => {
        if (sessionStorage.savedDiagram) {
          this.props.diagram.diagram.model = go.Model.fromJson(
            sessionStorage.savedDiagram
          );
        }
      }
    }
  ];
}

const mapStateToProps = state => {
  return {
    diagram: state.diagram,
    modified: state.modified
  };
};

const mapDispatchToProps = { diagramModified };

export default (Tools = connect(
  mapStateToProps,
  mapDispatchToProps
)(Tools));
