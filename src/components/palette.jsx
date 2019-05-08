import React, { Component } from "react";
import getPalette from "../goJs/elements/palette";
import getNodeTemplates from "../goJs/templates/nodeTemplates";
import getGroupTemplate from "../goJs/templates/groupTemplate";

class Palette extends Component {
  state = {};

  componentDidMount() {
    this.palette = getPalette(this.props.id);
    this.palette.nodeTemplateMap = getNodeTemplates();
    this.palette.groupTemplate = getGroupTemplate();
  }

  render() {
    return <div id={this.props.id} />;
  }
}

export default Palette;
