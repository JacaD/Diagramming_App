import React, { Component } from "react";
import getPalette from "../goJs/elements/palette";
import getNodeTemplate from "../goJs/templates/nodeTemplate";
import getGroupTemplate from "../goJs/templates/groupTemplate";

class Palette extends Component {
  constructor(props) {
    super(props);
    this.paletteDiv = this.props.paletteDiv;
  }

  state = {};

  componentDidMount() {
    this.palette = getPalette(this.paletteDiv);
    this.palette.nodeTemplate = getNodeTemplate();
    this.palette.groupTemplate = getGroupTemplate();
  }

  render() {
    return <div id={this.paletteDiv} />;
  }
}

export default Palette;
