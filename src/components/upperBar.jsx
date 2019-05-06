import React, { Component } from "react";
import { connect } from "react-redux";

class UpperBar extends Component {
  state = {};
  render() {
    return (
      <div id={this.props.id}>
        {this.props.modified.modified ? "Diagramming App*" : "Diagramming App"}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    modified: state.modified
  };
};

export default (UpperBar = connect(mapStateToProps)(UpperBar));
