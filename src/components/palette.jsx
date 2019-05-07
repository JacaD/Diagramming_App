import React, { Component } from "react";
import getPalette from "../goJs/elements/palette";
import getNodeTemplate from "../goJs/templates/nodeTemplate";
import getGroupTemplate from "../goJs/templates/groupTemplate";

class Palette extends Component {
  state = {};

  componentDidMount() {
    this.palette = getPalette(this.props.id);
    this.palette.nodeTemplate = getNodeTemplate();
    this.palette.groupTemplate = getGroupTemplate();
  }

  render() {
    return <div id={this.props.id} />;
  }
}

export default Palette;
