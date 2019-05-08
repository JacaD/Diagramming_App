import React from "react";
import { connect } from "react-redux";

const UpperBar = ({ id, modified }) => {
  return (
    <div id={id}>
      {modified.modified ? "Diagramming App*" : "Diagramming App"}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    modified: state.modified
  };
};

export default connect(mapStateToProps)(UpperBar);
