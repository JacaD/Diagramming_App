import React, { Component } from "react";
import getPalette from "../goJs/elements/palette";

class Palette extends Component {
  state = {};

  componentDidMount() {
    this.palette = getPalette(this.props.id);
  }

  render() {
    return <div id={this.props.id} />;
  }
}

export default Palette;
