import React, { Component } from "react";
import { connect } from "react-redux";
import makeThumbnail from "../goJs/tools/thumbnails/thumbnails";

class Thumbnail extends Component {
  state = {
    image: null
  };
  render() {
    return (
      <div id="thumbnail">
        <button className="toolsButton" onClick={this.makeThumbnail}>
          Make Image
        </button>
        <div>
          <img
            src={this.state.image === null ? "" : this.state.image.src}
            alt=""
          />
        </div>
      </div>
    );
  }

  makeThumbnail = () => {
    this.setState({
      image:
        Object.keys(this.props.diagram).length !== 0 &&
        makeThumbnail(this.props.diagram.diagram)
    });
  };
}

const mapStateToProps = state => {
  return {
    diagram: state.diagram
  };
};

export default (Thumbnail = connect(mapStateToProps)(Thumbnail));
