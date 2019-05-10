import React, { Component } from "react";
import { connect } from "react-redux";
import { diagramModified } from "../store/actions";
import getTools from "../goJs/tools/tools";

class Tools extends Component {
  state = {};
  render() {
    return (
      Object.keys(this.props.diagram).length !== 0 && (
        <div id="tools">
          {getTools(this.props.diagram.diagram, this.props.diagramModified).map(
            tool => (
              <button
                className="toolsButton"
                key={tool.name}
                onClick={tool.onClick}
              >
                {tool.name}
              </button>
            )
          )}
        </div>
      )
    );
  }
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
